// import React from "react";
// import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { useNavigate } from "react-router-dom";

// const useStyles = makeStyles({
//   appBar: {
//     backgroundColor: "#FFFFFF !important",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1) !important",
//     position: "fixed !important",
//     top: 0,
//     left: 0,
//     width: "100%",
//     zIndex: 50,
//     height: "70px !important",
//     fontFamily: "'Roboto', sans-serif !important",
//   },
//   toolbar: {
//     display: "flex !important",
//     justifyContent: "space-around !important",
//     alignItems: "center !important",
//     maxWidth: "1200px !important",
//     margin: "0 auto",
//     width: "100%",
//   },
//   logoContainer: {
//     display: "flex !important",
//     alignItems: "center !important",
//     textDecoration: "none !important",
//     cursor: "pointer",
//   },
//   // logoText: {
//   //   fontSize: "1rem !important",
//   //   fontWeight: "700!important",
//   //   // background: "linear-gradient(90deg, #2563EB, #7C3AED) !important",
//   //   background:"#2563EB !important",
//   //   WebkitBackgroundClip: "text!important",
//   //   WebkitTextFillColor: "transparent !important",
//   // },
//   navLinks: {
//     display: "flex !important",
//     gap: "32px !important",
//     listStyle: "none !important",
//     alignItems: "center !important",
//     "@media (max-width: 960px)": {
//       display: "none",
//     },
//   },
//   navItem: {
//     color: "#374151 !important",
//     fontSize: "1rem !important",
//     fontFamily: "'Roboto', sans-serif !important",
//     fontWeight: "500!important",
//     textDecoration: "none !important",
//     marginRight: "16px !important",
//     transition: "color 0.3s ease !important",
//     "&:hover": {
//       color: "#2563EB !important",
//     },
//   },
//   rightButtons: {
//     display: "flex !important",
//     alignItems: "center !important",
//     gap: "16px !important",
//     "@media (max-width: 960px)": {
//       display: "none",
//     },
//   },
//   loginBtn: {
//     color: "#374151 !important",
//     fontFamily: "'Roboto', sans-serif !important",
//     fontSize: "1rem !important",
//     fontWeight: "500!important",
//     textTransform: "none!important",
//     "&:hover": {
//       color: "#2563EB !important",
//     },
//   },
//   getStartedBtn: {
//     backgroundColor: "#2563EB !important",
//     color: "#FFFFFF !important",
//     padding: "8px 20px !important",
//     borderRadius: "8px !important",
//     fontWeight: "500!important",
//     textTransform: "none!important",
//     "&:hover": {
//       backgroundColor: "#1E40AF !important",
//     },
//   },
// });

// const Navbar = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   const handleGetStartedClick = () => {
//     navigate("/templates");
//   };

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <AppBar className={classes.appBar} elevation={0}>
//       <Toolbar className={classes.toolbar}>
//         <Box className={classes.logoContainer} onClick={() => navigate("/")}>
//           <img src="gigalogo.png" alt="logo" height={60} width={65}/>
//           {/* <Typography className={classes.logoText}>Giga Resume Builder</Typography> */}
//         </Box>

//         <ul className={classes.navLinks}>
//           <li>
//             <Button className={classes.navItem} onClick={() => scrollToSection("features")}>
//               Features
//             </Button>
//           </li>
//           <li>
//             <Button className={classes.navItem} onClick={() => scrollToSection("reviews")}>
//               Reviews
//             </Button>
//           </li>
//           <li>
//             <Button className={classes.navItem} onClick={() => scrollToSection("faqs")}>
//               FAQs
//             </Button>
//           </li>
//           <li>
//             <Button className={classes.navItem} onClick={() => scrollToSection("aboutus")}>
//               About Us
//             </Button>
//           </li>
//         </ul>

