import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Copy, Share2, Sparkles, Check } from "lucide-react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
overlay: {
  position: "fixed !important",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6) !important",
  backdropFilter: "blur(4px) !important",
  zIndex: 1300,
  display: "flex !important",
  alignItems: "center !important",
  justifyContent: "center !important",
  padding: "16px !important",
  fontFamily: "'Inter', sans-serif !important"
},
modal: {
  backgroundColor: "#ffffff !important",
  borderRadius: "24px !important",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25) !important",
  maxWidth: "80rem !important",
  width: "100% !important",
  maxHeight: "90vh !important",
  overflow: "hidden !important"
},
header: {
  position: "relative !important",
  padding: "24px 32px !important",
  borderBottom: "1px solid #f3f4f6 !important",
  "@media (min-width: 768px)": {
    padding: "32px !important"
  }
},
closeButton: {
  position: "absolute !important",
  top: "24px !important",
  right: "24px !important",
  padding: "8px !important",
  "&:hover": {
    backgroundColor: "#f3f4f6 !important"
  },
  borderRadius: "50% !important",
  border: "none !important",
  cursor: "pointer !important",
  transition: "background-color 0.2s ease !important"
},
headerContent: {
  display: "flex !important",
  alignItems: "flex-start !important",
  gap: "24px !important"
},
imageContainer: {
  width: "96px !important",
  height: "96px !important",
  borderRadius: "16px !important",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1) !important",
  overflow: "hidden !important",
  flexShrink: 0
},
templateImage: {
  width: "100% !important",
  height: "100% !important",
  objectFit: "cover !important"
},
headerText: {
  flex: 1
},
titleContainer: {
  display: "flex !important",
  alignItems: "center !important",
  gap: "12px !important",
  marginBottom: "12px !important"
},
templateName: {
  fontSize: "24px !important",
  fontWeight: "700 !important",
  color: "#111827 !important"
},
badgesContainer: {
  display: "flex !important",
  gap: "8px !important"
},
violetBadge: {
  fontSize: "12px !important",
  backgroundColor: "#ede9fe !important",
  color: "#7c3aed !important",
  padding: "4px 8px !important",
  borderRadius: "6px !important",
  border: "none !important"
},
outlineBadge: {
  fontSize: "12px !important",
  backgroundColor: "transparent !important",
  color: "#374151 !important",
  padding: "4px 8px !important",
  borderRadius: "6px !important",
  border: "1px solid #d1d5db !important"
},
description: {
  color: "#6b7280 !important",
  lineHeight: "1.6 !important",
  marginBottom: "16px !important"
},
colorPaletteContainer: {
  display: "flex !important",
  alignItems: "center !important",
  gap: "12px !important"
},
colorsDisplay: {
  display: "flex !important",
  gap: "8px !important"
},
colorSwatch: {
  width: "40px !important",
  height: "40px !important",
  borderRadius: "12px !important",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1) !important",
  border: "2px solid #ffffff !important"
},
previewContent: {
  padding: "24px 32px !important",
  overflowY: "auto !important",
  maxHeight: "50vh !important",
  "@media (min-width: 768px)": {
    padding: "32px !important"
  }
},
section: {
  display: "flex !important",
  flexDirection: "column !important",
  gap: "12px !important"
},
sectionTitle: {
  fontSize: "18px !important",
  fontWeight: "600 !important",
  display: "flex !important",
  alignItems: "center !important",
  gap: "8px !important"
},
violetIcon: {
  color: "#7c3aed !important"
},
perfectForGrid: {
  display: "flex !important",
  flexDirection: "column !important",
  gap: "12px !important",
  "@media (min-width: 768px)": {
    display: "flex !important",
    flexDirection: "row !important",
    flexWrap: "wrap !important"
  }
},
perfectForItem: {
  background: "linear-gradient(90deg, #f9fafb 0%, #f3f4f6 100%) !important",
  padding: "12px 16px !important",
  borderRadius: "12px !important",
  fontSize: "14px !important",
  fontWeight: "500 !important",
  color: "#374151 !important",
  flex: "1 1 calc(33.333% - 8px) !important",
  minWidth: "150px !important"
},
featuresGrid: {
  display: "flex !important",
  flexDirection: "column !important",
  gap: "16px !important",
  "@media (min-width: 768px)": {
    display: "flex !important",
    flexDirection: "row !important",
    flexWrap: "wrap !important"
  }
},
featureItem: {
  display: "flex !important",
  alignItems: "center !important",
  gap: "12px !important",
  flex: "1 1 calc(50% - 8px) !important",
  minWidth: "200px !important"
},
checkCircle: {
  width: "24px !important",
  height: "24px !important",
  borderRadius: "50% !important",
  backgroundColor: "#dcfce7 !important",
  display: "flex !important",
  alignItems: "center !important",
  justifyContent: "center !important",
  flexShrink: 0
},
featureText: {
  color: "#374151 !important"
},
actions: {
  padding: "24px 32px !important",
  borderTop: "1px solid #f3f4f6 !important",
  backgroundColor: "#f9fafb !important",
  "@media (min-width: 768px)": {
    padding: "32px !important"
  }
},
actionsContainer: {
  display: "flex !important",
  flexDirection: "column !important",
  gap: "12px !important",
  "@media (min-width: 640px)": {
    flexDirection: "row !important"
  }
},
primaryButton: {
  flex: 1,
  height: "48px !important",
  fontSize: "16px !important",
  fontWeight: "600 !important",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1) !important",
  "&:hover": {
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1) !important"
  },
  border: "none !important",
  borderRadius: "8px !important",
  cursor: "pointer !important",
  display: "flex !important",
  alignItems: "center !important",
  justifyContent: "center !important",
  gap: "8px !important",
  color: "#ffffff !important",
  transition: "all 0.3s ease !important"
},
outlineButton: {
  height: "48px !important",
  fontSize: "14px !important",
  fontWeight: "500 !important",
  backgroundColor: "transparent !important",
  border: "1px solid #d1d5db !important",
  borderRadius: "8px !important",
  cursor: "pointer !important",
  display: "flex !important",
  alignItems: "center !important",
  justifyContent: "center !important",
  gap: "8px !important",
  padding: "0 20px !important",
  color: "#374151 !important",
  transition: "all 0.2s ease !important",
  "&:hover": {
    backgroundColor: "#f9fafb !important"
  }
}

});

