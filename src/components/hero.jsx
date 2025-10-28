// import React from "react";
// import { Button, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { useNavigate } from "react-router-dom";
// const useStyles = makeStyles(() => ({
//   heroSection: {
//     position: "relative",
//     overflow: "hidden",
//     backgroundColor: "#FFFFFF",
//   },
//   background: {
//     position: "absolute",
//     inset: 0,
//     // Blue-only gradient background
//     background: "linear-gradient(135deg, #004080 0%, #001f3f 100%)",
//     zIndex: 0,
//   },
//   container: {
//     position: "relative",
//     maxWidth: "1280px",
//     margin: "0 auto",
//     padding: "5rem 1rem",
//     display: "grid",
//     gridTemplateColumns: "1.2fr 1fr",
//     gap: "3rem",
//     alignItems: "center",
//     "@media (max-width: 1024px)": {
//       gridTemplateColumns: "1fr",
//       textAlign: "center",
//     },
//   },
//   left: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "1.5rem",
//     zIndex: 2,
//     color: "#FFFFFF", // makes all text white by default
//   },
//   badge: {
//     marginTop: "20px !important",
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "0.5rem",
//     padding: "0.5rem 1rem",
//     borderRadius: "9999px",
//     backgroundColor: "#f9b60033", // soft translucent yellow
//     color: "#f9b600", // yellow text for badge
//     fontSize: "0.875rem",
//     fontWeight: "600!important",
//     fontFamily: "'Roboto', sans-serif",
//     alignSelf: "flex-start",
//     "@media (max-width: 1024px)": {
//       alignSelf: "center",
//     },
//   },
//   title: {
//     marginTop: "20px !important",
//     fontWeight: "700 !important",
//     fontSize: "3rem !important",
//     lineHeight: "1 !important",
//     color: "#FFFFFF !important", // white main title
//     "@media (min-width: 1024px)": {
//       fontSize: "3.75rem",
//     },
//   },
//   gradientText: {
//     // Highlighted text in yellow
//     background: "linear-gradient(90deg, #f9b600 0%, #ffd84d 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   },
//   subtitle: {
//     fontSize: "1.5rem !important",
//     lineHeight: 1.4,
//     color: "#FFFFFF !important", // white subtitle
//     "@media (min-width: 1024px)": {
//       fontSize: "1.5rem",
//     },
//   },
//   paragraph: {
//     fontSize: "1.125rem",
//     color: "#f1f1f1", // light gray-white for readability
//     lineHeight: 1.6,
//   },
//   buttonGroup: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "1rem",
//     justifyContent: "flex-start",
//     "@media (max-width: 1024px)": {
//       justifyContent: "center",
//     },
//   },
//   primaryButton: {
//     backgroundColor: "#f9b600 !important",
//     color: "#001f3f !important", // dark blue text on yellow
//     fontSize: "1.125rem !important",
//     fontWeight: "600 !important",
//     padding: "0.75rem 1.5rem !important",
//     marginTop: "0.5rem !important",
//     borderRadius: "0.75rem !important",
//     textTransform: "none !important",
//     transition: "0.3s !important",
//     "&:hover": {
//       backgroundColor: "#ffcb33 !important",
//     },
//   },
//   secondaryButton: {
//     border: "1px solid #FFFFFF !important",
//     color: "#FFFFFF !important",
//     fontSize: "1.125rem !important",
//     fontWeight: "500!important",
//     padding: "0.75rem 1.5rem !important",
//     borderRadius: "0.75rem !important",
//     textTransform: "none !important",
//     transition: "0.3s !important",
//     "&:hover": {
//       backgroundColor: "rgba(255, 255, 255, 0.1) !important",
//     },
//   },
//   checklist: {
//     display: "flex",
//     alignItems: "center",
//     gap: "1.5rem",
//     color: "#FFFFFF",
//     fontSize: "0.875rem",
//     "@media (max-width: 1024px)": {
//       justifyContent: "center",
//       flexWrap: "wrap",
//     },
//   },
//   checklistItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "0.5rem",
//   },
//   right: {
//     position: "relative",
//     zIndex: 1,
//     "@media (max-width: 1024px)": {
//       marginTop: "3rem",
//     },
//   },
//   blurBg: {
//     position: "absolute",
//     inset: 0,
//     // Subtle blue glow to match the main background
//     background: "linear-gradient(135deg, #00408055, #001f3f55)",
//     filter: "blur(80px)",
//     zIndex: 0,
//   },
//   image: {
//     position: "relative",
//     width: "100%",
//     borderRadius: "1.5rem",
//     boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//     zIndex: 1,
//   },
// }));


