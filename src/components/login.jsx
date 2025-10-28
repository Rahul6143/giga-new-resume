// import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";

// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   Divider,
// } from "@mui/material";
// import {
//   CheckCircle2,
//   Lightbulb,
//   FileText,
//   Eye,
//   Briefcase,
//   Sparkles,
// } from "lucide-react";
// import { motion } from "framer-motion";

// // STYLES
// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(135deg, #0A2463, #0D2D6C, #1E3A8A)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "20px",
//     position: "relative",
//     overflow: "hidden",
//   },
//   container: {
//     maxWidth: "1200px",
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     gap: "1rem",
//     height: "100%",
//   },
//   heroSection: {
//     color: "#FFFFFF",
//     padding: "1rem",
//     flex: "1 1 48%",
//     display: "flex",
//     flexDirection: "column",
//     gap: "1rem",
//   },
//   logoContainer: {
//     display: "flex",
//     paddingTop: "1.5rem",
//     marginLeft: "0.5rem",
//     alignItems: "center",
//     gap: "0.8rem",
//   },
//   heading: {
//     fontWeight: '700 !important',
//     lineHeight: '1.2 !important',
//     fontSize: "2.5rem !important",
//   },
//   subText: {
//     color: "#BFDBFE",
//     fontSize: "1.2rem",
//     marginTop: "0.5rem !important",
//     marginBottom: "0.6rem !important",
//   },
//   featuresWrap: {
//     display: "grid",
//     gridTemplateColumns: "repeat(2, 1fr)",
//     gap: "1rem",
//   },
//   featureCard: {
//     display: "flex",
//     alignItems: "center",
//     gap: "0.8rem",
//     background: "rgba(255,255,255,0.1)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "12px",
//     padding: "1rem",
//     border: "1px solid rgba(255,255,255,0.1)",
//     transition: "0.3s",
//     "&:hover": {
//       background: "rgba(255,255,255,0.15)",
//     },
//   },
//   iconBoxYellow: {
//     backgroundColor: "#EAB308",
//     borderRadius: "8px",
//     padding: "0.5rem",
//     display: "flex",
//   },
//   iconBoxBlue: {
//     backgroundColor: "#60A5FA",
//     borderRadius: "8px",
//     padding: "0.5rem",
//     display: "flex",
//   },
//   ctaSub: {
//     color: "#93C5FD",
//     marginTop: "0.9rem !important",
//   },
//   formSection: {
//     // padding: "1rem",
//     // marginTop: "1rem", //spacing from top
//     // marginBottom: "10px", //margin bottom to prevent cutoff
//     flex: "1 1 30%",
//   },
//   card: {
//     borderRadius: "24px",
//     backgroundColor: "#FFFFFF !important",
//     boxShadow: "0 10px 40px rgba(0,0,0,0.3) !important",
//     padding: "1.5rem",  // Reduced padding for compactness
//   },
//   formHeader: {
//     display: "flex",
//     alignItems: "center",
//     gap: "0.8rem",
//     marginBottom: "1rem",
//   },
//   // sparkIconBox: {
//   //   width: "32px",  // Reduced icon size
//   //   height: "32px",
//   //   backgroundColor: "#DBEAFE",
//   //   borderRadius: "10px",
//   //   display: "flex",
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   // },
//   dividerWrap: {
//     position: "relative",
//     margin: "1rem 0",
//     "& span": {
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       backgroundColor: "#FFFFFF",
//       padding: "0 0.5rem",
//       color: "#00358fff",
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       fontSize: "0.8rem",  // Reduced font size for "or"
//     },
//   },
//   textField: {
//   width: "100%",
//   "& .MuiOutlinedInput-root": {
//     borderRadius: "10px",           // Change border radius
//     backgroundColor: "#fff",        // Add background color
    
//   },
//   "& .MuiInputBase-input": {
//     fontSize: "0.9rem",             // Change font size
//     color: "#0b0f19ff",               // Input text color
//   },
//   "& input::placeholder": {
//     color: "#00000070",  // 👈 Light grayish-blue placeholder color
//     opacity: 1,
//   },
//   "& .MuiOutlinedInput-notchedOutline": {
//     borderColor: "#2f73fc4e",         // Outline color
//   },
//   "&:hover .MuiOutlinedInput-notchedOutline": {
//     borderColor: "#3B82F6 !important",         // Outline on hover
//   },
//   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//     borderColor: "#2563EB",         // Outline when focused
//   },
// },

