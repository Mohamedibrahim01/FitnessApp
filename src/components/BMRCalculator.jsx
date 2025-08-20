import { useState } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function BMRCalculator() {
  const [userInput, setUserInput] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
  });

  const [bmrResult, setBmrResult] = useState(null);
  const [errors, setErrors] = useState({});

  function handleReset() {
    setUserInput({ weight: "", height: "", age: "", gender: "male" });
    setBmrResult(null);
    setErrors({});
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  }

  function validateInputs() {
    const newErrors = {};

    if (!userInput.weight || parseFloat(userInput.weight) <= 0) {
      newErrors.weight = "Please enter a valid weight in kg";
    }
    if (!userInput.height || parseFloat(userInput.height) <= 0) {
      newErrors.height = "Please enter a valid height in cm";
    }
    if (!userInput.age || parseFloat(userInput.age) <= 0) {
      newErrors.age = "Please enter a valid age";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleCalcClick() {
    if (!validateInputs()) {
      setBmrResult(null);
      return;
    }
    const bmr = BMRcalc();
    setBmrResult(bmr);
  }

  function BMRcalc() {
    const weight = parseFloat(userInput.weight);
    const height = parseFloat(userInput.height);
    const age = parseFloat(userInput.age);

    const bmr =
      userInput.gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    return { value: bmr.toFixed(2) };
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6 text-white">
        <motion.div
          className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-bold mb-2 text-center text-orange-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            BMR Calculator
          </motion.h2>
          <p className="text-center text-gray-400 mb-6 text-sm">
            Basal Metabolic Rate is the number of calories your body burns at
            rest.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userInput.weight}
                onChange={handleChange}
              />
              {errors.weight && (
                <p className="text-red-400 text-sm mt-1">{errors.weight}</p>
              )}
            </div>

            <div>
              <input
                type="number"
                name="height"
                placeholder="Height (cm)"
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userInput.height}
                onChange={handleChange}
              />
              {errors.height && (
                <p className="text-red-400 text-sm mt-1">{errors.height}</p>
              )}
            </div>

            <div>
              <input
                type="number"
                name="age"
                placeholder="Age (years)"
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userInput.age}
                onChange={handleChange}
              />
              {errors.age && (
                <p className="text-red-400 text-sm mt-1">{errors.age}</p>
              )}
            </div>

            <select
              name="gender"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={userInput.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <motion.button
              type="button"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition"
              onClick={handleCalcClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Calculate BMR
            </motion.button>
          </form>

          <AnimatePresence mode="wait">
            {bmrResult && (
              <motion.div
                key="bmr-result"
                className={`mt-6 p-4 rounded-lg ${
                  "error" in bmrResult ? "bg-red-500" : "bg-gray-700"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {"error" in bmrResult ? (
                  <p className="text-center font-semibold">{bmrResult.error}</p>
                ) : (
                  <p className="text-center">
                    Your BMR is{" "}
                    <span className="text-green-400 font-bold text-lg">
                      {bmrResult.value}
                    </span>{" "}
                    kcal/day
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col items-center space-y-4 mt-4">
            <motion.button
              onClick={handleReset}
              className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md transition shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
