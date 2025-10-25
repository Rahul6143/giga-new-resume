// import React from 'react';
// import { Box, Typography, Container } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   footer: {
//     background: 'linear-gradient(90deg, #004080 0%, #001f3f 100%) !important',
//     color: '#fffff !importantf',
//     padding: '70px 0 30px 0 !important',
//     fontFamily: 'Montserrat, sans-serif !important',
//   },
//   container: {
//     display: 'flex !important',
//     flexDirection: 'column !important',
//     maxWidth: '1250px !important',
//   },
//   content: {
//     display: 'grid !important',
//     gridTemplateColumns: '1.2fr 1fr 1fr 1fr !important',
//     gap: '50px !important',
//     marginBottom: '50px !important',
//     alignItems: 'flex-start !important',
//   },
//   section: {
//     display: 'flex !important',
//     flexDirection: 'column !important',
//   },
//   title: {
//     fontSize: '28px !important',
//     fontWeight: '700 !important',
//     marginTop: '15px !important',
//     marginBottom: '18px !important',
//     color: '#ffffff !important',
//   },
//   description: {
//     fontSize: '15px !important',
//     color: '#cfd8e8 !important',
//     lineHeight: '1.6 !important',
//     maxWidth: '320px !important',
//   },
//   sectionTitle: {
//     fontSize: '18px !important',
//     fontWeight: '600 !important',
//     marginBottom: '20px !important',
//     color: '#ffffff !important',
//     borderBottom: '3px solid #f9b600 !important',
//     display: 'inline-block !important',
//     paddingBottom: '5px !important',
//   },
//   linksContainer: {
//     display: 'flex !important',
//     flexDirection: 'column !important',
//     gap: '12px !important',
//   },
//   link: {
//     fontSize: '15px !important',
//     color: '#d9d9d9 !important',
//     textDecoration: 'none !important',
//     transition: 'color 0.3s ease !important',
//     display: 'flex !important',
//     alignItems: 'center !important',
//     '&:hover': {
//       color: '#f9b600',
//     },
//   },
//   contactInfo: {
//     fontSize: '15px !important',
//     color: '#d9d9d9 !important',
//     marginBottom: '10px !important',
//     lineHeight: '1.7 !important',
//   },
//   bottomSection: {
//     display: 'flex !important',
//     justifyContent: 'space-between !important',
//     alignItems: 'center !important',
//     borderTop: '1px solid rgba(255, 255, 255, 0.15) !important',
//     paddingTop: '25px !important',
//     flexWrap: 'wrap !important',
//   },
//   copyright: {
//     fontSize: '14px !important',
//     color: '#cccccc !important',
//   },
//   poweredBy: {
//     fontSize: '14px !important',
//     color: '#cccccc !important',
//   },
// });

// const Footer = () => {
//   const classes = useStyles();

//   return (
//     <Box component="footer" className={classes.footer}>
//       <Container maxWidth="lg" className={classes.container}>
//         {/* Main Content */}
//         <Box className={classes.content}>
//           {/* Brand Section */}
//           <Box className={classes.section}>
//             <img src="gigalogo.png" alt="logo" height={50} width={50} />
//             <Typography variant="h2" className={classes.title}>
//               Gigaversity
//             </Typography>
//             <Typography className={classes.description}>
//               India's premier platform connecting students with top tech employers, offering specialized training for in-demand skills.
//             </Typography>
//           </Box>

//           {/* Quick Links */}
//           <Box className={classes.section}>
//             <Typography className={classes.sectionTitle}>Quick Links</Typography>
//             <Box className={classes.linksContainer}>
//               <a href="#" className={classes.link}>Home</a>
//               <a href="#" className={classes.link}>About Us</a>
//               <a href="#" className={classes.link}>Blog</a>
//               <a href="#" className={classes.link}>Products</a>
//               <a href="#" className={classes.link}>Contact Us</a>
//               <a href="#" className={classes.link}>Privacy Policy</a>
//               <a href="#" className={classes.link}>Terms & Conditions</a>
//               <a href="#" className={classes.link}>Sitemap</a>
//             </Box>
//           </Box>

//           {/* Full Time Programs + Virtual Placement */}
//           <Box className={classes.section}>
//             <Typography className={classes.sectionTitle}>Full Time Programs</Typography>
//             <Box className={classes.linksContainer}>
//               <a href="#" className={classes.link}>Full Stack Program</a>
//               <a href="#" className={classes.link}>Data Science Program</a>
//             </Box>

//             <Typography className={classes.sectionTitle} style={{ marginTop: '30px' }}>
//               Virtual Placement
//             </Typography>
//             <Box className={classes.linksContainer}>
//               <a href="#" className={classes.link}>Full Stack</a>
//               <a href="#" className={classes.link}>Data Science</a>
//             </Box>
//           </Box>