//   submitBtn: {
//     width: "100%",
//     backgroundColor: "#233f94 !important",
//     color: "#FFFFFF !important",
//     fontWeight: '400 !important',
//     fontSize: "14px !important",  // Reduced font size for button
//     marginTop: "1rem !important", 
//     padding: "8px !important",  // Reduced padding for button
//     borderRadius: "10px !important",  // Reduced border radius
//     boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//     "&:hover": {
//       backgroundColor: "#0D2D6C",
//     },
//   },
//   loginText: {
//     textAlign: "center",
//     color: "#6B7280",
//     marginTop: "10px !important",
//     marginBottom: "0.5rem !important",
//     fontSize: "0.8rem",  // Reduced font size
//   },
//   loginButton: {
//     color: "#2563EB",
//     fontWeight: 600,
//     marginLeft: "0.3rem",
//     fontSize: "0.85rem",  // Reduced font size for button
//     "&:hover": {
//       textDecoration: "underline",
//     },
//   },
//   decoYellow: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "400px",
//     height: "400px",
//     backgroundColor: "rgba(234,179,8,0.1)",
//     borderRadius: "50%",
//     filter: "blur(120px)",
//     zIndex: -1,
//   },
//   decoBlue: {
//     position: "fixed",
//     bottom: 0,
//     right: 0,
//     width: "400px",
//     height: "400px",
//     backgroundColor: "rgba(59,130,246,0.1)",
//     borderRadius: "50%",
//     filter: "blur(120px)",
//     zIndex: -1,
//   },
// });

