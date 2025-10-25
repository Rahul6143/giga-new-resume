// import React from "react";
// import { motion } from "framer-motion";
// import { Sparkles, Layers, FileText } from "lucide-react";
// import { Typography, Box } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   root: {
//     backgroundColor: "#0f172a !important", // slate-950
//     overflow: "hidden !important",
//   },
//   sectionWrapper: {
//     minHeight: "100vh",
//     padding: "6rem 0 !important",
//   },
//   sectionHeader: {
//     textAlign: "center !important",
//     marginBottom: "5rem !important",
//   },
//   sectionTitle: {
//     fontSize: "3rem !important",
//     fontWeight: '800 !important',
//     color: "#ffffff !important",
//     marginBottom: "1rem !important",
//   },
//   gradientText: {

//     // background: "linear-gradient(90deg, #fb7185, #fb923c, #fbbf24) !important",
//     // background: 'linear-gradient(90deg, #004080 0%, #001f3f 100%) !important',
//     // background: "linear-gradient(90deg, #004080 0%, #fbbf24 100%) !important",
//     backgroundColor: "#f9b600",
//     WebkitBackgroundClip: "text !important",
//     WebkitTextFillColor: "transparent !important",
//   },
//   sectionSubtitle: {
//     color: "#94a3b8 !important",
//     fontSize: "1.2rem !important",
//   },
//   diagonalContainer: {
//     maxWidth: "1200px !important",
//     margin: "0 auto !important",
//     padding: "8rem 1.5rem !important",
//     display: "flex !important",
//     alignItems: "center !important",
//     gap: "4rem !important",
//   },
//   featureCard: {
//     position: "relative !important",
//     width: "12rem !important",
//     height: "12rem !important",
//     borderRadius: "24px !important",
//     background: "rgba(255,255,255,0.1) !important",
//     backdropFilter: "blur(12px) !important",
//     border: "1px solid rgba(255,255,255,0.2) !important",
//     display: "flex !important",
//     alignItems: "center !important",
//     justifyContent: "center !important",
//     boxShadow: "0 0 40px rgba(0,0,0,0.4) !important",
//     zIndex: '2 !important',
//   },
//   featureTitle: {
//     fontSize: "3rem !important",
//     fontWeight: '900 !important',
//     color: "#ffffff !important",
//     marginBottom: "0.5rem !important",
//   },
//   featureSubtitle: {
//     fontSize: "1.5rem !important",
//     fontWeight: '700 !important',
//     marginBottom: "1.5rem !important",
//     WebkitBackgroundClip: "text !important",
//     WebkitTextFillColor: "transparent !important",
//   },
//   featureDescription: {
//     color: "#e2e8f0 !important",
//     fontSize: "1.2rem !important",
//     lineHeight: '1.7 !important',
//     maxWidth: "50rem !important",
//   },
// }));

// export default function ExclusiveFeatures() {
//   const classes = useStyles();

//   const features = [
//     {
//       icon: Sparkles,
//       title: "Gen AI Skill Suggestions",
//       subtitle: "With Real-World Use Cases",
//       description:
//         "Our resume builder analyzes your job role and recommends relevant Gen AI tools like ChatGPT, Midjourney, Figma AI, Bard, and more. It automatically generates how these tools are used—like automating workflows, enhancing design, or improving productivity—so you can show real-world impact.",
//       bgColor: "linear-gradient(135deg, #0f172a, #1e3a8a)", // slate-900 → blue-950
//       accentColor: "#f9b600",
//       // accentColor: "linear-gradient(135deg, #fb7185, #fb923c)", // rose → orange
//       // accentColor: "#ffffff !important",
//     },
//     {
//       icon: Layers,
//       title: "Build Projects Directly",
//       subtitle: "From Our Resume Builder",
//       description:
//         "Our platform recommends job-specific projects aligned with your target role—like full stack, data science, UI/UX, or product management. You get GitHub repos with full instructions, allowing you to build and showcase relevant projects that strengthen your credibility.",
//       bgColor: "linear-gradient(135deg, #1e3a8a, #4c1d95)", // blue-950 → purple-950
//       accentColor: "#f9b600",
//       // accentColor: "linear-gradient(135deg, #fbbf24, #fb7185)", // amber → rose
//     },
//     {
//       icon: FileText,
//       title: "Smart Resume Content",
//       subtitle: "That Writes Itself",
//       description:
//         "Create a standout resume with AI-powered suggestions tailored to your role. Get pre-written summaries, impactful bullet points, and ATS-optimized keywords—perfect for highlighting your strengths and improving visibility.",
//       bgColor: "linear-gradient(135deg, #4c1d95, #0f172a)", // purple-950 → slate-900
//       accentColor: "#f9b600",
//       // accentColor: "linear-gradient(135deg, #ec4899, #fb7185)", // pink → rose
//     },
//   ];

