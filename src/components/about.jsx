// import React from "react";
// import { GraduationCap, Sparkles, Target, Rocket, Users, Award, TrendingUp, CheckCircle } from "lucide-react";
// import { Button, Card, CardContent } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   root: {
//     // minHeight: '100vh',
//     fontFamily: 'Montserrat, sans-serif !important',
//     background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #faf5ff 100%)'
//   },
//   heroSection: {
//     position: 'relative',
//     // minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden'
//   },
//   heroBackground: {
//     position: 'absolute',
//     inset: '0',
//     // background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #2563eb 100%) !important'
//     background: "linear-gradient(135deg, #004080 0%, #001f3f 100%)",
//   },
//   animatedBackground: {
//     position: 'absolute',
//     inset: '0',
//     opacity: 0.3
//   },
//   blob1: {
//     position: 'absolute',
//     top: '80px',
//     left: '80px',
//     width: '288px',
//     height: '288px',
//     backgroundColor: '#a78bfa',
//     borderRadius: '50%',
//     mixBlendMode: 'multiply',
//     filter: 'blur(48px)'
//   },
//   blob2: {
//     position: 'absolute',
//     top: '160px',
//     right: '80px',
//     width: '288px',
//     height: '288px',
//     backgroundColor: '#60a5fa',
//     borderRadius: '50%',
//     mixBlendMode: 'multiply',
//     filter: 'blur(48px)'
//   },
//   blob3: {
//     position: 'absolute',
//     bottom: '80px',
//     left: '160px',
//     width: '288px',
//     height: '288px',
//     backgroundColor: '#818cf8',
//     borderRadius: '50%',
//     mixBlendMode: 'multiply',
//     filter: 'blur(48px)'
//   },
//   heroContent: {
//     position: 'relative',
//     zIndex: 10,
//     maxWidth: '1280px',
//     margin: '0 auto',
//     padding: '40px 24px',
//     textAlign: 'center'
//   },
//   badge: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     backdropFilter: 'blur(12px)',
//     color: '#ffffff',
//     padding: '8px 16px',
//     borderRadius: '9999px',
//     marginBottom: '24px'
//   },
//   badgeText: {
//     fontSize: '14px',
//     fontWeight: 500
//   },
//   mainTitle: {
//     fontSize: '60px',
//     fontWeight: 'bold',
//     color: '#ffffff',
//     marginBottom: '24px',
//     marginTop: '16px',
//     letterSpacing: '-0.025em',
//     '@media (min-width: 768px)': {
//       fontSize: '96px'
//     }
//   },
//   gradientText: {
//     background: 'linear-gradient(90deg, #fde047 0%, #f9b600 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     display: 'block'
//   },
//   subtitle: {
//     fontSize: '20px',
//     color: '#e9d5ff',
//     maxWidth: '768px',
//     margin: '0 auto',
//     fontWeight: 300,
//     lineHeight: 1.75,
//     '@media (min-width: 768px)': {
//       fontSize: '24px'
//     }
//   },
//   scrollIndicator: {
//     position: 'absolute',
//     bottom: '40px',
//     left: '50%',
//     transform: 'translateX(-50%)'
//   },
//   scrollCircle: {
//     width: '24px',
//     height: '40px',
//     border: '2px solid rgba(255, 255, 255, 0.3)',
//     borderRadius: '9999px',
//     display: 'flex',
//     justifyContent: 'center'
//   },
//   scrollDot: {
//     width: '6px',
//     height: '6px',
//     backgroundColor: '#ffffff',
//     borderRadius: '50%',
//     marginTop: '8px'
//   },
//   section: {
//     position: 'relative',
//     padding: '50px 30px'
//   },
//   sectionTitle: {
//     fontSize: '48px',
//     fontWeight: 'bold',
//     color: '#111827 !important',
//     marginBottom: '24px',
//     marginTop: '0px',
//     letterSpacing: '-0.025em',
//     '@media (min-width: 768px)': {
//       fontSize: '60px'
//     }
//   },
//   sectionSubtitle: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     backgroundColor: '#f3e8ff',
//     color: '#7e22ce',
//     padding: '8px 16px',
//     borderRadius: '9999px',
//     marginBottom: '24px'
//   },
//   sectionSubtitleText: {
//     fontSize: '14px',
//     fontWeight: 600
//   },
//   contentGrid: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '30px',
//     '@media (min-width: 1024px)': {
//       flexDirection: 'row',
//       alignItems: 'center'
//     }
//   },
//   contentCard: {
//     padding: '10px',
//     backgroundColor: 'rgba(255, 255, 255, 0.6)',
//     backdropFilter: 'blur(24px)',
//     border: 'none',
//     borderRadius: '16px !important',
//     boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25) !important'
//   },
//   textContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     // gap: '24px',
//     color: '#374151',
//     lineHeight: 1.75,
//     fontSize: '18px'
//   },
//   highlightText: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     background: 'linear-gradient(90deg, #7c3aed 0%, #4f46e5 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent'
//   },
//   // boldPurple: {
//   //   fontWeight: 600,
//   //   color: '#7e22ce'
//   // },
//   // boldIndigo: {
//   //   fontWeight: 600,
//   //   color: '#4338ca'
//   // },
//   // boldBlue: {
//   //   fontWeight: 600,
//   //   color: '#1d4ed8'
//   // },
//   featuresGrid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   featureCard: {
//   padding: '24px',
//   backgroundColor: '#ffffff',
//   border: 'none',
//   boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25) !important',
//   height: '150px', // or let content decide height
// },
//   featureIcon: {
//     width: '56px',
//     height: '56px',
//     borderRadius: '16px',
//     display: 'flex',
//     alignItems: 'center !important',
//     justifyContent: 'center',
//     marginBottom: '16px'
//   },
//   statsSection: {
//     position: 'relative',
//     padding: '80px 24px',
//     background: "linear-gradient(135deg, #004080 0%, #003161ff 100%)",
//     overflow: 'hidden'
//   },
//   statsBackground: {
//     position: 'absolute',
//     inset: '0',
//     opacity: 0.1,
//     backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
//     backgroundSize: '40px 40px'
//   },
//   statsGrid: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '48px',
//     '@media (min-width: 768px)': {
//       flexDirection: 'row',
//       justifyContent: 'space-around'
//     }
//   },
//   statItem: {
//     textAlign: 'center'
//   },
//   statNumber: {
//     fontSize: '60px',
//     fontWeight: 'bold',
//     color: '#ffffff',
//     marginBottom: '12px',
//     '@media (min-width: 768px)': {
//       fontSize: '72px'
//     }
//   },
//   statLabel: {
//     color: '#ddd6fe',
//     fontSize: '18px',
//     fontWeight: 300
//   },
//   yellowAccent: {
//     color: '#fde047'
//   },
//   problemCard: {
//     position: 'relative',
//     padding: '30px',
//     backgroundColor: '#ffffff',
//     border: 'none',
//     height: '350px',
//     borderRadius: '16px !important',
//     boxShadow: '1px 2px 50px 2px rgba(0, 0, 0, 0.25) !important',
//   },
//   solutionCard: {
//     position: 'relative',
//     padding: '30px',
//     background: 'linear-gradient(90deg, #004080 0%, #001f3f 100%) !important',
//     border: 'none',
//     height: '350px',
//     borderRadius: '16px !important',
//     boxShadow: '1px 2px 50px 2px rgba(0, 0, 0, 0.25) !important',
//     color: '#ffffff'
//   },
//   featureList: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px'
//   },
//   featureItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px'
//   },
//   checkCircle: {
//     width: '24px',
//     height: '24px',
//     borderRadius: '50%',
//     backgroundColor: '#fde047',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexShrink: 0
//   },
// //   ctaSection: {
// //     position: 'relative',
// //     padding: '40px 24px',
// //     overflow: 'hidden',
// //     heignt: '700px',
// //     width: '900px',
// //     background:"#ffffff",
// //   },
// //   ctaBackground: {
// //     position: 'absolute',
// //     inset: '0',
// //     background: "linear-gradient(135deg, #004080 0%, #001f3f 100%) !important",
// //     // background:"#ffffff",
// //   },

