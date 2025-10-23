import React from "react";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, TrendingUp, Sparkles } from "lucide-react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    background: "linear-gradient(to bottom right, #0f172a, #1e1b4b, #1e3a8a) !important",
    position: "relative !important",
    overflow: "hidden !important",
    padding: "2rem 1rem !important",
  },
  
  container: {
    position: "relative",
    maxWidth: '1200',
    // margin: "0 auto",
    zIndex: 1,
  },
  card: {
  backgroundColor: "rgba(255, 255, 255, 0.03) !important",
  border: "1px solid rgba(255, 255, 255, 0.1) !important",
  backdropFilter: "blur(8px) !important",
  borderRadius: "24px !important",
  padding: "1.5rem !important",
  paddingTop: "2rem !important",
  overflow: "hidden !important",
  height: "100% !important",              // ✅ Fill Grid item height
  minHeight: "175px !important",  // ✅ Set consistent height
  width: "320px !important",         
  transition: "0.3s ease !important",
  alignItems: "center !important",
  display: "flex !important",             // ✅ To allow vertical layout
  flexDirection: "column !important",     // ✅ Stack content vertically
  justifyContent: "center !important", // ✅ Even spacing
},
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
  },
  gradientLine: {
    marginTop: "1.5rem",
    height: 4,
    width: 0,
    borderRadius: 9999,
    transition: "width 0.5s",
  },
  hoverCard: {
    "&:hover $gradientLine": {
      width: 80,
    },
  },
  ctaButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "3rem",
    flexWrap: "wrap",
  },
}));

const audiences = [
  {
    icon: GraduationCap,
    title: "Students & Freshers",
    description: "Entering the job market",
    gradient: "linear-gradient(to bottom right, #3b82f6, #06b6d4)",
    iconBg: "rgba(59, 130, 246, 0.1)",
    iconColor: "#60a5fa",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description: "Upgrading roles or switching careers",
    gradient: "linear-gradient(to bottom right, #6366f1, #a855f7)",
    iconBg: "rgba(99, 102, 241, 0.1)",
    iconColor: "#818cf8",
  },
  {
    icon: TrendingUp,
    title: "Career Gap Individuals",
    description: "Needing impactful resumes",
    gradient: "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
    iconBg: "rgba(139, 92, 246, 0.1)",
    iconColor: "#c084fc",
  },
  {
    icon: Sparkles,
    title: "Tech Enthusiasts",
    description: "Wanting to showcase Gen AI & project skills",
    gradient: "linear-gradient(to bottom right, #d946ef, #f43f5e)",
    iconBg: "rgba(232, 121, 249, 0.1)",
    iconColor: "#f472b6",
  },
];

const WhoIsItFor = () => {
  const classes = useStyles();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              color: "#fff",
              marginTop: "1rem",
            }}
          >
            Who is it{" "}
            <span style={{ background: "#f9b600", WebkitBackgroundClip: "text", color: "transparent" }}>
              for?
            </span>
          </Typography>
          <Typography variant="h6" style={{ color: "#9ca3af", maxWidth: 800, margin: "0 auto" }}>
            Designed for ambitious individuals at every stage of their career journey
          </Typography>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {audiences.map((audience, index) => (
              <Grid item xs={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className={classes.hoverCard}
                >
                  <Paper
                    elevation={6}
                    className={classes.card}
                  >
                    <Box
                      className={classes.iconBox}
                      style={{ backgroundColor: audience.iconBg }}
                    >
                      <audience.icon
                        size={32}
                        color={audience.iconColor}
                      />
                    </Box>
                    <Typography variant="h5" style={{ color: "#fff", fontWeight: "bold", marginBottom: "0.5rem" }}>
                      {audience.title}
                    </Typography>
                    <Typography variant="body1" style={{ color: "#9ca3af" }}>
                      {audience.description}
                    </Typography>
                    <div
                      className={classes.gradientLine}
                      style={{ background: audience.gradient }}
                    />
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default WhoIsItFor;
