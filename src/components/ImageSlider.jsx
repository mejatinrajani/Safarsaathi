import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "/maha.png",
    "/agra.jpg",
    "/ayodhya.jpg",
    "/banaras.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold text-[50px] sm:mb-24 text-center"  style={{
        textShadow: '0px 7px 50px #90EE90, 0px 16px 80px #90EE90, 0px 22px 60px #90EE90',
      }}>TRENDING PLACES</h1>
    <div className="relative w-[800px] h-[500px] mx-auto mt-10 overflow-hidden rounded-lg shadow-lg">
      {/* Slider Container */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full min-h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            } transition`}
          ></button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;