// //   ctaWrapper: {
// //   display: 'flex',
// //   justifyContent: 'center',
// //   alignItems: 'center',
// //   padding: '80px 0',
// //   background: 'linear-gradient(135deg, #004080 0%, #001f3f 100%)',
// // },

// // ctaCard: {
// //   maxWidth: '800px',
// //   width: '100%',
// //   backgroundColor: '#ffffff !important',
// //   borderRadius: '24px !important',
// //   boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3) !important',
// //   textAlign: 'center',
// //   padding: '48px 32px',
// //   zIndex: 10,
// // },

// //   buttonGroup: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '16px',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     '@media (min-width: 640px)': {
// //       flexDirection: 'row'
// //     }
// //   },
// //   primaryButton: {
// //     background: 'linear-gradient(90deg, #a855f7 0%, #6366f1 100%)',
// //     color: '#ffffff',
// //     padding: '24px 32px',
// //     fontSize: '18px',
// //     borderRadius: '9999px',
// //     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
// //     '&:hover': {
// //       background: 'linear-gradient(90deg, #9333ea 0%, #4f46e5 100%)'
// //     }
// //   },
// //   secondaryButton: {
// //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //     backdropFilter: 'blur(12px)',
// //     border: '1px solid rgba(255, 255, 255, 0.2)',
// //     color: '#ffffff',
// //     padding: '24px 32px',
// //     fontSize: '18px',
// //     borderRadius: '9999px',
// //     '&:hover': {
// //       backgroundColor: 'rgba(255, 255, 255, 0.2)'
// //     }
// //   },
// //   trustIndicators: {
// //     marginTop: '64px',
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     justifyContent: 'center',
// //     gap: '32px',
// //     color: '#ddd6fe'
// //   },
// //   trustItem: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px'
// //   },
// //   centerText: {
// //     textAlign: 'center'
// //   },
// //   maxWidth: {
// //     maxWidth: '1280px',
// //     margin: '0 auto'
// //   },
// //   relative: {
// //     position: 'relative'
// //   },
// //   glowEffect: {
// //     position: 'absolute',
// //     inset: '-16px',
// //     background: 'linear-gradient(90deg, #464546ff 0%, #464546ff 100%)',
// //     borderRadius: '24px',
// //     opacity: 0.3,
// //     filter: 'blur(32px)'
// //   },
// //   // Added new class for CTA text visibility
// //   ctaContent: {
// //     position: 'relative',
// //     zIndex: 10,
// //     color: '#ffffff'
// //   }
// ctaSection: {
//     position: 'relative',
//     padding: '40px 24px',
//     background: "#ffffff",
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '600px'
//   },
//   ctaCard: {
//     maxWidth: '900px',
//     width: '100%',
//     background: 'linear-gradient(135deg, #004080 0%, #001f3f 100%) !important',
//     borderRadius: '24px !important',
//     boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3) !important',
//     textAlign: 'center',
//     padding: '48px 32px',
//     color: '#ffffff'
//   },
//   sectionTitle1: {
//     fontSize: '48px',
//     fontWeight: 'bold',
//     color: '#ffffff',
//     marginTop: '0px',
//     marginBottom: '24px',
//     letterSpacing: '-0.025em',
//     '@media (min-width: 768px)': {
//       fontSize: '60px'
//     }
//   },
//   buttonGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '32px',
//     '@media (min-width: 640px)': {
//       flexDirection: 'row'
//     }
//   },
//   primaryButton: {
//     background: '#f9b600 !important',
//     color: '#000000ff !important',
//     padding: '16px 25px !important',
//     fontSize: '14px !important',
//     fontWeight: '600',
//     borderRadius: '9999px',
//     boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
//     '&:hover': {
//       background: 'linear-gradient(90deg, #facc15 0%, #eab308 100%)'
//     }
//   },
//   secondaryButton: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(12px)',
//     border: '1px solid rgba(255, 255, 255, 0.2) !important',
//     color: '#ffffff !important',
//     padding: '16px 32px !important',
//     fontSize: '18px',
//     fontWeight: '600',
//     borderRadius: '9999px',
//     '&:hover': {
//       backgroundColor: 'rgba(255, 255, 255, 0.2)'
//     }
//   },
//   trustIndicators: {
//     marginTop: '48px',
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     gap: '32px',
//     color: '#ddd6fe'
//   },
//   trustItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px'
//   },
//   centerText: {
//     textAlign: 'center',
//   }
// });

// const About = () => {
//   const classes = useStyles();

//   const features = [
//     { icon: Target, label: "Industry-Grade Projects", color: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)" },
//     { icon: Rocket, label: "Real-World Skills", color: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)" },
//     { icon: Users, label: "Expert Mentorship", color: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" },
//     { icon: Award, label: "Company Incubated", color: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)" }
//   ];

//   const stats = [
//     { number: "1st", label: "Product-Based Platform in India", suffix: "" },
//     { number: "3", label: "Cutting-Edge Domains", suffix: "+" },
//     { number: "100", label: "Success Stories", suffix: "%" }
//   ];

//   return (
//     <div className={classes.root}>
//       {/* Hero Section */}
//       <section className={classes.heroSection}>
//         <div className={classes.heroBackground}>
//         </div>

//         {/* Content */}
//         <div className={classes.heroContent}>
//           <div>
//             <div className={classes.badge}>
//               <Sparkles style={{ width: '16px', height: '16px'}} />
//               <span className={classes.badgeText}>India's First Product-Based Learning Platform</span>
//             </div>
            
//             <h1 className={classes.mainTitle}>
//               About
//               <span className={classes.gradientText}>
//                 Gigaversity
//               </span>
//             </h1>
            
//             <p className={classes.subtitle}>
//               Empowering the next generation of tech innovators through real-world, industry-grade projects
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className={classes.section}>
//         <div className={classes.maxWidth}>
//           <div className={classes.centerText}>
//             {/* <div className={classes.sectionSubtitle}>
//               <GraduationCap style={{ width: '16px', height: '16px' }} />
//               <span className={classes.sectionSubtitleText}>Our Story</span>
//             </div> */}
//             <h2 className={classes.sectionTitle}>
//               Redefining Tech Education
//             </h2>
//           </div>

//           <div className={classes.contentGrid}>
//             {/* Content Card */}
//             <div style={{ flex: 1 }}>
//               <Card className={classes.contentCard}>
//                 <CardContent>
//                   <div className={classes.textContent}>
//                     <p>
//                       <span className={classes.highlightText}>
//                         Gigaversity
//                       </span>{" "}
//                       is India's first product-based learning platform, headquartered in Hyderabad, offering both on-campus and online programs in rapidly growing domains such as{" "}
//                       <span style={{ fontWeight: 600 }}>AI & ML</span>,{" "}
//                       <span style={{ fontWeight: 600 }}>Full Stack Development</span>, and{" "}
//                       <span style={{ fontWeight: 600 }}>Data Science</span>.
                      
//                       </p>
//                     <p style={{ marginTop: '1px' }}>
//                       Our unique approach empowers students to build{" "}
//                       <span style={{ fontWeight: 600 }}>industry-grade, scalable projects</span>{" "}
//                       incubated directly by leading tech companies. This hands-on experience ensures learners gain real-world skills and understand how cutting-edge products are developed from the ground up.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Features Grid */}
// <div style={{ flex: 1 }}>
//   <div
//     className={classes.featuresGrid}
//     style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', alignItems: 'center' }}
//   >
//     {features.map((item, index) => (
//       <div key={index}>
//         <Card className={classes.featureCard} style={{ alignItems: 'center' }}>
//           <CardContent style={{ alignItems: 'center', textAlign: 'center' }}>
//             <div
//               className={classes.featureIcon}
//               style={{ background: item.color, alignItems: 'center' }}
//             >
//               <item.icon style={{ width: '28px', height: '28px', color: '#ffffff',alignItems: 'center' }} />
//             </div>
//             <h3 style={{ fontWeight: 600, color: '#111827',alignItems: 'center' }}>{item.label}</h3>
//           </CardContent>
//         </Card>
//       </div>
//     ))}
//   </div>
// </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className={classes.statsSection}>
//         <div className={classes.statsBackground} />
        
