import { useState } from "react";
import Navbar from "./Navbar";

export default function BMRCalculator() {
  const [userInput, setUserInput] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
  });

  function handleReset() {
    setUserInput({
      weight: "",
      height: "",
      age: "",
    });
    setBmrResult(null);
  }

  const [bmrResult, setBmrResult] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleCalcClick() {
    const bmr = BMRcalc();
    setBmrResult(bmr);
  }
  function BMRcalc() {
    const weight = parseFloat(userInput.weight);
    const height = parseFloat(userInput.height);
    const age = parseFloat(userInput.age);
    const gender = userInput.gender.toLowerCase();

    if (!weight || !height || !age || !gender)
      return "Please complete all fields";

    let bmrMan = 10 * weight + 6.25 * height - 5 * age + 5;
    let bmrWoman = 10 * weight + 6.25 * height - 5 * age - 161;

    if (gender === "male") {
      return bmrMan.toFixed(2);
    }
    if (gender === "female") {
      return bmrWoman.toFixed(2);
    }
    return "Invalid gender";
  }

  return (
    <>
      <Navbar />/
      <div className="max-w-md mx-auto mt-20 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">
          BMR Calculator
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
          <div>
            <label htmlFor="age" className="block mb-1">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={userInput.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Gender:</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={userInput.gender === "male"}
                  onChange={handleChange}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={userInput.gender === "female"}
                  onChange={handleChange}
                />
                <span>Female</span>
              </label>
            </div>
          </div>
          <button
            type="button"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition"
            onClick={handleCalcClick}
          >
            Calculate BMR
          </button>
        </form>
        {bmrResult && bmrResult !== "Please complete all fields" && (
          <div className="mt-4 text-center">
            <p>
              Your BMR is: <span className="font-bold">{bmrResult}</span>{" "}
              kcal/day
            </p>
          </div>
        )}

        {bmrResult === "Please complete all fields" && (
          <div className="mt-4 text-center text-red-500">
            <p>{bmrResult}</p>
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
