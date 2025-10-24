// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { makeStyles } from '@mui/styles';

// // ✅ Import MUI icons
// import StarIcon from "@mui/icons-material/Star";
// import BoltIcon from "@mui/icons-material/Bolt";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";
// import DescriptionIcon from "@mui/icons-material/Description";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import SecurityIcon from "@mui/icons-material/Security";
// import TrackChangesIcon from "@mui/icons-material/TrackChanges";
// import SparkleIcon from "@mui/icons-material/AutoAwesome"; // replaces ✨ badge

// const useStyles = makeStyles(() => ({
//   section: {
//     padding: "40px 16px !important",
//     background: "linear-gradient(135deg, #f5f8ff, #f8f9fb)!important",
//     position: "relative !important",
//     overflow: "hidden !important",
//     textAlign: "center !important",
//   },
//   badge: {
//     display: "inline-flex",
//     alignItems: "center !important",
//     gap: "8px",
//     padding: "10px 20px !important",
//     borderRadius: '50px !important',
//     background: "rgba(99, 102, 241, 0.1)!important",
//     color: "#6366f1!important",
//     fontWeight: '500!important',
//     fontSize: '14px!important',
//     marginBottom: '15px !important',
//   },
//   heading: {
//     fontSize: "2.2rem !important",
//     fontWeight: '700 !important',
//     marginBottom: '10px !important',
//   },
//   subtext: {
//     fontSize: "1.1rem !important",
//     color: "#666 !important",
//     maxWidth: '600 !important',
//     margin: "0 auto !important",
//   },
//   marquee: {
//     overflow: "hidden !important",
//     width: "100% !important",
//     marginTop: '50px !important',
//   },
//   marqueeTrack: {
//     display: "flex!important",
//     animation: "$marquee 20s linear infinite!important",
//   },
//   "@keyframes marquee": {
//     "0%": { transform: "translateX(0%)" },
//     "100%": { transform: "translateX(-50%)" },
//   },
//   highlightCard: {
//     flex: "0 0 auto !important",
//     width: '220px !important',
//     margin: "0 15px !important",
//     padding: '20px !important',
//     borderRadius: '16px !important',
//     background: "#fff !important",
//     boxShadow: "0px 10px 20px rgba(0,0,0,0.05) !important",
//     textAlign: "center !important",
//   },
//   iconBox: {
//     width: "60px !important",
//     height: "60px !important",
//     borderRadius: "50% !important",
//     margin: "0 auto 15px !important",
//     display: "flex !important",
//     alignItems: "center !important",
//     justifyContent: "center !important",
//     color: "#fff !important",
//     fontSize: '32px !important',
//   },
// }));

// // ✅ Replace emojis with MUI icons
// const highlights = [
//   { icon: <StarIcon />, title: "Top Rated", desc: "Trusted by thousands of job seekers", gradient: "linear-gradient(135deg, #6366f1, #818cf8)" },
//   { icon: <BoltIcon />, title: "Lightning Fast", desc: "Build your resume in minutes", gradient: "linear-gradient(135deg, #ec4899, #f472b6)" },
//   { icon: <PsychologyIcon />, title: "Gen AI Recommendation", desc: "Smart suggestions powered by AI", gradient: "linear-gradient(135deg, #6366f1, #818cf8)" },
//   { icon: <LightbulbIcon />, title: "Project Suggestion", desc: "Get relevant project ideas", gradient: "linear-gradient(135deg, #ec4899, #f472b6)" },
//   { icon: <DescriptionIcon />, title: "Professional Layouts", desc: "Beautiful, modern templates", gradient: "linear-gradient(135deg, #6366f1, #818cf8)" },
//   { icon: <EmojiEventsIcon />, title: "Recruiter Approved", desc: "Professionally vetted templates", gradient: "linear-gradient(135deg, #ec4899, #f472b6)" },
//   { icon: <SecurityIcon />, title: "ATS-Friendly", desc: "Pass all applicant tracking systems", gradient: "linear-gradient(135deg, #6366f1, #818cf8)" },
//   { icon: <TrackChangesIcon />, title: "Skills Suggestion", desc: "AI-powered skill recommendations", gradient: "linear-gradient(135deg, #ec4899, #f472b6)" },
// ];

// const KeyHighlights = () => {
//   const classes = useStyles();
//   const marqueeItems = [...highlights, ...highlights];

//   return (
//     <section className={classes.section}>
//       <Box className={classes.badge}>
//         <SparkleIcon fontSize="small" /> <span>Why Choose Us</span>
//       </Box>

//       <Typography className={classes.heading}>
//         Key Highlights of Giga Resume Builder
//       </Typography>

//       <Typography className={classes.subtext}>
//         Powerful features designed to help you create the perfect resume
//       </Typography>

//       <Box className={classes.marquee}>
//         <Box className={classes.marqueeTrack}>
//           {marqueeItems.map((item, index) => (
//             <Box className={classes.highlightCard} key={index}>
//               <Box className={classes.iconBox} style={{ background: item.gradient }}>
//                 {item.icon}
//               </Box>
//               <Typography variant="h6" style={{ marginBottom: 8 }}>
//                 {item.title}
//               </Typography>
//               <Typography variant="body2" style={{ color: "#666" }}>
//                 {item.desc}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </section>
//   );
// };

