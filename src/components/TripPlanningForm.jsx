import React from "react";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

const TripPlanningForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <h1 className="text-center mt-12 text-[50px] font-bold mb-10"   style={{
        textShadow: '0px 7px 50px #90EE90, 0px 16px 80px #90EE90, 0px 22px 60px #90EE90',
      }}>
          PLAN YOUR TRIP
        </h1>

        {/* Form with Chessboard Background */}
        <div className="relative bg-white border-2 border-black p-6 sm:p-8 rounded-lg shadow-lg">
          {/* Chessboard Pattern */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 z-0 pointer-events-none">
            {[...Array(64)].map((_, index) => (
              <div
                key={index}
                className={`w-full h-full ${
                  (Math.floor(index / 8) + (index % 8)) % 2 === 0
                    ? "bg-gray-200"
                    : "bg-gray-400"
                } opacity-20`}
              />
            ))}
          </div>

          {/* Form Content */}
          <form className="space-y-6 relative z-10">
            {/* Current Location */}
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-red-500" />
              <input
                type="text"
                placeholder="Current Location"
                className="block w-full pl-10 border-b-2 border-black bg-transparent text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            {/* Destination Location */}
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-red-500" />
              <input
                type="text"
                placeholder="Destination Location"
                className="block w-full pl-10 border-b-2 border-black bg-transparent text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <p className="text-black text-center">Add more destinations</p>

            {/* Date Pickers */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <span>From:</span>
                <input
                  type="date"
                  className="border-b-2 border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span>To:</span>
                <input
                  type="date"
                  className="border-b-2 border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Type of Group */}
            <div className="relative">
              <select className="block w-full pl-4 pr-10 border-b-2 border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 appearance-none">
                <option value="" disabled selected>
                  Type of Group
                </option>
                <option>Family</option>
                <option>Friends</option>
                <option>Corporate</option>
              </select>
              <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
            </div>

            {/* Number of People */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {["Men", "Women", "Children"].map((label) => (
                <div className="relative w-full" key={label}>
                  <select className="block w-full pl-4 pr-10 border-b-2 border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 appearance-none">
                    <option value="" disabled selected>
                      {label}
                    </option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
                </div>
              ))}
            </div>

            {/* Budget */}
            <div className="relative">
              <select className="block w-full pl-4 pr-10 border-b-2 border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 appearance-none">
                <option value="" disabled selected>
                  Budget
                </option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
            </div>

            {/* Health-related Issues */}
            <div className="relative">
              <input
                type="text"
                placeholder="Do you have any health-related issues?"
                className="block w-full pl-4 border-b-2 border-black bg-transparent text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            {/* Unsure Option */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="unsure" className="w-4 h-4" />
              <label htmlFor="unsure" className="text-black">
                Not sure? Let us decide together to ensure you enjoy your trip.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-1/2 mt-4 items-center flex justify-center ml-44 py-3 bg-[#DF898B] border-2 border-black rounded-2xl text-lg text-black font-semibold transform transition-all duration-500 ease-out hover:scale-105 focus:outline-none"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripPlanningForm;