// const HeroSection = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const handleGetStartedClick = () => {
//     navigate("/templates");
//   };
//   return (
//     <section className={classes.heroSection}>
//       <div className={classes.background} />
//       <div className={classes.container}>
//         {/* Left Section */}
//         <div className={classes.left}>
//           <div className={classes.badge}>
//             <span>🚀 Build Your Future Today</span>
//           </div>

//           <Typography component="h1" className={classes.title}>
//             Create Resume That{" "}
//             <span className={classes.gradientText}>Gets You Noticed</span>
//           </Typography>

//           <Typography component="h3" className={classes.subtitle}>
//             Build Job-Ready Resumes in Just a Few Clicks
//           </Typography>

//           <Typography className={classes.paragraph}>
//             Whether you're a fresher looking for your first IT job or a
//             professional aiming for a career switch, Gigaversity’s Resume
//             Builder helps you build a resume that reflects your skills, projects,
//             and growth in a{" "}
//             <span style={{ fontWeight: "bold" }}>
//               recruiter-approved, ATS-friendly format.
//             </span>
//           </Typography>

//           <Typography className={classes.paragraph}>
//             Choose from a variety of resume templates that adapt to your career
//             stage, helping you present your achievements, skills, and projects
//             clearly and professionally - so recruiters notice what truly matters.
//           </Typography>

//           <div className={classes.buttonGroup}>
//             <Button href="/login" className={classes.primaryButton} onClick={handleGetStartedClick}
//                         disableElevation>
//               Create Resume Now →
//             </Button>
//             <Button href = "/templates"className={classes.secondaryButton}>View Templates</Button>
            
//           </div>

//           <div className={classes.checklist}>
//             <div className={classes.checklistItem}>
//               <span>✔</span>
//               <span>No credit card required</span>
//             </div>
//             <div className={classes.checklistItem}>
//               <span>✔</span>
//               <span>100% free to use</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className={classes.right}>
//           <div className={classes.blurBg} />
//           <img
//             src="image.png"
//             alt="Resume builder preview"
//             className={classes.image}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React from "react";
// import { Button, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { useNavigate } from "react-router-dom";

// const useStyles = makeStyles(() => ({
//   heroSection: {
//     position: "relative",
//     overflow: "hidden",
//     backgroundColor: "#FFFFFF",
//     // minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//   },
//   background: {
//     position: "absolute",
//     inset: 0,
//     background: "linear-gradient(135deg, #004080 0%, #001f3f 100%)",
//     zIndex: 0,
//   },
//   container: {
//     position: "relative",
//     maxWidth: "1280px",
//     margin: "30px auto",
//     padding: "2rem 1rem",
//     display: "grid",
//     gridTemplateColumns: "1.2fr 1fr",
//     gap: "3rem",
//     alignItems: "center",
    
//     // Tablet styles
//     "@media (max-width: 1024px)": {
//       gridTemplateColumns: "1fr",
//       textAlign: "center",
//       gap: "2rem",
//       padding: "3rem 1.5rem",
//     },
    
//     // Mobile styles
//     "@media (max-width: 768px)": {
//       padding: "2rem 1rem",
//       gap: "1.5rem",
//     },
    
//     // Small mobile styles
//     "@media (max-width: 480px)": {
//       padding: "1.5rem 0.75rem",
//       gap: "1rem",
//     },
//   },
//   left: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "1.3rem",
//     paddingLeft: "10px",
//     zIndex: 2,
//     color: "#FFFFFF",
//     alignItems: "flex-start",
//     "@media (max-width: 768px)": {
//       gap: "1rem",
//     },
    
