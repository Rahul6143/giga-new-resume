// LayoutSelector.jsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Sparkles } from 'lucide-react';
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogContentText
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import LayoutOption from './LayoutOption';

// const useStyles = makeStyles({
//   dialogContent: {
//     maxWidth: '95rem !important',
//     maxHeight: '90vh !important',
//     background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%) !important',
//     border: '1px solid rgba(255, 255, 255, 0.1) !important',
//     color: '#ffffff !important',
//     overflow: 'hidden !important',
//     position: 'relative !important',
//     padding: '0 !important',
//     width: '95vw !important'
//   },
//   decorativeBackground: {
//     position: 'absolute !important',
//     top: '0 !important',
//     left: '0 !important',
//     right: '0 !important',
//     bottom: '0 !important',
//     overflow: 'hidden !important',
//     pointerEvents: 'none !important',
//     opacity: '0.2 !important'
//   },
//   violetBlob: {
//     position: 'absolute !important',
//     top: '0 !important',
//     right: '0 !important',
//     width: '384px !important',
//     height: '384px !important',
//     backgroundColor: 'rgba(139, 92, 246, 0.3) !important',
//     borderRadius: '50% !important',
//     filter: 'blur(48px) !important'
//   },
//   purpleBlob: {
//     position: 'absolute !important',
//     bottom: '0 !important',
//     left: '0 !important',
//     width: '384px !important',
//     height: '384px !important',
//     backgroundColor: 'rgba(168, 85, 247, 0.3) !important',
//     borderRadius: '50% !important',
//     filter: 'blur(48px) !important'
//   },
//   dialogHeader: {
//     position: 'relative !important',
//     zIndex: '10 !important',
//     padding: '20px 24px 0 24px !important'
//   },
//   headerContent: {
//     display: 'flex !important',
//     alignItems: 'center !important',
//     gap: '10px !important',
//     marginBottom: '6px !important'
//   },
//   iconContainer: {
//     width: '32px !important',
//     height: '32px !important',
//     borderRadius: '8px !important',
//     background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%) !important',
//     display: 'flex !important',
//     alignItems: 'center !important',
//     justifyContent: 'center !important'
//   },
//   dialogTitle: {
//     fontSize: '22px !important',
//     fontWeight: '700 !important',
//     letterSpacing: '-0.025em !important',
//     color: '#ffffff !important',
//     margin: '0 !important'
//   },
//   dialogDescription: {
//     color: '#94a3b8 !important',
//     fontSize: '13px !important',
//     margin: '0 !important'
//   },
//   layoutGridContainer: {
//     position: 'relative !important',
//     zIndex: '10 !important',
//     marginTop: '16px !important',
//     padding: '0 24px 16px 24px !important',
//     overflow: 'hidden !important',
//     flex: '1 !important'
//   },
//   layoutGrid: {
//     display: 'grid !important',
//     gridTemplateColumns: 'repeat(4, 1fr) !important',
//     gap: '16px !important',
//     height: '100% !important',
//     maxHeight: '68vh !important',
//     overflowY: 'auto !important',
//     paddingRight: '8px !important',
//     '&::-webkit-scrollbar': {
//       width: '6px !important'
//     },
//     '&::-webkit-scrollbar-track': {
//       background: 'rgba(255, 255, 255, 0.05) !important',
//       borderRadius: '10px !important'
//     },
//     '&::-webkit-scrollbar-thumb': {
//       background: 'rgba(139, 92, 246, 0.5) !important',
//       borderRadius: '10px !important'
//     },
//     '&::-webkit-scrollbar-thumb:hover': {
//       background: 'rgba(139, 92, 246, 0.7) !important'
//     }
//   },
//   layoutItem: {
//     minWidth: '0 !important'
//   },
//   actionButtons: {
//     position: 'relative !important',
//     zIndex: '10 !important',
//     display: 'flex !important',
//     justifyContent: 'flex-end !important',
//     gap: '12px !important',
//     padding: '16px 24px 20px 24px !important',
//     borderTop: '1px solid rgba(255, 255, 255, 0.1) !important',
//     marginTop: 'auto !important'
//   },
//   cancelButton: {
//     backgroundColor: 'rgba(255, 255, 255, 0.05) !important',
//     border: '1px solid rgba(255, 255, 255, 0.2) !important',
//     color: '#ffffff !important',
//     padding: '10px 20px !important',
//     borderRadius: '6px !important',
//     cursor: 'pointer !important',
//     fontSize: '13px !important',
//     fontWeight: '500 !important',
//     '&:hover': {
//       backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
//       border: '1px solid rgba(255, 255, 255, 0.3) !important'
//     }
//   },
//   createButton: {
//     background: 'linear-gradient(90deg, #7c3aed 0%, #a855f7 100%) !important',
//     color: '#ffffff !important',
//     padding: '10px 28px !important',
//     borderRadius: '6px !important',
//     border: 'none !important',
//     cursor: 'pointer !important',
//     fontSize: '13px !important',
//     fontWeight: '500 !important',
//     boxShadow: '0 8px 12px -3px rgba(139, 92, 246, 0.3) !important',
//     '&:hover': {
//       background: 'linear-gradient(90deg, #6d28d9 0%, #9333ea 100%) !important'
//     }
//   }
// });

