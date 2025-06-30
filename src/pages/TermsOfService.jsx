import Navbar from "../components/Navbar";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex items-center justify-center">
        <div className="max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-orange-500 text-center">
            Terms of Service
          </h1>
          <p className="mb-4">
            By using this website, you agree to follow these terms and
            conditions.
          </p>
          <p className="mb-4">
            This website is for educational and personal use only. We do not
            guarantee the accuracy or reliability of the content.
          </p>
          <p className="mb-4">
            You are responsible for the information you provide. Please do not
            use fake or misleading information.
          </p>
          <p className="mb-4">
            We reserve the right to modify or remove content at any time without
            prior notice.
          </p>
          <p>
            If you do not agree with these terms, please do not use this
            website.
          </p>
        </div>
      </div>
    </>
  );
}
