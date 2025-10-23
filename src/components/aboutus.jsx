import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Paper, Grid, Box, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a237e 0%, #64b5f6 100%)',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    maxWidth: 900,
    margin: '32px 0',
    padding: '32px',
    background: '#ffffff',
    borderRadius: 16,
    boxShadow: '0 8px 40px rgba(26,35,126,0.14)',
  },
  header: {
    color: '#1a237e',
    fontWeight: 700,
    letterSpacing: '2px',
    marginBottom: '16px',
    fontSize: '2.5rem',
    textAlign: 'center',
  },
  subHeader: {
    color: '#1976d2',
    fontWeight: 600,
    marginBottom: '16px',
    textAlign: 'center',
  },
  text: {
    color: '#37474f',
    marginBottom: '16px',
    fontSize: '1.15rem',
    lineHeight: 1.7,
  },
  highlight: {
    color: '#f44336',
    fontWeight: 500,
  },
  featuresGrid: {
    margin: '24px 0',
  },
  featureItem: {
    textAlign: 'center',
    padding: '16px',
  },
  avatar: {
    background: 'linear-gradient(135deg, #ff9800 0%, #ff5722 100%)',
    color: '#fff',
    width: 56,
    height: 56,
    margin: '0 auto',
    marginBottom: '8px',
    boxShadow: '0 4px 16px rgba(244,67,54,0.3)',
  },
  resumeSection: {
    background: 'linear-gradient(135deg, #00bcd4 0%, #8bc34a 100%)',
    borderRadius: 14,
    padding: '24px',
    boxShadow: '0 4px 24px rgba(0,188,212,0.15)',
    marginTop: '32px',
    color: '#1a237e'
  },
  emoji: {
    fontSize: '2.2rem',
    marginBottom: '8px',
  }
});

function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.header} variant="h3">
          About Us
        </Typography>
        <Typography className={classes.subHeader} variant="h6">
          India’s First Product-Based Learning Platform
        </Typography>
        <Typography className={classes.text}>
          Gigaversity is headquartered in <span className={classes.highlight}>Hyderabad</span>, offering both on-campus and online programs in rapidly growing domains such as <span className={classes.highlight}>AI & ML, Full Stack Development, and Data Science</span>. Our unique approach empowers students to build industry-grade, scalable projects incubated directly by leading tech companies. This hands-on experience ensures learners gain real-world skills and understand how cutting-edge products are developed from the ground up.
        </Typography>
        <Grid container spacing={4} className={classes.featuresGrid}>
          <Grid item xs={12} md={3} className={classes.featureItem}>
            <Avatar className={classes.avatar}>
              <SchoolIcon />
            </Avatar>
            <Typography variant="subtitle1" className={classes.text}>
              On-Campus & Online Programs
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={classes.featureItem}>
            <Avatar className={classes.avatar}>
              <BuildIcon />
            </Avatar>
            <Typography variant="subtitle1" className={classes.text}>
              Industry-Grade Projects
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={classes.featureItem}>
            <Avatar className={classes.avatar}>
              <WorkIcon />
            </Avatar>
            <Typography variant="subtitle1" className={classes.text}>
              Tech Company Incubation
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={classes.featureItem}>
            <Avatar className={classes.avatar}>
              <EmojiObjectsIcon />
            </Avatar>
            <Typography variant="subtitle1" className={classes.text}>
              Real-World Skills
            </Typography>
          </Grid>
        </Grid>
        <Box className={classes.resumeSection}>
          <Typography className={classes.subHeader} variant="h5">
            Why We Created the Gigaversity Resume Builder
          </Typography>
          <Typography className={classes.text}>
            Your resume is your digital identity — the key to entering the professional world. Yet, many aspirants struggle with how to build a strong resume, present their skills effectively, and structure their information clearly. This confusion often leaves them blank or overwhelmed.
          </Typography>
          <Typography className={classes.text}>
            To solve this, we created <span className={classes.highlight}>India’s first AI-powered resume builder</span> that breaks down these barriers. Simply by selecting your target role, our intelligent assistant guides you step-by-step to craft a professional, recruiter-approved resume that truly showcases your skills and projects — removing all the guesswork and helping you get noticed.
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}

export default AboutUs;