// const layoutOptions = [
//   {
//     id: 'single-column',
//     name: 'Single Column',
//     preview: (
//       <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '6px', padding: '6px' }}>
//         <div style={{ width: '100%', height: '30px', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//       </div>
//     ),
//   },
//   {
//     id: 'sidebar',
//     name: 'Sidebar',
//     preview: (
//       <div style={{ width: '100%', height: '100%', display: 'flex', gap: '6px', padding: '6px' }}>
//         <div style={{ width: '33.333%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
//           <div style={{ height: '50%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//           <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 'grid',
//     name: 'Grid',
//     preview: (
//       <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap', gap: '4px', padding: '6px' }}>
//         <div style={{ flex: '1 1 calc(50% - 2px)', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)', minHeight: '30px' }} />
//         <div style={{ flex: '1 1 calc(50% - 2px)', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)', minHeight: '30px' }} />
//         <div style={{ flex: '1 1 calc(50% - 2px)', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)', minHeight: '30px' }} />
//         <div style={{ flex: '1 1 calc(50% - 2px)', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)', minHeight: '30px' }} />
//       </div>
//     ),
//   },
//   {
//     id: 'two-columns',
//     name: 'Two Columns',
//     preview: (
//       <div style={{ width: '100%', height: '100%', display: 'flex', gap: '6px', padding: '6px' }}>
//         <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//       </div>
//     ),
//   },
//   {
//     id: 'header-two-columns',
//     name: 'Header with Two Columns',
//     preview: (
//       <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '6px', padding: '6px' }}>
//         <div style={{ width: '100%', height: '25%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         <div style={{ flex: 1, display: 'flex', gap: '6px' }}>
//           <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//           <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 'three-columns',
//     name: 'Three Columns',
//     preview: (
//       <div style={{ width: '100%', height: '100%', display: 'flex', gap: '4px', padding: '6px' }}>
//         <div style={{ flex: 1, borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         <div style={{ flex: 1, borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         <div style={{ flex: 1, borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//       </div>
//     ),
//   },
//   {
//     id: 'asymmetric',
//     name: 'Asymmetric Layout',
//     preview: (
//       <div style={{ width: '100%', height: '100%', display: 'flex', gap: '6px', padding: '6px' }}>
//         <div style={{ width: '40%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
//           <div style={{ height: '25%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//           <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 'modern-split',
//     name: 'Modern Split',
//     preview: (
//       <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '6px', padding: '6px' }}>
//         <div style={{ display: 'flex', gap: '6px', height: '50%' }}>
//           <div style={{ width: '33.333%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//           <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         </div>
//         <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//       </div>
//     ),
//   },
//   {
//     id: 'timeline',
//     name: 'Timeline Layout',
//     preview: (
//       <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '4px', padding: '6px' }}>
//         <div style={{ width: '100%', height: '18%', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         <div style={{ width: '100%', height: '18%', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         <div style={{ width: '100%', height: '18%', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//         <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
//       </div>
//     ),
//   },
// ];

