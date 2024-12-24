import { Link, Outlet } from "react-router-dom"

export const Footer = () => {
  return (
    <>
    <footer className="bg-white  shadow  dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2030{" "}
          <Link to="/" className="hover:underline">
            LaLibro™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="https://www.instagram.com/manyam_karthik/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 me-4 md:me-6"
            >
              <i className="fab fa-instagram text-lg"></i>
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 me-4 md:me-6"
            >
              <i className="fab fa-twitter text-lg"></i>
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/manyamkarthik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 me-4 md:me-6"
            >
              <i className="fab fa-github text-lg"></i>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/karthik-manyam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full text-center py-2 border-t dark:border-gray-700">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Made with{" "}
          <span className="text-red-500" role="img" aria-label="love">
            ❤️
          </span>{" "}
          by <b>Karthik</b>
        </span>
      </div>
    </footer>
    <Outlet />
  </>
  )
}
