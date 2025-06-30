import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ResetPassword() {
  const [userNewData, setUserNewData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleResetPassword(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.email === userNewData.email);

    if (!userExists) {
      setMessage("Email not found.");
      return;
    }

    const updatedUsers = users.map((user) => {
      if (user.email === userNewData.email) {
        return { ...user, password: userNewData.password };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("Password updated successfully!");
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 px-4">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
            Reset Password
          </h1>
          <form className="space-y-4" onSubmit={handleResetPassword}>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userNewData.email}
                onChange={(e) =>
                  setUserNewData({ ...userNewData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1">
                New Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userNewData.password}
                onChange={(e) =>
                  setUserNewData({ ...userNewData, password: e.target.value })
                }
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
            >
              Reset Password
            </button>
          </form>

          {message && (
            <p
              className={`text-center mt-4 ${
                message.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <span className="text-orange-500">Sign up</span>
          </p>
        </div>
      </div>
    </>
  );
}