// export default function LayoutSelector({ isOpen, onClose, onSelect }) {
//   const classes = useStyles();
//   const [selectedLayout, setSelectedLayout] = useState(layoutOptions[1]); // Default to Sidebar

//   const handleCreate = () => {
//     if (selectedLayout) {
//       onSelect(selectedLayout);
//       onClose();
//     }
//   };

//   const handleLayoutSelect = (layout) => {
//     if (layout && layout.id) {
//       setSelectedLayout(layout);
//     }
//   };

//   return (
//     <Dialog 
//       open={isOpen} 
//       onClose={onClose} 
//       maxWidth={false}
//       PaperProps={{
//         style: {
//           backgroundColor: 'transparent',
//           boxShadow: 'none',
//           maxHeight: '90vh'
//         }
//       }}
//     >
//       <DialogContent className={classes.dialogContent}>
//         {/* Decorative Background */}
//         <div className={classes.decorativeBackground}>
//           <div className={classes.violetBlob} />
//           <div className={classes.purpleBlob} />
//         </div>

//         <div className={classes.dialogHeader}>
//           <div className={classes.headerContent}>
//             <div className={classes.iconContainer}>
//               <Sparkles style={{ width: '16px', height: '16px', color: '#ffffff' }} />
//             </div>
//             <DialogTitle className={classes.dialogTitle}>
//               Choose Your Resume Template
//             </DialogTitle>
//           </div>
//           <DialogContentText className={classes.dialogDescription}>
//             Choose a design that best fits your style
//           </DialogContentText>
//         </div>

//         {/* Layout Grid */}
//         <div className={classes.layoutGridContainer}>
//           <div className={classes.layoutGrid}>
//             <AnimatePresence mode="popLayout">
//               {layoutOptions.map((layout) => (
//                 <div key={layout.id} className={classes.layoutItem}>
//                   <LayoutOption
//                     layout={layout}
//                     isSelected={selectedLayout?.id === layout.id}
//                     onSelect={handleLayoutSelect}
//                   />
//                 </div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className={classes.actionButtons}>
//           <button
//             onClick={onClose}
//             className={classes.cancelButton}
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleCreate}
//             className={classes.createButton}
//             disabled={!selectedLayout}
//           >
//             Create
//           </button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// LayoutSelector.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LayoutOption from './LayoutOption';

