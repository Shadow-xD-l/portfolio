import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  max-width: 1000px; // Limit width for education
  margin: 0 auto;
  padding: 100px 150px;

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

  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.textSecondary};
    margin-left: 20px;
    opacity: 0.2;
  }
`;

const Timeline = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.textSecondary}40;
  padding-left: 20px;
  margin-left: 10px;
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 40px;

  &::before {
    content: "";
    position: absolute;
    left: -26px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Degree = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Institution = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
`;

const Duration = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  margin: 5px 0 15px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const educationData = [
  {
    degree: 'B.Tech in Artificial Intelligence',
    institution: "National Institute of Engineering and Technology (NEIT)",
    location: "Kathmandu, Nepal",
    duration: "2025 - Present",
    description: "Specializing in Machine Learning, Deep Learning, and Neural Networks."
  },
  {
    degree: '+2 Science',
    institution: 'Capitol Hill College',
    duration: '2023 - 2025',
    description: 'Completed higher secondary education with a major in Science. Developed a keen interest in programming and mathematics during this period.'
  }
];

const Education = () => {
  return (
    <Section id="education">
      <Title
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
      >
        Education
      </Title>
      <Timeline>
        {educationData.map((item, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Degree>{item.degree}</Degree>
            <Institution>@ {item.institution}</Institution>
            <Duration>{item.duration}</Duration>
            <Description>{item.description}</Description>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export default Education;
