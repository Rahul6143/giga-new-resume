// import React from "react"; 
// import { Box, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   section: {
//     textAlign: "center",
//     padding: "40px 16px",
//     // height: "100vh !important",
//     backgroundColor: "#F3F4F6", // gray.100
//   },
//   container: {
//     maxWidth: 1200,
//     margin: "0 auto",
//     padding: "0 16px !important",
//   },
//   headingWrapper: {
//     marginBottom: 30,
//   },
//   title: {
//     fontWeight: '700 !important',
//     marginBottom: '8px !important',
//     fontSize: "2rem !important",
//     color: "#333333", // darker text for better readability
//   },
//   subtitle: {
//     color: "#6B7280", // softer gray for the subtitle
//   },
//   tableWrapper: {
//     display: "flex",
//     flexDirection: "column",
//     borderRadius: '4px',
//     border: "1px solid #D1D5DB", // muted gray border
//     boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
//     overflow: "hidden",
//     backgroundColor: "#FFFFFF", // white background for the table
//   },
//   tableHeader: {
//     display: "flex",
//     backgroundColor: "#004080", // soft gray background for header
//     color: "#ffffffff", // gray text for header
//     fontFamily: "'Roboto', sans-serif",
//     fontWeight: '700 !important',
//     fontSize: "1rem !important",
//     padding: "16px 12px !important",
//     // height: "35px",
//     justifyContent: "center !important",
//   },
//   headerCell: {
//     flex: 1,
//     fontFamily: "'Roboto', sans-serif", 
//     fontSize: "1.2rem !important",
//     textAlign: "center",
//     fontWeight: "700",
//   },
//   headerCellLeft: {
//     flex: 1,
//     fontSize: "1.2rem !important",
//     textAlign: "center",
//     fontWeight: "700",
//   },
//   row: {
//     display: "flex",
//     fontSize: "1rem !important",
//     fontFamily: "'Roboto', sans-serif",
//     padding: "20px 12px !important",
//     color: "#374151", // dark gray for better readability
//     borderBottom: "1px solid #E5E7EB", // subtle border for rows
//     "&:last-child": {
//       borderBottom: "none",
//     },
//     "&:hover": {
//       backgroundColor: "#F9FAFB", // lighter gray for hover effect
//     },
//   },
//   cell: {
//     flex: 1,
//     textAlign: "center",
//     fontWeight: '600', // slightly less bold to differentiate from header
//   },
//   cellLeft: {
//     flex: 1,
//     textAlign: "left",
//     paddingLeft: '24px !important',
//     fontWeight: '600', // lighter weight for the cells
//   },
// }));

// const ComparisonSection = () => {
//   const classes = useStyles();

//   const features = [
//     { feature: "Gen AI Skill Recommendations", giga: "Yes", other: "No", gigaColor: "#4CAF50", otherColor: "#FF6347" },
//     { feature: "Real-Time Project Suggestions", giga: "Yes", other: "No", gigaColor: "#4CAF50", otherColor: "#FF6347" },
//     { feature: "ATS Compatibility Tested", giga: "Yes", other: "Limited", gigaColor: "#4CAF50", otherColor: "#FFA500" },
//     { feature: "Free to Use", giga: "100% Free", other: "Limited", gigaColor: "#4CAF50", otherColor: "#FFA500" },
//     { feature: "One-Click GitHub Projects", giga: "Yes", other: "No", gigaColor: "#4CAF50", otherColor: "#FF6347" },
//     { feature: "Built for Freshers & Tech Roles", giga: "Specifically Designed", other: "Generic", gigaColor: "#4CAF50", otherColor: "#FFA500" },
//   ];

//   return (
//     <Box className={classes.section}>
//       <Box className={classes.container}>
//         <Box className={classes.headingWrapper}>
//           <Typography className={classes.title} variant="h4">
//             Why Giga Resume Builder Stands Out
//           </Typography>
//           <Typography className={classes.subtitle}>
//             See how we compare to other resume builders
//           </Typography>
//         </Box>

//         <Box className={classes.tableWrapper}>
//           {/* Header */}
//           <Box className={classes.tableHeader}>
//             <Box className={classes.headerCellLeft}>Feature</Box>
//             <Box className={classes.headerCell}>Giga Resume Builder</Box>
//             <Box className={classes.headerCell}>Other Resume Builders</Box>
//           </Box>

//           {/* Rows */}
//           {features.map((row, index) => (
//             <Box key={index} className={classes.row}>
//               <Box className={classes.cellLeft}>{row.feature}</Box>
//               <Box className={classes.cell} style={{ color: row.gigaColor }}>
//                 {row.giga}
//               </Box>
//               <Box className={classes.cell} style={{ color: row.otherColor }}>
//                 {row.other}
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ComparisonSection;

