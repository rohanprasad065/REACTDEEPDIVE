import React from "react";


export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">

        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left Info */}
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                Get in touch:
              </h1>

              <p className="mt-2 text-lg text-gray-600">
                Fill in the form to start a conversation
              </p>

              {/* Address */}
              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 font-semibold">
                  Acme Inc, Street, State
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M3 5a2 2 0 012-2h3.28l1.5 4.5-2.3 1.1a11 11 0 005.5 5.5l1.1-2.3 4.5 1.5V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
                </svg>
                <div className="ml-4 font-semibold">
                  +91 1234567890
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 font-semibold">
                  info@acme.com
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="p-6 flex flex-col justify-center">
              
              <input
                type="text"
                placeholder="Full Name"
                className="mt-2 py-3 px-3 rounded-lg border border-gray-400 focus:border-orange-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="mt-2 py-3 px-3 rounded-lg border border-gray-400 focus:border-orange-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="mt-2 py-3 px-3 rounded-lg border border-gray-400 focus:border-orange-500 outline-none"
              />

              <button
                type="submit"
                className="mt-4 bg-orange-700 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition"
              >
                Submit
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}