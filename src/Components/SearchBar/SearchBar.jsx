import { useState } from "react";

const SearchBar = ({ onExplore }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [query, setQuery] = useState("");

  const types = ["Apartment", "Villa", "Plot", "Office"];
  const cities = ["Bengaluru", "Mumbai", "Delhi", "Hyderabad"];

  return (
    <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-lg sm:p-6 lg:flex-row lg:rounded-3xl lg:p-8">
      <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 sm:flex-row sm:rounded-full">
        <select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
          className="border-b border-gray-300 bg-white px-4 py-3 font-bold text-gray-700 outline-none sm:border-b-0 sm:border-r"
        >
          <option value="" disabled>Select Type</option>
          {types.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>

        <select
          value={selectedCity}
          onChange={(event) => setSelectedCity(event.target.value)}
          className="border-b border-gray-300 bg-white px-4 py-3 font-bold text-gray-700 outline-none sm:border-b-0 sm:border-r"
        >
          <option value="" disabled>Select City</option>
          {cities.map((city) => <option key={city} value={city}>{city}</option>)}
        </select>

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search locality, landmark, builder, project"
          className="min-w-0 flex-1 px-4 py-3 text-gray-700 outline-none"
        />
      </div>

      <button
        type="button"
        onClick={onExplore}
        className="mt-4 w-full whitespace-nowrap rounded-full bg-green-500 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 sm:px-8 sm:text-base lg:mt-0 lg:w-auto"
      >
        Explore Now <span aria-hidden="true">→</span>
      </button>
    </div>
  );
};

export default SearchBar;