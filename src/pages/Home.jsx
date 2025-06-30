import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 pt-20 pb-16">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Welcome to <span className="text-orange-500">Fitness App</span>
        </h1>

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-8 rounded-md text-lg transition"
          onClick={() => {
            navigate("plans");
          }}
        >
          Get Started
        </button>
      </main>
      <Footer />
    </div>
  );
}
