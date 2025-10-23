import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  section: {
    minHeight: "100vh",
    // background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    color: "#ffffff",
  },
  innerSection: {
    display: "column",
    flexDirection: "row",
    // background: "rgba(50, 93, 161, 1)",
    backgroundColor: "#004080",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
    backdropFilter: "blur(10px)",
    justifyContent: "space-between",
    gap: "40px",
    padding: "30px 30px",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      gap: "32px",
      padding: "30px 20px",
    },
  },
  leftContent: {
    flex: "1 1 40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0 20px",
  },
  rightContent: {
    flex: "1 1 55%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "0 10px",
  },
  faqLabel: {
    // background: "linear-gradient(90deg, #0ea5e9, #6366f1)",
    backgroundColor: "#0046b5ff",
    color: "#fff",
    fontWeight: "600 !important",
    borderRadius: "40px",
    padding: "6px 18px",
    fontSize: "1rem",
    border: "1.5px solid #f9b600",
    marginBottom: "20px !important",
    // boxShadow: "0 0 10px #3b82f6",
  },
  title: {
    fontWeight: "700 !important",
    fontSize: "2rem !important",
    lineHeight: "1.3 !important",
    color: "#f9fafb",
    marginBottom: "25px !important",
    textShadow: "0 0 10px rgba(99,102,241,0.6)",
  },
  button: {
    textTransform: "none !important",
    fontWeight: 500,
    borderRadius: "12px !important",
    padding: "10px 24px !important",
    border: "1px solid #60a5fa !important",
    color: "#fff !important",
    background: "linear-gradient(90deg, #1d4ed8, #3b82f6)",
    boxShadow: "0 0 12px rgba(59,130,246,0.5)",
    "&:hover": {
      background: "linear-gradient(90deg, #2563eb, #60a5fa)",
      boxShadow: "0 0 20px rgba(59,130,246,0.8)",
    },
  },
  accordion: {
    borderRadius: "16px !important",
    backgroundColor: "rgba(15, 23, 42, 0.6) !important",
    boxShadow: "0 4px 20px rgba(0, 18, 83, 0.3) !important",
    border: "1px solid rgba(212, 214, 252, 0.3) !important",
    color: "#e2e8f0",
    "&:before": { display: "none" },
  },
  summary: {
    fontWeight: "500 !important",
    fontSize: "0.93rem !important",
    color: "#f1f5f9 !important",
  },
  details: {
    color: "#94a3b8",
    fontSize: "0.95rem",
  },
}));

const FAQSection = () => {
  const classes = useStyles();

  const faqs = [
    {
      question:
        "What are the best resume templates for freshers available on Gigaversity Resume Builder?",
      answer:
        "Gigaversity offers a variety of professional, recruiter-approved resume templates designed specifically for freshers. These templates follow the perfect resume format for freshers, ensuring a clean, modern look that highlights your skills, projects, and education while being fully ATS-friendly.",
    },
    {
      question:
        "How does Gigaversity’s free resume builder help create ATS-friendly resumes?",
      answer:
        "Our free resume builder uses expert-designed templates tested for compatibility with leading Applicant Tracking Systems (ATS). This ensures your resume passes through automated screening bots and reaches recruiters, increasing your chances of getting noticed and shortlisted.",
    },
    {
      question:
        "Can I use Gigaversity Resume Builder to switch careers or update my professional resume?",
      answer:
        "Yes! Gigaversity Resume Builder is perfect for professionals aiming to upgrade roles or make a career switch. It offers smart content suggestions, project recommendations, and flexible templates tailored to showcase your evolving skills and experience.",
    },
    {
      question:
        "How can I build portfolio-ready projects directly from my resume on Gigaversity?",
      answer:
        "Gigaversity Resume Builder recommends projects based on your target role—whether it's full stack development, data science, UI/UX, or product management. With one click, you can access our GitHub repository featuring real-time projects, step-by-step guides, and code, allowing you to build and showcase hands-on experience straight from your resume.",
    },
    {
      question: "How does Gigaversity help me showcase my Gen AI skills on my resume?",
      answer:
        "Our AI engine suggests relevant Gen AI tools like ChatGPT, Midjourney, Figma AI, Claude, Bard, and DALL·E tailored to your profile. You can add detailed descriptions of how you’ve used these tools in real-world projects, helping recruiters see your proficiency with cutting-edge AI technologies.",
    },
    {
      question:
        "Can Gigaversity recommend AI-powered projects that match my skills and career goals?",
      answer:
        "Yes! Based on your profile and target job role, Gigaversity’s resume builder smartly recommends AI-powered and other industry-relevant projects that you can build step-by-step. This feature helps you gain practical experience and strengthens your resume with projects aligned to your career ambitions.",
    },
    {
      question:
        "Is the Gigaversity Resume Builder suitable for professionals with career gaps?",
      answer:
        "Absolutely. Our resume builder helps you craft impactful resumes that highlight your skills, projects, and growth, making it ideal for individuals with career gaps who want to re-enter the job market confidently.",
    },
    {
      question:
        "Are Gigaversity’s resume templates recruiter-approved and optimized for top ATS tools?",
      answer:
        "Yes, every template is designed with input from recruiters and thoroughly tested to ensure compatibility with leading ATS software. This increases your chances of passing automated screenings and getting your resume seen by hiring managers.",
    },
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.innerSection}>
        {/* Left Side */}
        <Box className={classes.leftContent}>
          <Typography className={classes.faqLabel}>FAQ</Typography>
          <Typography className={classes.title}>
            What would you like to know about Gigaversity?
          </Typography>
          {/* <Button className={classes.button}>
            <span role="img" aria-label="chat">
              💬
            </span>
            Talk to us
          </Button> */}
        </Box>

        {/* Right Side */}
        <Box className={classes.rightContent}>
          {faqs.map((faq, index) => (
            <Accordion key={index} className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#f9b600" }} />}>
                <Typography className={classes.summary}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.details}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQSection;
