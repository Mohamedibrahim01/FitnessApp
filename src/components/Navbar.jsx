import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-300 w-full py-4 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/src/assets/Logo.png" alt="logo" className="w-10 h-10" />
          <a
            href="/"
            className="text-xl font-bold hover:text-orange-500 transition"
          >
            Fitness App
          </a>
        </div>

        <div className="space-x-4 hidden md:flex">
          <button
            className="hover:text-orange-500 transition"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            className="hover:text-orange-500 transition"
            onClick={() => {
              navigate("/plans");
            }}
          >
            Plans
          </button>
          <button
            className="hover:text-orange-500 transition"
            onClick={() => {
              navigate("/Features");
            }}
          >
            Features
          </button>
          <button
            className="hover:text-orange-500 transition"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4 space-y-2 flex flex-col items-center">
          <button
            className="hover:text-orange-500 transition px-4 py-2"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            className="hover:text-orange-500 transition"
            onClick={() => {
              navigate("/plans");
            }}
          >
            Plans
          </button>
          <button
            className="hover:text-orange-500 transition px-4 py-2"
            onClick={() => {
              navigate("/Features");
            }}
          >
            Features
          </button>
          <button
            className="hover:text-orange-500 transition px-4 py-2"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
