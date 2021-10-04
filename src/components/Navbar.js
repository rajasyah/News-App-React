import React, { useState } from "react";

const Navbar = ({ search }) => {
  const [text, setText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    search(text);
  };

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
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search News..."
            className="bg-transparent focus:outline-none"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gray-400 text-white rounded-md px-3 shadaow-lg"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
