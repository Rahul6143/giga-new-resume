// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// // ✅ Import MUI icons
// import StarIcon from "@mui/icons-material/Star";
// import BoltIcon from "@mui/icons-material/Bolt";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";
// import DescriptionIcon from "@mui/icons-material/Description";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import SecurityIcon from "@mui/icons-material/Security";
// import TrackChangesIcon from "@mui/icons-material/TrackChanges";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// const useStyles = makeStyles(() => ({
//   section: {
//     padding: "60px 20px !important",
//     background: "linear-gradient(135deg, #f5f8ff, #f8f9fb)!important",
//     textAlign: "center !important",
//   },
//   badge: {
//     display: "inline-flex",
//     fontFamily: "'Roboto', sans-serif",
//     alignItems: "center !important",
//     gap: "8px",
//     padding: "10px 20px !important",
//     borderRadius: "50px !important",
//     background: "rgba(99, 102, 241, 0.1)!important",
//     color: "#6366f1!important",
//     fontWeight: "600!important",
//     fontSize: "20px!important",
//     marginBottom: "20px !important",
//   },
//   heading: {
//     fontSize: "2.2rem !important",
//     fontWeight: "700 !important",
//     marginBottom: "12px !important",
//   },
//   subtext: {
//     fontSize: "1.1rem !important",
//     color: "#666 !important",
//     maxWidth: "600px !important",
//     margin: "0 auto !important",
//   },
//   marquee: {
//     width: "100% !important",
//     marginTop: "60px !important",
//     overflowX: "hidden !important",
//     // overflowY: "hidden !important",
//   },
//   marqueeTrack: {
//     display: "flex !important",
//     animation: "$marquee 25s linear infinite !important",
//   },
//   "@keyframes marquee": {
//     "0%": { transform: "translateX(0%)" },
//     "100%": { transform: "translateX(-50%)" },
//   },
//   highlightCard: {
//     flex: "0 0 auto !important",
//     width: "230px !important",
//     margin: "0 20px !important",
//     padding: "28px 20px !important",
//     borderRadius: "16px !important",
//     background: "#fff !important",
//     border: "1px solid rgba(99, 102, 241, 0.12) !important",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08) !important",
//     display: "flex !important",
//     flexDirection: "column !important",
//     alignItems: "center !important",
//     justifyContent: "flex-start !important",
//     textAlign: "center !important",
//     transition:
//       "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease !important",
//     "&:hover": {
//       transform: "translateY(-6px) !important",
//       boxShadow: "0 10px 25px rgba(99, 102, 241, 0.18) !important",
//       borderColor: "rgba(99, 102, 241, 0.35) !important",
//     },
//   },
//   iconBox: {
//     width: "64px !important",
//     height: "64px !important",
//     borderRadius: "50% !important",
//     marginBottom: "18px !important",
//     display: "flex !important",
//     alignItems: "center !important",
//     justifyContent: "center !important",
//     fontSize: "30px !important",
//     transition: "background 0.3s ease, color 0.3s ease !important",
//   },
//   title: {
//     fontWeight: "600 !important",
//     fontSize: "1.3rem !important",
//     color: "#333 !important",
//     marginBottom: "8px !important",
//     minHeight: "48px !important",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   desc: {
//     fontSize: "1rem !important",
//     color: "#666 !important",
//     lineHeight: "1.5 !important",
//     minHeight: "42px !important",
//   },
// }));

