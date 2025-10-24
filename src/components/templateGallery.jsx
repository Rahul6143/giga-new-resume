// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Sparkles, Palette, Layout } from "lucide-react";
// import TemplateCard from "../components/TemplateCard";
// import TemplatePreview from "../components/TemplatePreview";
// import { Box, Typography, Paper } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   root: {
//     minHeight: "100vh !important",
//     background: "linear-gradient(135deg, #f3e8ff 0%, #fce7f3 50%, #ffedd5 100%) !important",
//     display: "flex !important",
//     flexDirection: "column !important"
//   },
//   heroSection: {
//     position: "relative !important",
//     overflow: "hidden !important",
//   },
//   heroGradient: {
//     position: "absolute !important",
//     top: "0 !important",
//     left: "0 !important",
//     right: "0 !important",
//     bottom: "0 !important",
//     background: "linear-gradient(90deg, rgba(124, 58, 237, 0.1) 0%, rgba(217, 70, 239, 0.1) 50%, rgba(234, 88, 12, 0.1) 100%) !important"
//   },
//   heroContainer: {
//     position: "relative !important",
//     maxWidth: "1200px !important",
//     margin: "0 auto !important",
//     padding: "64px 24px !important",
//     "@media (min-width: 768px)": {
//       padding: "96px 24px !important"
//     }
//   },
//   heroContent: {
//     display: "flex !important",
//     flexDirection: "column !important",
//     alignItems: "center !important",
//     textAlign: "center !important"
//   },
//   premiumBadge: {
//     display: "inline-flex !important",
//     alignItems: "center !important",
//     gap: "8px !important",
//     backgroundColor: "rgba(255, 255, 255, 0.8) !important",
//     backdropFilter: "blur(4px) !important",
//     padding: "8px 16px !important",
//     borderRadius: "9999px !important",
//     marginBottom: "24px !important",
//     boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05) !important"
//   },
//   premiumText: {
//     fontSize: "14px !important",
//     fontWeight: "500 !important",
//     color: "#374151 !important"
//   },
//   heroTitle: {
//     fontSize: "48px !important",
//     fontWeight: "700 !important",
//     marginBottom: "24px !important",
//     background: "linear-gradient(90deg, #7c3aed 0%, #d946ef 50%, #ea580c 100%) !important",
//     backgroundClip: "text !important",
//     WebkitBackgroundClip: "text !important",
//     WebkitTextFillColor: "transparent !important",
//     lineHeight: "1.25 !important",
//     "@media (min-width: 768px)": {
//       fontSize: "72px !important"
//     }
//   },
//   heroDescription: {
//     fontSize: "20px !important",
//     color: "#6b7280 !important",
//     maxWidth: "700px !important",
//     margin: "0 auto 32px !important",
//     lineHeight: "1.75 !important"
//   },
//   heroButtons: {
//     display: "flex !important",
//     gap: "16px !important",
//     flexWrap: "wrap !important",
//     justifyContent: "center !important"
//   },
//   chooseLayoutButton: {
//     display: "inline-flex !important",
//     alignItems: "center !important",
//     gap: "8px !important",
//     backgroundColor: "#7c3aed !important",
//     color: "#ffffff !important",
//     padding: "12px 24px !important",
//     borderRadius: "8px !important",
//     border: "none !important",
//     cursor: "pointer !important",
//     fontWeight: "600 !important",
//     fontSize: "16px !important",
//     transition: "all 0.3s ease !important",
//     boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3) !important",
//     "&:hover": {
//       backgroundColor: "#6d28d9 !important",
//       boxShadow: "0 6px 16px rgba(124, 58, 237, 0.4) !important",
//       transform: "translateY(-2px) !important"
//     }
//   },
//   templatesContainer: {
//     maxWidth: "1200px !important",
//     margin: "0 auto !important",
//     padding: "0 24px 96px 24px !important",
//     flex: "1 !important"
//   },
//   templatesGrid: {
//     display: "flex !important",
//     flexWrap: "wrap !important",
//     gap: "20px !important",
//     justifyContent: "space-around !important"
//   },
//   templateItem: {
//     flex: "1 1 calc(25% - 20px) !important",
//     minWidth: "220px !important",
//     maxWidth: "240px !important",
//     "@media (max-width: 1200px)": {
//       flex: "1 1 calc(33.333% - 20px) !important",
//       minWidth: "200px !important",
//       maxWidth: "220px !important"
//     },
//     "@media (max-width: 900px)": {
//       flex: "1 1 calc(50% - 20px) !important",
//       minWidth: "180px !important",
//       maxWidth: "200px !important"
//     },
//     "@media (max-width: 600px)": {
//       flex: "1 1 100% !important",
//       minWidth: "auto !important",
//       maxWidth: "280px !important"
//     }
//   },
//   fabContainer: {
//     position: "fixed !important",
//     bottom: "32px !important",
//     right: "32px !important",
//     zIndex: "1000 !important"
//   },
//   fabGradient: {
//     position: "absolute !important",
//     top: "0 !important",
//     left: "0 !important",
//     right: "0 !important",
//     bottom: "0 !important",
//     background: "linear-gradient(90deg, #7c3aed 0%, #d946ef 100%) !important",
//     borderRadius: "9999px !important",
//     filter: "blur(20px) !important",
//     opacity: "0.5 !important",
//     animation: "$pulse 2s infinite !important"
//   },
//   fabButton: {
//     position: "relative !important",
//     background: "linear-gradient(90deg, #7c3aed 0%, #d946ef 100%) !important",
//     color: "#ffffff !important",
//     padding: "16px 24px !important",
//     borderRadius: "9999px !important",
//     boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25) !important",
//     border: "none !important",
//     cursor: "pointer !important",
//     display: "flex !important",
//     alignItems: "center !important",
//     gap: "8px !important",
//     fontWeight: "600 !important",
//     fontSize: "16px !important",
//     transition: "all 0.3s ease !important",
//     "&:hover": {
//       boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.35) !important"
//     }
//   },
//   "@keyframes pulse": {
//     "0%, 100%": {
//       opacity: "0.5 !important"
//     },
//     "50%": {
//       opacity: "0.7 !important"
//     }
//   }
// });

