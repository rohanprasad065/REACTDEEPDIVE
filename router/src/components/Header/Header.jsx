import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Right Buttons */}
          <div className="flex items-center lg:order-2">

            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="text-white bg-orange-700 hover:bg-orange-800 rounded-lg text-sm px-4 py-2"
            >
              Get started
            </Link>

            {/* Mobile Toggle */}
            <button
              className="ml-3 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>

          </div>

          {/* Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Contact us
                </NavLink>
              </li>
               <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Github
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}