//     "@media (max-width: 480px)": {
//       gap: "0.75rem",
//     },
//   },
//   badge: {
//     marginTop: "20px !important",
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "0.5rem",
//     padding: "0.5rem 1rem",
//     borderRadius: "9999px",
//     backgroundColor: "#f9b60033",
//     color: "#f9b600",
//     fontSize: "0.875rem",
//     fontWeight: "600!important",
//     fontFamily: "'Roboto', sans-serif",
//     alignSelf: "flex-start",
    
//     "@media (max-width: 1024px)": {
//       alignSelf: "center",
//     },
    
//     "@media (max-width: 768px)": {
//       fontSize: "0.8rem",
//       padding: "0.4rem 0.8rem",
//       marginTop: "10px !important",
//     },
    
//     "@media (max-width: 480px)": {
//       fontSize: "0.75rem",
//       padding: "0.35rem 0.7rem",
//       marginTop: "5px !important",
//     },
//   },
//   title: {
//     // marginTop: "20px !important",
//     fontWeight: "700 !important",
//     fontSize: "3rem !important",
//     lineHeight: "1.1 !important",
//     color: "#FFFFFF !important",
    
//     "@media (min-width: 1024px)": {
//       fontSize: "3.75rem !important",
//     },
    
//     "@media (max-width: 1024px)": {
//       fontSize: "2.5rem !important",
//     },
    
//     "@media (max-width: 768px)": {
//       fontSize: "2rem !important",
//       marginTop: "15px !important",
//       lineHeight: "1.2 !important",
//     },
    
//     "@media (max-width: 480px)": {
//       fontSize: "1.75rem !important",
//       marginTop: "10px !important",
//     },
//   },
//   gradientText: {
//     background: "linear-gradient(90deg, #f9b600 0%, #ffd84d 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     display: "inline-block",
//   },
//   subtitle: {
//     fontSize: "2rem !important",
//     lineHeight: "1.4 !important",
//     color: "#FFFFFF !important",
    
//     "@media (min-width: 1024px)": {
//       fontSize: "2rem !important",
//     },
    
//     "@media (max-width: 768px)": {
//       fontSize: "1.25rem !important",
//       lineHeight: "1.3 !important",
//     },
    
//     "@media (max-width: 480px)": {
//       fontSize: "1.1rem !important",
//     },
//   },
//   paragraph: {
//     fontSize: "1.125rem",
//     color: "#f1f1f1",
//     lineHeight: 1.6,
    
//     "@media (max-width: 768px)": {
//       fontSize: "1rem",
//       lineHeight: 1.5,
//     },
    
//     "@media (max-width: 480px)": {
//       fontSize: "0.9rem",
//       lineHeight: 1.4,
//     },
//   },
//   buttonGroup: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "1rem",
//     justifyContent: "flex-start",
    
//     "@media (max-width: 1024px)": {
//       justifyContent: "center",
//     },
    
//     "@media (max-width: 768px)": {
//       gap: "0.75rem",
//       flexDirection: "column",
//       alignItems: "center",
//     },
    
//     "@media (max-width: 480px)": {
//       gap: "0.5rem",
//     },
//   },
//   primaryButton: {
//     backgroundColor: "#f9b600 !important",
//     color: "#001f3f !important",
//     fontSize: "1.125rem !important",
//     fontWeight: "600 !important",
//     padding: "0.75rem 1.5rem !important",
//     marginTop: "0.5rem !important",
//     borderRadius: "0.75rem !important",
//     textTransform: "none !important",
//     transition: "0.3s !important",
//     minWidth: "auto",
    
//     "&:hover": {
//       backgroundColor: "#ffcb33 !important",
//       transform: "translateY(-2px)",
//     },
    
//     "@media (max-width: 768px)": {
//       fontSize: "1rem !important",
//       padding: "0.65rem 1.25rem !important",
//       width: "100%",
//       maxWidth: "280px",
//     },
    