//         <div className={classes.relative}>
//           <div className={classes.statsGrid}>
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className={classes.statItem}
//               >
//                 <div className={classes.statNumber}>
//                   {stat.number}
//                   <span className={classes.yellowAccent}>{stat.suffix}</span>
//                 </div>
//                 <div className={classes.statLabel}>{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Resume Builder Section */}
//       <section className={classes.section}>
//         <div className={classes.maxWidth}>
//           <div className={classes.centerText} >
//             <div className={classes.sectionSubtitle} style={{ backgroundColor: '#e0e7ff', color: '#3730a3' }}>
//               <Sparkles style={{ width: '16px', height: '16px' }} />
//               <span className={classes.sectionSubtitleText}>Innovation</span>
//             </div>
//             <h2 className={classes.sectionTitle}>
//               Why We Created the
//               <span style={{ 
//                 background: '#f9b600',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 display: 'block'
//               }}>
//                 Resume Builder
//               </span>
//             </h2>
//           </div>

//           <div className={classes.contentGrid}>
//             {/* Problem Statement */}
//             <div style={{ flex: '0 1 40%' }}>
//               <div className={classes.relative}>
//                 {/* <div className={classes.glowEffect} /> */}
//                 <Card className={classes.problemCard}>
//                   <CardContent>
//                     <h3 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827',marginTop:'0px',marginBottom: '24px' }}>The Challenge</h3>
//                     <p style={{ fontSize: '18px', color: '#374151', lineHeight: 1.75, marginBottom: '24px' }}>
//                       Your resume is your <span style={{ fontWeight: 600, color: '#004080' }}>digital identity</span> — the key to entering the professional world. Yet, many aspirants struggle with how to build a strong resume, present their skills effectively, and structure their information clearly.
//                     </p>
//                     <p style={{ fontSize: '18px', color: '#374151', lineHeight: 1.75 }}>
//                       This confusion often leaves them <span style={{ fontWeight: 600, color: '#004080' }}>blank or overwhelmed</span>, creating a barrier between talent and opportunity.
//                     </p>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>

//             {/* Solution */}
//             <div style={{ flex: 1 }}>
//               <div className={classes.relative}>
//                 {/* <div className={classes.glowEffect} /> */}
//                 <Card className={classes.solutionCard}>
//                   <CardContent>
//                     <h3 style={{ fontSize: '30px', fontWeight: 'bold',marginTop:'5px' , marginBottom: '24px', color:"#ffffff" }}>Our Solution</h3>
//                     <p style={{ fontSize: '18px', lineHeight: 1.75, marginBottom: '24px', color: '#ddd6fe' }}>
//                       We created <span style={{ fontWeight: 'bold', color: '#fde047' }}>India's first AI-powered resume builder</span> that breaks down these barriers. Simply by selecting your target role, our intelligent assistant guides you step-by-step.
//                     </p>
                    
//                     <div className={classes.featureList}>
//                       {[
//                         "Professional, recruiter-approved resumes",
//                         "Showcase skills and projects effectively",
//                         "Remove all the guesswork",
//                         "Get noticed by top companies"
//                       ].map((feature, index) => (
//                         <div
//                           key={index}
//                           className={classes.featureItem}
//                         >
//                           <div className={classes.checkCircle}>
//                             <CheckCircle style={{ width: '16px', height: '16px', color: '#004080' }} />
//                           </div>
//                           <span style={{ color: '#f3e8ff' }}>{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>



//       {/* CTA Section - With Card */}
// <section className={classes.ctaSection}>
//       <Card className={classes.ctaCard}>
//         <CardContent>
//           <div className={classes.centerText}>
//             <h2 className={classes.sectionTitle1} >
//               Ready to Build Your
//               <span
//                 style={{
//                   background: 'linear-gradient(90deg, #fde047 0%, #f9b600 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   display: 'block',
//                 }}
//               >
//                 Dream Resume?
//               </span>
//             </h2>

//             <p
//               style={{
//                 fontSize: '20px',
//                 color: '#ddd6fe',
//                 marginBottom: '40px',
//                 maxWidth: '800px',
//                 margin: '0 auto 40px',
//                 fontWeight: 300,
//                 lineHeight: 1.6
//               }}
//             >
//               Gigaversity Resume Builder isn't just another free resume maker — it's
//               your launchpad to success. With Gen AI suggestions, project-building
//               guidance, and ATS-optimized templates, you're not just creating a
//               resume — you're building your future.
//             </p>

//             <div className={classes.buttonGroup}>
//               <Button
//                 className={classes.primaryButton}
//                 startIcon={<Rocket style={{ width: '20px', height: '20px' }} />}
//               >
//                 Get Started Now
//               </Button>

//               <Button className={classes.secondaryButton}>
//                 Learn More
//               </Button>
//             </div>

//             {/* Trust Indicators */}
//             <div className={classes.trustIndicators}>
//               <div className={classes.trustItem}>
//                 <TrendingUp
//                   style={{ width: '20px', height: '20px', color: '#4ade80' }}
//                 />
//                 <span style={{ fontSize: '14px', fontWeight: '500' }}>AI-Powered</span>
//               </div>
//               <div className={classes.trustItem}>
//                 <CheckCircle
//                   style={{ width: '20px', height: '20px', color: '#4ade80' }}
//                 />
//                 <span style={{ fontSize: '14px', fontWeight: '500' }}>Recruiter-Approved</span>
//               </div>
//               <div className={classes.trustItem}>
//                 <Sparkles
//                   style={{ width: '20px', height: '20px', color: '#fde047' }}
//                 />
//                 <span style={{ fontSize: '14px', fontWeight: '500' }}>100% Free</span>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </section>

//     </div>
//   );
// };

// export default About;

// // import React from "react";
// // import { GraduationCap, Sparkles, Target, Rocket, Users, Award, TrendingUp, CheckCircle } from "lucide-react";
// // import { Button, Card, CardContent } from '@mui/material';
// // import { makeStyles } from '@mui/styles';

// // const useStyles = makeStyles({
// //   root: {
// //     fontFamily: 'Montserrat, sans-serif !important',
// //     background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #faf5ff 100%)'
// //   },
// //   heroSection: {
// //     position: 'relative',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     overflow: 'hidden',
// //     // minHeight: '60vh',
// //     '@media (min-width: 768px)': {
// //       // minHeight: '80vh'
// //     },
// //     '@media (min-width: 1024px)': {
// //       // minHeight: '100vh'
// //     }
// //   },
// //   heroBackground: {
// //     position: 'absolute',
// //     inset: '0',
// //     background: "linear-gradient(135deg, #004080 0%, #001f3f 100%)",
// //   },
// //   animatedBackground: {
// //     position: 'absolute',
// //     inset: '0',
// //     opacity: 0.3
// //   },
  