// const templates = [
//   {
//     id: 1,
//     name: "Executive Elite",
//     description: "A sophisticated template perfect for senior professionals and executives. Features a bold header with subtle elegance, ideal for C-suite positions and leadership roles.",
//     colorPalette: ["#1E3A8A", "#3B82F6", "#93C5FD", "#DBEAFE"],
//     category: "Professional",
//     style: "Classic",
//     image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop"
//   },
//   {
//     id: 2,
//     name: "Creative Burst",
//     description: "Stand out with this vibrant, dynamic template designed for creative professionals. Perfect for designers, artists, and innovators who want to showcase their personality.",
//     colorPalette: ["#EA580C", "#FB923C", "#FDE047", "#FCA5A5"],
//     category: "Creative",
//     style: "Modern",
//     image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=500&fit=crop"
//   },
//   {
//     id: 3,
//     name: "Tech Minimalist",
//     description: "Clean, modern, and data-driven. This template is perfect for software engineers, data scientists, and tech professionals who value simplicity and clarity.",
//     colorPalette: ["#065F46", "#10B981", "#6EE7B7", "#D1FAE5"],
//     category: "Technology",
//     style: "Minimal",
//     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop"
//   },
//   {
//     id: 4,
//     name: "Bold Impact",
//     description: "Make a powerful first impression with this high-contrast template. Ideal for sales professionals, marketers, and anyone in client-facing roles.",
//     colorPalette: ["#BE123C", "#F43F5E", "#FB7185", "#FECDD3"],
//     category: "Sales & Marketing",
//     style: "Bold",
//     image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=500&fit=crop"
//   },
//   {
//     id: 5,
//     name: "Elegant Prose",
//     description: "Timeless sophistication meets modern design. Perfect for consultants, lawyers, and finance professionals who need to convey authority and trustworthiness.",
//     colorPalette: ["#1E293B", "#475569", "#94A3B8", "#E2E8F0"],
//     category: "Professional",
//     style: "Elegant",
//     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=500&fit=crop"
//   },
//   {
//     id: 6,
//     name: "Startup Spirit",
//     description: "Fresh, energetic, and innovative. This template captures the dynamic nature of startup culture, perfect for entrepreneurs and growth-stage professionals.",
//     colorPalette: ["#7C3AED", "#A78BFA", "#C4B5FD", "#EDE9FE"],
//     category: "Startup",
//     style: "Dynamic",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
//   },
//   {
//     id: 7,
//     name: "Academic Scholar",
//     description: "Traditional yet refined template designed for academics, researchers, and educators. Emphasizes publications, research, and educational achievements.",
//     colorPalette: ["#92400E", "#D97706", "#FCD34D", "#FEF3C7"],
//     category: "Academic",
//     style: "Traditional",
//     image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=500&fit=crop"
//   },
//   {
//     id: 8,
//     name: "Global Citizen",
//     description: "Multicultural and internationally-focused design. Perfect for professionals with international experience or those seeking global opportunities.",
//     colorPalette: ["#0E7490", "#06B6D4", "#67E8F9", "#CFFAFE"],
//     category: "International",
//     style: "Contemporary",
//     image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=500&fit=crop"
//   }
// ];

