import { Link } from "react-router-dom";
import error from "../assets/images/dribbble.gif"
import { useTitle } from "../hooks/useTitle";
export const PageNotFound = () => {
    useTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800 px-4 py-10">
        <div className="text-center">
          <p className="text-8xl font-extrabold text-gray-700 dark:text-white mb-4">404</p>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
          <div className="flex justify-center mb-8">
            <img
              src={error}
              alt="404 Error"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <div>
          <Link to="/">
            <button
              type="button"
              className="w-64 text-2xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center"
            >
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