const useStyles = makeStyles({
  dialogWrapper: {
    display: 'flex !important',
    flexDirection: 'column !important',
    height: '90vh !important',
    maxHeight: '90vh !important',
    width: '95vw !important',
    maxWidth: '95vw !important',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%) !important',
    border: '1px solid rgba(255, 255, 255, 0.1) !important',
    color: '#ffffff !important',
    overflow: 'hidden !important',
    position: 'relative !important',
  },
  dialogContent: {
    padding: '0 !important',
    margin: '0 !important',
    overflow: 'hidden !important',
    display: 'flex !important',
    flexDirection: 'column !important',
    flex: '1 !important',
    background: 'transparent !important'
  },
  decorativeBackground: {
    position: 'absolute !important',
    top: '0 !important',
    left: '0 !important',
    right: '0 !important',
    bottom: '0 !important',
    overflow: 'hidden !important',
    pointerEvents: 'none !important',
    opacity: '0.2 !important'
  },
  violetBlob: {
    position: 'absolute !important',
    top: '0 !important',
    right: '0 !important',
    width: '384px !important',
    height: '384px !important',
    backgroundColor: 'rgba(139, 92, 246, 0.3) !important',
    borderRadius: '50% !important',
    filter: 'blur(48px) !important'
  },
  purpleBlob: {
    position: 'absolute !important',
    bottom: '0 !important',
    left: '0 !important',
    width: '384px !important',
    height: '384px !important',
    backgroundColor: 'rgba(168, 85, 247, 0.3) !important',
    borderRadius: '50% !important',
    filter: 'blur(48px) !important'
  },
  dialogHeader: {
    position: 'relative !important',
    zIndex: '10 !important',
    padding: '20px 24px 16px 24px !important',
    flexShrink: '0 !important'
  },
  headerContent: {
    display: 'flex !important',
    alignItems: 'center !important',
    gap: '10px !important',
    marginBottom: '6px !important'
  },
  iconContainer: {
    width: '32px !important',
    height: '32px !important',
    borderRadius: '8px !important',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%) !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important'
  },
  dialogTitle: {
    fontSize: '22px !important',
    fontWeight: '700 !important',
    letterSpacing: '-0.025em !important',
    color: '#ffffff !important',
    margin: '0 !important'
  },
  dialogDescription: {
    color: '#94a3b8 !important',
    fontSize: '13px !important',
    margin: '0 !important'
  },
  layoutGridContainer: {
    position: 'relative !important',
    zIndex: '10 !important',
    padding: '0 24px 16px 24px !important',
    overflow: 'hidden !important',
    flex: '1 !important',
    display: 'flex !important',
    flexDirection: 'column !important'
  },
  layoutGrid: {
    display: 'grid !important',
    gridTemplateColumns: 'repeat(4, 1fr) !important',
    gap: '16px !important',
    flex: '1 !important',
    overflowY: 'auto !important',
    paddingRight: '8px !important',
    '&::-webkit-scrollbar': {
      width: '6px !important'
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(255, 255, 255, 0.05) !important',
      borderRadius: '10px !important'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(139, 92, 246, 0.5) !important',
      borderRadius: '10px !important'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'rgba(139, 92, 246, 0.7) !important'
    }
  },
  layoutItem: {
    minWidth: '0 !important'
  },
  actionButtons: {
    position: 'relative !important',
    zIndex: '10 !important',
    display: 'flex !important',
    justifyContent: 'flex-end !important',
    gap: '12px !important',
    padding: '16px 24px 20px 24px !important',
    borderTop: '1px solid rgba(255, 255, 255, 0.1) !important',
    flexShrink: '0 !important',
    background: 'transparent !important'
  },
  cancelButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05) !important',
    border: '1px solid rgba(255, 255, 255, 0.2) !important',
    color: '#ffffff !important',
    padding: '10px 20px !important',
    borderRadius: '6px !important',
    cursor: 'pointer !important',
    fontSize: '13px !important',
    fontWeight: '500 !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
      border: '1px solid rgba(255, 255, 255, 0.3) !important'
    }
  },
  createButton: {
    background: 'linear-gradient(90deg, #7c3aed 0%, #a855f7 100%) !important',
    color: '#ffffff !important',
    padding: '10px 28px !important',
    borderRadius: '6px !important',
    border: 'none !important',
    cursor: 'pointer !important',
    fontSize: '13px !important',
    fontWeight: '500 !important',
    boxShadow: '0 8px 12px -3px rgba(139, 92, 246, 0.3) !important',
    '&:hover': {
      background: 'linear-gradient(90deg, #6d28d9 0%, #9333ea 100%) !important'
    }
  }
});

