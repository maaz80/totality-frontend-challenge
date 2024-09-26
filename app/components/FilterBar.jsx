import React from 'react';

const FilterBar = ({ filters, setFilters, applyFilters, locations }) => {

  // Filter Bar Inputs 
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center  gap-4 p-4 bg-gray-100 rounded-xl shadow-md shadow-black w-[100%]" >
      <div className="w-full sm:w-1/3">
        <label className="block text-[10px] md:text-sm font-medium text-gray-700">Location</label>
        <select
          name="location"
          onChange={handleFilterChange}
          value={filters.location || ''}
          className="block w-full px-0.5 sm:px-3 py-1 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px] sm:text-sm"
        >
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-1/3">
        <label className="block text-[10px] md:text-sm font-medium text-gray-700">Price (Max)</label>
        <input
          type="number"
          name="price"
          onChange={handleFilterChange}
          value={filters.price || ''}
          placeholder="Enter Max Price"
          className="block w-full px-0.5 sm:px-3 py-1 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px] sm:text-sm"
        />
      </div>

      <div className="w-full sm:w-1/3">
        <label className="block text-[10px] md:text-sm font-medium text-gray-700">Bedrooms</label>
        <select
          name="bedrooms"
          onChange={handleFilterChange}
          value={filters.bedrooms || ''}
          className="block w-full px-0.5 sm:px-3 py-1 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px] sm:text-sm"
        >
          <option value="">Any</option>
          {[1, 2, 3, 4, 5].map((bedrooms) => (
            <option key={bedrooms} value={bedrooms}>{bedrooms} Bedroom(s)</option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-1/3">
        <button
          onClick={applyFilters}
          className="mt-4 w-[90%] inline-flex justify-center py-1 md:py-2 px-1 md:px-4 border border-transparent shadow-sm text-[10px] sm:text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id='movetosection'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