//     "@media (max-width: 480px)": {
//       fontSize: "0.9rem !important",
//       padding: "0.6rem 1rem !important",
//       maxWidth: "250px",
//     },
//   },
//   secondaryButton: {
//     border: "1px solid #FFFFFF !important",
//     color: "#FFFFFF !important",
//     fontSize: "1.125rem !important",
//     fontWeight: "500!important",
//     padding: "0.75rem 1.5rem !important",
//     borderRadius: "0.75rem !important",
//     textTransform: "none !important",
//     transition: "0.3s !important",
//     minWidth: "auto",
    
//     "&:hover": {
//       backgroundColor: "rgba(255, 255, 255, 0.1) !important",
//       transform: "translateY(-2px)",
//     },
    
//     "@media (max-width: 768px)": {
//       fontSize: "1rem !important",
//       padding: "0.65rem 1.25rem !important",
//       width: "100%",
//       maxWidth: "280px",
//     },
    
//     "@media (max-width: 480px)": {
//       fontSize: "0.9rem !important",
//       padding: "0.6rem 1rem !important",
//       maxWidth: "250px",
//     },
//   },
//   checklist: {
//     display: "flex",
//     alignItems: "center",
//     gap: "1.5rem",
//     color: "#FFFFFF",
//     fontSize: "0.875rem",
    
//     "@media (max-width: 1024px)": {
//       justifyContent: "center",
//       flexWrap: "wrap",
//     },
    
//     "@media (max-width: 768px)": {
//       gap: "1rem",
//       fontSize: "0.8rem",
//     },
    
//     "@media (max-width: 480px)": {
//       gap: "0.75rem",
//       fontSize: "0.75rem",
//       flexDirection: "column",
//     },
//   },
//   checklistItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "0.5rem",
    
//     "@media (max-width: 480px)": {
//       gap: "0.375rem",
//     },
//   },
//   right: {
//     position: "relative",
//     zIndex: 1,
//     height: "570px",
//     width: "460px",
//     alignContent: "center !important",
//     alignItems: "center !important",
//     justifyContent: "center !important",
//     "@media (max-width: 1024px)": {
//       marginTop: "2rem",
//     },
    
//     "@media (max-width: 768px)": {
//       marginTop: "1.5rem",
//     },
    
//     "@media (max-width: 480px)": {
//       marginTop: "1rem",
//     },
//   },
//   blurBg: {
//     position: "absolute",
//     inset: 0,
//     background: "linear-gradient(135deg, #00408055, #001f3f55)",
//     filter: "blur(80px)",
//     zIndex: 0,
//   },
//   image: {
//     position: "relative",
//     width: "100%",
//     borderRadius: "1.5rem",
//     boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//     zIndex: 1,
    
//     "@media (max-width: 768px)": {
//       borderRadius: "1rem",
//       boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
//     },
    
//     "@media (max-width: 480px)": {
//       borderRadius: "0.75rem",
//       boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
//     },
//   },
// }));

// const HeroSection = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
  
//   const handleGetStartedClick = () => {
//     navigate("/templates");
//   };

//   return (
//     <section className={classes.heroSection}>
//       <div className={classes.background} />
//       <div className={classes.container}>
//         {/* Left Section */}
//         <div className={classes.left}>
//           <div className={classes.badge}>
//             <span>🚀 Build Your Future Today</span>
//           </div>

//           <Typography component="h1" className={classes.title}>
//             Create Resume That{" "}
//             <span className={classes.gradientText}>Gets You Noticed</span>
//           </Typography>

//           <Typography component="h3" className={classes.subtitle}>
//             Build Job-Ready Resumes in Just a Few Clicks
//           </Typography>

//           <Typography className={classes.paragraph}>
//             Whether you're a fresher looking for your first IT job or a
//             professional aiming for a career switch, Gigaversity's Resume
//             Builder helps you build a resume that reflects your skills, projects,
//             and growth in a{" "}
//             <span style={{ fontWeight: "bold", color: "#f9b600" }}>
//               recruiter-approved, ATS-friendly format.
//             </span>
//           </Typography>

//           <Typography className={classes.paragraph}>
//             Choose from a variety of resume templates that adapt to your career
//             stage, helping you present your achievements, skills, and projects
//             clearly and professionally - so recruiters notice what truly matters.
//           </Typography>

