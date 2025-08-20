import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Features from "./pages/Features";
import BMICalculator from "./components/BMICalculator";
import BMRCalculator from "./components/BMRCalculator";
import Plans from "./pages/Plans";
import TDEE from "./components/TDEE";
import ResetPassword from "./pages/ResetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";

import "./App.css";

// 👇 Wrapper to apply animations on route change
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
        <Route path="/resetpassword" element={<PageWrapper><ResetPassword /></PageWrapper>} />
        <Route path="/features" element={<PageWrapper><Features /></PageWrapper>} />
        <Route path="/BMICalculator" element={<PageWrapper><BMICalculator /></PageWrapper>} />
        <Route path="/BMRCalculator" element={<PageWrapper><BMRCalculator /></PageWrapper>} />
        <Route path="/plans" element={<PageWrapper><Plans /></PageWrapper>} />
        <Route path="/tdee" element={<PageWrapper><TDEE /></PageWrapper>} />
        <Route path="/PrivacyPolicy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/TermsOfService" element={<PageWrapper><TermsOfService /></PageWrapper>} />
        <Route path="/Contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

// 👇 This wraps each page in animation on mount/unmount
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
