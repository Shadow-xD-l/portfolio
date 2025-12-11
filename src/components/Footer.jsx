import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Roshan Maharjan. All rights reserved.</p>
      <p style={{ fontSize: '0.8rem', marginTop: '5px', opacity: 0.7 }}>Designed & Built by Roshan Maharjan</p>
    </FooterContainer>
  );
};

export default Footer;
