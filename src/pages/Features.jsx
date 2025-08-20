import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Features() {
  const navigate = useNavigate();

  // أنيميشن بتاعة كل كارد
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-orange-500"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choose Your Calculation
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {[
            {
              title: "BMI Calculator",
              text: "Calculate your Body Mass Index and check your weight category.",
              link: "/BMICalculator",
            },
            {
              title: "BMR Calculator",
              text: "Estimate your Basal Metabolic Rate based on your data.",
              link: "/BMRCalculator",
            },
            {
              title: "TDEE Calculator",
              text: "This calculator can be used to estimate your Total Daily Energy Expenditure",
              link: "/TDEE",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              onClick={() => navigate(card.link)}
              className="cursor-pointer bg-gray-900 text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className="text-xl font-bold mb-2 text-orange-500">
                {card.title}
              </h2>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