// export default KeyHighlights;

import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// ✅ Import MUI icons
import StarIcon from "@mui/icons-material/Star";
import BoltIcon from "@mui/icons-material/Bolt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DescriptionIcon from "@mui/icons-material/Description";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SecurityIcon from "@mui/icons-material/Security";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const useStyles = makeStyles(() => ({
  section: {
    padding: "60px 20px !important",
    background: "linear-gradient(135deg, #f5f8ff, #f8f9fb)!important",
    textAlign: "center !important",
  },
  badge: {
    display: "inline-flex",
    fontFamily: "'Roboto', sans-serif",
    alignItems: "center !important",
    gap: "8px",
    padding: "10px 20px !important",
    borderRadius: "50px !important",
    background: "rgba(99, 102, 241, 0.1)!important",
    color: "#6366f1!important",
    fontWeight: "600!important",
    fontSize: "20px!important",
    marginBottom: "20px !important",
  },
  heading: {
    fontSize: "2.2rem !important",
    fontWeight: "700 !important",
    marginBottom: "12px !important",
  },
  subtext: {
    fontSize: "1.1rem !important",
    color: "#666 !important",
    maxWidth: "600px !important",
    margin: "0 auto !important",
  },
  marquee: {
    width: "100% !important",
    marginTop: "60px !important",
    overflowX: "hidden !important",
    // overflowY: "hidden !important",
  },
  marqueeTrack: {
    display: "flex !important",
    animation: "$marquee 25s linear infinite !important",
  },
  "@keyframes marquee": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" },
  },
  highlightCard: {
    flex: "0 0 auto !important",
    width: "230px !important",
    margin: "0 20px !important",
    padding: "28px 20px !important",
    borderRadius: "16px !important",
    background: "#fff !important",
    border: "1px solid rgba(99, 102, 241, 0.12) !important",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08) !important",
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    justifyContent: "flex-start !important",
    textAlign: "center !important",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease !important",
    "&:hover": {
      transform: "translateY(-6px) !important",
      boxShadow: "0 10px 25px rgba(99, 102, 241, 0.18) !important",
      borderColor: "rgba(99, 102, 241, 0.35) !important",
    },
  },
  iconBox: {
    width: "64px !important",
    height: "64px !important",
    borderRadius: "50% !important",
    marginBottom: "18px !important",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    fontSize: "30px !important",
    transition: "background 0.3s ease, color 0.3s ease !important",
  },
  title: {
    fontWeight: "600 !important",
    fontSize: "1.3rem !important",
    color: "#333 !important",
    marginBottom: "8px !important",
    minHeight: "48px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    fontSize: "1rem !important",
    color: "#666 !important",
    lineHeight: "1.5 !important",
    minHeight: "42px !important",
  },
}));

// ✅ Updated highlight items with brand colors
const highlights = [
  { icon: <StarIcon fontSize="inherit" />, title: "Top Rated", desc: "Trusted by thousands of job seekers", color: "#2626beff" },
  { icon: <BoltIcon fontSize="inherit" />, title: "Lightning Fast", desc: "Build your resume in minutes", color: "#f9b600" },
  { icon: <PsychologyIcon fontSize="inherit" />, title: "AI Recommendation", desc: "Smart suggestions powered by AI", color: "#2626beff" },
  { icon: <LightbulbIcon fontSize="inherit" />, title: "Project Suggestion", desc: "Get relevant project ideas", color: "#f9b600" },
  { icon: <DescriptionIcon fontSize="inherit" />, title: "Professional Layouts", desc: "Beautiful, modern templates", color: "#2626beff" },
  { icon: <EmojiEventsIcon fontSize="inherit" />, title: "Recruiter Approved", desc: "Professionally vetted templates", color: "#f9b600" },
  { icon: <SecurityIcon fontSize="inherit" />, title: "ATS-Friendly", desc: "Pass all applicant tracking systems", color: "#2626beff" },
  { icon: <TrackChangesIcon fontSize="inherit" />, title: "Skills Suggestion", desc: "AI-powered skill recommendations", color: "#f9b600" },
];

const KeyHighlights = () => {
  const classes = useStyles();
  const marqueeItems = [...highlights, ...highlights];

  return (
    <section className={classes.section}>
      <Box className={classes.badge}>
        <AutoAwesomeIcon fontSize="small" /> <span>Why Choose Us</span>
      </Box>

      <Typography className={classes.heading}>
        Key Highlights of Giga Resume Builder
      </Typography>

      <Typography className={classes.subtext}>
        Powerful features designed to help you create the perfect resume
      </Typography>

      <Box className={classes.marquee}>
        <Box className={classes.marqueeTrack}>
          {marqueeItems.map((item, index) => {
            // ✅ Automatically set icon color based on background
            const iconColor = item.color === "#FFD23F" ? "#2B2B6A" : "#fff";
            return (
              <Box className={classes.highlightCard} key={index}>
                <Box
                  className={classes.iconBox}
                  style={{
                    background: item.color,
                    color: iconColor,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography className={classes.title}>{item.title}</Typography>
                <Typography className={classes.desc}>{item.desc}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </section>
  );
};

export default KeyHighlights;
