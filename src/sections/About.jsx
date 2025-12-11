import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProfileImg from '../assets/profile.png';

const Section = styled.section`
  min-height: 100vh;
  padding: 100px 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary}; // Use secondary bg for About

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 100px 50px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 100px 25px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextContainer = styled(motion.div)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.15rem;
  line-height: 1.7;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  font-weight: 700;

  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.textSecondary};
    margin-left: 20px;
    opacity: 0.2;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 100%;
    }
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  max-width: 350px;
  margin: 0 auto;
  
  // Decorative clean frame behind image
  &::before {
    content: "";
    position: absolute;
    top: 20px;
    right: -20px;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.colors.accent};
    border-radius: 8px;
    z-index: 0;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: translate(-10px, -10px);
  }
`;

const ImagePlaceholder = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 400px;
  background-color: white; 
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.mono};
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const TechItem = styled.li`
  position: relative;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  
  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const About = () => {
    return (
        <Section id="about">
            <Content>
                <TextContainer
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Title>About Me</Title>
          <p>
            I am a 19-year-old developer from Kathmandu, Nepal, currently pursuing my <b>B.Tech in Artificial Intelligence</b> at NEIT. 
            My journey began with a curiosity for how machines think, leading me to explore the depths of Deep Learning and Computer Vision.
          </p>
          <p>
            I completed my +2 Science at Capitol Hill College (2025). I love building systems that bridge the gap between human creativity and machine intelligence.
          </p>
                    <p>
                        I'm passionate about creating clean, efficient code and exploring the frontiers of Deep Learning. Here are a few technologies I've been working with:
                    </p>
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '20px', fontFamily: 'monospace', fontSize: '0.95rem', gap: '10px' }}>
                        <TechItem>Python (PyTorch)</TechItem>
                        <TechItem>React.js</TechItem>
                        <TechItem>TensorFlow</TechItem>
                        <TechItem>TypeScript</TechItem>
                        <TechItem>OpenCV</TechItem>
                        <TechItem>Node.js</TechItem>
                    </ul>
                </TextContainer>
                
                <ImageContainer
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     viewport={{ once: true }}
                >
                    <ImagePlaceholder>
                        <img src={ProfileImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </ImagePlaceholder>
                </ImageContainer>
            </Content>
        </Section>
    );
};

export default About;
