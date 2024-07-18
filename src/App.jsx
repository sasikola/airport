import React, { useState } from "react";

const App = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cabin, setCabin] = useState("");
  const [showProFilters, setShowProFilters] = useState(false);
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [error, setError] = useState("");

  const origins = ["JFK", "DEL", "SYD", "BOM", "BNE", "BLR"];
  const destinations = ["JFK", "DEL", "SYD", "LHR", "CDG", "DOH", "SIN"];
  const cabins = ["Economy", "Business", "First"];

  const json_data = {
    origin: "SYD",
    destination: "JFK",
    partnerPrograms: [
      "Air Canada",
      "United Airlines",
      "KLM",
      "Qantas",
      "American Airlines",
      "Etihad Airways",
      "Alaska Airlines",
      "Qatar Airways",
      "LifeMiles",
    ],
    stops: 2,
    departureTimeFrom: "2024-07-09T00:00:00Z",
    departureTimeTo: "2024-10-07T00:00:00Z",
    isOldData: false,
    limit: 302,
    offset: 0,
    cabinSelection: ["Business"],
    date: "2024-07-09T12:00:17.796Z",
  };

  const handleSearch = () => {
    if (!origin || !destination || !cabin) {
      setError("Please select both origin, destination and cabin.");
      setFilteredDetails([]); // Clear previous results
      return;
    }
    setError("");

    // Example logic to filter data based on selected criteria
    const filteredData = [json_data]; // Replace with actual filtering logic

    setFilteredDetails(filteredData);
  };

  return (
    <>
      <div className="bg-green-900 text-black min-h-screen">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-white">
            Choose Origin and Destination Airports:
          </h1>
          <div className="max-w-md mx-auto bg-white p-5 rounded-lg shadow-lg space-y-4">
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            >
              <option value="">Select Origin</option>
              {origins.map((originOption) => (
                <option key={originOption} value={originOption}>
                  {originOption}
                </option>
              ))}
            </select>

            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select Destination</option>
              {destinations.map((destinationOption) => (
                <option key={destinationOption} value={destinationOption}>
                  {destinationOption}
                </option>
              ))}
            </select>

            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={cabin}
              onChange={(e) => setCabin(e.target.value)}
            >
              <option value="">Select Cabin</option>
              {cabins.map((cabinOption) => (
                <option key={cabinOption} value={cabinOption}>
                  {cabinOption}
                </option>
              ))}
            </select>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={showProFilters}
                onChange={() => setShowProFilters(!showProFilters)}
              />
              <span>Show Pro Filters</span>
            </div>

            <button
              className=" bg-blue-500 text-white p-2 rounded"
              onClick={handleSearch}
            >
              Search
            </button>

            {error && (
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}
          </div>
          {filteredDetails.length > 0 && (
            <div className="flex justify-center mt-8 text-white">
              <div className="bg-green-700 rounded-md p-4 m-4 flex flex-col items-center shadow-lg">
                <img src="/logo.png" alt="Logo" className="w-24" />
                <h2 className="text-lg font-bold mb-2">KLM</h2>
                <p className="text-sm mb-2">SYD JFK</p>
                <p className="text-sm mb-2">2024-07-09 - 2024-10-07</p>
                <p className="text-xl font-bold mb-2">N/A</p>
                <p className="text-sm mb-2">Min Business Miles</p>
                <p className="text-xl font-bold mb-2">53500 + $189</p>
                <p className="text-sm mb-2">Min Economy Miles</p>
                <p className="text-xl font-bold mb-2">N/A</p>
                <p className="text-sm mb-2">Min First Miles</p>
              </div>
              <div className="bg-green-700 rounded-md p-4 m-4 flex flex-col items-center shadow-lg">
                <img src="/logo.png" alt="Logo" className="w-24" />
                <h2 className="text-lg font-bold mb-2">Qantas</h2>
                <p className="text-sm mb-2">SYD JFK</p>
                <p className="text-sm mb-2">2024-07-09 - 2024-10-07</p>
                <p className="text-xl font-bold mb-2">144600 + $177</p>
                <p className="text-sm mb-2">Min Business Miles</p>
                <p className="text-xl font-bold mb-2">55200 + $158</p>
                <p className="text-sm mb-2">Min Economy Miles</p>
                <p className="text-xl font-bold mb-2">N/A</p>
                <p className="text-sm mb-2">Min First Miles</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