//           {/* Contact Us */}
//           <Box className={classes.section}>
//             <Typography className={classes.sectionTitle}>Contact Us</Typography>
//             <Typography className={classes.contactInfo}>
//               The Headquarters, Dwaraka Pride,<br />
//               Hitech City, 500081,<br />
//               Hyderabad, Telangana, India
//             </Typography>
//             <Typography className={classes.contactInfo}>7416952026</Typography>
//             <Typography className={classes.contactInfo}>info@gigaversity.in</Typography>
//           </Box>
//         </Box>

//         {/* Bottom Section */}
//         <Box className={classes.bottomSection}>
//           <Typography className={classes.copyright}>
//             Copyright © 2025 All rights reserved. Gigaversity
//           </Typography>
//           <Typography className={classes.poweredBy}>
//             Powered by Sun E-Learning
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;


import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    background: 'linear-gradient(90deg, #004080 0%, #001f3f 100%) !important',
    color: '#ffffff !important',
    padding: '40px 0 20px 0 !important',
    fontFamily: 'Montserrat, sans-serif !important',
    
    '@media (max-width: 768px)': {
      padding: '30px 0 15px 0 !important',
    },
    
    '@media (max-width: 480px)': {
      padding: '20px 0 10px 0 !important',
    },
  },
  container: {
    display: 'flex !important',
    flexDirection: 'column !important',
    maxWidth: '1250px !important',
    padding: '0 1rem !important',
    
    '@media (max-width: 768px)': {
      padding: '0 0.75rem !important',
    },
    
    '@media (max-width: 480px)': {
      padding: '0 0.5rem !important',
    },
  },
  content: {
    display: 'grid !important',
    gridTemplateColumns: '1.2fr 1fr 1fr 1fr !important',
    gap: '50px !important',
    marginBottom: '50px !important',
    alignItems: 'flex-start !important',
    
    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr 1fr 1fr !important',
      gap: '40px !important',
      marginBottom: '40px !important',
    },
    
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr 1fr !important',
      gap: '30px !important',
      marginBottom: '30px !important',
    },
    
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr !important',
      gap: '25px !important',
      marginBottom: '25px !important',
      textAlign: 'center !important',
    },
  },
  section: {
    display: 'flex !important',
    flexDirection: 'column !important',
    
    '@media (max-width: 600px)': {
      alignItems: 'center !important',
    },
  },
  logo: {
    height: '50px',
    width: '50px',
    
    '@media (max-width: 768px)': {
      height: '45px',
      width: '45px',
    },
    
    '@media (max-width: 480px)': {
      height: '40px',
      width: '40px',
    },
  },
  title: {
    fontSize: '28px !important',
    fontWeight: '700 !important',
    marginTop: '15px !important',
    marginBottom: '18px !important',
    color: '#ffffff !important',
    
    '@media (max-width: 1024px)': {
      fontSize: '24px !important',
    },
    
    '@media (max-width: 768px)': {
      fontSize: '22px !important',
      marginTop: '12px !important',
      marginBottom: '15px !important',
    },
    
    '@media (max-width: 480px)': {
      fontSize: '20px !important',
      marginTop: '10px !important',
      marginBottom: '12px !important',
    },
  },
  description: {
    fontSize: '15px !important',
    color: '#cfd8e8 !important',
    lineHeight: '1.6 !important',
    maxWidth: '320px !important',
    
    '@media (max-width: 1024px)': {
      fontSize: '14px !important',
      maxWidth: '280px !important',
    },
    
    '@media (max-width: 768px)': {
      fontSize: '13px !important',
      maxWidth: '100% !important',
    },
    
    '@media (max-width: 600px)': {
      fontSize: '14px !important',
      textAlign: 'center !important',
    },
  },
  sectionTitle: {
    fontSize: '18px !important',
    fontWeight: '600 !important',
    marginBottom: '20px !important',
    color: '#ffffff !important',
    borderBottom: '3px solid #f9b600 !important',
    display: 'inline-block !important',
    paddingBottom: '5px !important',
    
    '@media (max-width: 1024px)': {
      fontSize: '16px !important',
      marginBottom: '18px !important',
    },
    
    '@media (max-width: 768px)': {
      fontSize: '15px !important',
      marginBottom: '15px !important',
    },
    
    '@media (max-width: 600px)': {
      fontSize: '16px !important',
      textAlign: 'center !important',
    },
  },
  linksContainer: {
    display: 'flex !important',
    flexDirection: 'column !important',
    gap: '12px !important',
    
    '@media (max-width: 768px)': {
      gap: '10px !important',
    },
    
    '@media (max-width: 600px)': {
      alignItems: 'center !important',
    },
  },
  link: {
    fontSize: '15px !important',
    color: '#d9d9d9 !important',
    textDecoration: 'none !important',
    transition: 'color 0.3s ease !important',
    display: 'flex !important',
    alignItems: 'center !important',
    
    '&:hover': {
      color: '#f9b600 !important',
    },
    
    '@media (max-width: 1024px)': {
      fontSize: '14px !important',
    },
    
    '@media (max-width: 768px)': {
      fontSize: '13px !important',
    },
    
    '@media (max-width: 600px)': {
      fontSize: '14px !important',
      justifyContent: 'center !important',
    },
  },
  contactInfo: {
    fontSize: '15px !important',
    color: '#d9d9d9 !important',
    marginBottom: '10px !important',
    lineHeight: '1.7 !important',
    
    '@media (max-width: 1024px)': {
      fontSize: '14px !important',
    },
    
    '@media (max-width: 768px)': {
      fontSize: '13px !important',
      lineHeight: '1.6 !important',
    },
    
    '@media (max-width: 600px)': {
      fontSize: '14px !important',
      textAlign: 'center !important',
    },
  },
  programSection: {
    marginTop: '30px !important',
    
    '@media (max-width: 768px)': {
      marginTop: '25px !important',
    },
    
    '@media (max-width: 600px)': {
      marginTop: '20px !important',
    },
  },
  bottomSection: {
    display: 'flex !important',
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
    borderTop: '1px solid rgba(255, 255, 255, 0.15) !important',
    paddingTop: '25px !important',
    flexWrap: 'wrap !important',
    gap: '15px',
    
    '@media (max-width: 768px)': {
      paddingTop: '20px !important',
      flexDirection: 'column !important',
      textAlign: 'center !important',
      gap: '10px',
    },
    
    '@media (max-width: 480px)': {
      paddingTop: '15px !important',
    },
  },
  copyright: {
    fontSize: '14px !important',
    color: '#cccccc !important',
    
    '@media (max-width: 768px)': {
      fontSize: '13px !important',
      order: 2,
    },
    
    '@media (max-width: 480px)': {
      fontSize: '12px !important',
    },
  },
  poweredBy: {
    fontSize: '14px !important',
    color: '#cccccc !important',
    
    '@media (max-width: 768px)': {
      fontSize: '13px !important',
      order: 1,
    },
    
    '@media (max-width: 480px)': {
      fontSize: '12px !important',
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Container maxWidth="lg" className={classes.container}>
        {/* Main Content */}
        <Box className={classes.content}>
          {/* Brand Section */}
          <Box className={classes.section}>
            <img 
              src="gigalogo.png" 
              alt="Gigaversity Logo" 
              className={classes.logo}
            />
            <Typography variant="h2" className={classes.title}>
              Gigaversity
            </Typography>
            <Typography className={classes.description}>
              India's premier platform connecting students with top tech employers, offering specialized training for in-demand skills.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box className={classes.section}>
            <Typography className={classes.sectionTitle}>Quick Links</Typography>
            <Box className={classes.linksContainer}>
              <a href="#" className={classes.link}>Home</a>
              <a href="#" className={classes.link}>About Us</a>
              <a href="#" className={classes.link}>Blog</a>
              <a href="#" className={classes.link}>Products</a>
              <a href="#" className={classes.link}>Contact Us</a>
              <a href="#" className={classes.link}>Privacy Policy</a>
              <a href="#" className={classes.link}>Terms & Conditions</a>
              <a href="#" className={classes.link}>Sitemap</a>
            </Box>
          </Box>

          {/* Full Time Programs + Virtual Placement */}
          <Box className={classes.section}>
            <Typography className={classes.sectionTitle}>Full Time Programs</Typography>
            <Box className={classes.linksContainer}>
              <a href="#" className={classes.link}>Full Stack Program</a>
              <a href="#" className={classes.link}>Data Science Program</a>
            </Box>

            <Box className={classes.programSection}>
              <Typography className={classes.sectionTitle}>
                Virtual Placement
              </Typography>
              <Box className={classes.linksContainer}>
                <a href="#" className={classes.link}>Full Stack</a>
                <a href="#" className={classes.link}>Data Science</a>
              </Box>
            </Box>
          </Box>

          {/* Contact Us */}
          <Box className={classes.section}>
            <Typography className={classes.sectionTitle}>Contact Us</Typography>
            <Typography className={classes.contactInfo}>
              The Headquarters, Dwaraka Pride,<br />
              Hitech City, 500081,<br />
              Hyderabad, Telangana, India
            </Typography>
            <Typography className={classes.contactInfo}>7416952026</Typography>
            <Typography className={classes.contactInfo}>info@gigaversity.in</Typography>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box className={classes.bottomSection}>
          <Typography className={classes.copyright}>
            Copyright © 2025 All rights reserved. Gigaversity
          </Typography>
          <Typography className={classes.poweredBy}>
            Powered by Sun E-Learning
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;