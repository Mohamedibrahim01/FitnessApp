import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/features" element={<Features />} />
          <Route path="/BMICalculator" element={<BMICalculator />} />
          <Route path="/BMRCalculator" element={<BMRCalculator />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/tdee" element={<TDEE />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/Contact" element={<Contact />} />

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
