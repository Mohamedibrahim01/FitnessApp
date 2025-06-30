import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Features() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-orange-500">
          Choose Your Calculation
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <div
            onClick={() => navigate("/BMICalculator")}
            className="cursor-pointer bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:bg-gray-800 transition text-center"
          >
            <h2 className="text-xl font-bold mb-2 text-orange-500">
              BMI Calculator
            </h2>
            <p>
              Calculate your Body Mass Index and check your weight category.
            </p>
          </div>

          <div
            onClick={() => navigate("/BMRCalculator")}
            className="cursor-pointer bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:bg-gray-800 transition text-center"
          >
            <h2 className="text-xl font-bold mb-2 text-orange-500">
              BMR Calculator
            </h2>
            <p>Estimate your Basal Metabolic Rate based on your data.</p>
          </div>

          <div
            onClick={() => navigate("/TDEE")}
            className="cursor-pointer bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:bg-gray-800 transition text-center"
          >
            <h2 className="text-xl font-bold mb-2 text-orange-500">
              TDEE Calculator
            </h2>
            <p>
              This calculator can be used to estimate your Total Daily Energy
              Expenditure
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
