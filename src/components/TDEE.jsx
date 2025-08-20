import Navbar from "./Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TDEE() {
  const [userData, setUserData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
    activity: "",
  });

  const [tdeeResult, setTdeeResult] = useState(null);

  function handleReset() {
    setUserData({
      weight: "",
      height: "",
      age: "",
      gender: "male",
      activity: "",
    });
    setTdeeResult(null);
  }

  function handleCalculate() {
    const { weight, height, age, gender, activity } = userData;

    if (!weight || !height || !age || !activity) {
      setTdeeResult({ error: "Please complete all fields" });
      return;
    }

    if (weight <= 0 || height <= 0 || age <= 0) {
      setTdeeResult({ error: "Please enter valid positive numbers" });
      return;
    }

    // حساب BMR
    const bmr =
      gender === "male"
        ? weight * 10 + height * 6.25 - age * 5 + 5
        : weight * 10 + height * 6.25 - age * 5 - 161;

    // حساب TDEE
    const tdee = bmr * parseFloat(activity);

    setTdeeResult({
      bmr: bmr.toFixed(2),
      tdee: tdee.toFixed(2),
      loseWeight: (tdee - 500).toFixed(2),
      gainWeight: (tdee + 500).toFixed(2),
    });
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6">
        <motion.div
          className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl font-bold mb-2 text-center text-orange-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            TDEE Calculator
          </motion.h1>
          <motion.p
            className="text-lg text-center mb-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Calculate your daily calorie needs
          </motion.p>

          {/* Inputs */}
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Weight (kg)"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={userData.weight}
              onChange={(e) =>
                setUserData({ ...userData, weight: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Height (cm)"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={userData.height}
              onChange={(e) =>
                setUserData({ ...userData, height: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Age"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={userData.age}
              onChange={(e) =>
                setUserData({ ...userData, age: e.target.value })
              }
            />

            {/* Gender Selection */}
            <select
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={userData.gender}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            {/* Activity */}
            <select
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={userData.activity}
              onChange={(e) =>
                setUserData({ ...userData, activity: e.target.value })
              }
            >
              <option value="">Activity Level</option>
              <option value="1.2">Sedentary (No exercise)</option>
              <option value="1.375">Light Activity (1-3 days/week)</option>
              <option value="1.55">Moderate Activity (3-5 days/week)</option>
              <option value="1.725">High Activity (6-7 days/week)</option>
              <option value="1.9">
                Very Intense (Physical job or athlete)
              </option>
            </select>

            <motion.button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
              onClick={handleCalculate}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Calculate TDEE
            </motion.button>

            {/* Results */}
            <AnimatePresence mode="wait">
              {tdeeResult && (
                <motion.div
                  key="tdee-result"
                  className={`mt-4 p-4 rounded-lg ${
                    tdeeResult.error ? "bg-red-500" : "bg-gray-700"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {tdeeResult.error ? (
                    <p className="text-center font-semibold">
                      {tdeeResult.error}
                    </p>
                  ) : (
                    <>
                      <p className="text-center text-orange-400 text-lg font-semibold">
                        BMR: {tdeeResult.bmr} cal/day
                      </p>
                      <p className="text-center text-orange-400 text-lg font-semibold">
                        TDEE: {tdeeResult.tdee} cal/day
                      </p>
                      <p className="text-center text-green-400">
                        For Weight Loss: {tdeeResult.loseWeight} cal/day
                      </p>
                      <p className="text-center text-blue-400">
                        For Weight Gain: {tdeeResult.gainWeight} cal/day
                      </p>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Reset */}
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
