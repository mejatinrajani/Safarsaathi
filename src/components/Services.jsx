import React from "react";

const ServicesSection = ({ imageHeight = "150px", imageWidth = "150px", uplift = "100px" }) => {
  const services = [
    {
      image: "https://via.placeholder.com/150",
      text: "Service 1: This is a longer description to test text alignment. Service 1 is amazing!",
    },
    {
      image: "https://via.placeholder.com/150",
      text: "Service 2: This is the middle image, elevated for emphasis.",
    },
    {
      image: "https://via.placeholder.com/150",
      text: "Service 3: This service is also great and has a lot of benefits for users!",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-12 mb-10 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-[50px] mb-20 sm:mb-40 text-center"  style={{
        textShadow: '0px 7px 50px #90EE90, 0px 16px 80px #90EE90, 0px 22px 60px #90EE90',
      }}>SERVICES</h1>

      {/* Services */}
      <div className="flex flex-col gap-10 sm:flex-row sm:justify-center sm:items-start sm:gap-32">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-col items-center text-center w-full sm:w-auto ${index % 2 === 0 ? 'sm:items-center' : ''}`}
          >
            <div
              className={`flex flex-col sm:flex-col items-center sm:items-start ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
            >
              <img
                src={service.image}
                alt={`Service ${index + 1}`}
                style={{
                  height: imageHeight,
                  width: imageWidth,
                }}
                className="rounded-lg shadow-lg mx-auto"
              />
              <p className="mt-8 sm:mt-0 sm:ml-6 lg:mt-8 sm:mr-6 text-sm sm:text-lg text-gray-700 max-w-xs">
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;