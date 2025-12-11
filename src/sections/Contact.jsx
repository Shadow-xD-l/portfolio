import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

const Section = styled.section`
  min-height: 80vh;
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 100px 50px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 100px 25px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 20px;
`;

const Subtitle = styled(motion.p)`
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin-bottom: 50px;
  font-size: 1.1rem;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  outline: none;
  min-height: 150px;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SuccessMessage = styled(motion.div)`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  font-size: 1.5rem;
  
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: all 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transform: translateY(-3px);
    }
  }
`;

import { FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ... (keep handleSubmit and handleChange)
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact">
      {/* ... Title and Subtitle ... */}
      <Title
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
      >
        Get In Touch
      </Title>
      <Subtitle
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.1 }}
         viewport={{ once: true }}
      >
         Got a project? Reach out at <strong>roshanmaharjan737@gmail.com</strong>
      </Subtitle>

      <Form onSubmit={handleSubmit}>
        {/* ... Inputs ... */}
        <InputGroup>
            <Input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formState.name}
                onChange={handleChange}
                required
            />
        </InputGroup>
        <InputGroup>
            <Input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formState.email}
                onChange={handleChange}
                required
            />
        </InputGroup>
        <InputGroup>
            <TextArea 
                name="message" 
                placeholder="Message" 
                value={formState.message}
                onChange={handleChange}
                required
            />
        </InputGroup>
        <Button onClick={handleSubmit} type="submit" outline>Say Hello</Button>
      </Form>

      <SocialLinks>
        <a href="https://github.com/Shadow-xD-l" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://x.com/Shadow003457468" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/roshanmaharjan777/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/shadow-xd-21385639a/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:roshanmaharjan737@gmail.com"><FaEnvelope /></a>
      </SocialLinks>

      <AnimatePresence>
        {isSubmitted && (
          <SuccessMessage
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Message sent successfully!
          </SuccessMessage>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Contact;
