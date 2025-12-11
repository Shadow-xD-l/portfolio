import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: ${({ theme, outline }) => outline ? theme.colors.accent : theme.colors.primary};
  background: ${({ theme, outline }) => outline ? 'transparent' : theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.mono};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ theme, outline }) => outline ? theme.colors.accent : 'transparent'};
    z-index: -1;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: ${({ theme, outline }) => outline ? theme.colors.white : theme.colors.white};
  }
`;

const Button = ({ children, outline, onClick, href, ...props }) => {
  const Component = href ? motion.a : motion.button;
  
  return (
    <StyledButton
      as={Component}
      href={href}
      outline={outline ? 1 : 0} // transient prop for styled-components if needed, or simple boolean
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
      style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center', lineHeight: 'normal' }} // ensure anchor behaves like button
    >
      {children}
    </StyledButton>
  );
};

export default Button;
