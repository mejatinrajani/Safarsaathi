import React from 'react'
import  { useState } from 'react';
import Navbar_EmergencyPage from '../components/Navbar_EmergencyPage';
import Footer from '../components/Footer';

function EmergencyPage() {
    const [message, setMessage] = useState('');
    
    const SubmitHandler = (e) => {
      e.preventDefault();
      const data = message; // Receive the message box data from here.
      setMessage('');
    }


  return (
    <div className="bg-gradient-to-b from-[#4E517E] to-[#D9D9D9] min-h-screen flex flex-col overflow-x-hidden">

      <Navbar_EmergencyPage/>
{/* Main Content */}
<div className="flex flex-col items-center my-8 z-10">
  {/* Stylish Text */}
  <h2
    style={{ fontFamily: "Akaya Kanadaka, cursive" }}
    className="text-left mx-16 font-extrabold text-[#EBE1B5] mt-12 mb-16 text-4xl sm:text-5xl lg:text-6xl"
  >
    SafarSaathi — A First-of-Its-Kind {" "}
    <span
      className="text-black text-6xl sm:text-7xl lg:text-8xl"
      style={{ fontFamily: "Akaya Kanadaka, cursive" }}
    >
      Travel
    </span>{" "}
    Platform for Health & Safety <br />
  </h2>

  {/* Images and Left-Side Text */}
  <div className="flex flex-col lg:flex-row w-full mt-8">
    {/* Left Text Section */}
    <div className="text-left space-y-6 sm:space-y-8 lg:space-y-12 lg:w-[740px] lg:ml-[50px] px-4">
      <p
        className="text-sm sm:text-base lg:text-lg font-semibold text-white leading-6 sm:leading-7 lg:leading-8"
        style={{ fontFamily: "Akaya Kanadaka, cursive" }}
      >

        
“सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः”<br></br>
(“May all be happy, may all be free from illness.”)<br></br> <br></br>
        Our Emergency Health Page offers: <br></br> <br></br>

Nearby hospitals and clinics for quick medical assistance
Emergency contact numbers at your fingertips
First-aid guides and medical tips
Home remedies for travel issues like nausea, jet lag, and sunburn
Location-based services for faster emergency response
SafarSaathi is your ultimate travel companion—where adventure meets safety and tradition embraces innovation.
      </p>
    </div>

    {/* Images Section */}
    <div className="relative flex justify-center mb-8 lg:mb-8 lg:ml-52 mt-8 lg:mt-0">
      <img
        src="../public/heath emergency 2.jpeg"
        alt="First"
        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64  rounded-full"
      />
      <img
        src="../public/heath emergency 1.jpeg"
        alt="Second"
        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full 
          absolute left-12 sm:left-32 lg:left-48 top-32 mb-8"
      />
    </div>
  </div>

  {/* Emergency Section */}
  <div className="mt-16 w-full lg:w-[1200px] px-4">
    {/* Emergency Heading */}
    <h1
      className="text-center font-bold text-red-500 mt-20 mb-12 text-4xl sm:text-5xl lg:text-6xl"
      style={{
        fontFamily: "Akaya Kanadaka, cursive",
        textShadow: '3px 4px 5px #000000, 3px 4px 2px #000000, 0px 2px 60px #000000',
      }}
    >
      EMERGENCY
    </h1>
    {/* Input Section */}
    <div className="mb-8">
      <input
        style={{
          fontFamily: "Akaya Kanadaka, cursive",
          color: "black",
          boxShadow: "inset 5px 5px 6px #444564",
        }}
        type="text"
        placeholder="How can we help you? Write your health condition."
        className="p-4 w-full h-16 rounded-3xl placeholder-black border-[3px] border-black resize-none text-black 
          bg-[#7D79A3] focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    {/* Location and Submit */}
    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-8 z-10">
      <input
        style={{ fontFamily: "Akaya Kanadaka, cursive" }}
        type="text"
        placeholder="Current location permission"
        className="p-4 w-full lg:w-2/3 h-16 rounded-3xl border-black border-[3px] placeholder-black bg-[#D9D9D9] focus:outline-none"
      />
      <button
        style={{
          fontFamily: "Akaya Kanadaka, cursive",
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(255, 255, 255, 0.01))",
          color: "white",
        }}
        className="px-8 w-full lg:w-[400px] h-16 py-4 text-xl border-[3px] border-black rounded-3xl font-semibold hover:bg-red-600"
      >
        SUBMIT
      </button>
    </div>

    {/* Solution Box */}
    <textarea
      style={{
        fontFamily: "Akaya Kanadaka, cursive",
        boxShadow: "inset 5px 5px 6px #444564",
      }}
      placeholder="Here is Your Solution..."
      className="w-full rounded-3xl h-16 px-4 py-2 resize-none border-[3px] placeholder-black text-black border-black 
        bg-[#7D79A3] focus:outline-none focus:ring-2 focus:ring-black mb-6"
    ></textarea>
  </div>

  {/* Footer Text */}
  <p
    className="text-sm sm:text-base lg:ml-20 lg:text-lg w-full font-medium text-white text-left px-4 mt-12"
    style={{ fontFamily: "Akaya Kanadaka, cursive" }}
  >
    
At SafarSaathi, Your Health is Our Priority<br></br>
🌍 Global Travel Made Safe – Explore the world with all the safety resources you need.<br></br>
💊 Comprehensive Health Support – Quick access to medical contacts and reliable health tips.<br></br>
🩹 Emergency Assistance & First-Aid – Fast help for injuries or urgent situations with location-based services.<br></br>
Stay connected with SafarSaathi—your trusted travel companion for health, safety, and peace of mind!
  </p>
</div>



     <Footer />

      
      {/* <div className='fixed bottom-0 w-full bg-white text-center z-0' style={{ boxShadow: '0px 0px 400px 200px rgba(255, 255, 255, 0.8)' }}></div> */}
    </div>
  )
}

export default EmergencyPage