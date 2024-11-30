import React, { forwardRef } from 'react';
import { css } from '@emotion/react';
import Title from '../layouts/Title';
import me from '../assets/images/me.png';
import { Typography, Box, Grid, Link } from '@mui/material';
import ExperienceItem from '../components/ExperienceItem';
import Animate from '../components/Animate';

const Educations = [
  {
    title: 'Korea University',
    content: 'Ph.D Student in Computer Science, \\ 03.2021-02.2026 (Expected)',
  },
  {
    title: 'Korea University',
    content: 'B.S in Biomedical Engineering, \\ 03.2014-02.2021 (2016-2018: Military Service)',
  }
];

const Experiences = [
  {
    title: 'Research Intern at Harvard University',
    content: 'Visual Computing Group, 04.2024-03.2025',
  },
  {
    title: 'Chapman University',
    content: 'Exchange Student, Spring 2020',
  },
  {
    title: 'East China Normal University',
    content: 'Language Program, Summer 2016',
  },
];

const ProfileText = ({ text, size }) => {
  return (
    <Typography align="center" variant={size}>
      {text}
    </Typography>
  );
};

const AboutPage = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div css={{ 'margin-top': '80px' }} />
      <Title text={'ABOUT'} width={'12%'} />
      <br />

      <Box
        sx={{
          display: 'flex',

          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        <Grid container style={{ flexDirection: 'row-reverse', justifyContent: 'center' }} spacing={3}>
          <Grid item xs={3} style={{ justifyContent: 'center' }}>
            <Animate delay={0.3}>
              <img
                style={{
                  borderRadius: 10,
                  objectFit: 'cover',
                  objectPosition: '-20% -50%',
                  width: '100%',
                }}
                src={me}
              />
              <ProfileText size={'h5'} text={'Hyun-Jic Oh'} />
              <ProfileText size={'h6'} text={'Korea University'} />
              <ProfileText size={'h6'} text={'PhD Student'} />
            </Animate>
          </Grid>
 
          <Grid item lg>
            <Animate delay={0.3}>
              <Typography variant="h6">
                Hello! I am Hyun-Jic Oh, a Computer Science PhD student at{' '}
                <Link target="_blank" href="https://hvcl.korea.ac.kr/">
                  HVCL
                </Link>{' '}
                in Korea University with Prof. Won-Ki Jeong.
                My research focuses on advancing medical image analysis through innovative deep learning techniques, 
                particularly leveraging diffusion models. As a research intern at{' '}
                <Link target="_blank" href="https://vcg.seas.harvard.edu/">
                  Visual Computing Group
                </Link>
                in Harvard University, I'm developing diffusion model-based algorithms for multiplexed pathology image translation. 
                This cutting-edge work aims to enhance the accuracy and efficiency of medical image processing, 
                potentially contributing to more precise clinical diagnosis and treatment planning in oncology and immunology. 
                I earned my B.S. degree from the Biomedical Engineering Science department at{' '}
                <Link target="_blank" href="https://www.korea.ac.kr">
                  Korea University
                </Link>
                .
              </Typography>
            </Animate>
            <Box
              sx={{
                mt: '20px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Animate delay={0.6}>
                <Box>
                  <Typography marginTop={2} variant="h5">
                    Education
                  </Typography>
                  {Educations.map((elem) => (
                    <ExperienceItem type={'SCHOOL'} title={elem['title']} content={elem['content']}></ExperienceItem>
                  ))}
                </Box>
              </Animate>
              {<Animate delay={0.6}>
                <Box>
                  <Typography marginTop={2} variant="h5">
                    Experiences
                  </Typography>
                  {Experiences.map((elem) => (
                    <ExperienceItem type={'SCHOOL'} title={elem['title']} content={elem['content']}></ExperienceItem>
                  ))}
                </Box>
              </Animate>}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});

export default AboutPage;
