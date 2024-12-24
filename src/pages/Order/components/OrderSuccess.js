
import { Link, useLocation } from "react-router-dom";

export const OrderSuccess = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Access the state

  function generateRandomString() {
    const prefix = "xyz_"; // Fixed prefix
    const randomNumber = Math.floor(Math.random() * 1e9); // Generate a random number (up to 9 digits)
    return `${prefix}${randomNumber}`;
}


const randomString = generateRandomString();
 
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-slate-800">
        <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 text-center">
            {/* Animated Outer Circle */}
            <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 animate-pulse-slow rounded-full border-4 border-blue-400 dark:border-blue-600"></div>
                <div className="absolute inset-0 animate-pulse-slower rounded-full border-2 border-blue-300 dark:border-blue-500"></div>
                <p className="bi bi-check-circle-fill text-blue-500 text-5xl"></p>
            </div>

            {/* Order Confirmation Text */}
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Order Confirmed!
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                Thank you, <span className="font-medium">{data.user.name}</span>, for your order!
            </p>

            {/* Order Summary */}
            <div className="mt-6 text-left">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Order ID:</span>
                    <span className="font-medium">{data.id}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span>Payment ID:</span>
                    <span className="font-medium">{randomString}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    A confirmation email has been sent to{" "}
                    <span className="font-medium">{data.user.email}</span>.
                </p>
            </div>

            {/* Continue Shopping Button */}
            <div className="mt-8">
                <Link
                    to="/products"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm py-2 px-5 rounded transition-transform transform hover:scale-105 focus:outline-none"
                >
                    Continue Shopping <i className="ml-2 bi bi-cart-fill"></i>
                </Link>
            </div>
        </div>
    </section>
);

}
