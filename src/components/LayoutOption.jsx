// LayoutOption.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle2 } from 'lucide-react';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   layoutButton: {
//     position: 'relative !important',
//     width: '100% !important',
//     borderRadius: '10px !important',
//     padding: '12px !important',
//     transition: 'all 0.3s ease !important',
//     border: 'none !important',
//     cursor: 'pointer !important',
//     display: 'flex !important',
//     flexDirection: 'column !important',
//     alignItems: 'center !important',
//     justifyContent: 'center !important',
//     minHeight: '140px !important',
//     '&$selected': {
//       background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%) !important',
//       border: '2px solid #8b5cf6 !important',
//       boxShadow: '0 8px 16px -4px rgba(139, 92, 246, 0.2) !important'
//     },
//     '&$notSelected': {
//       backgroundColor: 'rgba(255, 255, 255, 0.05) !important',
//       border: '1px solid rgba(255, 255, 255, 0.1) !important',
//       '&:hover': {
//         backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
//         border: '1px solid rgba(255, 255, 255, 0.2) !important'
//       }
//     }
//   },
//   selected: {},
//   notSelected: {},
//   selectedBadge: {
//     position: 'absolute !important',
//     top: '-6px !important',
//     right: '-6px !important',
//     width: '24px !important',
//     height: '24px !important',
//     borderRadius: '50% !important',
//     background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%) !important',
//     display: 'flex !important',
//     alignItems: 'center !important',
//     justifyContent: 'center !important',
//     boxShadow: '0 4px 8px -2px rgba(0, 0, 0, 0.1) !important'
//   },
//   layoutPreview: {
//     aspectRatio: '4/3 !important',
//     marginBottom: '8px !important',
//     borderRadius: '6px !important',
//     background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important',
//     padding: '8px !important',
//     width: '100% !important',
//     display: 'flex !important',
//     alignItems: 'center !important',
//     justifyContent: 'center !important',
//     flex: '1 !important'
//   },
//   layoutName: {
//     fontSize: '12px !important',
//     fontWeight: '500 !important',
//     color: '#ffffff !important',
//     letterSpacing: '-0.025em !important',
//     textAlign: 'center !important',
//     width: '100% !important',
//     margin: '0 !important',
//     marginTop: '6px !important'
//   }
// });

// export default function LayoutOption({ layout, isSelected, onSelect }) {
//   const classes = useStyles();

//   // Add safety check for layout prop
//   if (!layout) {
//     return null; // or return a placeholder
//   }

//   return (
//     <motion.button
//       onClick={() => onSelect(layout)}
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       className={`${classes.layoutButton} ${isSelected ? classes.selected : classes.notSelected}`}
//     >
//       {/* Selected Badge */}
//       {isSelected && (
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           className={classes.selectedBadge}
//         >
//           <CheckCircle2 style={{ width: '12px', height: '12px', color: '#ffffff' }} />
//         </motion.div>
//       )}

//       {/* Layout Preview */}
//       <div className={classes.layoutPreview}>
//         {layout.preview || (
//           <div style={{ color: '#94a3b8', fontSize: '10px' }}>
//             Preview not available
//           </div>
//         )}
//       </div>

//       {/* Layout Name */}
//       <p className={classes.layoutName}>
//         {layout.name || 'Unnamed Layout'}
//       </p>
//     </motion.button>
//   );
// }

// LayoutOption.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  layoutButton: {
    position: 'relative !important',
    width: '100% !important',
    borderRadius: '10px !important',
    padding: '12px !important',
    transition: 'all 0.3s ease !important',
    border: 'none !important',
    cursor: 'pointer !important',
    display: 'flex !important',
    flexDirection: 'column !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    minHeight: '130px !important',
    '&$selected': {
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%) !important',
      border: '2px solid #8b5cf6 !important',
      boxShadow: '0 8px 16px -4px rgba(139, 92, 246, 0.2) !important'
    },
    '&$notSelected': {
      backgroundColor: 'rgba(255, 255, 255, 0.05) !important',
      border: '1px solid rgba(255, 255, 255, 0.1) !important',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
        border: '1px solid rgba(255, 255, 255, 0.2) !important'
      }
    }
  },
  selected: {},
  notSelected: {},
  selectedBadge: {
    position: 'absolute !important',
    top: '-6px !important',
    right: '-6px !important',
    width: '22px !important',
    height: '22px !important',
    borderRadius: '50% !important',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%) !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    boxShadow: '0 4px 8px -2px rgba(0, 0, 0, 0.1) !important'
  },
  layoutPreview: {
    aspectRatio: '4/3 !important',
    marginBottom: '8px !important',
    borderRadius: '6px !important',
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important',
    padding: '6px !important',
    width: '100% !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    flex: '1 !important'
  },
  layoutName: {
    fontSize: '11px !important',
    fontWeight: '500 !important',
    color: '#ffffff !important',
    letterSpacing: '-0.025em !important',
    textAlign: 'center !important',
    width: '100% !important',
    margin: '0 !important',
    marginTop: '4px !important'
  }
});

export default function LayoutOption({ layout, isSelected, onSelect }) {
  const classes = useStyles();

  // Add safety check for layout prop
  if (!layout) {
    return null; // or return a placeholder
  }

  return (
    <motion.button
      onClick={() => onSelect(layout)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${classes.layoutButton} ${isSelected ? classes.selected : classes.notSelected}`}
    >
      {/* Selected Badge */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={classes.selectedBadge}
        >
          <CheckCircle2 style={{ width: '11px', height: '11px', color: '#ffffff' }} />
        </motion.div>
      )}

      {/* Layout Preview */}
      <div className={classes.layoutPreview}>
        {layout.preview || (
          <div style={{ color: '#94a3b8', fontSize: '9px' }}>
            Preview not available
          </div>
        )}
      </div>

      {/* Layout Name */}
      <p className={classes.layoutName}>
        {layout.name || 'Unnamed Layout'}
      </p>
    </motion.button>
  );
}