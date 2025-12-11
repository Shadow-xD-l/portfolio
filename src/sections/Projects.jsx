import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const Section = styled.section`
  min-height: 100vh;
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 100px 50px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 100px 25px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  font-weight: 700;

  &::after {
    content: "";
    display: block;
    width: 300px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.textSecondary};
    margin-left: 20px;
    opacity: 0.2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.04);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0.04);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ContentContainer = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const FolderIcon = styled(FaFolder)`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.accent};
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  color: white;
  font-size: 24px;
  z-index: 2;

  & > * {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
      color: white;
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 10px;
  font-weight: 600;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ProjectDescription = styled(motion.div)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

import ProjectAI from '../assets/project_ai.png';
import ProjectHome from '../assets/project_home.png';
import ProjectResume from '../assets/project_resume.png';

const projects = [
  {
    title: 'AI Image Generator',
    description: 'A deep learning model that generates artistic images from text descriptions using GANs and CLIP.',
    tech: ['Python', 'PyTorch', 'React', 'Flask'],
    github: '#',
    external: '#',
    image: ProjectAI
  },
  {
    title: 'Smart Home Assistant',
    description: 'An IoT-based home automation system with voice control, integrating varied sensors and minimal latency.',
    tech: ['C++', 'Arduino', 'Python', 'MQTT'],
    github: '#',
    external: '#',
    image: ProjectHome
  },
  {
    title: 'Resume Parser',
    description: 'A tool that extracts information from resumes (PDF/Docx) and ranks candidates based on job descriptions.',
    tech: ['Python', 'NLP', 'Spacy', 'Django'],
    github: '#',
    external: '#',
    image: ProjectResume
  },
  {
    title: 'Portfolio V1',
    description: 'My previous portfolio website built with simple HTML/CSS and vanilla JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    external: '#',
    image: ProjectAI // Reusing one for now as placeholder
  }
];

const Projects = () => {
  return (
    <Section id="projects">
      <Title
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </Title>
      <Grid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
               <ProjectImage src={project.image} alt={project.title} />
               <Overlay>
                  <Links>
                    <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href={project.external} target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
                  </Links>
               </Overlay>
            </ImageContainer>
            <ContentContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ delay: 0.2 }}
                >
                    {project.description}
                </ProjectDescription>
                <TechList>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </TechList>
            </ContentContainer>
          </ProjectCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
