import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom'; // Using Scroll Link later or standard link

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  background: ${({ theme, scrolled }) => scrolled ? theme.colors.glass : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ theme, scrolled }) => scrolled ? theme.colors.shadow : 'none'};
  z-index: 100;
  transition: ${({ theme }) => theme.transitions.default};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ResumeLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav scrolled={scrolled} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <Logo>Roshan Maharjan</Logo>
      <NavLinks>
        <NavItem><NavLink href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</NavLink></NavItem>
        <NavItem><NavLink href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</NavLink></NavItem>
        <NavItem><NavLink href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</NavLink></NavItem>
        <NavItem><NavLink href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</NavLink></NavItem>
        <NavItem>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</NavLink>
        </NavItem>
        <NavItem>
            <ResumeLink href="/resume.html" target="_blank">Resume</ResumeLink>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
