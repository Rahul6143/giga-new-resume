// import React from "react";
// import { makeStyles } from "@mui/styles";
// import { motion } from "framer-motion";
// import { GraduationCap, Briefcase, TrendingUp, Sparkles } from "lucide-react";
// import { Box, Typography, Grid, Paper } from "@mui/material";

// const useStyles = makeStyles(() => ({
//   root: {
//     background: "linear-gradient(to bottom right, #0f172a, #1e1b4b, #1e3a8a) !important",
//     position: "relative !important",
//     overflow: "hidden !important",
//     padding: "2rem 1rem !important",
//   },
  
//   container: {
//     position: "relative",
//     maxWidth: '1200',
//     // margin: "0 auto",
//     zIndex: 1,
//   },
//   card: {
//   backgroundColor: "rgba(255, 255, 255, 0.03) !important",
//   border: "1px solid rgba(255, 255, 255, 0.1) !important",
//   backdropFilter: "blur(8px) !important",
//   borderRadius: "24px !important",
//   padding: "1.5rem !important",
//   paddingTop: "2rem !important",
//   overflow: "hidden !important",
//   height: "100% !important",              // ✅ Fill Grid item height
//   minHeight: "175px !important",  // ✅ Set consistent height
//   width: "320px !important",         
//   transition: "0.3s ease !important",
//   alignItems: "center !important",
//   display: "flex !important",             // ✅ To allow vertical layout
//   flexDirection: "column !important",     // ✅ Stack content vertically
//   justifyContent: "center !important", // ✅ Even spacing
// },
//   iconBox: {
//     width: 64,
//     height: 64,
//     borderRadius: 16,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: "1.5rem",
//     backdropFilter: "blur(4px)",
//     border: "1px solid rgba(255, 255, 255, 0.05)",
//     boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
//   },
//   gradientLine: {
//     marginTop: "1.5rem",
//     height: 4,
//     width: 0,
//     borderRadius: 9999,
//     transition: "width 0.5s",
//   },
//   hoverCard: {
//     "&:hover $gradientLine": {
//       width: 80,
//     },
//   },
//   ctaButtons: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "1rem",
//     marginTop: "3rem",
//     flexWrap: "wrap",
//   },
// }));

// const audiences = [
//   {
//     icon: GraduationCap,
//     title: "Students & Freshers",
//     description: "Entering the job market",
//     gradient: "linear-gradient(to bottom right, #3b82f6, #06b6d4)",
//     iconBg: "rgba(59, 130, 246, 0.1)",
//     iconColor: "#60a5fa",
//   },
//   {
//     icon: Briefcase,
//     title: "Working Professionals",
//     description: "Upgrading roles or switching careers",
//     gradient: "linear-gradient(to bottom right, #6366f1, #a855f7)",
//     iconBg: "rgba(99, 102, 241, 0.1)",
//     iconColor: "#818cf8",
//   },
//   {
//     icon: TrendingUp,
//     title: "Career Gap Individuals",
//     description: "Needing impactful resumes",
//     gradient: "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
//     iconBg: "rgba(139, 92, 246, 0.1)",
//     iconColor: "#c084fc",
//   },
//   {
//     icon: Sparkles,
//     title: "Tech Enthusiasts",
//     description: "Wanting to showcase Gen AI & project skills",
//     gradient: "linear-gradient(to bottom right, #d946ef, #f43f5e)",
//     iconBg: "rgba(232, 121, 249, 0.1)",
//     iconColor: "#f472b6",
//   },
// ];

// const WhoIsItFor = () => {
//   const classes = useStyles();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
//     },
//   };

//   return (
//     <Box className={classes.root}>
//       <Box className={classes.container}>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           style={{ textAlign: "center", marginBottom: "1.5rem" }}
//         >
//           <Typography
//             variant="h3"
//             style={{
//               fontWeight: "bold",
//               color: "#fff",
//               marginTop: "1rem",
//             }}
//           >
//             Who is it{" "}
//             <span style={{ background: "#f9b600", WebkitBackgroundClip: "text", color: "transparent" }}>
//               for?
//             </span>
//           </Typography>
//           <Typography variant="h6" style={{ color: "#9ca3af", maxWidth: 800, margin: "0 auto" }}>
//             Designed for ambitious individuals at every stage of their career journey
//           </Typography>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <Grid container spacing={4} justifyContent="center" alignItems="stretch">
//             {audiences.map((audience, index) => (
//               <Grid item xs={6} key={index}>
//                 <motion.div
//                   variants={itemVariants}
//                   whileHover={{ y: -8 }}
//                   className={classes.hoverCard}
//                 >
//                   <Paper
//                     elevation={6}
//                     className={classes.card}
//                   >
//                     <Box
//                       className={classes.iconBox}
//                       style={{ backgroundColor: audience.iconBg }}
//                     >
//                       <audience.icon
//                         size={32}
//                         color={audience.iconColor}
//                       />
//                     </Box>
//                     <Typography variant="h5" style={{ color: "#fff", fontWeight: "bold", marginBottom: "0.5rem" }}>
//                       {audience.title}
//                     </Typography>
//                     <Typography variant="body1" style={{ color: "#9ca3af" }}>
//                       {audience.description}
//                     </Typography>
//                     <div
//                       className={classes.gradientLine}
//                       style={{ background: audience.gradient }}
//                     />
//                   </Paper>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>
//       </Box>
//     </Box>
//   );
// };