// //   heroContent: {
// //     position: 'relative',
// //     zIndex: 10,
// //     maxWidth: '1280px',
// //     margin: '0 auto',
// //     padding: '20px 16px',
// //     textAlign: 'center',
// //     '@media (min-width: 768px)': {
// //       padding: '40px 24px'
// //     }
// //   },
// //   badge: {
// //     display: 'inline-flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //     backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //     backdropFilter: 'blur(12px)',
// //     color: '#ffffff',
// //     padding: '6px 12px',
// //     borderRadius: '9999px',
// //     marginBottom: '16px',
// //     '@media (min-width: 768px)': {
// //       padding: '8px 16px',
// //       marginBottom: '24px'
// //     }
// //   },
// //   badgeText: {
// //     fontSize: '12px',
// //     fontWeight: 500,
// //     '@media (min-width: 768px)': {
// //       fontSize: '14px'
// //     }
// //   },
// //   mainTitle: {
// //     fontSize: '36px',
// //     fontWeight: 'bold',
// //     color: '#ffffff',
// //     marginBottom: '16px',
// //     marginTop: '12px',
// //     letterSpacing: '-0.025em',
// //     lineHeight: 1.2,
// //     '@media (min-width: 480px)': {
// //       fontSize: '48px'
// //     },
// //     '@media (min-width: 768px)': {
// //       fontSize: '60px',
// //       marginBottom: '24px',
// //       marginTop: '16px'
// //     },
// //     '@media (min-width: 1024px)': {
// //       fontSize: '96px'
// //     }
// //   },
// //   gradientText: {
// //     background: 'linear-gradient(90deg, #fde047 0%, #f9b600 100%)',
// //     WebkitBackgroundClip: 'text',
// //     WebkitTextFillColor: 'transparent',
// //     display: 'block'
// //   },
// //   subtitle: {
// //     fontSize: '16px',
// //     color: '#e9d5ff',
// //     maxWidth: '768px',
// //     margin: '0 auto',
// //     fontWeight: 300,
// //     lineHeight: 1.6,
// //     padding: '0 16px',
// //     '@media (min-width: 768px)': {
// //       fontSize: '20px',
// //       lineHeight: 1.75,
// //       padding: '0'
// //     },
// //     '@media (min-width: 1024px)': {
// //       fontSize: '24px'
// //     }
// //   },
// //   scrollIndicator: {
// //     position: 'absolute',
// //     bottom: '20px',
// //     left: '50%',
// //     transform: 'translateX(-50%)',
// //     '@media (min-width: 768px)': {
// //       bottom: '40px'
// //     }
// //   },
// //   scrollCircle: {
// //     width: '24px',
// //     height: '40px',
// //     border: '2px solid rgba(255, 255, 255, 0.3)',
// //     borderRadius: '9999px',
// //     display: 'flex',
// //     justifyContent: 'center'
// //   },
// //   scrollDot: {
// //     width: '6px',
// //     height: '6px',
// //     backgroundColor: '#ffffff',
// //     borderRadius: '50%',
// //     marginTop: '8px'
// //   },
// //   section: {
// //     position: 'relative',
// //     padding: '40px 20px',
// //     '@media (min-width: 768px)': {
// //       padding: '50px 30px'
// //     }
// //   },
// //   sectionTitle: {
// //     fontSize: '32px',
// //     fontWeight: 'bold',
// //     color: '#111827 !important',
// //     marginBottom: '20px',
// //     marginTop: '0px',
// //     letterSpacing: '-0.025em',
// //     lineHeight: 1.2,
// //     '@media (min-width: 768px)': {
// //       fontSize: '48px',
// //       marginBottom: '24px'
// //     },
// //     '@media (min-width: 1024px)': {
// //       fontSize: '60px'
// //     }
// //   },
// //   sectionSubtitle: {
// //     display: 'inline-flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //     backgroundColor: '#f3e8ff',
// //     color: '#7e22ce',
// //     padding: '6px 12px',
// //     borderRadius: '9999px',
// //     marginBottom: '20px',
// //     '@media (min-width: 768px)': {
// //       padding: '8px 16px',
// //       marginBottom: '24px'
// //     }
// //   },
// //   sectionSubtitleText: {
// //     fontSize: '12px',
// //     fontWeight: 600,
// //     '@media (min-width: 768px)': {
// //       fontSize: '14px'
// //     }
// //   },
// //   contentGrid: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '20px',
// //     '@media (min-width: 1024px)': {
// //       flexDirection: 'row',
// //       alignItems: 'stretch',
// //       gap: '30px'
// //     }
// //   },
// //   contentCard: {
// //     padding: '8px',
// //     backgroundColor: 'rgba(255, 255, 255, 0.6)',
// //     backdropFilter: 'blur(24px)',
// //     border: 'none',
// //     borderRadius: '16px !important',
// //     boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25) !important',
// //     '@media (min-width: 768px)': {
// //       padding: '10px'
// //     }
// //   },
// //   textContent: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     color: '#374151',
// //     lineHeight: 1.6,
// //     fontSize: '16px',
// //     '@media (min-width: 768px)': {
// //       fontSize: '18px',
// //       lineHeight: 1.75
// //     }
// //   },
// //   highlightText: {
// //     fontSize: '20px',
// //     fontWeight: 'bold',
// //     background: 'linear-gradient(90deg, #7c3aed 0%, #4f46e5 100%)',
// //     WebkitBackgroundClip: 'text',
// //     WebkitTextFillColor: 'transparent',
// //     '@media (min-width: 768px)': {
// //       fontSize: '24px'
// //     }
// //   },
// //   featuresGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: '1fr',
// //     gap: '16px',
// //     '@media (min-width: 480px)': {
// //       gridTemplateColumns: 'repeat(2, 1fr)'
// //     },
// //     '@media (min-width: 1024px)': {
// //       gap: '16px'
// //     }
// //   },
// //   featureCard: {
// //     padding: '16px',
// //     backgroundColor: '#ffffff',
// //     border: 'none',
// //     boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25) !important',
// //     height: 'auto',
// //     minHeight: '140px',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'center',
// //     '@media (min-width: 768px)': {
// //       padding: '24px',
// //       minHeight: '150px'
// //     }
// //   },
// //   featureIcon: {
// //     width: '48px',
// //     height: '48px',
// //     borderRadius: '12px',
// //     display: 'flex',
// //     alignItems: 'center !important',
// //     justifyContent: 'center',
// //     marginBottom: '12px',
// //     marginLeft: 'auto',
// //     marginRight: 'auto',
// //     '@media (min-width: 768px)': {
// //       width: '56px',
// //       height: '56px',
// //       borderRadius: '16px',
// //       marginBottom: '16px'
// //     }
// //   },
// //   statsSection: {
// //     position: 'relative',
// //     padding: '60px 20px',
// //     background: "linear-gradient(135deg, #004080 0%, #003161ff 100%)",
// //     overflow: 'hidden',
// //     '@media (min-width: 768px)': {
// //       padding: '80px 24px'
// //     }
// //   },
// //   statsBackground: {
// //     position: 'absolute',
// //     inset: '0',
// //     opacity: 0.1,
// //     backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
// //     backgroundSize: '40px 40px'
// //   },
// //   statsGrid: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '32px',
// //     '@media (min-width: 640px)': {
// //       flexDirection: 'row',
// //       justifyContent: 'space-around',
// //       gap: '48px'
// //     }
// //   },
// //   statItem: {
// //     textAlign: 'center'
// //   },
// //   statNumber: {
// //     fontSize: '48px',
// //     fontWeight: 'bold',
// //     color: '#ffffff',
// //     marginBottom: '8px',
// //     lineHeight: 1,
// //     '@media (min-width: 768px)': {
// //       fontSize: '60px',
// //       marginBottom: '12px'
// //     },
// //     '@media (min-width: 1024px)': {
// //       fontSize: '72px'
// //     }
// //   },
// //   statLabel: {
// //     color: '#ddd6fe',
// //     fontSize: '16px',
// //     fontWeight: 300,
// //     '@media (min-width: 768px)': {
// //       fontSize: '18px'
// //     }
// //   },
// //   yellowAccent: {
// //     color: '#fde047'
// //   },
// //   problemCard: {
// //     position: 'relative',
// //     padding: '20px',
// //     backgroundColor: '#ffffff',
// //     border: 'none',
// //     height: 'auto',
// //     minHeight: '300px',
// //     borderRadius: '16px !important',
// //     boxShadow: '1px 2px 50px 2px rgba(0, 0, 0, 0.25) !important',
// //     '@media (min-width: 768px)': {
// //       padding: '30px',
// //       minHeight: '350px'
// //     }
// //   },
// //   solutionCard: {
// //     position: 'relative',
// //     padding: '20px',
// //     background: 'linear-gradient(90deg, #004080 0%, #001f3f 100%) !important',
// //     border: 'none',
// //     height: 'auto',
// //     minHeight: '300px',
// //     borderRadius: '16px !important',
// //     boxShadow: '1px 2px 50px 2px rgba(0, 0, 0, 0.25) !important',
// //     color: '#ffffff',
// //     '@media (min-width: 768px)': {
// //       padding: '30px',
// //       minHeight: '350px'
// //     }
// //   },
// //   featureList: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '12px',
// //     '@media (min-width: 768px)': {
// //       gap: '16px'
// //     }
// //   },
// //   featureItem: {
// //     display: 'flex',
// //     alignItems: 'flex-start',
// //     gap: '12px'
// //   },
// //   checkCircle: {
// //     width: '20px',
// //     height: '20px',
// //     borderRadius: '50%',
// //     backgroundColor: '#fde047',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     flexShrink: 0,
// //     marginTop: '2px',
// //     '@media (min-width: 768px)': {
// //       width: '24px',
// //       height: '24px'
// //     }
// //   },
// //   ctaSection: {
// //     position: 'relative',
// //     padding: '40px 16px',
// //     background: "#ffffff",
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     minHeight: '500px',
// //     '@media (min-width: 768px)': {
// //       padding: '40px 24px',
// //       minHeight: '600px'
// //     }
// //   },
// //   ctaCard: {
// //     maxWidth: '900px',
// //     width: '100%',
// //     background: 'linear-gradient(135deg, #004080 0%, #001f3f 100%) !important',
// //     borderRadius: '16px !important',
// //     boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3) !important',
// //     textAlign: 'center',
// //     padding: '32px 20px',
// //     color: '#ffffff',
// //     '@media (min-width: 768px)': {
// //       borderRadius: '24px !important',
// //       padding: '48px 32px'
// //     }
// //   },
// //   sectionTitle1: {
// //     fontSize: '32px',
// //     fontWeight: 'bold',
// //     color: '#ffffff',
// //     marginTop: '0px',
// //     marginBottom: '20px',
// //     letterSpacing: '-0.025em',
// //     lineHeight: 1.2,
// //     '@media (min-width: 768px)': {
// //       fontSize: '48px',
// //       marginBottom: '24px'
// //     },
// //     '@media (min-width: 1024px)': {
// //       fontSize: '60px'
// //     }
// //   },
// //   buttonGroup: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '12px',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginTop: '24px',
// //     '@media (min-width: 480px)': {
// //       flexDirection: 'row',
// //       gap: '16px'
// //     },
// //     '@media (min-width: 768px)': {
// //       marginTop: '32px'
// //     }
// //   },
// //   primaryButton: {
// //     background: '#f9b600 !important',
// //     color: '#000000ff !important',
// //     padding: '12px 20px !important',
// //     fontSize: '14px !important',
// //     fontWeight: '600',
// //     borderRadius: '9999px',
// //     boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
// //     minWidth: '160px',
// //     '&:hover': {
// //       background: '#e6a200 !important'
// //     },
// //     '@media (min-width: 768px)': {
// //       padding: '16px 25px !important',
// //       minWidth: '180px'
// //     }
// //   },
// //   secondaryButton: {
// //     backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
// //     backdropFilter: 'blur(12px)',
// //     border: '1px solid rgba(255, 255, 255, 0.2) !important',
// //     color: '#ffffff !important',
// //     padding: '12px 20px !important',
// //     fontSize: '14px !important',
// //     fontWeight: '600',
// //     borderRadius: '9999px',
// //     minWidth: '160px',
// //     '&:hover': {
// //       backgroundColor: 'rgba(255, 255, 255, 0.2) !important'
// //     },
// //     '@media (min-width: 768px)': {
// //       padding: '16px 32px !important',
// //       fontSize: '18px !important',
// //       minWidth: '180px'
// //     }
// //   },
// //   trustIndicators: {
// //     marginTop: '32px',
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     justifyContent: 'center',
// //     gap: '20px',
// //     color: '#ddd6fe',
// //     '@media (min-width: 768px)': {
// //       marginTop: '48px',
// //       gap: '32px'
// //     }
// //   },
// //   trustItem: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '6px',
// //     '@media (min-width: 768px)': {
// //       gap: '8px'
// //     }
// //   },
// //   centerText: {
// //     textAlign: 'center',
// //   },
// //   maxWidth: {
// //     maxWidth: '1280px',
// //     margin: '0 auto',
// //     padding: '0 16px',
// //     '@media (min-width: 768px)': {
// //       padding: '0 24px'
// //     }
// //   },
// //   relative: {
// //     position: 'relative'
// //   }
// // });

