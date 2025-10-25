// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   section: {
//     textAlign: "center",
//     paddingLeft: "16px",
//     paddingRight: "16px",
//     paddingBottom: "40px !important",
//     paddingTop: '65px !important',
//     background: "linear-gradient(135deg, #004080 0%, #001f3f 100%)",
//   },
//   container: {
//     // maxWidth: '1248px',
//     alignItems: "center !important",
//   },
//   title: {
//     fontWeight: '700 !important',
//     marginBottom: '16px !important',
//     fontSize: "2rem",
//     color: "#f9b600", // gray.900
//   },
//   subtitle: {
//     color: "#ffffffff", // gray.600
//     marginBottom: '40px !important ',
//   },
//   reviewsWrapper: {
//     display: "flex",
//     justifyContent: "center !important",
//     gap: "32px",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     padding: '32px !important',
//     borderRadius: '24px !important',
//     border: "1px solid #c6c6c6ff", // gray.200
//     boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
//     textAlign: "center",
//     flex: "1 1", // responsive width
//     maxWidth: "300px !important",
//   },
//   rating: {
//     color: "#ffb90a !important", // yellow.500
//     fontSize: "20px !important",
//     margin:'0 0 12 !important',
//   },
//   text: {
//     color: "#374151 !important", // gray.700
//     fontStyle: "italic !important",
//     fontSize: "16px !important",
//     marginBottom: '16px !important',
//   },
//   author: {
//     color: "#1F2937 !important", // gray.800
//     fontSize: "16px !important",
//     fontWeight: '600 !important',
//     marginTop: '16 !important',
//   },
// }));

// const ReviewsSection = () => {
//   const classes = useStyles();

//   const reviews = [
//     {
//       rating: "★★★★★",
//       text: "Giga Resume helped me land interviews within a week! The AI suggestions were spot-on.",
//       author: "— Priya S., Marketing Specialist",
//     },
//     {
//       rating: "★★★★★",
//       text: "Finally, an ATS-friendly format that actually works. I got more callbacks than ever!",
//       author: "— Arjun K., Software Engineer",
//     },
//     {
//       rating: "★★★★☆",
//       text: "Loved the one-click cover letter generator. It made my job applications complete.",
//       author: "— Nisha P., HR Manager",
//     },
//   ];

//   return (
//     <Box className={classes.section}>
//       <Box className={classes.container}>
//         <Typography className={classes.title} variant="h4">
//           What Our Users Say
//         </Typography>
//         <Typography className={classes.subtitle}>
//           Thousands of job seekers have landed interviews and job offers using Giga Resume Builder.
//         </Typography>

//         <Box className={classes.reviewsWrapper}>
//           {reviews.map((review, index) => (
//             <Box key={index} className={classes.card}>
//               <Typography className={classes.rating}>{review.rating}</Typography>
//               <Typography className={classes.text}>{review.text}</Typography>
//               <Typography className={classes.author}>{review.author}</Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ReviewsSection;

import React from "react";
import { Box, Typography, Container } from "@mui/material";

const ReviewsSection = () => {
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
    <Box
      sx={{
        textAlign: "center",
        padding: { xs: "65px 16px 40px", md: "80px 24px 60px", lg: "100px 24px 80px" },
        background: "linear-gradient(135deg, #004080 0%, #001f3f 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: '700',
            marginBottom: { xs: '16px', md: '24px' },
            color: "#f9b600",
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          What Our Users Say
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: "#ffffff",
            marginBottom: { xs: '40px', sm: '48px', md: '60px' },
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            lineHeight: "1.5",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Thousands of job seekers have landed interviews and job offers using Giga Resume Builder.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: "24px", md: "32px", lg: "48px" },
            flexWrap: { sm: "wrap" },
            justifyContent: { sm: "center" },
          }}
        >
          {reviews.map((review, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#ffffff",
                padding: { xs: '24px', sm: '28px', md: '32px' },
                borderRadius: '24px',
                border: "1px solid #c6c6c6",
                boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
                textAlign: "center",
                width: "100%",
                maxWidth: { xs: "400px", lg: "350px" },
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                flex: { 
                  sm: "0 1 calc(50% - 12px)",
                  md: "0 1 calc(33.333% - 22px)",
                  lg: "0 1 calc(33.333% - 32px)"
                },
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#ffb90a",
                  fontSize: { xs: "18px", sm: "20px" },
                  marginBottom: '12px',
                }}
              >
                {review.rating}
              </Typography>
              
              <Typography
                sx={{
                  color: "#374151",
                  fontStyle: "italic",
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  lineHeight: "1.6",
                  marginBottom: '16px',
                }}
              >
                {review.text}
              </Typography>
              
              <Typography
                sx={{
                  color: "#1F2937",
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  fontWeight: '600',
                  marginTop: '16px',
                }}
              >
                {review.author}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsSection;