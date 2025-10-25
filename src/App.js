// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import Navbar from "./components/navbar";
// import HeroSection from "./components/hero";
// import ExclusiveFeatures from "./components/features";
// import KeyHighlights from "./components/keyhighlights";
// import WhoIsItFor from "./components/whoisit";
// import ReviewsSection from "./components/review";
// import ComparisonSection from "./components/compare";
// import AboutUs from "./components/aboutus";
// import FAQSection from "./components/faqs";
// import CTASection from "./components/ctasection";
// import Login from "./components/login";
// import TemplateGallery from "./components/templateGallery";
// import ScrollToTop from "./components/scrollReset";
// import About from "./components/about";
// import Footer from "./components/footer";

// const HomePage = () => (
//   <>
//     <HeroSection />
//     <div id="features">
//       <ExclusiveFeatures />
//       <KeyHighlights />
//       <WhoIsItFor />
//     </div>
//     <ComparisonSection />
//     <div id="reviews">
//       <ReviewsSection />
//     </div>
    
//     <div id="faqs">
//       <FAQSection />
//     </div>
//     <div id="aboutus">
//       {/* <AboutUs /> */}
//       <About />
//     </div>
    
//     {/* <CTASection /> */}
//     <Footer />
//   </>
// );

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const hideNavbar = location.pathname === "/login";

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       {children}
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <ScrollToTop/>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/templates" element={<TemplateGallery />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;

// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import ExclusiveFeatures from "./components/features";
import KeyHighlights from "./components/keyhighlights";
import WhoIsItFor from "./components/whoisit";
import ReviewsSection from "./components/review";
import ComparisonSection from "./components/compare";
import AboutUs from "./components/aboutus";
import FAQSection from "./components/faqs";
import CTASection from "./components/ctasection";
import Login from "./components/login";
import TemplateGallery from "./components/templateGallery";
import ScrollToTop from "./components/scrollReset";
import About from "./components/about";
import Footer from "./components/footer";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#bfbfbfff" },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
}); 

const HomePage = () => (
  <>
    <HeroSection />
    <div id="features">
      <ExclusiveFeatures />
      <KeyHighlights />
      <WhoIsItFor />
    </div>
    <ComparisonSection />
    <div id="reviews">
      <ReviewsSection />
    </div>
    <div id="faqs">
      <FAQSection />
    </div>
    <div id="aboutus">
      <About />
    </div>
    <Footer />
  </>
);

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";
  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/templates" element={<TemplateGallery />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