const layoutOptions = [
  {
    id: 'single-column',
    name: 'Single Column',
    preview: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '6px', padding: '6px' }}>
        <div style={{ width: '100%', height: '30px', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
      </div>
    ),
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    preview: (
      <div style={{ width: '100%', height: '100%', display: 'flex', gap: '6px', padding: '6px' }}>
        <div style={{ width: '33.333%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ height: '50%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
          <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        </div>
      </div>
    ),
  },
  {
    id: 'grid',
    name: 'Grid',
    preview: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap', gap: '4px', padding: '6px' }}>
        <div style={{ flex: '1 1 calc(50% - 2px)', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)', minHeight: '30px' }} />
        <div style={{ flex: '1 1 calc(50% - 2px)', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)', minHeight: '30px' }} />
        <div style={{ flex: '1 1 calc(50% - 2px)', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)', minHeight: '30px' }} />
        <div style={{ flex: '1 1 calc(50% - 2px)', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)', minHeight: '30px' }} />
      </div>
    ),
  },
  {
    id: 'two-columns',
    name: 'Two Columns',
    preview: (
      <div style={{ width: '100%', height: '100%', display: 'flex', gap: '6px', padding: '6px' }}>
        <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
      </div>
    ),
  },
  {
    id: 'header-two-columns',
    name: 'Header with Two Columns',
    preview: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '6px', padding: '6px' }}>
        <div style={{ width: '100%', height: '25%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        <div style={{ flex: 1, display: 'flex', gap: '6px' }}>
          <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
          <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        </div>
      </div>
    ),
  },
  {
    id: 'three-columns',
    name: 'Three Columns',
    preview: (
      <div style={{ width: '100%', height: '100%', display: 'flex', gap: '4px', padding: '6px' }}>
        <div style={{ flex: 1, borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        <div style={{ flex: 1, borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        <div style={{ flex: 1, borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
      </div>
    ),
  },
  {
    id: 'asymmetric',
    name: 'Asymmetric Layout',
    preview: (
      <div style={{ width: '100%', height: '100%', display: 'flex', gap: '6px', padding: '6px' }}>
        <div style={{ width: '40%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ height: '25%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
          <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        </div>
      </div>
    ),
  },
  {
    id: 'modern-split',
    name: 'Modern Split',
    preview: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '6px', padding: '6px' }}>
        <div style={{ display: 'flex', gap: '6px', height: '50%' }}>
          <div style={{ width: '33.333%', borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
          <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        </div>
        <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
      </div>
    ),
  },
  {
    id: 'timeline',
    name: 'Timeline Layout',
    preview: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '4px', padding: '6px' }}>
        <div style={{ width: '100%', height: '18%', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        <div style={{ width: '100%', height: '18%', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        <div style={{ width: '100%', height: '18%', borderRadius: '3px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
        <div style={{ flex: 1, borderRadius: '4px', background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)' }} />
      </div>
    ),
  },
];

export default function LayoutSelector({ isOpen, onClose, onSelect }) {
  const classes = useStyles();
  const [selectedLayout, setSelectedLayout] = useState(layoutOptions[1]); // Default to Sidebar

  const handleCreate = () => {
    if (selectedLayout) {
      onSelect(selectedLayout);
      onClose();
    }
  };

  const handleLayoutSelect = (layout) => {
    if (layout && layout.id) {
      setSelectedLayout(layout);
    }
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose} 
      maxWidth={false}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          maxHeight: '90vh',
          overflow: 'hidden'
        }
      }}
    >
      <div className={classes.dialogWrapper}>
        <DialogContent className={classes.dialogContent}>
          {/* Decorative Background */}
          <div className={classes.decorativeBackground}>
            <div className={classes.violetBlob} />
            <div className={classes.purpleBlob} />
          </div>

          <div className={classes.dialogHeader}>
            <div className={classes.headerContent}>
              <div className={classes.iconContainer}>
                <Sparkles style={{ width: '16px', height: '16px', color: '#ffffff' }} />
              </div>
              <DialogTitle className={classes.dialogTitle}>
                Choose Your Resume Template
              </DialogTitle>
            </div>
            <DialogContentText className={classes.dialogDescription}>
              Choose a design that best fits your style
            </DialogContentText>
          </div>

          {/* Layout Grid */}
          <div className={classes.layoutGridContainer}>
            <div className={classes.layoutGrid}>
              <AnimatePresence mode="popLayout">
                {layoutOptions.map((layout) => (
                  <div key={layout.id} className={classes.layoutItem}>
                    <LayoutOption
                      layout={layout}
                      isSelected={selectedLayout?.id === layout.id}
                      onSelect={handleLayoutSelect}
                    />
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={classes.actionButtons}>
            <button
              onClick={onClose}
              className={classes.cancelButton}
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              className={classes.createButton}
              disabled={!selectedLayout}
            >
              Create
            </button>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}