// export default function ResumeTemplates() {
//   const classes = useStyles();
//   const [selectedTemplate, setSelectedTemplate] = useState(null);
//   const [hoveredId, setHoveredId] = useState(null);

//   const handleChooseLayout = () => {
//     // Scroll to templates section when "Choose Layout" is clicked
//     const templatesSection = document.querySelector(`.${classes.templatesContainer}`);
//     if (templatesSection) {
//       templatesSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <Box className={classes.root}>
//       {/* Hero Section */}
//       <Box className={classes.heroSection}>
//         <Box className={classes.heroGradient} />
//         <Box className={classes.heroContainer}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={classes.heroContent}
//           >
//             <Paper className={classes.premiumBadge} elevation={1}>
//               <Sparkles style={{ width: "16px", height: "16px", color: "#7c3aed" }} />
//               <Typography className={classes.premiumText}>
//                 Premium Resume Collection
//               </Typography>
//             </Paper>
//             <Typography className={classes.heroTitle}>
//               Find Your Perfect
//               <br />
//               Resume Template
//             </Typography>
//             <Typography className={classes.heroDescription}>
//               Choose from our collection of stunning, professionally-designed templates.
//               Each one crafted to make you stand out and land your dream job.
//             </Typography>
            
//             {/* Choose Layout Button */}
//             <motion.div 
//               className={classes.heroButtons}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <button 
//                 className={classes.chooseLayoutButton}
//                 onClick={handleChooseLayout}
//               >
//                 <Layout style={{ width: "18px", height: "18px" }} />
//                 <span>Choose Layout</span>
//               </button>
//             </motion.div>
//           </motion.div>
//         </Box>
//       </Box>

//       {/* Templates Grid */}
//       <Box className={classes.templatesContainer}>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className={classes.templatesGrid}
//         >
//           {templates.map((template, index) => (
//             <div key={template.id} className={classes.templateItem}>
//               <TemplateCard
//                 template={template}
//                 index={index}
//                 onSelect={() => setSelectedTemplate(template)}
//                 isHovered={hoveredId === template.id}
//                 onHover={() => setHoveredId(template.id)}
//                 onLeave={() => setHoveredId(null)}
//               />
//             </div>
//           ))}
//         </motion.div>
//       </Box>

