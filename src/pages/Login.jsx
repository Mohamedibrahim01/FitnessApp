import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [loginState, setLoginState] = useState(null);
  function handleLogin(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) =>
        user.email === userLogin.email && user.password === userLogin.password
    );

    if (matchedUser) {
      setLoginState(true);
      console.log("Login Successful!");
      navigate("/"); // Redirect to home page on successful login
    } else {
      setLoginState(false);
      console.log("Invalid credentials");
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 px-4">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
            Login
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userLogin.email}
                onChange={(e) =>
                  setUserLogin((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userLogin.password}
                onChange={(e) =>
                  setUserLogin((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
              //={handleRedirect}
            >
              Login
            </button>
          </form>

          {loginState === true && (
            <p className="text-green-500 text-center mt-4">Login Successful!</p>
          )}
          {loginState === false && (
            <p className="text-red-500 text-center mt-4">
              Invalid email or password.
            </p>
          )}

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-500 hover:underline transition"
            >
              Sign up
            </Link>
          </p>

          <p className="text-center text-sm mt-2">
            Forgot your password?{" "}
            <Link
              to="/resetpassword"
              className="text-orange-500 hover:underline transition"
            >
              Reset
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
