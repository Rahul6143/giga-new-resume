import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: "center",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingBottom: "40px !important",
    paddingTop: '65px !important',
    background: "linear-gradient(135deg, #004080 0%, #001f3f 100%)",
  },
  container: {
    // maxWidth: '1248px',
    alignItems: "center !important",
  },
  title: {
    fontWeight: '700 !important',
    marginBottom: '16px !important',
    fontSize: "2rem",
    color: "#f9b600", // gray.900
  },
  subtitle: {
    color: "#ffffffff", // gray.600
    marginBottom: '40px !important ',
  },
  reviewsWrapper: {
    display: "flex",
    justifyContent: "center !important",
    gap: "32px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: '32px !important',
    borderRadius: '24px !important',
    border: "1px solid #c6c6c6ff", // gray.200
    boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    flex: "1 1", // responsive width
    maxWidth: "300px !important",
  },
  rating: {
    color: "#ffb90a !important", // yellow.500
    fontSize: "20px !important",
    margin:'0 0 12 !important',
  },
  text: {
    color: "#374151 !important", // gray.700
    fontStyle: "italic !important",
    fontSize: "16px !important",
    marginBottom: '16px !important',
  },
  author: {
    color: "#1F2937 !important", // gray.800
    fontSize: "16px !important",
    fontWeight: '600 !important',
    marginTop: '16 !important',
  },
}));

const ReviewsSection = () => {
  const classes = useStyles();

  const reviews = [
    {
      rating: "★★★★★",
      text: "Giga Resume helped me land interviews within a week! The AI suggestions were spot-on.",
      author: "— Priya S., Marketing Specialist",
    },
    {
      rating: "★★★★★",
      text: "Finally, an ATS-friendly format that actually works. I got more callbacks than ever!",
      author: "— Arjun K., Software Engineer",
    },
    {
      rating: "★★★★☆",
      text: "Loved the one-click cover letter generator. It made my job applications complete.",
      author: "— Nisha P., HR Manager",
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Typography className={classes.title} variant="h4">
          What Our Users Say
        </Typography>
        <Typography className={classes.subtitle}>
          Thousands of job seekers have landed interviews and job offers using Giga Resume Builder.
        </Typography>

        <Box className={classes.reviewsWrapper}>
          {reviews.map((review, index) => (
            <Box key={index} className={classes.card}>
              <Typography className={classes.rating}>{review.rating}</Typography>
              <Typography className={classes.text}>{review.text}</Typography>
              <Typography className={classes.author}>{review.author}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsSection;