//       {/* Preview Modal */}
//       {selectedTemplate && (
//         <TemplatePreview
//           template={selectedTemplate}
//           onClose={() => setSelectedTemplate(null)}
//         />
//       )}

//       {/* Floating Action Button */}
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.5 }}
//         className={classes.fabContainer}
//       >
//         <Box className={classes.fabGradient} />
//         <button className={classes.fabButton}>
//           <Palette style={{ width: "20px", height: "20px" }} />
//           <span>Create Custom</span>
//         </button>
//       </motion.div>
//     </Box>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Palette, Layout } from "lucide-react";
import TemplateCard from "../components/TemplateCard";
import TemplatePreview from "../components/TemplatePreview";
import LayoutSelector from "../components/LayoutSelector";
import { Box, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh !important",
    background: "linear-gradient(135deg, #f3e8ff 0%, #fce7f3 50%, #ffedd5 100%) !important",
    display: "flex !important",
    flexDirection: "column !important",
    fontFamily: "'Inter', sans-serif !important"
  },
  heroSection: {
    position: "relative !important",
    overflow: "hidden !important",
  },
  heroGradient: {
    position: "absolute !important",
    top: "0 !important",
    left: "0 !important",
    right: "0 !important",
    bottom: "0 !important",
    background: "linear-gradient(90deg, rgba(124, 58, 237, 0.1) 0%, rgba(217, 70, 239, 0.1) 50%, rgba(234, 88, 12, 0.1) 100%) !important"
  },
  heroContainer: {
    position: "relative !important",
    maxWidth: "1200px !important",
    margin: "0 auto !important",
    padding: "64px 24px !important",
    "@media (min-width: 768px)": {
      padding: "96px 24px !important"
    }
  },
  heroContent: {
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    textAlign: "center !important"
  },
  premiumBadge: {
    display: "inline-flex !important",
    alignItems: "center !important",
    gap: "8px !important",
    backgroundColor: "rgba(255, 255, 255, 0.8) !important",
    backdropFilter: "blur(4px) !important",
    padding: "8px 16px !important",
    borderRadius: "9999px !important",
    marginBottom: "24px !important",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05) !important"
  },
  premiumText: {
    fontSize: "14px !important",
    fontWeight: "500 !important",
    color: "#374151 !important"
  },
  heroTitle: {
    fontSize: "48px !important",
    fontWeight: "700 !important",
    marginBottom: "24px !important",
    background: "linear-gradient(90deg, #7c3aed 0%, #d946ef 50%, #ea580c 100%) !important",
    backgroundClip: "text !important",
    WebkitBackgroundClip: "text !important",
    WebkitTextFillColor: "transparent !important",
    lineHeight: "1.25 !important",
    "@media (min-width: 768px)": {
      fontSize: "72px !important"
    }
  },
  heroDescription: {
    fontSize: "20px !important",
    color: "#6b7280 !important",
    maxWidth: "700px !important",
    margin: "0 auto 32px !important",
    lineHeight: "1.75 !important"
  },
  heroButtons: {
    display: "flex !important",
    gap: "16px !important",
    flexWrap: "wrap !important",
    justifyContent: "center !important"
  },
  chooseLayoutButton: {
    display: "inline-flex !important",
    alignItems: "center !important",
    gap: "8px !important",
    backgroundColor: "#7c3aed !important",
    color: "#ffffff !important",
    padding: "12px 24px !important",
    borderRadius: "8px !important",
    border: "none !important",
    cursor: "pointer !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    transition: "all 0.3s ease !important",
    boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3) !important",
    "&:hover": {
      backgroundColor: "#6d28d9 !important",
      boxShadow: "0 6px 16px rgba(124, 58, 237, 0.4) !important",
      transform: "translateY(-2px) !important"
    }
  },
  templatesContainer: {
    maxWidth: "1200px !important",
    margin: "0 auto !important",
    padding: "0 24px 96px 24px !important",
    flex: "1 !important"
  },
  templatesGrid: {
    display: "flex !important",
    flexWrap: "wrap !important",
    gap: "20px !important",
    justifyContent: "space-around !important"
  },
  templateItem: {
    flex: "1 1 calc(25% - 20px) !important",
    minWidth: "220px !important",
    maxWidth: "240px !important",
    "@media (max-width: 1200px)": {
      flex: "1 1 calc(33.333% - 20px) !important",
      minWidth: "200px !important",
      maxWidth: "220px !important"
    },
    "@media (max-width: 900px)": {
      flex: "1 1 calc(50% - 20px) !important",
      minWidth: "180px !important",
      maxWidth: "200px !important"
    },
    "@media (max-width: 600px)": {
      flex: "1 1 100% !important",
      minWidth: "auto !important",
      maxWidth: "280px !important"
    }
  },
  fabContainer: {
    position: "fixed !important",
    bottom: "32px !important",
    right: "32px !important",
    zIndex: "1000 !important"
  },
  fabGradient: {
    position: "absolute !important",
    top: "0 !important",
    left: "0 !important",
    right: "0 !important",
    bottom: "0 !important",
    background: "linear-gradient(90deg, #7c3aed 0%, #d946ef 100%) !important",
    borderRadius: "9999px !important",
    filter: "blur(20px) !important",
    opacity: "0.5 !important",
    animation: "$pulse 2s infinite !important"
  },
  fabButton: {
    position: "relative !important",
    background: "linear-gradient(90deg, #7c3aed 0%, #d946ef 100%) !important",
    color: "#ffffff !important",
    padding: "16px 24px !important",
    borderRadius: "9999px !important",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25) !important",
    border: "none !important",
    cursor: "pointer !important",
    display: "flex !important",
    alignItems: "center !important",
    gap: "8px !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.35) !important"
    }
  },
  "@keyframes pulse": {
    "0%, 100%": {
      opacity: "0.5 !important"
    },
    "50%": {
      opacity: "0.7 !important"
    }
  }
});

