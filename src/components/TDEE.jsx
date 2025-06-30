import Navbar from "./Navbar";
import { useState } from "react";

export default function TDEE() {
  const [userData, setUserData] = useState({
    weight: "",
    height: "",
    age: "",
    activity: "",
  });

  function handleReset() {
    setUserData({
      weight: "",
      height: "",
      age: "",
    });
    setTdeeResult(null);
  }

  const [tdeeResult, setTdeeResult] = useState(null);

  function handleCalculate() {
    const { weight, height, age, activity } = userData;

    if (!weight || !height || !age || !activity) {
      setTdeeResult("Please complete all fields");
      return;
    }

    const bmr = weight * 10 + height * 6.25 - age * 5 + 5;

    const tdee = bmr * parseFloat(activity);

    setTdeeResult(`Your TDEE is: ${tdee.toFixed(2)} calories/day`);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
            TDEE Calculator
            <p className="text-2xl">based on Mifflin-St Jeor</p>
          </h1>

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

            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
              onClick={handleCalculate}
            >
              Calculate TDEE
            </button>

            {tdeeResult && (
              <p className="text-center text-lg mt-4 text-orange-400">
                {tdeeResult}
              </p>
            )}
          </div>
          <div className="flex flex-col items-center space-y-4 mt-4">
            <button
              onClick={handleReset}
              className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md transition shadow-md"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
