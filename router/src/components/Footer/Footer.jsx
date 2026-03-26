import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

        <div className="md:flex md:justify-between">

          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">About</Link>
                </li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/hiteshchoudhary"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        {/* Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500">
            © 2023{" "}
            <a
              href="https://hiteshchoudhary.com/"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              hiteshchoudhary
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 space-x-5 sm:mt-0">

            {/* Facebook */}
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                />
              </svg>
            </a>

            {/* Add others same way... */}

          </div>
        </div>

      </div>
    </footer>
  );
}