const templates = [
  {
    id: 1,
    name: "Executive Elite",
    description: "A sophisticated template perfect for senior professionals and executives. Features a bold header with subtle elegance, ideal for C-suite positions and leadership roles.",
    colorPalette: ["#1E3A8A", "#3B82F6", "#93C5FD", "#DBEAFE"],
    category: "Professional",
    style: "Classic",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop"
  },
  {
    id: 2,
    name: "Creative Burst",
    description: "Stand out with this vibrant, dynamic template designed for creative professionals. Perfect for designers, artists, and innovators who want to showcase their personality.",
    colorPalette: ["#EA580C", "#FB923C", "#FDE047", "#FCA5A5"],
    category: "Creative",
    style: "Modern",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=500&fit=crop"
  },
  {
    id: 3,
    name: "Tech Minimalist",
    description: "Clean, modern, and data-driven. This template is perfect for software engineers, data scientists, and tech professionals who value simplicity and clarity.",
    colorPalette: ["#065F46", "#10B981", "#6EE7B7", "#D1FAE5"],
    category: "Technology",
    style: "Minimal",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop"
  },
  {
    id: 4,
    name: "Bold Impact",
    description: "Make a powerful first impression with this high-contrast template. Ideal for sales professionals, marketers, and anyone in client-facing roles.",
    colorPalette: ["#BE123C", "#F43F5E", "#FB7185", "#FECDD3"],
    category: "Sales & Marketing",
    style: "Bold",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=500&fit=crop"
  },
  {
    id: 5,
    name: "Elegant Prose",
    description: "Timeless sophistication meets modern design. Perfect for consultants, lawyers, and finance professionals who need to convey authority and trustworthiness.",
    colorPalette: ["#1E293B", "#475569", "#94A3B8", "#E2E8F0"],
    category: "Professional",
    style: "Elegant",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=500&fit=crop"
  },
  {
    id: 6,
    name: "Startup Spirit",
    description: "Fresh, energetic, and innovative. This template captures the dynamic nature of startup culture, perfect for entrepreneurs and growth-stage professionals.",
    colorPalette: ["#7C3AED", "#A78BFA", "#C4B5FD", "#EDE9FE"],
    category: "Startup",
    style: "Dynamic",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
  },
  {
    id: 7,
    name: "Academic Scholar",
    description: "Traditional yet refined template designed for academics, researchers, and educators. Emphasizes publications, research, and educational achievements.",
    colorPalette: ["#92400E", "#D97706", "#FCD34D", "#FEF3C7"],
    category: "Academic",
    style: "Traditional",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=500&fit=crop"
  },
  {
    id: 8,
    name: "Global Citizen",
    description: "Multicultural and internationally-focused design. Perfect for professionals with international experience or those seeking global opportunities.",
    colorPalette: ["#0E7490", "#06B6D4", "#67E8F9", "#CFFAFE"],
    category: "International",
    style: "Contemporary",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=500&fit=crop"
  }
];