// // const About = () => {
// //   const classes = useStyles();

// //   const features = [
// //     { icon: Target, label: "Industry-Grade Projects", color: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)" },
// //     { icon: Rocket, label: "Real-World Skills", color: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)" },
// //     { icon: Users, label: "Expert Mentorship", color: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" },
// //     { icon: Award, label: "Company Incubated", color: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)" }
// //   ];

// //   const stats = [
// //     { number: "1st", label: "Product-Based Platform in India", suffix: "" },
// //     { number: "3", label: "Cutting-Edge Domains", suffix: "+" },
// //     { number: "100", label: "Success Stories", suffix: "%" }
// //   ];

// //   return (
// //     <div className={classes.root}>
// //       {/* Hero Section */}
// //       <section className={classes.heroSection}>
// //         <div className={classes.heroBackground}>
// //         </div>

// //         {/* Content */}
// //         <div className={classes.heroContent}>
// //           <div>
// //             <div className={classes.badge}>
// //               <Sparkles style={{ width: '14px', height: '14px'}} />
// //               <span className={classes.badgeText}>India's First Product-Based Learning Platform</span>
// //             </div>
            
// //             <h1 className={classes.mainTitle}>
// //               About
// //               <span className={classes.gradientText}>
// //                 Gigaversity
// //               </span>
// //             </h1>
            
// //             <p className={classes.subtitle}>
// //               Empowering the next generation of tech innovators through real-world, industry-grade projects
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Our Story Section */}
// //       <section className={classes.section}>
// //         <div className={classes.maxWidth}>
// //           <div className={classes.centerText}>
// //             <h2 className={classes.sectionTitle}>
// //               Redefining Tech Education
// //             </h2>
// //           </div>

// //           <div className={classes.contentGrid}>
// //             {/* Content Card */}
// //             <div style={{ flex: 1 }}>
// //               <Card className={classes.contentCard} style={{backgroundColor: '#ffffff'}}>
// //                 <CardContent>
// //                   <div className={classes.textContent}>
// //                     <p>
// //                       <span className={classes.highlightText}>
// //                         Gigaversity
// //                       </span>{" "}
// //                       is India's first product-based learning platform, headquartered in Hyderabad, offering both on-campus and online programs in rapidly growing domains such as{" "}
// //                       <span style={{ fontWeight: 600 }}>AI & ML</span>,{" "}
// //                       <span style={{ fontWeight: 600 }}>Full Stack Development</span>, and{" "}
// //                       <span style={{ fontWeight: 600 }}>Data Science</span>.
// //                     </p>
// //                     <p style={{ marginTop: '16px' }}>
// //                       Our unique approach empowers students to build{" "}
// //                       <span style={{ fontWeight: 600 }}>industry-grade, scalable projects</span>{" "}
// //                       incubated directly by leading tech companies. This hands-on experience ensures learners gain real-world skills and understand how cutting-edge products are developed from the ground up.
// //                     </p>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>

// //             {/* Features Grid */}
// //             <div style={{ flex: 1 }}>
// //               <div className={classes.featuresGrid}>
// //                 {features.map((item, index) => (
// //                   <div key={index}>
// //                     <Card className={classes.featureCard} style={{backgroundColor: '#ffffff'}}>
// //                       <CardContent style={{ textAlign: 'center', padding: '8px' }}>
// //                         <div
// //                           className={classes.featureIcon}
// //                           style={{ background: item.color }}
// //                         >
// //                           <item.icon style={{ width: '24px', height: '24px', color: '#ffffff' }} />
// //                         </div>
// //                         <h3 style={{ 
// //                           fontWeight: 600, 
// //                           color: '#111827', 
// //                           fontSize: '14px',
// //                           margin: 0,
// //                           '@media (min-width: 768px)': {
// //                             fontSize: '16px'
// //                           }
// //                         }}>
// //                           {item.label}
// //                         </h3>
// //                       </CardContent>
// //                     </Card>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <section className={classes.statsSection}>
// //         <div className={classes.statsBackground} />
        
