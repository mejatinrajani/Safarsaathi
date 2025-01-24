import React, { useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: "Card 1",
      image: "https://via.placeholder.com/150",
      description: "This is the first card's description.",
    },
    {
      title: "Card 2",
      image: "https://via.placeholder.com/150",
      description: "This is the second card's description.",
    },
    {
      title: "Card 3",
      image: "https://via.placeholder.com/150",
      description: "This is the third card's description.",
    },
    {
      title: "Card 4",
      image: "https://via.placeholder.com/150",
      description: "This is the fourth card's description.",
    },
    {
      title: "Card 5",
      image: "https://via.placeholder.com/150",
      description: "This is the fifth card's description.",
    },
    {
      title: "Card 6",
      image: "https://via.placeholder.com/150",
      description: "This is the sixth card's description.",
    },
  ];

  const itemsPerPage = window.innerWidth < 768 ? 1 : 3; // Adjust based on screen width
  const totalSlides = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const getTranslateX = () => {
    return `-${currentIndex * 100}%`;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto p-6 mt-20 mb-10">
      <h1
      className="text-center text-[50px] font-bold"
      style={{
        textShadow: '0px 7px 50px #90EE90, 0px 16px 80px #90EE90, 0px 22px 60px #90EE90',
      }}
    >
      FACILITIES
    </h1>


      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex mt-10 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${getTranslateX()})` }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4"
              style={{
                width: `${100 / itemsPerPage}%`,
              }}
            >
              <div
                className="group relative bg-[#D9D9D6] text-white rounded-[50px] p-6 shadow-lg transform transition-all duration-500 hover:scale-105"
                style={{
                  height: "500px",
                }}
              >
                {/* Card Content */}
                <div className="relative inset-0 flex flex-col justify-center items-center transition-opacity duration-500 group-hover:opacity-30">
                  <h2 className="text-xl lg:text-4xl lg:bg-[#1D3465] lg:h-12 lg:rounded-2xl lg:w-40 font-bold mb-6 text-center">
                    {item.title}
                  </h2>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-36 h-36 mb-8 rounded-full border-4 border-gray-200 shadow-lg"
                  />
                  <p className=" text-xl text-[#72512D] text-center mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Explore More Button */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="bg-[#1D3465] text-white px-6 py-2 rounded-full shadow-lg hover:bg-black transition">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-[#1D3465] text-white p-3 rounded-full shadow-md hover:bg-purple-600 transition"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[#1D3465] text-white p-3 rounded-full shadow-md hover:bg-purple-600 transition"
      >
        &gt;
      </button>

      {/* Single Pointer */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-[#1D3465]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