export default function ResumeTemplates() {
  const classes = useStyles();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [isLayoutSelectorOpen, setIsLayoutSelectorOpen] = useState(false);

  const handleChooseLayout = () => {
    setIsLayoutSelectorOpen(true);
  };

  const handleLayoutSelect = (layout) => {
    console.log("Selected layout:", layout);
    // Handle the selected layout here
    // You can navigate to a resume builder page or show a preview
  };

  const handleLayoutSelectorClose = () => {
    setIsLayoutSelectorOpen(false);
  };

  return (
    <Box className={classes.root}>
      {/* Hero Section */}
      <Box className={classes.heroSection}>
        <Box className={classes.heroGradient} />
        <Box className={classes.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={classes.heroContent}
          >
            <Paper className={classes.premiumBadge} elevation={1}>
              <Sparkles style={{ width: "16px", height: "16px", color: "#7c3aed" }} />
              <Typography className={classes.premiumText}>
                Premium Resume Collection
              </Typography>
            </Paper>
            <Typography className={classes.heroTitle}>
              Find Your Perfect
              <br />
              Resume Template
            </Typography>
            <Typography className={classes.heroDescription}>
              Choose from our collection of stunning, professionally-designed templates.
              Each one crafted to make you stand out and land your dream job.
            </Typography>
            
            {/* Choose Layout Button */}
            <motion.div 
              className={classes.heroButtons}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button 
                className={classes.chooseLayoutButton}
                onClick={handleChooseLayout}
              >
                <Layout style={{ width: "18px", height: "18px" }} />
                <span>Choose Layout</span>
              </button>
            </motion.div>
          </motion.div>
        </Box>
      </Box>

      {/* Templates Grid */}
      <Box className={classes.templatesContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={classes.templatesGrid}
        >
          {templates.map((template, index) => (
            <div key={template.id} className={classes.templateItem}>
              <TemplateCard
                template={template}
                index={index}
                onSelect={() => setSelectedTemplate(template)}
                isHovered={hoveredId === template.id}
                onHover={() => setHoveredId(template.id)}
                onLeave={() => setHoveredId(null)}
              />
            </div>
          ))}
        </motion.div>
      </Box>

      {/* Preview Modal */}
      {selectedTemplate && (
        <TemplatePreview
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}

      {/* Layout Selector Modal */}
      <LayoutSelector
        isOpen={isLayoutSelectorOpen}
        onClose={handleLayoutSelectorClose}
        onSelect={handleLayoutSelect}
      />

      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className={classes.fabContainer}
      >
        <Box className={classes.fabGradient} />
        <button className={classes.fabButton}>
          <Palette style={{ width: "20px", height: "20px" }} />
          <span>Create Custom</span>
        </button>
      </motion.div>
    </Box>
  );
}