//   return (
//     <Box className={classes.root}>
//       <Box className={classes.sectionWrapper}>
//         <Box className={classes.sectionHeader}>
//           <Typography className={classes.sectionTitle}>
//             Exclusive Features of <span className={classes.gradientText}>Giga Resume Builder</span>
//           </Typography>
//         </Box>

//         {features.map((feature, index) => {
//           const Icon = feature.icon;
//           const isReversed = index % 2 === 1;

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-150px" }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               style={{
//                 background: feature.bgColor,
//                 clipPath:
//                   index % 2 === 0
//                     ? "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
//                     : "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
//                 marginTop: index === 0 ? 0 : "-80px",
//               }}
//             >
//               <Box
//                 className={classes.diagonalContainer}
//                 sx={{
//                   flexDirection: { xs: "column", md: isReversed ? "row-reverse" : "row" },
//                 }}
//               >
//                 <motion.div whileHover={{ scale: 1.05, rotate: 5 }}>
//                   <Box
//                     className={classes.featureCard}
//                     sx={{
//                       "& svg": { width: "80px", height: "80px", color: "#ffffff" },
//                     }}
//                   >
//                     <Icon strokeWidth={1.5} />
//                   </Box>
//                 </motion.div>

//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     x: isReversed ? 50 : -50,
//                   }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                 >
//                   <Typography className={classes.featureTitle}>
//                     {feature.title}
//                   </Typography>
//                   <Typography
//                     className={classes.featureSubtitle}
//                     sx={{
//                       background: feature.accentColor,
//                     }}
//                   >
//                     {feature.subtitle}
//                   </Typography>
//                   <Typography className={classes.featureDescription}>
//                     {feature.description}
//                   </Typography>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           );
//         })}
//       </Box>
//     </Box>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, FileText } from "lucide-react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#0f172a !important",
    overflow: "hidden !important",
  },
  sectionWrapper: {
    // minHeight: "100vh",
    padding: "6rem 0 !important",
    
    "@media (max-width: 768px)": {
      padding: "4rem 0 !important",
      minHeight: "auto !important",
    },
    
    "@media (max-width: 480px)": {
      padding: "3rem 0 !important",
    },
  },
  sectionHeader: {
    textAlign: "center !important",
    marginBottom: "5rem !important",
    padding: "0 1rem !important",
    
    "@media (max-width: 768px)": {
      marginBottom: "3rem !important",
    },
    
    "@media (max-width: 480px)": {
      marginBottom: "2rem !important",
    },
  },
  sectionTitle: {
    fontSize: "3rem !important",
    fontWeight: '800 !important',
    color: "#ffffff !important",
    marginBottom: "1rem !important",
    lineHeight: "1.2 !important",
    
    "@media (max-width: 1024px)": {
      fontSize: "2.75rem !important",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "2.5rem !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "2rem !important",
    },
  },
  gradientText: {
    backgroundColor: "#f9b600",
    WebkitBackgroundClip: "text !important",
    WebkitTextFillColor: "transparent !important",
    display: "inline-block",
  },
  sectionSubtitle: {
    color: "#94a3b8 !important",
    fontSize: "1.2rem !important",
    
    "@media (max-width: 768px)": {
      fontSize: "1.1rem !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "1rem !important",
    },
  },
  diagonalContainer: {
    maxWidth: "1200px !important",
    margin: "0 auto !important",
    padding: "8rem 1.5rem !important",
    display: "flex !important",
    alignItems: "center !important",
    gap: "4rem !important",
    
    "@media (max-width: 1024px)": {
      padding: "6rem 1.5rem !important",
      gap: "3rem !important",
    },
    
    "@media (max-width: 768px)": {
      padding: "4rem 1rem !important",
      gap: "2.5rem !important",
      flexDirection: "column !important",
      textAlign: "center !important",
    },
    
    "@media (max-width: 480px)": {
      padding: "3rem 0.75rem !important",
      gap: "2rem !important",
    },
  },
  featureCard: {
    position: "relative !important",
    width: "12rem !important",
    height: "12rem !important",
    borderRadius: "24px !important",
    background: "rgba(255,255,255,0.1) !important",
    backdropFilter: "blur(12px) !important",
    border: "1px solid rgba(255,255,255,0.2) !important",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    boxShadow: "0 0 40px rgba(0,0,0,0.4) !important",
    zIndex: '2 !important',
    flexShrink: 0,
    
    "@media (max-width: 1024px)": {
      width: "11rem !important",
      height: "11rem !important",
    },
    
    "@media (max-width: 768px)": {
      width: "10rem !important",
      height: "10rem !important",
    },
    
    "@media (max-width: 480px)": {
      width: "9rem !important",
      height: "9rem !important",
    },
    
    "& svg": {
      width: "80px !important",
      height: "80px !important",
      color: "#ffffff !important",
      
      "@media (max-width: 1024px)": {
        width: "70px !important",
        height: "70px !important",
      },
      
      "@media (max-width: 768px)": {
        width: "60px !important",
        height: "60px !important",
      },
      
      "@media (max-width: 480px)": {
        width: "55px !important",
        height: "55px !important",
      },
    },
  },
  featureTitle: {
    fontSize: "3rem !important",
    fontWeight: '900 !important',
    color: "#ffffff !important",
    marginBottom: "0.5rem !important",
    lineHeight: "1.1 !important",
    
    "@media (max-width: 1024px)": {
      fontSize: "2.75rem !important",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "2.5rem !important",
      marginBottom: "0.4rem !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "2.25rem !important",
      marginBottom: "0.3rem !important",
    },
  },
  featureSubtitle: {
    fontSize: "1.5rem !important",
    fontWeight: '700 !important',
    marginBottom: "1.5rem !important",
    WebkitBackgroundClip: "text !important",
    WebkitTextFillColor: "transparent !important",
    lineHeight: "1.3 !important",
    
    "@media (max-width: 1024px)": {
      fontSize: "1.4rem !important",
      marginBottom: "1.25rem !important",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "1.3rem !important",
      marginBottom: "1rem !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "1.2rem !important",
      marginBottom: "0.75rem !important",
    },
  },
  featureDescription: {
    color: "#e2e8f0 !important",
    fontSize: "1.2rem !important",
    lineHeight: '1.7 !important',
    maxWidth: "50rem !important",
    
    "@media (max-width: 1024px)": {
      fontSize: "1.15rem !important",
      lineHeight: "1.6 !important",
    },
    
    "@media (max-width: 768px)": {
      fontSize: "1.1rem !important",
      lineHeight: "1.6 !important",
      maxWidth: "100% !important",
    },
    
    "@media (max-width: 480px)": {
      fontSize: "1rem !important",
      lineHeight: "1.5 !important",
    },
  },
  motionContainer: {
    "@media (max-width: 768px)": {
      clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%) !important",
      marginTop: "-60px !important",
    },
    
    "@media (max-width: 480px)": {
      clipPath: "polygon(0 2%, 100% 0, 100% 98%, 0 100%) !important",
      marginTop: "-40px !important",
    },
  },
}));

