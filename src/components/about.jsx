import React from "react";
import { GraduationCap, Sparkles, Target, Rocket, Users, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Button, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    // minHeight: '100vh',
    fontFamily: 'Montserrat, sans-serif !important',
    background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #faf5ff 100%)'
  },
  heroSection: {
    position: 'relative',
    // minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  heroBackground: {
    position: 'absolute',
    inset: '0',
    // background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #2563eb 100%) !important'
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
    padding: '50px 30px'
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#111827 !important',
    marginBottom: '24px',
    marginTop: '0px',
    letterSpacing: '-0.025em',
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
    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  contentCard: {
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(24px)',
    border: 'none',
    borderRadius: '16px !important',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25) !important'
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    // gap: '24px',
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
  // boldPurple: {
  //   fontWeight: 600,
  //   color: '#7e22ce'
  // },
  // boldIndigo: {
  //   fontWeight: 600,
  //   color: '#4338ca'
  // },
  // boldBlue: {
  //   fontWeight: 600,
  //   color: '#1d4ed8'
  // },
  featuresGrid: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  featureCard: {
  padding: '24px',
  backgroundColor: '#ffffff',
  border: 'none',
  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25) !important',
  height: '150px', // or let content decide height
},
  featureIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center !important',
    justifyContent: 'center',
    marginBottom: '16px'
  },
  statsSection: {
    position: 'relative',
    padding: '80px 24px',
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
  problemCard: {
    position: 'relative',
    padding: '30px',
    backgroundColor: '#ffffff',
    border: 'none',
    height: '350px',
    borderRadius: '16px !important',
    boxShadow: '1px 2px 50px 2px rgba(0, 0, 0, 0.25) !important',
  },
  solutionCard: {
    position: 'relative',
    padding: '30px',
    background: 'linear-gradient(90deg, #004080 0%, #001f3f 100%) !important',
    border: 'none',
    height: '350px',
    borderRadius: '16px !important',
    boxShadow: '1px 2px 50px 2px rgba(0, 0, 0, 0.25) !important',
    color: '#ffffff'
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
    backgroundColor: '#fde047',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
//   ctaSection: {
//     position: 'relative',
//     padding: '40px 24px',
//     overflow: 'hidden',
//     heignt: '700px',
//     width: '900px',
//     background:"#ffffff",
//   },
//   ctaBackground: {
//     position: 'absolute',
//     inset: '0',
//     background: "linear-gradient(135deg, #004080 0%, #001f3f 100%) !important",
//     // background:"#ffffff",
//   },

//   ctaWrapper: {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: '80px 0',
//   background: 'linear-gradient(135deg, #004080 0%, #001f3f 100%)',
// },

// ctaCard: {
//   maxWidth: '800px',
//   width: '100%',
//   backgroundColor: '#ffffff !important',
//   borderRadius: '24px !important',
//   boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3) !important',
//   textAlign: 'center',
//   padding: '48px 32px',
//   zIndex: 10,
// },

//   buttonGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//     justifyContent: 'center',
//     alignItems: 'center',
//     '@media (min-width: 640px)': {
//       flexDirection: 'row'
//     }
//   },
//   primaryButton: {
//     background: 'linear-gradient(90deg, #a855f7 0%, #6366f1 100%)',
//     color: '#ffffff',
//     padding: '24px 32px',
//     fontSize: '18px',
//     borderRadius: '9999px',
//     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//     '&:hover': {
//       background: 'linear-gradient(90deg, #9333ea 0%, #4f46e5 100%)'
//     }
//   },
//   secondaryButton: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(12px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     color: '#ffffff',
//     padding: '24px 32px',
//     fontSize: '18px',
//     borderRadius: '9999px',
//     '&:hover': {
//       backgroundColor: 'rgba(255, 255, 255, 0.2)'
//     }
//   },
//   trustIndicators: {
//     marginTop: '64px',
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
//     textAlign: 'center'
//   },
//   maxWidth: {
//     maxWidth: '1280px',
//     margin: '0 auto'
//   },
//   relative: {
//     position: 'relative'
//   },
//   glowEffect: {
//     position: 'absolute',
//     inset: '-16px',
//     background: 'linear-gradient(90deg, #464546ff 0%, #464546ff 100%)',
//     borderRadius: '24px',
//     opacity: 0.3,
//     filter: 'blur(32px)'
//   },
//   // Added new class for CTA text visibility
//   ctaContent: {
//     position: 'relative',
//     zIndex: 10,
//     color: '#ffffff'
//   }
ctaSection: {
    position: 'relative',
    padding: '40px 24px',
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
    padding: '48px 32px',
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
    padding: '16px 25px !important',
    fontSize: '14px !important',
    fontWeight: '600',
    borderRadius: '9999px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      background: 'linear-gradient(90deg, #facc15 0%, #eab308 100%)'
    }
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.2) !important',
    color: '#ffffff !important',
    padding: '16px 32px !important',
    fontSize: '18px',
    fontWeight: '600',
    borderRadius: '9999px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
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
        <div className={classes.maxWidth}>
          <div className={classes.centerText}>
            {/* <div className={classes.sectionSubtitle}>
              <GraduationCap style={{ width: '16px', height: '16px' }} />
              <span className={classes.sectionSubtitleText}>Our Story</span>
            </div> */}
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
                    <p style={{ marginTop: '1px' }}>
                      Our unique approach empowers students to build{" "}
                      <span style={{ fontWeight: 600 }}>industry-grade, scalable projects</span>{" "}
                      incubated directly by leading tech companies. This hands-on experience ensures learners gain real-world skills and understand how cutting-edge products are developed from the ground up.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features Grid */}
<div style={{ flex: 1 }}>
  <div
    className={classes.featuresGrid}
    style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', alignItems: 'center' }}
  >
    {features.map((item, index) => (
      <div key={index}>
        <Card className={classes.featureCard} style={{ alignItems: 'center' }}>
          <CardContent style={{ alignItems: 'center', textAlign: 'center' }}>
            <div
              className={classes.featureIcon}
              style={{ background: item.color, alignItems: 'center' }}
            >
              <item.icon style={{ width: '28px', height: '28px', color: '#ffffff',alignItems: 'center' }} />
            </div>
            <h3 style={{ fontWeight: 600, color: '#111827',alignItems: 'center' }}>{item.label}</h3>
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={classes.statsSection}>
        <div className={classes.statsBackground} />
        
        <div className={classes.relative}>
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
        </div>
      </section>

      {/* Why Resume Builder Section */}
      <section className={classes.section}>
        <div className={classes.maxWidth}>
          <div className={classes.centerText} >
            <div className={classes.sectionSubtitle} style={{ backgroundColor: '#e0e7ff', color: '#3730a3' }}>
              <Sparkles style={{ width: '16px', height: '16px' }} />
              <span className={classes.sectionSubtitleText}>Innovation</span>
            </div>
            <h2 className={classes.sectionTitle}>
              Why We Created the
              <span style={{ 
                background: '#f9b600',
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
            <div style={{ flex: '0 1 40%' }}>
              <div className={classes.relative}>
                {/* <div className={classes.glowEffect} /> */}
                <Card className={classes.problemCard}>
                  <CardContent>
                    <h3 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827',marginTop:'0px',marginBottom: '24px' }}>The Challenge</h3>
                    <p style={{ fontSize: '18px', color: '#374151', lineHeight: 1.75, marginBottom: '24px' }}>
                      Your resume is your <span style={{ fontWeight: 600, color: '#004080' }}>digital identity</span> — the key to entering the professional world. Yet, many aspirants struggle with how to build a strong resume, present their skills effectively, and structure their information clearly.
                    </p>
                    <p style={{ fontSize: '18px', color: '#374151', lineHeight: 1.75 }}>
                      This confusion often leaves them <span style={{ fontWeight: 600, color: '#004080' }}>blank or overwhelmed</span>, creating a barrier between talent and opportunity.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Solution */}
            <div style={{ flex: 1 }}>
              <div className={classes.relative}>
                {/* <div className={classes.glowEffect} /> */}
                <Card className={classes.solutionCard}>
                  <CardContent>
                    <h3 style={{ fontSize: '30px', fontWeight: 'bold',marginTop:'5px' , marginBottom: '24px', color:"#ffffff" }}>Our Solution</h3>
                    <p style={{ fontSize: '18px', lineHeight: 1.75, marginBottom: '24px', color: '#ddd6fe' }}>
                      We created <span style={{ fontWeight: 'bold', color: '#fde047' }}>India's first AI-powered resume builder</span> that breaks down these barriers. Simply by selecting your target role, our intelligent assistant guides you step-by-step.
                    </p>
                    
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
                          <span style={{ color: '#f3e8ff' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section - With Card */}
<section className={classes.ctaSection}>
      <Card className={classes.ctaCard}>
        <CardContent>
          <div className={classes.centerText}>
            <h2 className={classes.sectionTitle1} >
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