// //         <div className={classes.relative}>
// //           <div className={classes.statsGrid}>
// //             {stats.map((stat, index) => (
// //               <div
// //                 key={index}
// //                 className={classes.statItem}
// //               >
// //                 <div className={classes.statNumber}>
// //                   {stat.number}
// //                   <span className={classes.yellowAccent}>{stat.suffix}</span>
// //                 </div>
// //                 <div className={classes.statLabel}>{stat.label}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Resume Builder Section */}
// //       <section className={classes.section}>
// //         <div className={classes.maxWidth}>
// //           <div className={classes.centerText}>
// //             <div className={classes.sectionSubtitle} style={{ backgroundColor: '#e0e7ff', color: '#3730a3' }}>
// //               <Sparkles style={{ width: '14px', height: '14px' }} />
// //               <span className={classes.sectionSubtitleText}>Innovation</span>
// //             </div>
// //             <h2 className={classes.sectionTitle}>
// //               Why We Created the
// //               <span style={{ 
// //                 background: '#f9b600',
// //                 WebkitBackgroundClip: 'text',
// //                 WebkitTextFillColor: 'transparent',
// //                 display: 'block'
// //               }}>
// //                 Resume Builder
// //               </span>
// //             </h2>
// //           </div>

// //           <div className={classes.contentGrid}>
// //             {/* Problem Statement */}
// //             <div style={{ flex: 1 }}>
// //               <div className={classes.relative}>
// //                 <Card className={classes.problemCard} style={{backgroundColor: '#ffffff'}}>
// //                   <CardContent style={{ padding: '16px' }}>
// //                     <h3 style={{ 
// //                       fontSize: '24px', 
// //                       fontWeight: 'bold', 
// //                       color: '#111827',
// //                       marginTop: '0px',
// //                       marginBottom: '16px',
// //                       '@media (min-width: 768px)': {
// //                         fontSize: '30px',
// //                         marginBottom: '24px'
// //                       }
// //                     }}>
// //                       The Challenge
// //                     </h3>
// //                     <p style={{ 
// //                       fontSize: '16px', 
// //                       color: '#374151', 
// //                       lineHeight: 1.6, 
// //                       marginBottom: '16px',
// //                       '@media (min-width: 768px)': {
// //                         fontSize: '18px',
// //                         lineHeight: 1.75,
// //                         marginBottom: '24px'
// //                       }
// //                     }}>
// //                       Your resume is your <span style={{ fontWeight: 600, color: '#004080' }}>digital identity</span> — the key to entering the professional world. Yet, many aspirants struggle with how to build a strong resume, present their skills effectively, and structure their information clearly.
// //                     </p>
// //                     <p style={{ 
// //                       fontSize: '16px', 
// //                       color: '#374151', 
// //                       lineHeight: 1.6,
// //                       '@media (min-width: 768px)': {
// //                         fontSize: '18px',
// //                         lineHeight: 1.75
// //                       }
// //                     }}>
// //                       This confusion often leaves them <span style={{ fontWeight: 600, color: '#004080' }}>blank or overwhelmed</span>, creating a barrier between talent and opportunity.
// //                     </p>
// //                   </CardContent>
// //                 </Card>
// //               </div>
// //             </div>

// //             {/* Solution */}
// //             <div style={{ flex: 1 }}>
// //               <div className={classes.relative}>
// //                 <Card className={classes.solutionCard}>
// //                   <CardContent style={{ padding: '16px'}}>
// //                     <h3 style={{ 
// //                       fontSize: '24px', 
// //                       fontWeight: 'bold',
// //                       marginTop: '0px',
// //                       marginBottom: '16px',
// //                       color: "#ffffff",
// //                       '@media (min-width: 768px)': {
// //                         fontSize: '30px',
// //                         marginBottom: '24px'
// //                       }
// //                     }}>
// //                       Our Solution
// //                     </h3>
// //                     <p style={{ 
// //                       fontSize: '16px', 
// //                       lineHeight: 1.6, 
// //                       marginBottom: '16px', 
// //                       color: '#ddd6fe',
// //                       '@media (min-width: 768px)': {
// //                         fontSize: '18px',
// //                         lineHeight: 1.75,
// //                         marginBottom: '24px'
// //                       }
// //                     }}>
// //                       We created <span style={{ fontWeight: 'bold', color: '#fde047' }}>India's first AI-powered resume builder</span> that breaks down these barriers. Simply by selecting your target role, our intelligent assistant guides you step-by-step.
// //                     </p>
                    
// //                     <div className={classes.featureList}>
// //                       {[
// //                         "Professional, recruiter-approved resumes",
// //                         "Showcase skills and projects effectively",
// //                         "Remove all the guesswork",
// //                         "Get noticed by top companies"
// //                       ].map((feature, index) => (
// //                         <div
// //                           key={index}
// //                           className={classes.featureItem}
// //                         >
// //                           <div className={classes.checkCircle}>
// //                             <CheckCircle style={{ width: '12px', height: '12px', color: '#004080' }} />
// //                           </div>
// //                           <span style={{ 
// //                             color: '#f3e8ff', 
// //                             fontSize: '14px',
// //                             '@media (min-width: 768px)': {
// //                               fontSize: '16px'
// //                             }
// //                           }}>
// //                             {feature}
// //                           </span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className={classes.ctaSection}>
// //         <Card className={classes.ctaCard}>
// //           <CardContent>
// //             <div className={classes.centerText}>
// //               <h2 className={classes.sectionTitle1}>
// //                 Ready to Build Your
// //                 <span
// //                   style={{
// //                     background: 'linear-gradient(90deg, #fde047 0%, #f9b600 100%)',
// //                     WebkitBackgroundClip: 'text',
// //                     WebkitTextFillColor: 'transparent',
// //                     display: 'block',
// //                   }}
// //                 >
// //                   Dream Resume?
// //                 </span>
// //               </h2>

// //               <p
// //                 style={{
// //                   fontSize: '16px',
// //                   color: '#ddd6fe',
// //                   marginBottom: '32px',
// //                   maxWidth: '800px',
// //                   margin: '0 auto 32px',
// //                   fontWeight: 300,
// //                   lineHeight: 1.6,
// //                   padding: '0 10px',
// //                   '@media (min-width: 768px)': {
// //                     fontSize: '20px',
// //                     marginBottom: '40px',
// //                     padding: '0'
// //                   }
// //                 }}
// //               >
// //                 Gigaversity Resume Builder isn't just another free resume maker — it's
// //                 your launchpad to success. With Gen AI suggestions, project-building
// //                 guidance, and ATS-optimized templates, you're not just creating a
// //                 resume — you're building your future.
// //               </p>

// //               <div className={classes.buttonGroup}>
// //                 <Button
// //                   className={classes.primaryButton}
// //                   startIcon={<Rocket style={{ width: '18px', height: '18px' }} />}
// //                 >
// //                   Get Started Now
// //                 </Button>

// //                 <Button className={classes.secondaryButton}>
// //                   Learn More
// //                 </Button>
// //               </div>

// //               {/* Trust Indicators */}
// //               <div className={classes.trustIndicators}>
// //                 <div className={classes.trustItem}>
// //                   <TrendingUp
// //                     style={{ width: '16px', height: '16px', color: '#4ade80' }}
// //                   />
// //                   <span style={{ fontSize: '12px', fontWeight: '500' }}>AI-Powered</span>
// //                 </div>
// //                 <div className={classes.trustItem}>
// //                   <CheckCircle
// //                     style={{ width: '16px', height: '16px', color: '#4ade80' }}
// //                   />
// //                   <span style={{ fontSize: '12px', fontWeight: '500' }}>Recruiter-Approved</span>
// //                 </div>
// //                 <div className={classes.trustItem}>
// //                   <Sparkles
// //                     style={{ width: '16px', height: '16px', color: '#fde047' }}
// //                   />
// //                   <span style={{ fontSize: '12px', fontWeight: '500' }}>100% Free</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       </section>
// //     </div>
// //   );
// // };