// export default WhoIsItFor;


// import React from "react";
// import { motion } from "framer-motion";
// import {
//   GraduationCap,
//   Briefcase,
//   TrendingUp,
//   Sparkles,
// } from "lucide-react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";

// const WhoIsItFor = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
//   const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
//     },
//   };

//   // Pixel widths for different screen sizes
//   const getCardWidth = () => {
//     if (isMobile) return "320px";   // Mobile
//     if (isTablet) return "280px";   // Tablet
//     return "300px";                 // Desktop
//   };

//   const getCardHeight = () => {
//     if (isMobile) return "140px";   // Mobile
//     if (isTablet) return "160px";   // Tablet
//     return "180px";                 // Desktop
//   };

//   const getIconSize = () => {
//     if (isMobile) return 28;        // Mobile
//     if (isTablet) return 32;        // Tablet
//     return 36;                      // Desktop
//   };

//   const getIconBoxSize = () => {
//     if (isMobile) return "60px";    // Mobile
//     if (isTablet) return "70px";    // Tablet
//     return "80px";                  // Desktop
//   };

//   const getTitleFontSize = () => {
//     if (isMobile) return "1.1rem";  // Mobile
//     if (isTablet) return "1.2rem";  // Tablet
//     return "1.4rem";                // Desktop
//   };

//   const getBodyFontSize = () => {
//     if (isMobile) return "0.85rem"; // Mobile
//     if (isTablet) return "0.9rem";  // Tablet
//     return "1rem";                  // Desktop
//   };

