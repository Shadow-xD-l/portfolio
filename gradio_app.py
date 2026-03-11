"""
Roshan Maharjan — Portfolio AI Chatbot (Python + Gradio)

Runs the same AI assistant that powers the portfolio website, but with a
Gradio interface so it can be used as a standalone demo or embedded anywhere.

Usage:
    python gradio_app.py

Environment variables (place in a .env file):
    OPENROUTER_API_KEY  — your OpenRouter API key
"""

import os
import requests
from dotenv import load_dotenv
import gradio as gr

load_dotenv()

SYSTEM_PROMPT = """
You are an AI assistant for Roshan Maharjan's Portfolio.

CORE IDENTITY:
- Name: Roshan Maharjan
- Age: 19
- Gender: Male
- Education: Currently studying B.Tech in Artificial Intelligence at National Institute of Engineering and Technology (NIET), Kathmandu, Nepal.

PROFESSIONAL PERSONA:
- Role: A passionate AI Engineering Student and Developer.
- Skills:
  - Frontend: React, Three.js, Styled-Components, Tailwind CSS.
  - AI/ML: Python, TensorFlow, Deep Learning, Natural Language Processing.
  - General: Web Development, Problem Solving, Creative Coding.

BEHAVIOR:
- Tone: Friendly, professional, tech-savvy, and enthusiastic.
- Consistency: Always refer to Roshan in the third person or "he".
- Goal: Help visitors learn about Roshan's background, skills, and projects.

CONTACT INFO:
- Email: roshanmaharjan737@gmail.com
- Resume: Available for download in the Hero section of the portfolio.

INSTRUCTIONS:
- **EXTREMELY IMPORTANT**: Keep answers VERY SHORT (Max 2 sentences).
- Tone: Casual, cool, and direct. Like a friend texting.
- NEVER start with "Hello there! I'm the AI assistant..." or generic intros. Just answer the question.
- If asked "Who is Roshan?", simply say: "Roshan is a 19-year-old AI Engineering student at NIET Kathmandu, skilled in React and Python."
- Be witty but professional.
"""

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "nex-agi/deepseek-v3.1-nex-n1:free"


def get_local_response(user_input: str) -> str:
    """Fallback responses when the API is unavailable."""
    text = user_input.lower()
    if "resume" in text or " cv" in text or text.startswith("cv"):
        return "Resume's in the Hero section of the portfolio!"
    elif "email" in text or "contact" in text:
        return "Hit him up at roshanmaharjan737@gmail.com"
    elif "skill" in text:
        return "He's a React & Python wizard. Check the Skills section."
    return "He's currently studying AI Engineering at NIET, Kathmandu."


def chat(message: str, history: list) -> str:
    """Send a message to the AI and return the response."""
    api_key = os.getenv("OPENROUTER_API_KEY")

    if not api_key:
        return get_local_response(message)

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for user_msg, bot_msg in history:
        messages.append({"role": "user", "content": user_msg})
        messages.append({"role": "assistant", "content": bot_msg})
    messages.append({"role": "user", "content": message})

    try:
        response = requests.post(
            OPENROUTER_URL,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
                "HTTP-Referer": "https://roshanmaharjan.xyz",
                "X-Title": "Roshan Portfolio",
            },
            json={"model": MODEL, "messages": messages},
            timeout=30,
        )
        response.raise_for_status()
        data = response.json()

        if "error" in data:
            return get_local_response(message)

        return data["choices"][0]["message"]["content"]

    except (requests.RequestException, KeyError, IndexError):
        return get_local_response(message)


with gr.Blocks(title="Roshan Maharjan — Portfolio AI Assistant") as demo:
    gr.ChatInterface(
        fn=chat,
        title="🤖 Roshan Maharjan — Portfolio AI Assistant",
        description=(
            "Ask me anything about Roshan — his skills, projects, education, or how to get in touch."
        ),
        examples=[
            "Who is Roshan?",
            "What are his skills?",
            "How can I contact him?",
            "Where can I find his resume?",
        ],
    )

if __name__ == "__main__":
    demo.launch(
        theme=gr.themes.Soft(primary_hue="violet"),
        server_name=os.getenv("GRADIO_SERVER_NAME", "127.0.0.1"),
        server_port=int(os.getenv("GRADIO_SERVER_PORT", "7860")),
        share=os.getenv("GRADIO_SHARE", "").lower() in ("1", "true", "yes"),
    )