// // ✅ Updated highlight items with brand colors
// const highlights = [
//   { icon: <StarIcon fontSize="inherit" />, title: "Top Rated", desc: "Trusted by thousands of job seekers", color: "#2626beff" },
//   { icon: <BoltIcon fontSize="inherit" />, title: "Lightning Fast", desc: "Build your resume in minutes", color: "#f9b600" },
//   { icon: <PsychologyIcon fontSize="inherit" />, title: "AI Recommendation", desc: "Smart suggestions powered by AI", color: "#2626beff" },
//   { icon: <LightbulbIcon fontSize="inherit" />, title: "Project Suggestion", desc: "Get relevant project ideas", color: "#f9b600" },
//   { icon: <DescriptionIcon fontSize="inherit" />, title: "Professional Layouts", desc: "Beautiful, modern templates", color: "#2626beff" },
//   { icon: <EmojiEventsIcon fontSize="inherit" />, title: "Recruiter Approved", desc: "Professionally vetted templates", color: "#f9b600" },
//   { icon: <SecurityIcon fontSize="inherit" />, title: "ATS-Friendly", desc: "Pass all applicant tracking systems", color: "#2626beff" },
//   { icon: <TrackChangesIcon fontSize="inherit" />, title: "Skills Suggestion", desc: "AI-powered skill recommendations", color: "#f9b600" },
// ];

// const KeyHighlights = () => {
//   const classes = useStyles();
//   const marqueeItems = [...highlights, ...highlights];

//   return (
//     <section className={classes.section}>
//       <Box className={classes.badge}>
//         <AutoAwesomeIcon fontSize="small" /> <span>Why Choose Us</span>
//       </Box>

//       <Typography className={classes.heading}>
//         Key Highlights of Giga Resume Builder
//       </Typography>

//       <Typography className={classes.subtext}>
//         Powerful features designed to help you create the perfect resume
//       </Typography>

//       <Box className={classes.marquee}>
//         <Box className={classes.marqueeTrack}>
//           {marqueeItems.map((item, index) => {
//             // ✅ Automatically set icon color based on background
//             const iconColor = item.color === "#FFD23F" ? "#2B2B6A" : "#fff";
//             return (
//               <Box className={classes.highlightCard} key={index}>
//                 <Box
//                   className={classes.iconBox}
//                   style={{
//                     background: item.color,
//                     color: iconColor,
//                   }}
//                 >
//                   {item.icon}
//                 </Box>
//                 <Typography className={classes.title}>{item.title}</Typography>
//                 <Typography className={classes.desc}>{item.desc}</Typography>
//               </Box>
//             );
//           })}
//         </Box>
//       </Box>
//     </section>
//   );
// };

// export default KeyHighlights;

