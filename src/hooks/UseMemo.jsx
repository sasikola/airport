import React, { useEffect, useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowfunction(number);
  }, [number]);

  const themeClasses = useMemo(() => {
    return dark
      ? "min-h-screen bg-gray-900 text-white"
      : "min-h-screen bg-white text-black";
  }, [dark]);

  const inputClasses = useMemo(() => {
    return dark
      ? "border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
      : "border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black";
  }, [dark]);

  const themeChange = () => {
    setDark((prevDark) => !prevDark);
  };

  useEffect(() => {
    console.log("Theme changed");
  }, [dark]);

  return (
    <div className={themeClasses}>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-4">
          <input
            className={inputClasses}
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
            {dark ? "Light Mode" : "Dark Mode"}
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