export default function TemplatePreview({ template, onClose }) {
  const classes = useStyles();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const perfectForItems = [
    'Senior Positions', 
    'Career Changers', 
    'Recent Graduates', 
    'Industry Veterans', 
    'Remote Workers', 
    'Freelancers'
  ];

  const keyFeatures = [
    'ATS-Optimized Format',
    'Easy Customization',
    'Professional Layout',
    'Multiple Export Options',
    'Industry-Specific Sections',
    'Modern Typography'
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.overlay}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={classes.modal}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div 
            className={classes.header}
            style={{
              background: `linear-gradient(135deg, ${template.colorPalette[0]}15, ${template.colorPalette[1]}15)`
            }}
          >
            <button
              onClick={onClose}
              className={classes.closeButton}
            >
              <X style={{ width: "20px", height: "20px" }} />
            </button>

            <div className={classes.headerContent}>
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                className={classes.imageContainer}
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className={classes.templateImage}
                />
              </motion.div>

              <div className={classes.headerText}>
                <div className={classes.titleContainer}>
                  <h2 className={classes.templateName}>
                    {template.name}
                  </h2>
                  <div className={classes.badgesContainer}>
                    <span className={classes.violetBadge}>
                      {template.category}
                    </span>
                    <span className={classes.outlineBadge}>
                      {template.style}
                    </span>
                  </div>
                </div>
                <p className={classes.description}>
                  {template.description}
                </p>

                {/* Color Palette Display */}
                <div className={classes.colorPaletteContainer}>
                  <Sparkles style={{ width: "16px", height: "16px", color: "#9ca3af" }} />
                  <div className={classes.colorsDisplay}>
                    {template.colorPalette.map((color, i) => (
                      <div
                        key={i}
                        className={classes.colorSwatch}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Content */}
          <div className={classes.previewContent}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className={classes.section}>
                <h3 className={classes.sectionTitle}>
                  <Sparkles className={classes.violetIcon} style={{ width: "20px", height: "20px" }} />
                  Perfect For
                </h3>
                <div className={classes.perfectForGrid}>
                  {perfectForItems.map((item, i) => (
                    <div
                      key={i}
                      className={classes.perfectForItem}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={classes.section}>
                <h3 className={classes.sectionTitle}>Key Features</h3>
                <div className={classes.featuresGrid}>
                  {keyFeatures.map((feature, i) => (
                    <div key={i} className={classes.featureItem}>
                      <div className={classes.checkCircle}>
                        <Check style={{ width: "16px", height: "16px", color: "#16a34a" }} />
                      </div>
                      <span className={classes.featureText}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={classes.actions}>
            <div className={classes.actionsContainer}>
              <button
                className={classes.primaryButton}
                style={{
                  background: `linear-gradient(135deg, ${template.colorPalette[0]}, ${template.colorPalette[1]})`
                }}
              >
                <Download style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                Use This Template
              </button>
              <button
                className={classes.outlineButton}
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                    Copy Link
                  </>
                )}
              </button>
              <button className={classes.outlineButton}>
                <Share2 style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                Share
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}