import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    padding: "80px 20px !important",
    background: "linear-gradient(135deg, #f5f8ff, #f8f9fb)!important",
    textAlign: "center !important",
    
    "@media (max-width: 1024px)": {
      padding: "60px 20px !important",
    },
    
    "@media (max-width: 768px)": {
      padding: "50px 16px !important",
    },
    
    "@media (max-width: 480px)": {
      padding: "40px 12px !important",
    },
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
    
    "@media (max-width: 768px)": {
      fontSize: "18px !important",
      padding: "8px 16px !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "16px !important",
      padding: "6px 14px !important",
      marginBottom: "16px !important",
    },
  },
  heading: {
    fontSize: "2.5rem !important",
    fontWeight: "700 !important",
    marginBottom: "16px !important",
    color: "#1a202c !important",
    
    "@media (max-width: 1024px)": {
      fontSize: "2.25rem !important",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "2rem !important",
      marginBottom: "14px !important",
      padding: "0 1rem !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "1.75rem !important",
      marginBottom: "12px !important",
      padding: "0 0.5rem !important",
    },
  },
  subtext: {
    fontSize: "1.2rem !important",
    color: "#666 !important",
    maxWidth: "600px !important",
    margin: "0 auto 40px !important",
    lineHeight: "1.6 !important",
    
    "@media (max-width: 1024px)": {
      fontSize: "1.15rem !important",
      margin: "0 auto 35px !important",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "1.1rem !important",
      margin: "0 auto 30px !important",
      padding: "0 1rem !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "1rem !important",
      margin: "0 auto 25px !important",
      padding: "0 0.5rem !important",
    },
  },
  marquee: {
    width: "100% !important",
    marginTop: "60px !important",
    overflowX: "hidden !important",
    
    "@media (max-width: 768px)": {
      marginTop: "40px !important",
    },
    
    "@media (max-width: 480px)": {
      marginTop: "30px !important",
    },
  },
  marqueeTrack: {
    display: "flex !important",
    animation: "$marquee 25s linear infinite !important",
    
    "@media (max-width: 768px)": {
      animation: "$marquee 20s linear infinite !important",
    },
    
    "@media (max-width: 480px)": {
      animation: "$marquee 18s linear infinite !important",
    },
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
    
    "@media (max-width: 1024px)": {
      width: "210px !important",
      margin: "0 15px !important",
      padding: "24px 16px !important",
    },
    
    "@media (max-width: 768px)": {
      width: "190px !important",
      margin: "0 12px !important",
      padding: "20px 14px !important",
    },
    
    "@media (max-width: 480px)": {
      width: "170px !important",
      margin: "0 10px !important",
      padding: "18px 12px !important",
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
    
    "@media (max-width: 1024px)": {
      width: "60px !important",
      height: "60px !important",
      fontSize: "28px !important",
      marginBottom: "16px !important",
    },
    
    "@media (max-width: 768px)": {
      width: "56px !important",
      height: "56px !important",
      fontSize: "26px !important",
      marginBottom: "14px !important",
    },
    
    "@media (max-width: 480px)": {
      width: "52px !important",
      height: "52px !important",
      fontSize: "24px !important",
      marginBottom: "12px !important",
    },
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
    
    "@media (max-width: 1024px)": {
      fontSize: "1.2rem !important",
      minHeight: "44px !important",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "1.15rem !important",
      minHeight: "42px !important",
      marginBottom: "6px !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "1.1rem !important",
      minHeight: "40px !important",
      marginBottom: "4px !important",
    },
  },
  desc: {
    fontSize: "1rem !important",
    color: "#666 !important",
    lineHeight: "1.5 !important",
    minHeight: "42px !important",
    
    "@media (max-width: 1024px)": {
      fontSize: "0.95rem !important",
      minHeight: "40px !important",
      lineHeight: "1.4 !important",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "0.9rem !important",
      minHeight: "38px !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "0.85rem !important",
      minHeight: "36px !important",
      lineHeight: "1.4 !important",
    },
  },
  swiperContainer: {
    width: "100% !important",
    padding: "20px 10px 40px !important",
    marginTop: "40px !important",
    
    "& .swiper-slide": {
      display: "flex !important",
      justifyContent: "center !important",
      alignItems: "center !important",
    },
    
    "& .swiper-pagination-bullet": {
      background: "#6366f1 !important",
      opacity: "0.4 !important",
      width: "8px !important",
      height: "8px !important",
    },
    
    "& .swiper-pagination-bullet-active": {
      opacity: "1 !important",
      background: "#6366f1 !important",
    },
    
    "& .swiper-button-next, & .swiper-button-prev": {
      color: "#6366f1 !important",
      background: "rgba(255, 255, 255, 0.9) !important",
      borderRadius: "50% !important",
      width: "40px !important",
      height: "40px !important",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15) !important",
      
      "&::after": {
        fontSize: "18px !important",
        fontWeight: "bold !important",
      },
    },
  },
  swiperCard: {
    width: "280px !important",
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
    margin: "0 10px !important",
    
    "@media (max-width: 480px)": {
      width: "260px !important",
      padding: "24px 16px !important",
    },
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

      {/* Desktop Marquee - Hidden on mobile */}
      <Box className={classes.marquee} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box className={classes.marqueeTrack}>
          {marqueeItems.map((item, index) => {
            const iconColor = item.color === "#f9b600" ? "#1a202c" : "#fff";
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

      {/* Mobile Swiper - Hidden on desktop */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={!isMobile}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25
            }
          }}
          className={classes.swiperContainer}
        >
          {highlights.map((item, index) => {
            const iconColor = item.color === "#f9b600" ? "#1a202c" : "#fff";
            return (
              <SwiperSlide key={index}>
                <Box className={classes.swiperCard}>
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </section>
  );
};

export default KeyHighlights;