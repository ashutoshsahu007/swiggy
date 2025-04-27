import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-md text-center">
        {/* Cool SVG Illustration */}
        <div className="mb-8">
          <img
            src="20.svg"
            alt="Lost in Space"
            className="w-full h-auto animate-float"
          />
        </div>

        <h1 className="text-7xl font-extrabold text-blue-400 mb-4">
          {err.status}
        </h1>
        <h2 className="text-3xl font-bold mb-2">{err.statusText}</h2>
        <p className="text-gray-400 mb-6">
          It seems you’ve drifted into the unknown. Let’s get you back to
          safety.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="border border-blue-400 hover:bg-blue-500 hover:text-white text-blue-400 font-bold py-2 px-6 rounded-full transition"
          >
            Home
          </button>
        </div>
      </div>

      {/* Small floating animation for the SVG */}
      <style>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translatey(0px); }
          50% { transform: translatey(-10px); }
          100% { transform: translatey(0px); }
        }
      `}</style>
    </div>
  );
};
export default Error;
