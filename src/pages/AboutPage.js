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
    content: 'Ph.D Student in Computer Science, 2021~Now',
  },
  {
    title: 'Korea University',
    content: 'B.S in Biomedical Engineering, 2014~2021',
  }
];

// const Experiences = [
//   {
//     title: 'Military Service',
//     // content: 'AI Applied Researcher, 2022~ \n (Alternative Military Service)',
//     content: 'Auxiliary Police, 2016~2018',
//   }
// ];

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
                Hello! I am Hyun-Jic Oh, a PhD student at{' '}
                <Link target="_blank" href="https://hvcl.korea.ac.kr/">
                  High-performanceVisual Computing Group
                </Link>{' '}
                in Korea University with Prof. Won-Ki Jeong.
                My research focuses on developing deep learning algorithms aimed at improving the accuracy and efficiency 
                of medical image analysis. By leveraging advanced computer vision techniques, I aim to create innovative
                solutions that enhance the precision and effectiveness of medical image processing.
                I earned my B.S. degree from the Biomedical Engineering Science department at{' '}
                <Link target="_blank" href="https://www.korea.ac.kr">
                  Korea University
                </Link>
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
              {/* <Animate delay={0.6}>
                <Box>
                  <Typography marginTop={2} variant="h5">
                    Work Experiences
                  </Typography>
                  {Experiences.map((elem) => (
                    <ExperienceItem type={'COMPANY'} title={elem['title']} content={elem['content']}></ExperienceItem>
                  ))}
                </Box>
              </Animate> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});

export default AboutPage;