// const Landing = () => {
//   const classes = useStyles();
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const features = [
//     { icon: CheckCircle2, text: "ATS Friendly", color: "yellow" },
//     { icon: Sparkles, text: "GenAI Recommendations", color: "blue" },
//     { icon: Lightbulb, text: "Project Recommendations", color: "blue" },
//     { icon: Eye, text: "Real-time Preview", color: "yellow" },
//     { icon: FileText, text: "Recruiter-approved Templates", color: "yellow" },
//     { icon: Briefcase, text: "Build portfolio projects directly", color: "blue" },
//   ];

//   const handleGoogle = () => alert("Google Sign Up Clicked");

//   const handleSubmit = (e) => {
//   e.preventDefault();
//   const { fullName, email, phone, password, confirmPassword } = form;

//   if (!fullName || !email || !phone || !password || !confirmPassword) {
//     alert("Please fill in all fields");
//     return;
//   }

//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   // Further validation (email format, password strength) can go here

//   alert("Form submitted successfully");
// };

//   return (
//     <Box className={classes.root}>
//       <Box className={classes.container}>
//         {/* LEFT: Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className={classes.heroSection}
//         >
//           {/* Logo */}
//           <Box className={classes.logoContainer}>
//             <Box className={classes.logoBox}>
//               <img src="/gigalogo.png" alt="Logo" width={48} height={48} />
//             </Box>
//             <Typography variant="h5" fontWeight={700}>
//               Gigaversity
//             </Typography>
//           </Box>

//           {/* Heading */}
//           <Box>
//             <Typography className={classes.heading}>
//               Launch your career with
//               <span style={{ color: "#FFFFFF" }}> Giga Resume </span>
//               <span style={{ color: "#EAB308" }}>Builder</span>
//             </Typography>
//             <Typography className={classes.subText}>
//               Write your first career chapter —{" "}
//               <span style={{ color: "#EAB308", fontWeight: 600 }}>For Free</span>
//             </Typography>
//           </Box>

//           {/* Features */}
//           <Box>
//             <Typography style={{ color: "#BFDBFE", fontWeight: '600', paddingBottom: '0.7em' }}>
//               Exclusive features:
//             </Typography>
//             <Box className={classes.featuresWrap}>
//               {features.map((f, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 * i, duration: 0.4 }}
//                   className={classes.featureCard}
//                 >
//                   <Box
//                     className={
//                       f.color === "yellow"
//                         ? classes.iconBoxYellow
//                         : classes.iconBoxBlue
//                     }
//                   >
//                     <f.icon color="#FFFFFF" size={20} />
//                   </Box>
//                   <Typography>{f.text}</Typography>
//                 </motion.div>
//               ))}
//             </Box>
//           </Box>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//           >
//             <Typography className={classes.ctaSub}>
//               Join thousands building their dream careers NOW
//             </Typography>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT: Sign Up Form */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className={classes.formSection}
//         >
//           <Card className={classes.card}>
//             {/* <Box
//             style={{display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem'}}>
//               <img src="/unnamed.png" alt="Logo" width={48} height={48} />
//                 <Typography variant="h5" fontWeight={700} color="#111827">
//                 Gigaversity
//               </Typography>
//               </Box> */}
//             <Box className={classes.formHeader}>
//               {/* <Box className={classes.sparkIconBox}>
//                 <Sparkles color="#2563EB" size={20} />
//               </Box> */}
//               <Typography variant="h5" fontWeight={700} color="#111827">
//                 Sign Up
//               </Typography>
//             </Box>
//             <Typography color="#6B7280">Create your account to get started</Typography>

//             <form onSubmit={handleSubmit}>
//               {/* Google Button */}
//               <Button
//                 variant="outlined"
//                 fullWidth
//                 style={{
//                   borderRadius: "12px",
//                   fontWeight: 600,
//                   padding: "0.8rem",  // Reduced padding
//                   marginTop: "10px",
//                   border: "2px solid #E5E7EB",
//                   backgroundColor: "#4285F4",
//                   color: "#FFFFFF",
//                 }}
//                 onClick={handleGoogle}
//               >
//                 <img src="/google.webp" alt="Logo" width={35} height={35} />
//                 <Typography style={{ marginLeft: "8px", fontSize: "0.9rem", fontWeight: 600 }}>
//                 Continue with Google
//                 </Typography>
//               </Button>

//               {/* Divider */}
//               <Box className={classes.dividerWrap}>
//                 <Divider />
//                 <span>or</span>
//               </Box>

//               {/* Inputs */}
//               <Box display="flex" flexDirection="column" gap="8px">  {/* Reduced gap */}
//                 <TextField
//                   variant="outlined"
//                   placeholder="Full Name"
//                   value={form.fullName}
//                   onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//                   className={classes.textField}
//                 />
//                 <TextField
//                   variant="outlined"
//                   type="email"
//                   placeholder="Email Address"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className={classes.textField}
//                 />
//                 <TextField
//                   variant="outlined"
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   className={classes.textField}
//                 />

//                 {/* Password Field */}
//                 <Box position="relative">
//                   <TextField
//                     variant="outlined"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     value={form.password}
//                     onChange={(e) => setForm({ ...form, password: e.target.value })}
//                     className={classes.textField}
//                   />
//                 </Box>


//                 {/* Confirm Password Field */}
//                 <Box position="relative">
//                   <TextField
//                     variant="outlined"
//                     type={showConfirm ? "text" : "password"}
//                     placeholder="Confirm Password"
//                     value={form.confirmPassword}
//                     onChange={(e) =>
//                       setForm({ ...form, confirmPassword: e.target.value })
//                     }
//                     className={classes.textField}
//                   />
//                 </Box>
//               </Box>

//               {/* Submit */}
//               <Button type="submit" className={classes.submitBtn}>
//                 Sign Up
//               </Button>

//               <Typography className={classes.loginText}>
//                 Already have an account?  
//               </Typography>

//               <Button
//                 onClick={handleGoogle}
//                 disableRipple
//                 sx={{
//                   backgroundColor: '#ffffffff',
//                   color: '#1976d2',
//                   padding: '8px 24px',
//                   width: '100%',
//                   borderRadius: '10px',
//                   border: '1px solid #1976d2',
//                   textTransform: 'none',
//                   fontWeight: 600,
//                   '&:hover': {
//                     backgroundColor: '#ffffffff',
//                     boxShadow: '0 4px 12px rgba(21, 101, 192, 0.5)',
//                   },
//                   '&:active': {
//                     backgroundColor: '#0d47a1',
//                   },
//                 }}
//               >
//                 Log in
//               </Button>

//             </form>
//           </Card>
//         </motion.div>
//       </Box>

//       {/* Background circles */}
//       <div className={classes.decoYellow}></div>
//       <div className={classes.decoBlue}></div>
//     </Box>
//   );
// };

// export default Landing;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  Divider,
} from "@mui/material";
import {
  CheckCircle2,
  Lightbulb,
  FileText,
  Eye,
  Briefcase,
  Sparkles,
} from "lucide-react";