export default function ExclusiveFeatures() {
  const classes = useStyles();

  const features = [
    {
      icon: Sparkles,
      title: "Gen AI Skill Suggestions",
      subtitle: "With Real-World Use Cases",
      description:
        "Our resume builder analyzes your job role and recommends relevant Gen AI tools like ChatGPT, Midjourney, Figma AI, Bard, and more. It automatically generates how these tools are used—like automating workflows, enhancing design, or improving productivity—so you can show real-world impact.",
      bgColor: "linear-gradient(135deg, #0f172a, #1e3a8a)",
      accentColor: "#f9b600",
    },
    {
      icon: Layers,
      title: "Build Projects Directly",
      subtitle: "From Our Resume Builder",
      description:
        "Our platform recommends job-specific projects aligned with your target role—like full stack, data science, UI/UX, or product management. You get GitHub repos with full instructions, allowing you to build and showcase relevant projects that strengthen your credibility.",
      bgColor: "linear-gradient(135deg, #1e3a8a, #4c1d95)",
      accentColor: "#f9b600",
    },
    {
      icon: FileText,
      title: "Smart Resume Content",
      subtitle: "That Writes Itself",
      description:
        "Create a standout resume with AI-powered suggestions tailored to your role. Get pre-written summaries, impactful bullet points, and ATS-optimized keywords—perfect for highlighting your strengths and improving visibility.",
      bgColor: "linear-gradient(135deg, #4c1d95, #0f172a)",
      accentColor: "#f9b600",
    },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.sectionWrapper}>
        <Box className={classes.sectionHeader}>
          <Typography className={classes.sectionTitle}>
            Exclusive Features of{" "}
            <span className={classes.gradientText}>Giga Resume Builder</span>
          </Typography>
        </Box>

        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isReversed = index % 2 === 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{
                background: feature.bgColor,
                clipPath:
                  index % 2 === 0
                    ? "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                    : "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
                marginTop: index === 0 ? 0 : "-80px",
              }}
              className={classes.motionContainer}
            >
              <Box
                className={classes.diagonalContainer}
                sx={{
                  flexDirection: { xs: "column", md: isReversed ? "row-reverse" : "row" },
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box className={classes.featureCard}>
                    <Icon strokeWidth={1.5} />
                  </Box>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: isReversed ? 50 : -50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography className={classes.featureTitle}>
                    {feature.title}
                  </Typography>
                  <Typography
                    className={classes.featureSubtitle}
                    sx={{
                      background: feature.accentColor,
                    }}
                  >
                    {feature.subtitle}
                  </Typography>
                  <Typography className={classes.featureDescription}>
                    {feature.description}
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
}