//         <Box className={classes.rightButtons}>
//           <Button className={classes.loginBtn} onClick={handleLoginClick} disableElevation>
//             LOGIN
//           </Button>
//           <Button className={classes.getStartedBtn} onClick={handleGetStartedClick} disableElevation>
//             GET STARTED
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#FFFFFF !important",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1) !important",
    position: "fixed !important",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 50,
    height: "70px !important",
    fontFamily: "'Roboto', sans-serif !important",
  },
  toolbar: {
    display: "flex !important",
    justifyContent: "space-between !important",
    alignItems: "center !important",
    maxWidth: "1200px !important",
    margin: "0 auto",
    width: "100%",
    padding: "0 1rem !important",
    
    "@media (max-width: 768px)": {
      padding: "0 0.75rem !important",
    },
    
    "@media (max-width: 480px)": {
      padding: "0 0.5rem !important",
    },
  },
  logoContainer: {
    display: "flex !important",
    alignItems: "center !important",
    textDecoration: "none !important",
    cursor: "pointer",
    flexShrink: 0,
  },
  logo: {
    height: "60px",
    width: "65px",
    
    "@media (max-width: 768px)": {
      height: "50px",
      width: "55px",
    },
    
    "@media (max-width: 480px)": {
      height: "45px",
      width: "50px",
    },
  },
  navLinks: {
    display: "flex !important",
    gap: "32px !important",
    listStyle: "none !important",
    alignItems: "center !important",
    margin: 0,
    padding: 0,
    
    "@media (max-width: 960px)": {
      display: "none !important",
    },
  },
  navItem: {
    color: "#374151 !important",
    fontSize: "1rem !important",
    fontFamily: "'Roboto', sans-serif !important",
    fontWeight: "500!important",
    textDecoration: "none !important",
    marginRight: "16px !important",
    transition: "color 0.3s ease !important",
    textTransform: "none !important",
    minWidth: "auto !important",
    padding: "8px 16px !important",
    
    "&:hover": {
      color: "#2563EB !important",
      backgroundColor: "transparent !important",
    },
  },
  rightButtons: {
    display: "flex !important",
    alignItems: "center !important",
    gap: "16px !important",
    
    "@media (max-width: 960px)": {
      display: "none !important",
    },
  },
  loginBtn: {
    color: "#374151 !important",
    fontFamily: "'Roboto', sans-serif !important",
    fontSize: "1rem !important",
    fontWeight: "500!important",
    textTransform: "none!important",
    padding: "8px 20px !important",
    
    "&:hover": {
      color: "#2563EB !important",
      backgroundColor: "transparent !important",
    },
  },
  getStartedBtn: {
    backgroundColor: "#2563EB !important",
    color: "#FFFFFF !important",
    padding: "8px 20px !important",
    borderRadius: "8px !important",
    fontWeight: "500!important",
    textTransform: "none!important",
    fontSize: "1rem !important",
    
    "&:hover": {
      backgroundColor: "#1E40AF !important",
    },
  },
  mobileMenuButton: {
    display: "none !important",
    color: "#374151 !important",
    
    "@media (max-width: 960px)": {
      display: "flex !important",
    },
    
    "@media (max-width: 480px)": {
      padding: "6px !important",
    },
  },
  drawer: {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: "280px",
      backgroundColor: "#FFFFFF",
      padding: "1rem",
    },
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
    borderBottom: "1px solid #E5E7EB",
    marginBottom: "1rem",
  },
  drawerTitle: {
    color: "#374151",
    fontWeight: "600 !important",
    fontSize: "1.25rem !important",
  },
  drawerList: {
    padding: 0,
  },
  drawerListItem: {
    padding: "12px 16px !important",
    borderRadius: "8px !important",
    marginBottom: "4px !important",
    
    "&:hover": {
      backgroundColor: "#F3F4F6 !important",
    },
  },
  drawerItemText: {
    "& .MuiTypography-root": {
      fontFamily: "'Roboto', sans-serif",
      fontSize: "1rem",
      fontWeight: "500",
      color: "#374151",
    },
  },
  drawerButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "1rem 0",
    marginTop: "auto",
  },
  drawerLoginBtn: {
    color: "#374151 !important",
    fontFamily: "'Roboto', sans-serif !important",
    fontSize: "1rem !important",
    fontWeight: "500 !important",
    textTransform: "none !important",
    padding: "10px 16px !important",
    border: "1px solid #D1D5DB !important",
    borderRadius: "8px !important",
    
    "&:hover": {
      backgroundColor: "#F9FAFB !important",
    },
  },
  drawerGetStartedBtn: {
    backgroundColor: "#2563EB !important",
    color: "#FFFFFF !important",
    padding: "10px 16px !important",
    borderRadius: "8px !important",
    fontWeight: "500 !important",
    textTransform: "none !important",
    fontSize: "1rem !important",
    
    "&:hover": {
      backgroundColor: "#1E40AF !important",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLoginClick = () => {
    navigate("/login");
    setDrawerOpen(false);
  };

  const handleGetStartedClick = () => {
    navigate("/templates");
    setDrawerOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "Features", id: "features" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQs", id: "faqs" },
    { label: "About Us", id: "aboutus" },
  ];

  const drawerContent = () => (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div className={classes.drawerHeader}>
        <Typography className={classes.drawerTitle}>Menu</Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </div>

      <List className={classes.drawerList}>
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            className={classes.drawerListItem}
            onClick={() => scrollToSection(item.id)}
            button
          >
            <ListItemText
              primary={item.label}
              className={classes.drawerItemText}
            />
          </ListItem>
        ))}
      </List>

      <div className={classes.drawerButtons}>
        <Button
          className={classes.drawerLoginBtn}
          onClick={handleLoginClick}
          fullWidth
        >
          LOGIN
        </Button>
        <Button
          className={classes.drawerGetStartedBtn}
          onClick={handleGetStartedClick}
          fullWidth
        >
          GET STARTED
        </Button>
      </div>
    </Box>
  );

  return (
    <AppBar className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logoContainer} onClick={() => navigate("/")}>
          <img
            src="gigalogo.png"
            alt="Giga Resume Builder"
            className={classes.logo}
          />
        </Box>

        {/* Desktop Navigation */}
        <ul className={classes.navLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              <Button
                className={classes.navItem}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <Box className={classes.rightButtons}>
          <Button className={classes.loginBtn} onClick={handleLoginClick}>
            LOGIN
          </Button>
          <Button
            className={classes.getStartedBtn}
            onClick={handleGetStartedClick}
          >
            GET STARTED
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          className={classes.mobileMenuButton}
          onClick={toggleDrawer(true)}
          size="large"
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          className={classes.drawer}
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerContent()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;