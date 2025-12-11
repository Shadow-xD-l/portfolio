import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primary};
`;

const Orb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
`;

const BackgroundAnimation = () => {
  return (
    <BackgroundContainer>
      <Orb
        style={{
          width: '600px',
          height: '600px',
          backgroundColor: 'rgba(0, 113, 227, 0.15)', // Accent color
          top: '-10%',
          left: '-10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <Orb
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: 'rgba(100, 210, 255, 0.1)', // Lighter Blue
          bottom: '-10%',
          right: '-10%',
        }}
        animate={{
          x: [0, -70, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <Orb
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: 'rgba(200, 200, 255, 0.1)', // Lavenderish
          top: '40%',
          left: '30%',
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </BackgroundContainer>
  );
};

export default BackgroundAnimation;