//   return (
//     <Box
//       sx={{
//         background:
//           "linear-gradient(to bottom right, #0f172a, #1e1b4b, #1e3a8a)",
//         position: "relative",
//         overflow: "hidden",
//         py: { xs: 4, sm: 6, md: 8 },
//         px: { xs: 2, sm: 4 },
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Box sx={{ position: "relative", maxWidth: 1200, mx: "auto", zIndex: 1 }}>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           style={{ textAlign: "center", marginBottom: "3rem" }}
//         >
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: "bold",
//               color: "#fff",
//               mt: 2,
//               textAlign: "center",
//               fontSize: { xs: "2rem", md: "3rem" },
//             }}
//           >
//             Who is it{" "}
//             <Box
//               component="span"
//               sx={{
//                 background: "#f9b600",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               for?
//             </Box>
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{
//               color: "#9ca3af",
//               mx: "auto",
//               textAlign: "center",
//               fontSize: { xs: "1rem", sm: "1.1rem" },
//               maxWidth: 800,
//               px: { xs: 2, sm: 0 },
//               mt: 2,
//             }}
//           >
//             Designed for ambitious individuals at every stage of their career
//             journey
//           </Typography>
//         </motion.div>

//         {/* Cards */}
//         <motion.div variants={containerVariants} initial="hidden" animate="visible">
//           <Grid
//             container
//             spacing={3}
//             justifyContent="center"
//             alignItems="stretch"
//           >
//             {/* Card 1 - Students & Freshers */}
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={6}
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 padding: "12px !important",
//               }}
//             >
//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ y: isMobile ? 0 : -8 }}
//                 style={{
//                   width: getCardWidth(),
//                   height: getCardHeight(),
//                   display: "flex",
//                 }}
//               >
//                 <Paper
//                   elevation={isMobile ? 2 : 6}
//                   sx={{
//                     display: "flex",
//                     flexDirection: "row",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     backgroundColor: "rgba(255, 255, 255, 0.03)",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(8px)",
//                     borderRadius: "20px",
//                     px: 3,
//                     py: 3,
//                     textAlign: "left",
//                     transition: "transform 0.3s ease",
//                     width: "100%",
//                     height: "100%",
//                     "&:hover": {
//                       transform: isMobile ? "none" : "translateY(-6px)",
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: getIconBoxSize(),
//                       height: getIconBoxSize(),
//                       borderRadius: 2,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       mr: 2,
//                       backgroundColor: "rgba(59, 130, 246, 0.1)",
//                       border: "1px solid rgba(255,255,255,0.05)",
//                       boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
//                       flexShrink: 0,
//                     }}
//                   >
//                     <GraduationCap
//                       size={getIconSize()}
//                       color="#60a5fa"
//                     />
//                   </Box>

//                   <Box sx={{ 
//                     flexGrow: 1,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     height: "100%",
//                   }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         color: "#fff",
//                         fontWeight: "bold",
//                         mb: 1,
//                         fontSize: getTitleFontSize(),
//                       }}
//                     >
//                       Students & Freshers
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         color: "#9ca3af",
//                         fontSize: getBodyFontSize(),
//                       }}
//                     >
//                       Entering the job market
//                     </Typography>
//                   </Box>

//                   <Box
//                     sx={{
//                       height: "70px",
//                       width: "4px",
//                       borderRadius: 9999,
//                       background: "linear-gradient(to bottom right, #3b82f6, #06b6d4)",
//                       transition: "height 0.3s",
//                       "&:hover": { height: "90px" },
//                       flexShrink: 0,
//                       ml: 1,
//                     }}
//                   />
//                 </Paper>
//               </motion.div>
//             </Grid>

//             {/* Card 2 - Working Professionals */}
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={6}
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 padding: "12px !important",
//               }}
//             >
//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ y: isMobile ? 0 : -8 }}
//                 style={{
//                   width: getCardWidth(),
//                   height: getCardHeight(),
//                   display: "flex",
//                 }}
//               >
//                 <Paper
//                   elevation={isMobile ? 2 : 6}
//                   sx={{
//                     display: "flex",
//                     flexDirection: "row",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     backgroundColor: "rgba(255, 255, 255, 0.03)",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(8px)",
//                     borderRadius: "20px",
//                     px: 3,
//                     py: 3,
//                     textAlign: "left",
//                     transition: "transform 0.3s ease",
//                     width: "100%",
//                     height: "100%",
//                     "&:hover": {
//                       transform: isMobile ? "none" : "translateY(-6px)",
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: getIconBoxSize(),
//                       height: getIconBoxSize(),
//                       borderRadius: 2,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       mr: 2,
//                       backgroundColor: "rgba(99, 102, 241, 0.1)",
//                       border: "1px solid rgba(255,255,255,0.05)",
//                       boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
//                       flexShrink: 0,
//                     }}
//                   >
//                     <Briefcase
//                       size={getIconSize()}
//                       color="#818cf8"
//                     />
//                   </Box>

//                   <Box sx={{ 
//                     flexGrow: 1,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     height: "100%",
//                   }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         color: "#fff",
//                         fontWeight: "bold",
//                         mb: 1,
//                         fontSize: getTitleFontSize(),
//                       }}
//                     >
//                       Working Professionals
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         color: "#9ca3af",
//                         fontSize: getBodyFontSize(),
//                       }}
//                     >
//                       Upgrading roles or switching careers
//                     </Typography>
//                   </Box>

//                   <Box
//                     sx={{
//                       height: "70px",
//                       width: "4px",
//                       borderRadius: 9999,
//                       background: "linear-gradient(to bottom right, #6366f1, #a855f7)",
//                       transition: "height 0.3s",
//                       "&:hover": { height: "90px" },
//                       flexShrink: 0,
//                       ml: 1,
//                     }}
//                   />
//                 </Paper>
//               </motion.div>
//             </Grid>

//             {/* Card 3 - Career Gap Individuals */}
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={6}
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 padding: "12px !important",
//               }}
//             >
//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ y: isMobile ? 0 : -8 }}
//                 style={{
//                   width: getCardWidth(),
//                   height: getCardHeight(),
//                   display: "flex",
//                 }}
//               >
//                 <Paper
//                   elevation={isMobile ? 2 : 6}
//                   sx={{
//                     display: "flex",
//                     flexDirection: "row",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     backgroundColor: "rgba(255, 255, 255, 0.03)",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(8px)",
//                     borderRadius: "20px",
//                     px: 3,
//                     py: 3,
//                     textAlign: "left",
//                     transition: "transform 0.3s ease",
//                     width: "100%",
//                     height: "100%",
//                     "&:hover": {
//                       transform: isMobile ? "none" : "translateY(-6px)",
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: getIconBoxSize(),
//                       height: getIconBoxSize(),
//                       borderRadius: 2,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       mr: 2,
//                       backgroundColor: "rgla(139, 92, 246, 0.1)",
//                       border: "1px solid rgba(255,255,255,0.05)",
//                       boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
//                       flexShrink: 0,
//                     }}
//                   >
//                     <TrendingUp
//                       size={getIconSize()}
//                       color="#c084fc"
//                     />
//                   </Box>

//                   <Box sx={{ 
//                     flexGrow: 1,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     height: "100%",
//                   }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         color: "#fff",
//                         fontWeight: "bold",
//                         mb: 1,
//                         fontSize: getTitleFontSize(),
//                       }}
//                     >
//                       Career Gap Individuals
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         color: "#9ca3af",
//                         fontSize: getBodyFontSize(),
//                       }}
//                     >
//                       Needing impactful resumes
//                     </Typography>
//                   </Box>

//                   <Box
//                     sx={{
//                       height: "70px",
//                       width: "4px",
//                       borderRadius: 9999,
//                       background: "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
//                       transition: "height 0.3s",
//                       "&:hover": { height: "90px" },
//                       flexShrink: 0,
//                       ml: 1,
//                     }}
//                   />
//                 </Paper>
//               </motion.div>
//             </Grid>

//             {/* Card 4 - Tech Enthusiasts */}
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={6}
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 padding: "12px !important",
//               }}
//             >
//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ y: isMobile ? 0 : -8 }}
//                 style={{
//                   width: getCardWidth(),
//                   height: getCardHeight(),
//                   display: "flex",
//                 }}
//               >
//                 <Paper
//                   elevation={isMobile ? 2 : 6}
//                   sx={{
//                     display: "flex",
//                     flexDirection: "row",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     backgroundColor: "rgba(255, 255, 255, 0.03)",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(8px)",
//                     borderRadius: "20px",
//                     px: 3,
//                     py: 3,
//                     textAlign: "left",
//                     transition: "transform 0.3s ease",
//                     width: "100%",
//                     height: "100%",
//                     "&:hover": {
//                       transform: isMobile ? "none" : "translateY(-6px)",
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: getIconBoxSize(),
//                       height: getIconBoxSize(),
//                       borderRadius: 2,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       mr: 2,
//                       backgroundColor: "rgba(232, 121, 249, 0.1)",
//                       border: "1px solid rgba(255,255,255,0.05)",
//                       boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
//                       flexShrink: 0,
//                     }}
//                   >
//                     <Sparkles
//                       size={getIconSize()}
//                       color="#f472b6"
//                     />
//                   </Box>

//                   <Box sx={{ 
//                     flexGrow: 1,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     height: "100%",
//                   }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         color: "#fff",
//                         fontWeight: "bold",
//                         mb: 1,
//                         fontSize: getTitleFontSize(),
//                       }}
//                     >
//                       Tech Enthusiasts
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         color: "#9ca3af",
//                         fontSize: getBodyFontSize(),
//                       }}
//                     >
//                       Wanting to showcase Gen AI & project skills
//                     </Typography>
//                   </Box>

//                   <Box
//                     sx={{
//                       height: "70px",
//                       width: "4px",
//                       borderRadius: 9999,
//                       background: "linear-gradient(to bottom right, #d946ef, #f43f5e)",
//                       transition: "height 0.3s",
//                       "&:hover": { height: "90px" },
//                       flexShrink: 0,
//                       ml: 1,
//                     }}
//                   />
//                 </Paper>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </motion.div>
//       </Box>
//     </Box>
//   );
// };

// export default WhoIsItFor;

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const WhoIsItFor = () => {
  const theme = useTheme();
  const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const cardWidth = isTabletOrSmaller ? "300px" : "400px";
  const logoSize = isMobile ? "60px" : "80px";
  const iconSize = isMobile ? 28 : 36;
  const titleFontSize = isMobile ? "1.1rem" : "1.4rem";
  const subtitleFontSize = isMobile ? "0.9rem" : "1rem";
  const cardHeight = isMobile ? "160px" : "180px";
  const cardPaddingX = isMobile ? 2 : 3;
  const mainTitleFontSize = isMobile ? "2rem" : "3rem";
  const mainSubtitleFontSize = isMobile ? "0.95rem" : "1.1rem";

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom right, #0f172a, #1e1b4b, #1e3a8a)",
        position: "relative",
        overflow: "hidden",
        py: isMobile ? 6 : 8,
        px: 4,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "relative", maxWidth: 1200, mx: "auto", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: isMobile ? "2rem" : "3rem" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              mt: 2,
              textAlign: "center",
              fontSize: mainTitleFontSize,
            }}
          >
            Who is it{" "}
            <Box
              component="span"
              sx={{
                background: "#f9b600",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              for?
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#9ca3af",
              mx: "auto",
              textAlign: "center",
              fontSize: mainSubtitleFontSize,
              maxWidth: 800,
              px: 0,
              mt: 2,
            }}
          >
            Designed for ambitious individuals at every stage of their career
            journey
          </Typography>
        </motion.div>

        {/* Cards */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid
            container
            spacing={isMobile ? 0.5 : 3}
            justifyContent="center"
            alignItems="stretch"
          >
            {/* Card 1 - Students & Freshers */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: `${isMobile ? "8px" : "12px"} !important`,
              }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8 }}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  display: "flex",
                }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    px: cardPaddingX,
                    py: 3,
                    textAlign: "left",
                    transition: "transform 0.3s ease",
                    width: "100%",
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: logoSize,
                      height: logoSize,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap
                      size={iconSize}
                      color="#60a5fa"
                    />
                  </Box>

                  <Box sx={{ 
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        mb: 1,
                        fontSize: titleFontSize,
                      }}
                    >
                      Students & Freshers
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#9ca3af",
                        fontSize: subtitleFontSize,
                      }}
                    >
                      Entering the job market
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      height: "70px",
                      width: "4px",
                      borderRadius: 9999,
                      background: "linear-gradient(to bottom right, #3b82f6, #06b6d4)",
                      transition: "height 0.3s",
                      "&:hover": { height: "90px" },
                      flexShrink: 0,
                      ml: 1,
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>

            {/* Card 2 - Working Professionals */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: `${isMobile ? "8px" : "12px"} !important`,
              }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8 }}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  display: "flex",
                }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    px: cardPaddingX,
                    py: 3,
                    textAlign: "left",
                    transition: "transform 0.3s ease",
                    width: "100%",
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: logoSize,
                      height: logoSize,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <Briefcase
                      size={iconSize}
                      color="#818cf8"
                    />
                  </Box>

                  <Box sx={{ 
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        mb: 1,
                        fontSize: titleFontSize,
                      }}
                    >
                      Working Professionals
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#9ca3af",
                        fontSize: subtitleFontSize,
                      }}
                    >
                      Upgrading roles or switching careers
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      height: "70px",
                      width: "4px",
                      borderRadius: 9999,
                      background: "linear-gradient(to bottom right, #6366f1, #a855f7)",
                      transition: "height 0.3s",
                      "&:hover": { height: "90px" },
                      flexShrink: 0,
                      ml: 1,
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>

            {/* Card 3 - Career Gap Individuals */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: `${isMobile ? "8px" : "12px"} !important`,
              }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8 }}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  display: "flex",
                }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    px: cardPaddingX,
                    py: 3,
                    textAlign: "left",
                    transition: "transform 0.3s ease",
                    width: "100%",
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: logoSize,
                      height: logoSize,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      backgroundColor: "rgla(139, 92, 246, 0.1)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <TrendingUp
                      size={iconSize}
                      color="#c084fc"
                    />
                  </Box>

                  <Box sx={{ 
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        mb: 1,
                        fontSize: titleFontSize,
                      }}
                    >
                      Career Gap Individuals
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#9ca3af",
                        fontSize: subtitleFontSize,
                      }}
                    >
                      Needing impactful resumes
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      height: "70px",
                      width: "4px",
                      borderRadius: 9999,
                      background: "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
                      transition: "height 0.3s",
                      "&:hover": { height: "90px" },
                      flexShrink: 0,
                      ml: 1,
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>

            {/* Card 4 - Tech Enthusiasts */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: `${isMobile ? "8px" : "12px"} !important`,
              }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8 }}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  display: "flex",
                }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    px: cardPaddingX,
                    py: 3,
                    textAlign: "left",
                    transition: "transform 0.3s ease",
                    width: "100%",
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: logoSize,
                      height: logoSize,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      backgroundColor: "rgba(232, 121, 249, 0.1)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <Sparkles
                      size={iconSize}
                      color="#f472b6"
                    />
                  </Box>

                  <Box sx={{ 
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        mb: 1,
                        fontSize: titleFontSize,
                      }}
                    >
                      Tech Enthusiasts
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#9ca3af",
                        fontSize: subtitleFontSize,
                      }}
                    >
                      Wanting to showcase Gen AI & project skills
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      height: "70px",
                      width: "4px",
                      borderRadius: 9999,
                      background: "linear-gradient(to bottom right, #d946ef, #f43f5e)",
                      transition: "height 0.3s",
                      "&:hover": { height: "90px" },
                      flexShrink: 0,
                      ml: 1,
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default WhoIsItFor;