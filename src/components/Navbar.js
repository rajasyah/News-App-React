import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-12 bg-gray-700">
      <h1 className="text-white font-bold text-lg pl-5 ">RooNews</h1>
      <div className="search flex items-center justify-center bg-gray-200 mr-5 rounded-md gap-2 pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search News..."
          className="bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Navbar;
