import { useState } from "react";
import Navbar from "./Navbar";

export default function BMICalculator() {
  const [userInput, setUserInput] = useState({
    weight: "",
    height: "",
  });

  const [bmiResult, setBmiResult] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleReset() {
    setUserInput({
      weight: "",
      height: "",
    });
    setBmiResult(null);
  }

  function calculateBMI() {
    const weight = parseFloat(userInput.weight);
    const height = parseFloat(userInput.height) / 100; // نحول لـ متر

    if (!weight || !height) return "Please complete all fields";

    const bmi = weight / (height * height);
    return bmi.toFixed(2);
  }

  function handleCalcClick() {
    const bmi = calculateBMI();
    setBmiResult(bmi);
  }

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-20 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">
          BMI Calculator
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="weight" className="block mb-1">
              Weight (kg):
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={userInput.weight}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="height" className="block mb-1">
              Height (cm):
            </label>
            <input
              type="number"
              id="height"
              name="height"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={userInput.height}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition"
            onClick={handleCalcClick}
          >
            Calculate BMI
          </button>
        </form>

        {bmiResult && bmiResult !== "Please complete all fields" && (
          <div className="mt-4 text-center">
            <p>
              Your BMI is: <span className="font-bold">{bmiResult}</span>
            </p>
          </div>
        )}

        {bmiResult === "Please complete all fields" && (
          <div className="mt-4 text-center text-red-500">
            <p>{bmiResult}</p>
          </div>
        )}

        <div className="flex flex-col items-center space-y-4 mt-4">
          <button
            onClick={handleReset}
            className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md transition shadow-md"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