// // export default About;

import React from "react";
import { GraduationCap, Sparkles, Target, Rocket, Users, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Button, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Montserrat, sans-serif !important',
    background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #faf5ff 100%)'
  },
  heroSection: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  heroBackground: {
    position: 'absolute',
    inset: '0',
    background: "linear-gradient(135deg, #004080 0%, #001f3f 100%)",
  },
  animatedBackground: {
    position: 'absolute',
    inset: '0',
    opacity: 0.3
  },
  blob1: {
    position: 'absolute',
    top: '80px',
    left: '80px',
    width: '288px',
    height: '288px',
    backgroundColor: '#a78bfa',
    borderRadius: '50%',
    mixBlendMode: 'multiply',
    filter: 'blur(48px)'
  },
  blob2: {
    position: 'absolute',
    top: '160px',
    right: '80px',
    width: '288px',
    height: '288px',
    backgroundColor: '#60a5fa',
    borderRadius: '50%',
    mixBlendMode: 'multiply',
    filter: 'blur(48px)'
  },
  blob3: {
    position: 'absolute',
    bottom: '80px',
    left: '160px',
    width: '288px',
    height: '288px',
    backgroundColor: '#818cf8',
    borderRadius: '50%',
    mixBlendMode: 'multiply',
    filter: 'blur(48px)'
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '40px 24px',
    textAlign: 'center'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(12px)',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '9999px',
    marginBottom: '24px'
  },
  badgeText: {
    fontSize: '14px',
    fontWeight: 500
  },
  mainTitle: {
    fontSize: '60px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '24px',
    marginTop: '16px',
    letterSpacing: '-0.025em',
    '@media (min-width: 768px)': {
      fontSize: '96px'
    }
  },
  gradientText: {
    background: 'linear-gradient(90deg, #fde047 0%, #f9b600 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'block'
  },
  subtitle: {
    fontSize: '20px',
    color: '#e9d5ff',
    maxWidth: '768px',
    margin: '0 auto',
    fontWeight: 300,
    lineHeight: 1.75,
    '@media (min-width: 768px)': {
      fontSize: '24px'
    }
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  scrollCircle: {
    width: '24px',
    height: '40px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '9999px',
    display: 'flex',
    justifyContent: 'center'
  },
  scrollDot: {
    width: '6px',
    height: '6px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    marginTop: '8px'
  },
  section: {
    position: 'relative',
    padding: '60px 24px',
    maxWidth: '1280px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#111827 !important',
    marginBottom: '24px',
    marginTop: '0px',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: '60px'
    }
  },
  sectionSubtitle: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f3e8ff',
    color: '#7e22ce',
    padding: '8px 16px',
    borderRadius: '9999px',
    marginBottom: '24px'
  },
  sectionSubtitleText: {
    fontSize: '14px',
    fontWeight: 600
  },
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'center',
    '@media (min-width: 1024px)': {
      flexDirection: 'row',
    }
  },
  contentCard: {
    padding: '10px',
    backgroundColor: '#ffffff !important',
    backdropFilter: 'blur(24px)',
    border: 'none',
    borderRadius: '16px !important',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25) !important'
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    color: '#374151',
    lineHeight: 1.75,
    fontSize: '18px'
  },
  highlightText: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #7c3aed 0%, #4f46e5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  // UPDATED: Enhanced Features Grid and Cards with better responsive behavior
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '16px'
    },
    '@media (min-width: 481px) and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px'
    }
  },
  featureCard: {
    padding: '32px 24px',
    backgroundColor: '#ffffff !important',
    border: 'none',
    borderRadius: '20px !important',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1) !important',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out !important',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15) !important',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #7c3aed 0%, #4f46e5 100%)'
    },
    // Responsive height adjustments
    '@media (max-width: 480px)': {
      height: '180px',
      padding: '24px 16px'
    },
    '@media (min-width: 481px) and (max-width: 768px)': {
      height: '190px',
      padding: '28px 20px'
    }
  },
  featureIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease-in-out',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: '-2px',
      borderRadius: '20px',
      padding: '2px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
    },
    // Responsive icon sizing
    '@media (max-width: 480px)': {
      width: '56px',
      height: '56px',
      marginBottom: '16px'
    },
    '@media (min-width: 481px) and (max-width: 768px)': {
      width: '60px',
      height: '60px',
      marginBottom: '18px'
    }
  },
  featureLabel: {
    fontWeight: '600',
    color: '#111827',
    fontSize: '16px',
    lineHeight: 1.4,
    margin: 0,
    // Responsive text sizing
    '@media (max-width: 480px)': {
      fontSize: '14px'
    },
    '@media (min-width: 481px) and (max-width: 768px)': {
      fontSize: '15px'
    }
  },
  statsSection: {
    position: 'relative',
    padding: '60px 24px',
    background: "linear-gradient(135deg, #004080 0%, #003161ff 100%)",
    overflow: 'hidden'
  },
  statsBackground: {
    position: 'absolute',
    inset: '0',
    opacity: 0.1,
    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
    backgroundSize: '40px 40px'
  },
  statsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    maxWidth: '1280px',
    margin: '0 auto',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  },
  statItem: {
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '60px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '12px',
    '@media (min-width: 768px)': {
      fontSize: '72px'
    }
  },
  statLabel: {
    color: '#ddd6fe',
    fontSize: '18px',
    fontWeight: 300
  },
  yellowAccent: {
    color: '#fde047'
  },
  // UPDATED: Problem and Solution Cards with consistent styling
  problemCard: {
    position: 'relative',
    padding: '40px',
    backgroundColor: '#ffffff !important', 
    border: 'none',
    height: '400px',
    borderRadius: '16px !important',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25) !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center !important',
    '@media (max-width: 1030px)': {
      height: '440px'
    },
    '@media (max-width: 770px)': {
      justifyContent: 'center !important',
      alignContent: 'center !important',
      alignItems: 'center !important',
      height: 'auto'
    }
  },
  solutionCard: {
    position: 'relative',
    padding: '40px',
    background: 'linear-gradient(135deg, #004080 0%, #001f3f 100%) !important',
    border: 'none',
    height: '440px',
    borderRadius: '16px !important',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25) !important',
    color: '#ffffff !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 1030px)': {
      paddingTop: '20px',
      height: '480px'
    },
    '@media (max-width: 770px)': {
      height: 'auto'
    }
  },
  featureList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  checkCircle: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#f9b600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  ctaSection: {
    position: 'relative',
    padding: '60px 24px',
    background: "#ffffff",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '600px'
  },
  ctaCard: {
    maxWidth: '900px',
    width: '100%',
    background: 'linear-gradient(135deg, #004080 0%, #001f3f 100%) !important',
    borderRadius: '24px !important',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3) !important',
    textAlign: 'center',
    padding: '60px 32px',
    color: '#ffffff'
  },
  sectionTitle1: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: '0px',
    marginBottom: '24px',
    letterSpacing: '-0.025em',
    '@media (min-width: 768px)': {
      fontSize: '60px'
    }
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '32px',
    '@media (min-width: 640px)': {
      flexDirection: 'row'
    }
  },
  primaryButton: {
    background: '#f9b600 !important',
    color: '#000000ff !important',
    padding: '16px 32px !important',
    fontSize: '16px !important',
    fontWeight: '600',
    borderRadius: '9999px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      background: '#e6a200 !important'
    }
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.2) !important',
    color: '#ffffff !important',
    padding: '16px 32px !important',
    fontSize: '16px !important',
    fontWeight: '600',
    borderRadius: '9999px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2) !important'
    }
  },
  trustIndicators: {
    marginTop: '48px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '32px',
    color: '#ddd6fe'
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  centerText: {
    textAlign: 'center',
  },
  // NEW: Card header styling for consistency
  cardHeader: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginTop: '0px',
    marginBottom: '24px'
  },
  cardContent: {
    fontSize: '18px',
    lineHeight: 1.75,
    marginBottom: '24px',
    flex: 1
  }
});

