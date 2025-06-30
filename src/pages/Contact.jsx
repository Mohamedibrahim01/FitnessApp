import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex items-center justify-center">
        <div className="max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-orange-500 text-center">
            Contact Us
          </h1>
          <p className="mb-4 text-center">
            If you have any questions, suggestions, or concerns, feel free to
            reach out to us.
          </p>
          <p className="mb-2">Email: Ibarahim24876@gmail.com</p>
          <p className="mb-2">Phone: +20 115 958 899 6</p>
          <p>We usually respond within 24 hours.</p>
        </div>
      </div>
    </>
  );
}