//           <div className={classes.buttonGroup}>
//             <Button 
//               href="/login" 
//               className={classes.primaryButton} 
//               onClick={handleGetStartedClick}
//               disableElevation
//             >
//               Create Resume Now →
//             </Button>
//             <Button 
//               href="/templates" 
//               className={classes.secondaryButton}
//             >
//               View Templates
//             </Button>
//           </div>

//           <div className={classes.checklist}>
//             <div className={classes.checklistItem}>
//               <span>✔</span>
//               <span>No credit card required</span>
//             </div>
//             <div className={classes.checklistItem}>
//               <span>✔</span>
//               <span>100% free to use</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className={classes.right}>
//           {/* <div className={classes.blurBg} /> */}
//           <img
//             src="hero_image.jpeg"
//             alt="Resume builder preview"
//             className={classes.image}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  heroSection: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    // minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: "50px",
    paddingBottom: "30px",
    paddingLeft: "30px",
    "@media (max-width: 1000px)": {
      minHeight: "auto",
    },
    "@media (max-width: 770px)": {
      paddingLeft: "20px",
    },
    "@media (max-width: 430px)": {
      paddingLeft: "10px",
    },
    "@media (max-width: 380px)": {
      paddingLeft: "5px",
    },
  },
  background: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, #004080 0%, #001f3f 100%)",
    zIndex: 0,
  },
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "2rem 1rem",
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "3rem",
    alignItems: "center",
    
    // Large desktop
    "@media (min-width: 1440px)": {
      maxWidth: "1400px",
      padding: "3rem 2rem",
    },
    
    // Single row for screens larger than 1000px
    "@media (min-width: 1001px)": {
      gridTemplateColumns: "1.2fr 1fr",
    },
    
    // Stack for screens 1000px and below
    "@media (max-width: 1000px)": {
      gridTemplateColumns: "1fr",
      gap: "2.5rem",
      padding: "3rem 2rem",
      maxWidth: "900px",
    },
    
    // Tablet portrait
    "@media (max-width: 768px)": {
      padding: "2.5rem 1.5rem",
      gap: "2rem",
    },
    
    // Mobile
    "@media (max-width: 480px)": {
      padding: "2rem 1rem",
      gap: "1.5rem",
    },
    
    // Small mobile
    "@media (max-width: 375px)": {
      padding: "1.5rem 0.75rem",
      gap: "1rem",
    },
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    zIndex: 2,
    color: "#FFFFFF",
    alignItems: "flex-start",
    
    // For screens larger than 1000px - keep left aligned
    "@media (min-width: 1001px)": {
      alignItems: "flex-start",
      textAlign: "left",
    },
    
    // For screens 1000px and below - justify text but keep items flex-start
    "@media (max-width: 1000px)": {
      alignItems: "flex-start",
      textAlign: "left",
      gap: "1.25rem",
    },
    
    "@media (max-width: 768px)": {
      gap: "1rem",
    },
    
    "@media (max-width: 480px)": {
      gap: "0.875rem",
    },
    
    "@media (max-width: 375px)": {
      gap: "0.75rem",
    },
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.25rem",
    borderRadius: "9999px",
    backgroundColor: "#f9b60033",
    color: "#f9b600",
    fontSize: "0.875rem",
    fontWeight: "600 !important",
    fontFamily: "'Roboto', sans-serif",
    alignSelf: "flex-start",
    
    "@media (max-width: 1000px)": {
      alignSelf: "flex-start",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "0.8rem",
      padding: "0.6rem 1rem",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "0.75rem",
      padding: "0.5rem 0.875rem",
    },
    
    "@media (max-width: 375px)": {
      fontSize: "0.7rem",
      padding: "0.4rem 0.75rem",
    },
  },
  title: {
    fontWeight: "700 !important",
    fontSize: "3.5rem !important",
    lineHeight: "1.1 !important",
    color: "#FFFFFF !important",
    textAlign: "left",
    
    "@media (min-width: 1440px)": {
      fontSize: "4rem !important",
    },
    
    "@media (min-width: 1001px)": {
      textAlign: "left",
    },
    
    "@media (max-width: 1000px)": {
      fontSize: "3rem !important",
      textAlign: "left",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "2.5rem !important",
      lineHeight: "1.2 !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "2rem !important",
    },
    
    "@media (max-width: 375px)": {
      fontSize: "1.75rem !important",
    },
  },
  gradientText: {
    background: "linear-gradient(90deg, #f9b600 0%, #ffd84d 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline-block",
  },
  subtitle: {
    fontSize: "1.75rem !important",
    lineHeight: "1.4 !important",
    color: "#FFFFFF !important",
    textAlign: "left",
    fontWeight: "500 !important",
    
    "@media (min-width: 1440px)": {
      fontSize: "2rem !important",
    },
    
    "@media (min-width: 1001px)": {
      textAlign: "left",
    },
    
    "@media (max-width: 1000px)": {
      fontSize: "1.5rem !important",
      textAlign: "left",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "1.375rem !important",
      lineHeight: "1.3 !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "1.25rem !important",
    },
    
    "@media (max-width: 375px)": {
      fontSize: "1.125rem !important",
    },
  },
  paragraph: {
    fontSize: "1.125rem",
    color: "#f1f1f1",
    lineHeight: 1.6,
    textAlign: "left",
    
    "@media (min-width: 1001px)": {
      textAlign: "left",
    },
    
    "@media (max-width: 1000px)": {
      textAlign: "left",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "1.05rem",
      lineHeight: 1.5,
    },
    
    "@media (max-width: 480px)": {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    
    "@media (max-width: 375px)": {
      fontSize: "0.95rem",
      lineHeight: 1.4,
    },
  },
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "flex-start",
    width: "100%",
    
    "@media (min-width: 1001px)": {
      justifyContent: "flex-start",
    },
    
    "@media (max-width: 1000px)": {
      justifyContent: "flex-start",
    },
    
    "@media (max-width: 768px)": {
      gap: "0.875rem",
      flexDirection: "row",
      alignItems: "flex-start",
    },
    
    "@media (max-width: 480px)": {
      flexDirection: "column",
      gap: "0.75rem",
      alignItems: "flex-start",
    },
    
    "@media (max-width: 375px)": {
      gap: "0.5rem",
    },
  },
  primaryButton: {
    backgroundColor: "#f9b600 !important",
    color: "#001f3f !important",
    fontSize: "1.125rem !important",
    fontWeight: "600 !important",
    padding: "0.875rem 2rem !important",
    borderRadius: "0.75rem !important",
    textTransform: "none !important",
    transition: "all 0.3s ease !important",
    minWidth: "auto",
    flexShrink: 0,
    
    "&:hover": {
      backgroundColor: "#ffcb33 !important",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px rgba(249, 182, 0, 0.3) !important",
    },
    
    "@media (max-width: 1000px)": {
      fontSize: "1.05rem !important",
      padding: "0.75rem 1.75rem !important",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "1rem !important",
      padding: "0.7rem 1.5rem !important",
      minWidth: "200px",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "0.95rem !important",
      padding: "0.65rem 1.25rem !important",
      width: "100%",
      maxWidth: "280px",
      minWidth: "auto",
    },
    
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
      padding: "0.6rem 1rem !important",
      maxWidth: "260px",
    },
  },
  secondaryButton: {
    border: "2px solid #FFFFFF !important",
    color: "#FFFFFF !important",
    fontSize: "1.125rem !important",
    fontWeight: "500 !important",
    padding: "0.875rem 2rem !important",
    borderRadius: "0.75rem !important",
    textTransform: "none !important",
    transition: "all 0.3s ease !important",
    minWidth: "auto",
    flexShrink: 0,
    
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15) !important",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2) !important",
    },
    
    "@media (max-width: 1000px)": {
      fontSize: "1.05rem !important",
      padding: "0.75rem 1.75rem !important",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "1rem !important",
      padding: "0.7rem 1.5rem !important",
      minWidth: "200px",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "0.95rem !important",
      padding: "0.65rem 1.25rem !important",
      width: "100%",
      maxWidth: "280px",
      minWidth: "auto",
    },
    
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
      padding: "0.6rem 1rem !important",
      maxWidth: "260px",
    },
  },
  checklist: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    color: "#FFFFFF",
    fontSize: "0.875rem",
    flexWrap: "wrap",
    
    "@media (min-width: 1001px)": {
      justifyContent: "flex-start",
    },
    
    "@media (max-width: 1000px)": {
      justifyContent: "flex-start",
    },
    
    "@media (max-width: 768px)": {
      gap: "1.25rem",
      fontSize: "0.85rem",
    },
    
    "@media (max-width: 480px)": {
      gap: "1rem",
      fontSize: "0.8rem",
    },
    
    "@media (max-width: 375px)": {
      gap: "0.75rem",
      fontSize: "0.75rem",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  checklistItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    
    "@media (max-width: 375px)": {
      gap: "0.375rem",
    },
  },
  right: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
    "@media (min-width: 1001px)": {
      display: "flex",
    },
    
    "@media (max-width: 1000px)": {
      marginTop: "1rem",
    },
    
    "@media (max-width: 768px)": {
      marginTop: "0.5rem",
    },
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    
    "@media (min-width: 1440px)": {
      maxWidth: "550px",
    },
    
    "@media (max-width: 1000px)": {
      maxWidth: "450px",
    },
    
    "@media (max-width: 768px)": {
      maxWidth: "400px",
    },
    
    "@media (max-width: 480px)": {
      maxWidth: "350px",
    },
    
    "@media (max-width: 375px)": {
      maxWidth: "300px",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "1.5rem",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
    objectFit: "cover",
    
    "@media (max-width: 768px)": {
      borderRadius: "1.25rem",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.35)",
    },
    
    "@media (max-width: 480px)": {
      borderRadius: "1rem",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
    },
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  
  const handleGetStartedClick = () => {
    navigate("/templates");
  };

  return (
    <section className={classes.heroSection}>
      <div className={classes.background} />
      <div className={classes.container}>
        {/* Left Section */}
        <div className={classes.left}>
          <div className={classes.badge}>
            <span>🚀 Build Your Future Today</span>
          </div>

          <Typography component="h1" className={classes.title}>
            Create Resume That{" "}
            <span className={classes.gradientText}>Gets You Noticed</span>
          </Typography>

          <Typography component="h3" className={classes.subtitle}>
            Build Job-Ready Resumes in Just a Few Clicks
          </Typography>

          <Typography className={classes.paragraph}>
            Whether you're a fresher looking for your first IT job or a
            professional aiming for a career switch, Gigaversity's Resume
            Builder helps you build a resume that reflects your skills, projects,
            and growth in a{" "}
            <span style={{ fontWeight: "bold", color: "#f9b600" }}>
              recruiter-approved, ATS-friendly format.
            </span>
          </Typography>

          <Typography className={classes.paragraph}>
            Choose from a variety of resume templates that adapt to your career
            stage, helping you present your achievements, skills, and projects
            clearly and professionally - so recruiters notice what truly matters.
          </Typography>

          <div className={classes.buttonGroup}>
            <Button 
              className={classes.primaryButton} 
              onClick={handleGetStartedClick}
              disableElevation
            >
              Create Resume Now →
            </Button>
            <Button 
              href="/templates" 
              className={classes.secondaryButton}
            >
              View Templates
            </Button>
          </div>

          <div className={classes.checklist}>
            <div className={classes.checklistItem}>
              <span>✔</span>
              <span>No credit card required</span>
            </div>
            <div className={classes.checklistItem}>
              <span>✔</span>
              <span>100% free to use</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={classes.right}>
          <div className={classes.imageContainer}>
            <img
              src="hero_image.jpeg"
              alt="Resume builder preview"
              className={classes.image}
              onError={(e) => {
                e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiByeD0iMjQiIGZpbGw9IiMwMDQwODAiLz4KPHRleHQgeD0iMjUwIiB5PSIyMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNGRkYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCI+UmVzdW1lIEJ1aWxkZXIgUHJldmlldzwvdGV4dD4KPC9zdmc+";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;