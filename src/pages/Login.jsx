import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // 👈 هنا السحر

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
      setTimeout(() => {
        navigate("/"); // راح بعد شوية بسيط يدي فرصة للرسالة تظهر
      }, 1500);
    } else {
      setLoginState(false);
      console.log("Invalid credentials");
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 px-4">
        {/* صندوق تسجيل الدخول */}
        <motion.div
          className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl font-bold mb-6 text-center text-orange-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Login
          </motion.h1>

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

            {/* زرار تسجيل الدخول مع حركة عند الضغط */}
            <motion.button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Login
            </motion.button>
          </form>

          {/* الرسائل المتغيرة بأنيميشن */}
          <AnimatePresence mode="wait">
            {loginState === true && (
              <motion.p
                key="success"
                className="text-green-500 text-center mt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                Login Successful!
              </motion.p>
            )}
            {loginState === false && (
              <motion.p
                key="error"
                className="text-red-500 text-center mt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                Invalid email or password.
              </motion.p>
            )}
          </AnimatePresence>

          {/* روابط التسجيل وإعادة تعيين الباسورد */}
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
        </motion.div>
      </div>
    </>
  );
}
