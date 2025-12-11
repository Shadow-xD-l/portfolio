import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Scene from './canvas/Scene';
import ChatBot from './components/ChatBot';
import styled from 'styled-components';

const MainContent = styled.main`
  min-height: 100vh;
  padding-top: 80px; // Space for fixed navbar
`;

import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Scene />
        <Navbar />
        <MainContent>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </MainContent>
        <Footer />
        <ChatBot />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
