import { Link } from "react-router-dom"

export const OrderFail = () => {
  return (
  
  <section className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-slate-800">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
        {/* Animated Exclamation Icon */}
        <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 animate-pulse-slow rounded-full border-4 border-red-400 dark:border-red-600"></div>
          <div className="absolute inset-0 animate-pulse-slower rounded-full border-2 border-red-300 dark:border-red-500"></div>
          <p className="bi bi-exclamation-circle-fill text-red-500 text-4xl"></p>
        </div>

        {/* Payment Failed Header */}
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 tracking-wide">
          Payment Failed
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Your order could not be confirmed. Please try again!
        </p>

        {/* Support Information */}
        <div className="mt-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            If the issue persists, contact us at{" "}
            <span className="font-medium text-gray-800 dark:text-gray-200">
              LaLibro@example.com
            </span>.
          </p>
        </div>

        {/* Retry Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none"
          >
            Check Cart Again <i className="ml-2 bi bi-cart-fill"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
