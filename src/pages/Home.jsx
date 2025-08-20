import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Activity, HeartPulse } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 pb-16">
      <Navbar />

      <main className="flex-grow flex flex-col items-center text-center px-6">
        {/* Hero */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Achieve Your <span className="text-orange-500">Fitness Goals</span>
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-2xl mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Track your health, calculate your BMI, BMR, and TDEE, and follow the
          perfect plan for your body type.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-10 rounded-md text-xl font-semibold shadow-lg"
          onClick={() => navigate("plans")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl">
          <FeatureCard
            icon={<Activity size={40} className="text-orange-500" />}
            title="BMI Calculator"
            text="Quickly check your Body Mass Index to know if you’re underweight, healthy, or overweight."
            onClick={() => navigate("/BMICalculator")}
          />
          <FeatureCard
            icon={<HeartPulse size={40} className="text-orange-500" />}
            title="BMR Calculator"
            text="Find out how many calories your body burns at rest, to plan your diet better."
            onClick={() => navigate("/BMRCalculator")}
          />
          <FeatureCard
            icon={<Dumbbell size={40} className="text-orange-500" />}
            title="TDEE Calculator"
            text="Estimate your daily calorie needs based on your activity level."
            onClick={() => navigate("/tdee")}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, text, onClick }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-700 cursor-pointer"
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </motion.div>
  );
}