const Landing = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const features = [
    { icon: CheckCircle2, text: "ATS Friendly", color: "yellow" },
    { icon: Sparkles, text: "GenAI Recommendations", color: "blue" },
    { icon: Lightbulb, text: "Project Recommendations", color: "blue" },
    { icon: Eye, text: "Real-time Preview", color: "yellow" },
    { icon: FileText, text: "Recruiter-approved Templates", color: "yellow" },
    { icon: Briefcase, text: "Build portfolio projects directly", color: "blue" },
  ];

  const handleGoogle = () => alert("Google Sign Up Clicked");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, password, confirmPassword } = form;

    if (!fullName || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Form submitted successfully");
  };

  return (
    <Box style={{
      background: "linear-gradient(135deg, #0A2463, #0D2D6C, #1E3A8A)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "20px",
      paddingRight:"20px",
      position: "relative",
      overflow: "hidden",
    }}>
      <Box style={{
        width: "1200px",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        height: "100%"
      }}>
        {/* LEFT: Hero Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            color: "#FFFFFF",
            padding: "1rem",
            flex: "1 1 48%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* Logo */}
          <Box style={{
            display: "flex",
            paddingTop: "1.5rem",
            marginLeft: "0.5rem",
            alignItems: "center",
            gap: "0.8rem"
          }}>
            <Box>
              <img src="/gigalogo.png" alt="Logo" width={48} height={48} />
            </Box>
            <Typography variant="h5" style={{ fontWeight: 700 }}>
              Gigaversity
            </Typography>
          </Box>

          {/* Heading */}
          <Box>
            <Typography style={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: "2.5rem"
            }}>
              Launch your career with
              <span style={{ color: "#FFFFFF" }}> </span>
              <span style={{ color: "#EAB308" }}>Giga Resume Builder</span>
            </Typography>
            <Typography style={{
              color: "#BFDBFE",
              fontSize: "1.2rem",
              marginTop: "0.5rem",
              marginBottom: "0.6rem"
            }}>
              Write your first career chapter —{" "}
              <span style={{ color: "#60A5FA", fontWeight: 600 }}>For Free</span>
            </Typography>
          </Box>

          {/* Features */}
          <Box>
            <Typography style={{ color: "#BFDBFE", fontWeight: 600, paddingBottom: '0.7em' }}>
              Exclusive features:
            </Typography>
            <Box style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem"
            }}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  }}
                >
                  <Box
                    style={{
                      backgroundColor: f.color === "yellow" ? "#EAB308" : "#60A5FA",
                      borderRadius: "8px",
                      padding: "0.5rem",
                      display: "flex",
                    }}
                  >
                    <f.icon color="#FFFFFF" size={20} />
                  </Box>
                  <Typography>{f.text}</Typography>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Typography style={{
              color: "#93C5FD",
              marginTop: "0.9rem"
            }}>
              Join thousands building their dream careers NOW
            </Typography>
          </motion.div>
        </motion.div>

        {/* RIGHT: Sign Up Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            padding: "0.8rem",
            flex: "1 1 30%",
          }}
        >
          <Card style={{
            borderRadius: "24px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingTop: "1rem",
            paddingBottom: "1.2rem"
          }}>
            <Box style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              marginBottom: "1rem"
            }}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#111827" }}>
                Sign Up
              </Typography>
            </Box>
            <Typography style={{ color: "#6B7280" }}>Create your account to get started</Typography>

            <form onSubmit={handleSubmit}>
              {/* Google Button */}
              <Button
                variant="outlined"
                fullWidth
                style={{
                  borderRadius: "12px",
                  fontWeight: 600,
                  padding: "0.8rem",
                  marginTop: "10px",
                  border: "2px solid #E5E7EB",
                  backgroundColor: "#4285F4",
                  color: "#FFFFFF",
                }}
                onClick={handleGoogle}
              >
                <img src="/google.webp" alt="Logo" width={35} height={35} />
                <Typography style={{ marginLeft: "8px", fontSize: "0.9rem", fontWeight: 600 }}>
                  Continue with Google
                </Typography>
              </Button>

              {/* Divider */}
              <Box style={{
                position: "relative",
                margin: "1rem 0"
              }}>
                <Divider />
                <span style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#FFFFFF",
                  padding: "0 0.5rem",
                  color: "#00358fff",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  fontSize: "0.8rem"
                }}>or</span>
              </Box>

              {/* Inputs */}
              <Box style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <TextField
                  variant="outlined"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor: "#fff",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "0.9rem",
                      color: "#0b0f19ff",
                    },
                    "& input::placeholder": {
                      color: "#00000070",
                      opacity: 1,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2f73fc4e",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3B82F6 !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2563EB",
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor: "#fff",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "0.9rem",
                      color: "#0b0f19ff",
                    },
                    "& input::placeholder": {
                      color: "#00000070",
                      opacity: 1,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2f73fc4e",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3B82F6 !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2563EB",
                    },
                  }}
                />
                <TextField
                  variant="outlined"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor: "#fff",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "0.9rem",
                      color: "#0b0f19ff",
                    },
                    "& input::placeholder": {
                      color: "#00000070",
                      opacity: 1,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2f73fc4e",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3B82F6 !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2563EB",
                    },
                  }}
                />

                {/* Password Field */}
                <Box style={{ position: "relative" }}>
                  <TextField
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        backgroundColor: "#fff",
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "0.9rem",
                        color: "#0b0f19ff",
                      },
                      "& input::placeholder": {
                        color: "#00000070",
                        opacity: 1,
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#2f73fc4e",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#3B82F6 !important",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#2563EB",
                      },
                    }}
                  />
                </Box>

                {/* Confirm Password Field */}
                <Box style={{ position: "relative" }}>
                  <TextField
                    variant="outlined"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm({ ...form, confirmPassword: e.target.value })
                    }
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        backgroundColor: "#fff",
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "0.9rem",
                        color: "#0b0f19ff",
                      },
                      "& input::placeholder": {
                        color: "#00000070",
                        opacity: 1,
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#2f73fc4e",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#3B82F6 !important",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#2563EB",
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Submit */}
              <Button 
                type="submit" 
                sx={{
                  width: "100%",
                  backgroundColor: "#233f94 !important",
                  color: "#FFFFFF !important",
                  fontWeight: 400,
                  fontSize: "14px",
                  marginTop: "1rem",
                  padding: "8px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                  "&:hover": {
                    backgroundColor: "#0D2D6C",
                  },
                }}
              >
                Sign Up
              </Button>

              <Typography style={{
                textAlign: "center",
                color: "#6B7280",
                marginTop: "10px",
                marginBottom: "0.5rem",
                fontSize: "0.8rem"
              }}>
                Already have an account?  
              </Typography>

              <Button
                onClick={handleGoogle}
                disableRipple
                sx={{
                  backgroundColor: '#ffffffff',
                  color: '#1976d2',
                  padding: '8px 24px',
                  width: '100%',
                  borderRadius: '10px',
                  border: '1px solid #1976d2',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#ffffffff',
                    boxShadow: '0 4px 12px rgba(21, 101, 192, 0.5)',
                  },
                  '&:active': {
                    backgroundColor: '#0d47a1',
                  },
                }}
              >
                Log in
              </Button>
            </form>
          </Card>
        </motion.div>
      </Box>

      {/* Background circles */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "400px",
        backgroundColor: "rgba(234,179,8,0.1)",
        borderRadius: "50%",
        filter: "blur(120px)",
        zIndex: -1
      }}></div>
      <div style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "400px",
        height: "400px",
        backgroundColor: "rgba(59,130,246,0.1)",
        borderRadius: "50%",
        filter: "blur(120px)",
        zIndex: -1
      }}></div>
    </Box>
  );
};

export default Landing;