import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Signup() {
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signState, setSignState] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false); // لمتابعة محاولة التسجيل

  function handleSignUp(e) {
    e.preventDefault();
    setSubmitClicked(true);

    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      console.log("Missing Data!", userSignup);
      setSignState(false);
      return;
    }

    console.log("Done!");
    setSignState(true);

    // بجيب الـ users الموجودين
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // بضيف اليوزر الجديد جوه الـ Array مباشرة
    users.push({
      name: userSignup.name,
      email: userSignup.email,
      password: userSignup.password,
    });

    // بخزّن الأراي بعد التعديل في localStorage
    localStorage.setItem("users", JSON.stringify(users));

    console.log(users);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 px-4">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
            Sign Up
          </h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="name" className="block mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userSignup.name}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, name: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userSignup.email}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, email: e.target.value });
                }}
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
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={userSignup.password}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, password: e.target.value });
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 hover:underline transition"
            >
              Login
            </Link>
          </p>

          {submitClicked &&
            (signState ? (
              <p className="text-green-500 text-center mt-4">
                تم التسجيل بنجاح!
              </p>
            ) : (
              <p className="text-red-500 text-center mt-4">
                الرجاء ملء جميع الحقول
              </p>
            ))}
        </div>
      </div>
    </>
  );
}
