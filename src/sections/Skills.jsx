import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaBrain, FaRobot } from 'react-icons/fa';

const Section = styled.section`
  min-height: 80vh;
  padding: 100px 150px;
  // No explicit background color needed to check GlobalStyles, but can alternate
  // background-color: ${({ theme }) => theme.colors.secondary};
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
  text-align: center;
  font-weight: 700;
  
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    margin: 15px auto 0;
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const SkillCard = styled(motion.div)`
  background: white;
  padding: 40px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    border-color: ${({ theme }) => theme.colors.accent}20;
  }
`;

const IconWrapper = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.1);
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 10px;
  font-weight: 600;
`;

const skills = [
  { name: 'AI & ML', icon: <FaBrain />, description: 'TensorFlow, PyTorch, Scikit-learn' },
  { name: 'Python', icon: <FaPython />, description: 'Pandas, NumPy, OpenCV' },
  { name: 'Data Structures', icon: <FaDatabase />, description: 'Algorithms, Optimization' },
  { name: 'Web Dev', icon: <FaReact />, description: 'React, Node.js, HTML/CSS' },
  { name: 'Automation', icon: <FaRobot />, description: 'Selenium, Scripting' },
  { name: 'Backend', icon: <FaNodeJs />, description: 'Express, MongoDB, API Design' },
];

const Skills = () => {
  return (
    <Section id="skills">
       <Title
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
       >
         Technical Expertise
       </Title>
       <Grid>
         {skills.map((skill, index) => (
           <SkillCard
             key={index}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: index * 0.1 }}
             viewport={{ once: true }}
           >
             <IconWrapper>{skill.icon}</IconWrapper>
             <SkillName>{skill.name}</SkillName>
             <motion.p 
                style={{ fontSize: '0.95rem', color: '#666' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                  {skill.description}
              </motion.p>
           </SkillCard>
         ))}
       </Grid>
    </Section>
  );
};

export default Skills;
