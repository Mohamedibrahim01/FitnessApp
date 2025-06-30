import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-gray-300 w-full py-4 fixed bottom-0 left-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
        <p className="text-sm">&copy; 2025 Fitness App. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            className="hover:text-orange-500 transition cursor-pointer"
            onClick={() => navigate("/PrivacyPolicy")}
          >
            Privacy Policy
          </a>
          <a
            className="hover:text-orange-500 transition cursor-pointer"
            onClick={() => navigate("/TermsOfService")}
          >
            Terms of Service
          </a>
          <a
            className="hover:text-orange-500 transition cursor-pointer"
            onClick={() => navigate("/Contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