const About = () => {
  const classes = useStyles();

  const features = [
    { icon: Target, label: "Industry-Grade Projects", color: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)" },
    { icon: Rocket, label: "Real-World Skills", color: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)" },
    { icon: Users, label: "Expert Mentorship", color: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" },
    { icon: Award, label: "Company Incubated", color: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)" }
  ];

  const stats = [
    { number: "1st", label: "Product-Based Platform in India", suffix: "" },
    { number: "3", label: "Cutting-Edge Domains", suffix: "+" },
    { number: "100", label: "Success Stories", suffix: "%" }
  ];

  return (
    <div className={classes.root}>
      {/* Hero Section */}
      <section className={classes.heroSection}>
        <div className={classes.heroBackground}>
        </div>

        {/* Content */}
        <div className={classes.heroContent}>
          <div>
            <div className={classes.badge}>
              <Sparkles style={{ width: '16px', height: '16px'}} />
              <span className={classes.badgeText}>India's First Product-Based Learning Platform</span>
            </div>
            
            <h1 className={classes.mainTitle}>
              About
              <span className={classes.gradientText}>
                Gigaversity
              </span>
            </h1>
            
            <p className={classes.subtitle}>
              Empowering the next generation of tech innovators through real-world, industry-grade projects
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={classes.section}>
        <div className={classes.centerText}>
          <h2 className={classes.sectionTitle}>
            Redefining Tech Education
          </h2>
        </div>

        <div className={classes.contentGrid}>
          {/* Content Card */}
          <div style={{ flex: 1 }}>
            <Card className={classes.contentCard}>
              <CardContent>
                <div className={classes.textContent}>
                  <p>
                    <span className={classes.highlightText}>
                      Gigaversity
                    </span>{" "}
                    is India's first product-based learning platform, headquartered in Hyderabad, offering both on-campus and online programs in rapidly growing domains such as{" "}
                    <span style={{ fontWeight: 600 }}>AI & ML</span>,{" "}
                    <span style={{ fontWeight: 600 }}>Full Stack Development</span>, and{" "}
                    <span style={{ fontWeight: 600 }}>Data Science</span>.
                    
                    </p>
                  <p style={{ marginTop: '20px' }}>
                    Our unique approach empowers students to build{" "}
                    <span style={{ fontWeight: 600 }}>industry-grade, scalable projects</span>{" "}
                    incubated directly by leading tech companies. This hands-on experience ensures learners gain real-world skills and understand how cutting-edge products are developed from the ground up.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid - UPDATED with responsive 2x2 layout */}
          <div style={{ flex: 1 }}>
            <div className={classes.featuresGrid}>
              {features.map((item, index) => (
                <Card 
                  key={index} 
                  className={classes.featureCard}
                >
                  <CardContent style={{ padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <div
                      className={classes.featureIcon}
                      style={{ background: item.color }}
                    >
                      <item.icon style={{ 
                        width: '32px', 
                        height: '32px', 
                        color: '#ffffff',
                        '@media (max-width: 480px)': {
                          width: '28px',
                          height: '28px'
                        }
                      }} />
                    </div>
                    <h3 className={classes.featureLabel}>{item.label}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={classes.statsSection}>
        <div className={classes.statsBackground} />
        
        <div className={classes.statsGrid}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={classes.statItem}
            >
              <div className={classes.statNumber}>
                {stat.number}
                <span className={classes.yellowAccent}>{stat.suffix}</span>
              </div>
              <div className={classes.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Resume Builder Section */}
      <section className={classes.section}>
        <div className={classes.centerText}>
          <div className={classes.sectionSubtitle} style={{ backgroundColor: '#e0e7ff', color: '#3730a3' }}>
            <Sparkles style={{ width: '16px', height: '16px' }} />
            <span className={classes.sectionSubtitleText}>Innovation</span>
          </div>
          <h2 className={classes.sectionTitle}>
            Why We Created the
            <span style={{ 
              background: 'linear-gradient(90deg, #f9b600 0%, #e6a200 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block'
            }}>
              Resume Builder
            </span>
          </h2>
        </div>

        <div className={classes.contentGrid}>
          {/* Problem Statement */}
          <div style={{ flex: 1 }}>
            <Card className={classes.problemCard}>
              <CardContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div>
                  <h3 className={classes.cardHeader} style={{ color: '#111827' }}>The Challenge</h3>
                  <div className={classes.cardContent}>
                    <p style={{color:'#000000ff'}}>
                      Your resume is your <span style={{ fontWeight: 600, color: '#004080' }}>digital identity</span> — the key to entering the professional world. Yet, many aspirants struggle with how to build a strong resume, present their skills effectively, and structure their information clearly.
                    </p>
                    <p style={{ marginTop: '16px',color:'#000000ff' }}>
                      This confusion often leaves them <span style={{ fontWeight: 600, color: '#004080' }}>blank or overwhelmed</span>, creating a barrier between talent and opportunity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Solution */}
          <div style={{ flex: 1 }}>
            <Card className={classes.solutionCard}>
              <CardContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div>
                  <h3 className={classes.cardHeader} style={{ color: '#f9b600' }}>Our Solution</h3>
                  <div className={classes.cardContent} style={{ color: '#ffffff' }}>
                    <p>
                      We created <span style={{ fontWeight: 'bold', color: '#bce1ff' }}>India's first AI-powered resume builder</span> that breaks down these barriers. Simply by selecting your target role, our intelligent assistant guides you step-by-step.
                    </p>
                  </div>
                  
                  <div className={classes.featureList}>
                    {[
                      "Professional, recruiter-approved resumes",
                      "Showcase skills and projects effectively",
                      "Remove all the guesswork",
                      "Get noticed by top companies"
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className={classes.featureItem}
                      >
                        <div className={classes.checkCircle}>
                          <CheckCircle style={{ width: '16px', height: '16px', color: '#004080' }} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={classes.ctaSection}>
        <Card className={classes.ctaCard}>
          <CardContent>
            <div className={classes.centerText}>
              <h2 className={classes.sectionTitle1}>
                Ready to Build Your
                <span
                  style={{
                    background: 'linear-gradient(90deg, #fde047 0%, #f9b600 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'block',
                  }}
                >
                  Dream Resume?
                </span>
              </h2>

              <p
                style={{
                  fontSize: '20px',
                  color: '#ddd6fe',
                  marginBottom: '40px',
                  maxWidth: '800px',
                  margin: '0 auto 40px',
                  fontWeight: 300,
                  lineHeight: 1.6
                }}
              >
                Gigaversity Resume Builder isn't just another free resume maker — it's
                your launchpad to success. With Gen AI suggestions, project-building
                guidance, and ATS-optimized templates, you're not just creating a
                resume — you're building your future.
              </p>

              <div className={classes.buttonGroup}>
                <Button
                  className={classes.primaryButton}
                  startIcon={<Rocket style={{ width: '20px', height: '20px' }} />}
                >
                  Get Started Now
                </Button>

                <Button className={classes.secondaryButton}>
                  Learn More
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className={classes.trustIndicators}>
                <div className={classes.trustItem}>
                  <TrendingUp
                    style={{ width: '20px', height: '20px', color: '#4ade80' }}
                  />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>AI-Powered</span>
                </div>
                <div className={classes.trustItem}>
                  <CheckCircle
                    style={{ width: '20px', height: '20px', color: '#4ade80' }}
                  />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>Recruiter-Approved</span>
                </div>
                <div className={classes.trustItem}>
                  <Sparkles
                    style={{ width: '20px', height: '20px', color: '#fde047' }}
                  />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>100% Free</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;