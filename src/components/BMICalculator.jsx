import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function BMICalculator() {
  const [userInput, setUserInput] = useState({ weight: "", height: "" });
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);
  const [bmiAdvice, setBmiAdvice] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  }

  function handleReset() {
    setUserInput({ weight: "", height: "" });
    setBmiResult(null);
    setBmiCategory(null);
    setBmiAdvice(null);
  }

  function getBMICategoryAndAdvice(bmi) {
    if (bmi < 18.5)
      return {
        category: "Underweight",
        advice: "Increase your calorie intake and eat healthy to gain weight.",
      };
    if (bmi >= 18.5 && bmi < 25)
      return {
        category: "Normal weight",
        advice: "Maintain your current routine and stay active.",
      };
    if (bmi >= 25 && bmi < 30)
      return {
        category: "Overweight",
        advice: "Reduce calorie intake and increase physical activity.",
      };
    return {
      category: "Obese",
      advice:
        "Start a serious health plan with exercise and balanced nutrition.",
    };
  }

  function calculateBMI() {
    const weight = parseFloat(userInput.weight);
    const height = parseFloat(userInput.height) / 100;
    if (!weight || !height) return "Please complete all fields";
    return (weight / (height * height)).toFixed(2);
  }

  function handleCalcClick() {
    const bmiValue = calculateBMI();
    if (bmiValue === "Please complete all fields") {
      setBmiResult(bmiValue);
      setBmiCategory(null);
      setBmiAdvice(null);
      return;
    }
    const bmiNum = parseFloat(bmiValue);
    const { category, advice } = getBMICategoryAndAdvice(bmiNum);
    setBmiResult(bmiValue);
    setBmiCategory(category);
    setBmiAdvice(advice);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col pt-20 pb-16">
        <motion.div
          className="max-w-lg mx-auto p-8 bg-gray-900 rounded-xl shadow-lg border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-extrabold mb-6 text-center text-orange-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            BMI Calculator
          </motion.h2>

          <form className="space-y-5">
            <div>
              <label htmlFor="weight" className="block mb-1 font-medium">
                Weight (kg):
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userInput.weight}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="height" className="block mb-1 font-medium">
                Height (cm):
              </label>
              <input
                type="number"
                id="height"
                name="height"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userInput.height}
                onChange={handleChange}
              />
            </div>

            <motion.button
              type="button"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold shadow-md"
              onClick={handleCalcClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Calculate BMI
            </motion.button>
          </form>

          <AnimatePresence mode="wait">
            {bmiResult && bmiResult !== "Please complete all fields" && (
              <motion.div
                key="result"
                className="mt-6 text-center space-y-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg">
                  Your BMI is:{" "}
                  <span className="font-bold text-green-400">{bmiResult}</span>
                </p>
                <p>
                  Category:{" "}
                  <span className="font-semibold text-yellow-400">
                    {bmiCategory}
                  </span>
                </p>
                <p className="text-sm text-gray-300 italic">{bmiAdvice}</p>

                <div className="mt-6 border-t border-gray-700 pt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-orange-400">
                        <th>Category</th>
                        <th>BMI Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Underweight</td>
                        <td>&lt; 18.5</td>
                      </tr>
                      <tr>
                        <td>Normal weight</td>
                        <td>18.5 - 24.9</td>
                      </tr>
                      <tr>
                        <td>Overweight</td>
                        <td>25 - 29.9</td>
                      </tr>
                      <tr>
                        <td>Obese</td>
                        <td>30+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {bmiResult === "Please complete all fields" && (
              <motion.div
                key="error"
                className="mt-4 text-center text-red-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p>{bmiResult}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-center mt-6">
            <motion.button
              onClick={handleReset}
              className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset
            </motion.button>
          </div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}