import React from "react"; 
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  section: {
    textAlign: "center",
    padding: "40px 16px",
    backgroundColor: "#F3F4F6",
    "@media (max-width: 375px)": {
      padding: "30px 8px !important",
    },
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 16px !important",
    "@media (max-width: 375px)": {
      padding: "0 8px !important",
    },
  },
  headingWrapper: {
    marginBottom: 30,
    "@media (max-width: 375px)": {
      marginBottom: 20,
    },
  },
  title: {
    fontWeight: '700 !important',
    marginBottom: '8px !important',
    fontSize: "2rem !important",
    color: "#333333",
    "@media (max-width: 375px)": {
      fontSize: "1.5rem !important",
      marginBottom: '4px !important',
    },
  },
  subtitle: {
    color: "#6B7280",
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
    },
  },
  tableWrapper: {
    display: "flex",
    flexDirection: "column",
    borderRadius: '4px',
    border: "1px solid #D1D5DB",
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    overflowX: "auto",
  },
  tableHeader: {
    display: "flex",
    backgroundColor: "#004080",
    color: "#ffffffff",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: '700 !important',
    fontSize: "1rem !important",
    padding: "16px 12px !important",
    justifyContent: "center !important",
    "@media (max-width: 768px)": {
      padding: "12px 8px !important",
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 480px)": {
      padding: "10px 6px !important",
      fontSize: "0.8rem !important",
    },
    "@media (max-width: 375px)": {
      padding: "6px 2px !important",
      fontSize: "0.75rem !important",
    },
  },
  headerCell: {
    flex: 1,
    fontFamily: "'Roboto', sans-serif", 
    fontSize: "1.2rem !important",
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center !important",
    alignContent: "center !important", 
    "@media (max-width: 768px)": {
      fontSize: "1.1rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.85rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.7rem !important",
      padding: "0 20px !important",
    },
  },
  headerCellLeft: {
    flex: 1,
    fontSize: "1.2rem !important",
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center !important",
    alignContent: "center !important",
    "@media (max-width: 768px)": {
      fontSize: "1.1rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem !important",
      textAlign: "left",
      paddingLeft: "12px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.85rem !important",
      padding: "0 20px !important",
      textAlign: "left",
    },
  },
  row: {
    display: "flex",
    fontSize: "1rem !important",
    fontFamily: "'Roboto', sans-serif",
    padding: "20px 12px !important",
    color: "#374151",
    borderBottom: "1px solid #E5E7EB",
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: "#F9FAFB",
    },
    "@media (max-width: 768px)": {
      padding: "16px 8px !important",
      fontSize: "0.95rem !important",
    },
    "@media (max-width: 480px)": {
      padding: "12px 6px !important",
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 375px)": {
      padding: "8px 4px !important",
      fontSize: "0.75rem !important",
    },
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontWeight: '600',
    "@media (max-width: 480px)": {
      fontSize: "0.85rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.7rem !important",
      padding: "0 2px !important",
    },
  },
  cellLeft: {
    flex: 1,
    textAlign: "left",
    paddingLeft: '24px !important',
    fontWeight: '600',
    "@media (max-width: 768px)": {
      paddingLeft: '16px !important',
    },
    "@media (max-width: 480px)": {
      paddingLeft: '12px !important',
      fontSize: "0.85rem !important",
    },
    "@media (max-width: 375px)": {
      paddingLeft: '4px !important',
      fontSize: "0.7rem !important",
    },
  },
  mobileOptimized: {
    "@media (max-width: 375px)": {
      minWidth: "280px",
    },
  },
}));

const ComparisonSection = () => {
  const classes = useStyles();

  const features = [
    { feature: "Gen AI Skill Recommendations", giga: "Yes", other: "No", gigaColor: "#4CAF50", otherColor: "#FF6347" },
    { feature: "Real-Time Project Suggestions", giga: "Yes", other: "No", gigaColor: "#4CAF50", otherColor: "#FF6347" },
    { feature: "ATS Compatibility Tested", giga: "Yes", other: "Limited", gigaColor: "#4CAF50", otherColor: "#FFA500" },
    { feature: "Free to Use", giga: "100% Free", other: "Limited", gigaColor: "#4CAF50", otherColor: "#FFA500" },
    { feature: "One-Click GitHub Projects", giga: "Yes", other: "No", gigaColor: "#4CAF50", otherColor: "#FF6347" },
    { feature: "Built for Freshers & Tech Roles", giga: "Specifically Designed", other: "Generic", gigaColor: "#4CAF50", otherColor: "#FFA500" },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Box className={classes.headingWrapper}>
          <Typography className={classes.title} variant="h4">
            Why Giga Resume Builder Stands Out
          </Typography>
          <Typography className={classes.subtitle}>
            See how we compare to other resume builders
          </Typography>
        </Box>

        <Box className={classes.tableWrapper}>
          <Box className={classes.mobileOptimized}>
            {/* Header */}
            <Box className={classes.tableHeader}>
              <Box className={classes.headerCellLeft}>Feature</Box>
              <Box className={classes.headerCell}>Giga Resume Builder</Box>
              <Box className={classes.headerCell}>Other Resume Builders</Box>
            </Box>

            {/* Rows */}
            {features.map((row, index) => (
              <Box key={index} className={classes.row}>
                <Box className={classes.cellLeft}>{row.feature}</Box>
                <Box className={classes.cell} style={{ color: row.gigaColor }}>
                  {row.giga}
                </Box>
                <Box className={classes.cell} style={{ color: row.otherColor }}>
                  {row.other}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ComparisonSection;