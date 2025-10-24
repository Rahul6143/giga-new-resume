// import React from "react";
// import { makeStyles } from "@mui/styles";
// import { Button, Badge, Typography } from "@mui/material";
// import { ArrowRight } from "lucide-react";


// const useStyles = makeStyles({
//   card: {
//     position: "relative !important",
//     height: "600px !important",
//     width: "300px !important",
//     borderRadius: "12px !important",
//     backgroundColor: "#ffffffff !important",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.06) !important",
//     transition: "all 0.3s !important",
//     cursor: "pointer !important",
//     "&:hover": {
//       boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
//       transform: "translateY(-4px)",
//     },
//     display: "flex !important",
//     flexDirection: "column !important",
//   },
//   imageWrapper: {
//     position: "relative !important",
//     width: "100% !important",
    
//     paddingTop: "133.33% !important", // 3/4 aspect ratio
//     "& img": {
//       position: "absolute !important",
//       backgroundColor: "#88a7e6ff !important",
//       top: '0 !important',
//       left: '0 !important',
//       width: "100% !important",
//       height: "100% !important",
//       // objectFit: "none !important",
//       transition: "transform 0.5s !important",
//     },
//     "&:hover img": {
//       transform: "scale(1.05)",
//     },
//   },
//   popularBadge: {
//     position: "absolute !important",
//     fontFamily: "'Roboto', sans-serif !important",
//     top: "12px !important",
//     right: "12px !important",
//     background: "linear-gradient(135deg, #2563eb, #7c3aed) !important",
//     color: "#ffffff !important",
//     border: "none !important",
//     fontWeight: ' 500 !important',
//     padding: "2px 8px !important",
//     borderRadius: "12px !important",
//     fontSize: "0.75rem !important",
//   },
//   content: {
//     padding: "20px !important",
//     display: "flex !important",
//     flexDirection: "column !important",
//     gap: "12px !important",
//     flex: '1 !important',
//   },
//   categoryBadge: {
//     fontFamily: "'Roboto', sans-serif !important",
//     fontSize: "0.75rem !important",
//     fontWeight: '500 !important',
//     backgroundColor: "#e5e7eb !important", // gray-200
//     color: "#374151 !important", // gray-700
//     padding: "2px 8px !important",
//     borderRadius: "8px !important",
//   },
//   title: {
//     fontWeight: '600 !important',
//     fontSize: "1.125rem !important",
//     color: "#111827 !important", // gray-900
//     marginBottom: "4px !important",
//   },
//   description: {
//     fontSize: "0.875rem !important",
//     color: "#6b7280 !important", // gray-500
//     display: "-webkit-box !important",
//     WebkitLineClamp: '2 !important',
//     WebkitBoxOrient: "vertical !important",
//     overflow: "hidden !important",
//   },
//   useButton: {
//     width: "100% !important",
//     background: "linear-gradient(135deg, #2563eb, #7c3aed) !important",
//     color: "#ffffff !important",
//     fontWeight: '500 !important',
//     textTransform: "none !important",
//     "&:hover": {
//       opacity: '0.9 !important',
//       background: "linear-gradient(135deg, #2563eb, #7c3aed) !important",
//     },
//     display: "flex !important",
//     alignItems: "center !important",
//     justifyContent: "center !important",
//     gap: "8px !important",
//     transition: "opacity 0.2s, transform 0.2s !important",
//   },
// });

// export const TemplateCard = ({
//   title,
//   category,
//   description,
//   image,
//   isPopular,
//   onUseTemplate,
// }) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.card}>
//       <div className={classes.imageWrapper}>
//         <img src={image} alt={`${title} resume template`} />
//         {isPopular && <div className={classes.popularBadge}>Popular</div>}
//       </div>

//       <div className={classes.content}>
//         <div>
//           <Badge className={classes.categoryBadge}>{category}</Badge>
//         </div>

//         <div>
//           <Typography className={classes.title}>{title}</Typography>
//           <Typography className={classes.description}>{description}</Typography>
//         </div>

