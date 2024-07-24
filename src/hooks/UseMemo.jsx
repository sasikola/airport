import React, { useEffect, useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowfunction(number);
  }, [number]);

  const themeChange = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <div
      className={`min-h-screen ${
        dark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-4">
          <input
            className={`border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              dark ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
            type="number"
            id="number"
            value={number}
            placeholder="Enter a number"
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <button
            onClick={themeChange}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            {dark ? "light mode" : "dark mode"}
          </button>
        </div>
        <h1 className="text-4xl">Number: {doubleNumber}</h1>
      </div>
    </div>
  );
}

const slowfunction = (number) => {
  for (let i = 0; i < 100000000; i++) {}
  console.log("Slow function is running");
  return number * 2;
};

export default UseMemo;
