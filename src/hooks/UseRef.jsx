import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [firstName, setFirstName] = useState("");
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(`Component rendered ${renderCount.current} times`);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          className="border border-gray-300 p-2 rounded-md w-full mb-4"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <h3 className="text-lg text-gray-700">Typing: {firstName}</h3>
        <h3>component rendered count : {renderCount.current}</h3>
      </div>
    </div>
  );
}

export default UseRef;
