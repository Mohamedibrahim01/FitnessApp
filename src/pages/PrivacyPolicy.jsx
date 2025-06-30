import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex items-center justify-center">
        <div className="max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-orange-500 text-center">
            Privacy Policy
          </h1>
          <p className="mb-4">
            We respect your privacy and are committed to protecting your
            personal information.
          </p>
          <p className="mb-4">
            Any information you provide, such as your name, email, or password,
            is stored securely and will not be shared with third parties.
          </p>
          <p className="mb-4">
            This website is for educational purposes only. We do not collect
            sensitive personal data for commercial use.
          </p>
          <p className="mb-4">
            By using this website, you agree to the terms of this privacy
            policy.
          </p>
          <p>If you have any questions, please contact us.</p>
        </div>
      </div>
    </>
  );
}
