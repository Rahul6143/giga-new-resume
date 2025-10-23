import React from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

// const useStyles = makeStyles(() => ({
//   heroSection: {
//     position: "relative",
//     overflow: "hidden",
//     backgroundColor: "#FFFFFF",
//   },
//   background: {
//     position: "absolute",
//     inset: 0,
//     background:
//       "linear-gradient(135deg, #DBEAFE 0%, #F3E8FF 50%, #FFFFFF 100%)",
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
//   },
//   badge: {
//     marginTop: "20px !important",
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "0.5rem",
//     padding: "0.5rem 1rem",
//     borderRadius: "9999px",
//     backgroundColor: "#bdd8fcff",
//     color: "#2563EB",
//     fontSize: "0.875rem",
//     fontWeight: '600!important',
//     fontFamily: "'Roboto', sans-serif",
//     alignSelf: "flex-start",
//     "@media (max-width: 1024px)": {
//       alignSelf: "center",
//     },
//   },
//   title: {
//     marginTop: "20px !important",
//     fontWeight: '700 !important',
//     fontSize: "3rem !important",
//     lineHeight: '1 !important',
//     "@media (min-width: 1024px)": {
//       fontSize: "3.75rem",
//     },
//   },
//   gradientText: {
//     background:
//       "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   },
//   subtitle: {
//     fontSize: "1.5rem !important",
//     lineHeight: 1.4,
//     "@media (min-width: 1024px)": {
//       fontSize: "1.5rem",
//     },
//   },
//   paragraph: {
//     fontSize: "1.125rem",
//     color: "#4B5563",
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
//     backgroundColor: "#2563EB !important",
//     color: "#FFFFFF !important",
//     fontSize: "1.125rem !important",
//     fontWeight: '500 !important',
//     padding: "0.75rem 1.5rem !important",
//     marginTop: "0.5rem !important",
//     borderRadius: "0.75rem !important",
//     textTransform: "none !important",
//     transition: "0.3s !important",
//     "&:hover": {
//       backgroundColor: "#1D4ED8 !important",
//     },
//   },
//   secondaryButton: {
//     border: "1px solid #D1D5DB  !important",
//     color: "#1F2937 !important",
//     fontSize: "1.125rem !important",
//     fontWeight: '500!important',
//     padding: "0.75rem 1.5rem !important",
//     borderRadius: "0.75rem !important",
//     textTransform: "none !important",
//     transition: "0.3s !important",
//     "&:hover": {
//       backgroundColor: "#F3F4F6 !important",
//     },
//   },
//   checklist: {
//     display: "flex",
//     alignItems: "center",
//     gap: "1.5rem",
//     color: "#4B5563",
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
//     background: "linear-gradient(135deg, #BFDBFE, #E9D5FF)",
//     filter: "blur(60px)",
//     zIndex: 0,
//   },
//   image: {
//     position: "relative",
//     width: "100%",
//     borderRadius: "1.5rem",
//     boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
//     zIndex: 1,
//   },
// }));

const useStyles = makeStyles(() => ({
  heroSection: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  background: {
    position: "absolute",
    inset: 0,
    // Blue-only gradient background
    background: "linear-gradient(135deg, #004080 0%, #001f3f 100%)",
    zIndex: 0,
  },
  container: {
    position: "relative",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "5rem 1rem",
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "3rem",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      textAlign: "center",
    },
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    zIndex: 2,
    color: "#FFFFFF", // makes all text white by default
  },
  badge: {
    marginTop: "20px !important",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    backgroundColor: "#f9b60033", // soft translucent yellow
    color: "#f9b600", // yellow text for badge
    fontSize: "0.875rem",
    fontWeight: "600!important",
    fontFamily: "'Roboto', sans-serif",
    alignSelf: "flex-start",
    "@media (max-width: 1024px)": {
      alignSelf: "center",
    },
  },
  title: {
    marginTop: "20px !important",
    fontWeight: "700 !important",
    fontSize: "3rem !important",
    lineHeight: "1 !important",
    color: "#FFFFFF !important", // white main title
    "@media (min-width: 1024px)": {
      fontSize: "3.75rem",
    },
  },
  gradientText: {
    // Highlighted text in yellow
    background: "linear-gradient(90deg, #f9b600 0%, #ffd84d 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "1.5rem !important",
    lineHeight: 1.4,
    color: "#FFFFFF !important", // white subtitle
    "@media (min-width: 1024px)": {
      fontSize: "1.5rem",
    },
  },
  paragraph: {
    fontSize: "1.125rem",
    color: "#f1f1f1", // light gray-white for readability
    lineHeight: 1.6,
  },
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "flex-start",
    "@media (max-width: 1024px)": {
      justifyContent: "center",
    },
  },
  primaryButton: {
    backgroundColor: "#f9b600 !important",
    color: "#001f3f !important", // dark blue text on yellow
    fontSize: "1.125rem !important",
    fontWeight: "600 !important",
    padding: "0.75rem 1.5rem !important",
    marginTop: "0.5rem !important",
    borderRadius: "0.75rem !important",
    textTransform: "none !important",
    transition: "0.3s !important",
    "&:hover": {
      backgroundColor: "#ffcb33 !important",
    },
  },
  secondaryButton: {
    border: "1px solid #FFFFFF !important",
    color: "#FFFFFF !important",
    fontSize: "1.125rem !important",
    fontWeight: "500!important",
    padding: "0.75rem 1.5rem !important",
    borderRadius: "0.75rem !important",
    textTransform: "none !important",
    transition: "0.3s !important",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1) !important",
    },
  },
  checklist: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    color: "#FFFFFF",
    fontSize: "0.875rem",
    "@media (max-width: 1024px)": {
      justifyContent: "center",
      flexWrap: "wrap",
    },
  },
  checklistItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  right: {
    position: "relative",
    zIndex: 1,
    "@media (max-width: 1024px)": {
      marginTop: "3rem",
    },
  },
  blurBg: {
    position: "absolute",
    inset: 0,
    // Subtle blue glow to match the main background
    background: "linear-gradient(135deg, #00408055, #001f3f55)",
    filter: "blur(80px)",
    zIndex: 0,
  },
  image: {
    position: "relative",
    width: "100%",
    borderRadius: "1.5rem",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    zIndex: 1,
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
            professional aiming for a career switch, Gigaversity’s Resume
            Builder helps you build a resume that reflects your skills, projects,
            and growth in a{" "}
            <span style={{ fontWeight: "bold" }}>
              recruiter-approved, ATS-friendly format.
            </span>
          </Typography>

          <Typography className={classes.paragraph}>
            Choose from a variety of resume templates that adapt to your career
            stage, helping you present your achievements, skills, and projects
            clearly and professionally - so recruiters notice what truly matters.
          </Typography>

          <div className={classes.buttonGroup}>
            <Button href="/login" className={classes.primaryButton} onClick={handleGetStartedClick}
                        disableElevation>
              Create Resume Now →
            </Button>
            <Button href = "/templates"className={classes.secondaryButton}>View Templates</Button>
            
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
          <div className={classes.blurBg} />
          <img
            src="image.png"
            alt="Resume builder preview"
            className={classes.image}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