//         <Button className={classes.useButton} onClick={onUseTemplate}>
//           Use Template <ArrowRight size={16} />
//         </Button>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { motion } from "framer-motion";
import { Eye, Download, Star, Sparkles } from "lucide-react";
import { Badge, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardContainer: {
    cursor: "pointer"
  },
  card: {
    position: "relative !important",
    backgroundColor: "#ffffff !important",
    borderRadius: "16px !important",
    overflow: "hidden !important",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important",
    transition: "all 0.5s ease !important",
    transform: "translateY(0)!important",
    "&:hover": {
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25) !important",
      transform: "translateY(-8px) !important"
    }
  },
  imageContainer: {
    position: "relative !important",
    aspectRatio: "4/5 !important",
    overflow: "hidden !important",
    background: "linear-gradient(135deg, #f3f4f6 0%, #f9fafb 100%) !important"
  },
  image: {
    width: "100% !important",
    height: "100% !important",
    objectFit: "cover !important",
    transition: "transform 0.7s ease !important",
    "&:hover": {
      transform: "scale(1.1) !important"
    }
  },
  imageOverlay: {
    position: "absolute !important",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%) !important",
    opacity: 0,
    transition: "opacity 0.5s ease !important",
    "&:hover": {
      opacity: 1
    }
  },
  hoverActions: {
    position: "absolute !important",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    gap: "12px !important"
  },
  previewButton: {
    backgroundColor: "rgba(255, 255, 255, 0.9) !important",
    backdropFilter: "blur(4px) !important",
    color: "#111827 !important",
    "&:hover": {
      backgroundColor: "#ffffff !important"
    },
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1) !important",
    display: "flex !important",
    alignItems: "center !important",
    gap: "8px !important",
    padding: "8px 16px !important",
    borderRadius: "6px !important",
    border: "none !important",
    cursor: "pointer !important",
    fontSize: "14px !important",
    fontWeight: "500 !important"
  },
  favoriteBadge: {
    position: "absolute !important",
    top: "12px !important",
    right: "12px !important",
    backgroundColor: "rgba(255, 255, 255, 0.9) !important",
    backdropFilter: "blur(4px) !important",
    borderRadius: "50% !important",
    padding: "8px !important",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1) !important"
  },
  templateInfo: {
    padding: "20px !important"
  },
  headerContainer: {
    display: "flex !important",
    alignItems: "flex-start !important",
    justifyContent: "space-between !important",
    marginBottom: "12px !important"
  },
  templateName: {
    fontWeight: "700 !important",
    fontSize: "18px !important",
    marginBottom: "4px !important",
    color: "#111827 !important"
  },
  badgesContainer: {
    display: "flex !important",
    gap: "8px !important",
    marginBottom: "8px !important"
  },
  categoryBadge: {
    fontSize: "12px !important",
    backgroundColor: "#f3f4f6 !important",
    color: "#374151 !important",
    padding: "4px 8px !important",
    borderRadius: "6px !important",
    border: "1px solid #e5e7eb !important"
  },
  violetBadge: {
    fontSize: "12px !important",
    backgroundColor: "#ede9fe !important",
    color: "#7c3aed !important",
    padding: "4px 8px !important",
    borderRadius: "6px !important",
    border: "none !important"
  },
  description: {
  fontSize: "14px !important",
  color: "#6b7280 !important",
  lineHeight: "1.5 !important",
  marginBottom: "16px !important",
  overflow: "hidden !important",
  display: "-webkit-box !important",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical !important"
},
colorPaletteSection: {
  display: "flex !important",
  flexDirection: "column !important",
  gap: "8px !important"
},
paletteLabel: {
  display: "flex !important",
  alignItems: "center !important",
  gap: "4px !important",
  fontSize: "12px !important",
  fontWeight: "500 !important",
  color: "#6b7280 !important"
},
colorsContainer: {
  display: "flex !important",
  gap: "8px !important"
},
colorSwatch: {
  width: "32px !important",
  height: "32px !important",
  borderRadius: "8px !important",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05) !important",
  border: "1px solid #e5e7eb !important"
},
gradientBorder: {
  position: "absolute !important",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "16px !important",
  opacity: 0,
  transition: "opacity 0.5s ease !important",
  pointerEvents: "none !important",
  "&:hover": {
    opacity: 1
  }
}
});

export default function TemplateCard({ template, index, onSelect, isHovered, onHover, onLeave }) {
  const classes = useStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={classes.cardContainer}
      onClick={onSelect}
    >
      <div className={classes.card}>
        {/* Template Preview Image */}
        <div className={classes.imageContainer}>
          <img
            src={template.image}
            alt={template.name}
            className={classes.image}
          />
          <div className={classes.imageOverlay} />
          
          {/* Hover Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className={classes.hoverActions}
          >
            <button
              className={classes.previewButton}
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
            >
              <Eye style={{ width: "16px", height: "16px", marginRight: "8px" }} />
              Preview
            </button>
          </motion.div>

          {/* Favorite Badge */}
          <div className={classes.favoriteBadge}>
            <Star style={{ width: "16px", height: "16px", color: "#f59e0b" }} />
          </div>
        </div>

        {/* Template Info */}
        <div className={classes.templateInfo}>
          <div className={classes.headerContainer}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <h3 className={classes.templateName}>
                {template.name}
              </h3>
              <div className={classes.badgesContainer}>
                <span className={classes.violetBadge}>
                  {template.category}
                </span>
                <span className={classes.categoryBadge}>
                  {template.style}
                </span>
              </div>
            </div>
          </div>

          <p className={classes.description}>
            {template.description}
          </p>

          {/* Color Palette */}
          <div className={classes.colorPaletteSection}>
            <div className={classes.paletteLabel}>
              <Sparkles style={{ width: "12px", height: "12px" }} />
              Color Palette
            </div>
            <div className={classes.colorsContainer}>
              {template.colorPalette.map((color, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className={classes.colorSwatch}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gradient Border Effect */}
        <div 
          className={classes.gradientBorder}
          style={{
            background: `linear-gradient(135deg, ${template.colorPalette[0]}, ${template.colorPalette[1]})`,
            padding: '2px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor'
          }}
        />
      </div>
    </motion.div>
  );
}