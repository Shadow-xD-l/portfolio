import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import ProfileImg from '../assets/profile.png';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  position: relative;
  // No overflow hidden to let 3D background show through nicely if needed
  // overflow: hidden; 
  z-index: 1; // Ensure it's above the canvas

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 50px;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    gap: 50px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 25px;
  }
`;

const Content = styled.div`
  max-width: 600px;
  z-index: 10;
`;

const Intro = styled(motion.h5)`
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.mono};
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 500;
`;

// Masked Text Reveal Wrapper
const Mask = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
`;

const Name = styled(motion.h1)`
  font-size: clamp(40px, 8vw, 80px);
  color: #000000;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -2px;
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(30px, 5vw, 60px);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 30px;
  letter-spacing: -1px;
`;

const Description = styled(motion.p)`
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 540px;
  font-size: 1.2rem;
  margin-bottom: 50px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto 50px auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  z-index: 10;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 300px;
    height: 300px;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  background: white;
  border: 4px solid white;
`;

const Hero = () => {
  const textVariants = {
    hidden: { y: '100%' },
    visible: { 
      y: 0, 
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } 
    }
  };

  return (
    <HeroContainer>
      <Content>
        <Mask>
          <Intro
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            Hello, my name is
          </Intro>
        </Mask>
        <Mask>
          <Name
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Roshan Maharjan.
          </Name>
        </Mask>
        <Mask>
          <Subtitle
             initial={{ y: '100%' }}
             animate={{ y: 0 }}
             transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.2 }}
          >
            AI Enthusiast & Developer.
          </Subtitle>
        </Mask>

        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          I'm a 19-year-old developer from Kathmandu, Nepal. I specialize in building intelligent systems and modern digital experiences. Currently pursuing my Bachelor's at NIET.
        </Description>
        
        <ButtonGroup
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button href="#projects">View Work</Button>
          <Button href="/resume.html?print=true" target="_blank" outline>Download CV</Button>
        </ButtonGroup>
      </Content>

      <ImageWrapper
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
      >
        <ProfileImage 
          src={ProfileImg} 
          alt="Profile"
          animate={{ 
            borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 70% 70% 30% / 30% 30% 70% 70%"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </ImageWrapper>
    </HeroContainer>
  );
};

export default Hero;
