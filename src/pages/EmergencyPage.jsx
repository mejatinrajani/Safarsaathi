import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function EmergencyPage() {
    const [message, setMessage] = useState('');
    
    const SubmitHandler = (e) => {
      e.preventDefault();
      const data = message; // Receive the message box data from here.
      setMessage('');
    }

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
      document.body.style.overflow = isNavOpen ? 'unset' : 'hidden';
    };
  return (
    <div className="bg-gradient-to-b from-[#4E517E] to-[#D9D9D9] min-h-screen flex flex-col overflow-x-hidden">
      <nav className="bg-white shadow-lg rounded-[100px] mx-4 my-4 flex items-center justify-between px-6 py-2">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img
            src="../public/safarsathi_logo.jpg"
            alt="Company Logo"
            className="w-16 h-16 rounded-full border-2 border-[#8F84A8] mr-3"
          />
          <h1 className="text-3xl font-bold text-black" style={{textShadow:'5px 5px 5px #766992'}}>
            Safarsathi
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-50">
          <button 
            onClick={toggleNav} 
            className="text-black p-2 focus:outline-none transition-colors relative"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon 
              icon={isNavOpen ? faTimes : faBars} 
              size="2x"
              className={isNavOpen ? 'text-white' : 'text-black'} 
            />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/home"
            className="text-black font-semibold text-2xl mt-6 relative hover:scale-105 transition-all"
          >
            Home
            <span className="absolute inset-0 blur-md rounded-lg opacity-50"></span>
          </Link>
          <Link
            to={'/tripplanning'}
            className="text-black font-semibold mt-6 text-2xl relative hover:scale-105 transition-all"
          >
            Trip Planning
            <span className="absolute inset-0 blur-md rounded-lg opacity-50"></span>
          </Link>
          <Link
            to={"/emergency"}
            className="text-black font-semibold text-3xl relative scale-110 transition-all"
          >
            Emergency
            <span className="absolute inset-0 blur-md  bg-green-500 text-3xl  rounded-lg opacity-50"></span>
          </Link>
          <Link
            to="/contact"
            className="text-black font-semibold mt-6 relative hover:scale-105 transition-all"
          >
            <span className="text-2xl">Contact Us</span>
            <span className="absolute inset-0 blur-md rounded-lg opacity-50"></span>
          </Link>
        </div>

        {/* Profile Section */}
        <div className="hidden lg:flex items-center mr-24">
          <img
            src="../public/profile_img.png"
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 border-[#8F84A8]"
          />
          <span className="text-black font-semibold text-2xl ml-3">John Doe</span>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#1D3465] transform transition-transform duration-500 ease-in-out lg:hidden ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {/* Mobile Menu Links */}
          <div className="flex flex-col items-center space-y-8">
            <Link 
              to="/home" 
              className="text-white font-semibold text-3xl relative hover:scale-110 transition-all"
              onClick={toggleNav}
            >
              Home
              <span className="absolute inset-0 blur-md  rounded-lg opacity-30"></span>
            </Link>
            <Link 
              to="/tripplanning" 
              className="text-white font-semibold text-3xl relative hover:scale-110 transition-all"
              onClick={toggleNav}
            >
              Trip Planning
              <span className="absolute inset-0 blur-md rounded-lg opacity-30"></span>
            </Link>
            <Link 
              to="/emergency" 
              className="text-white font-semibold text-3xl relative hover:scale-110 transition-all"
              onClick={toggleNav}
            >
              Emergency
              <span className="absolute inset-0 blur-md bg-green-500 rounded-lg opacity-30"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-white font-semibold text-3xl relative hover:scale-110 transition-all"
              onClick={toggleNav}
            >
              Contact Us
              <span className="absolute inset-0 blur-md rounded-lg opacity-30"></span>
            </Link>
          </div>

          {/* Mobile Profile Section */}
          <div className="absolute bottom-10 flex flex-col items-center">
            <img
              src="../public/profile_img.png"
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-[#8F84A8] mb-3"
            />
            <span className="text-white font-semibold text-2xl">John Doe</span>
          </div>
        </div>
      </div>


      
{/* Main Content */}
{/* Main Content */}
{/* Main Content */}
<div className="flex flex-col items-center my-8 z-10">
  {/* Stylish Text */}
  <h2
    style={{ fontFamily: "Akaya Kanadaka, cursive" }}
    className="text-left mx-4 font-extrabold text-[#EBE1B5] mt-12 mb-16 text-4xl sm:text-5xl lg:text-6xl"
  >
    Your health is the{" "}
    <span
      className="text-black text-6xl sm:text-7xl lg:text-8xl"
      style={{ fontFamily: "Akaya Kanadaka, cursive" }}
    >
      foundation
    </span>{" "}
    of every <br />
    great adventure — So, we are here to protect <br />
    it fiercely.
  </h2>

  {/* Images and Left-Side Text */}
  <div className="flex flex-col lg:flex-row w-full mt-8">
    {/* Left Text Section */}
    <div className="text-left space-y-6 sm:space-y-8 lg:space-y-12 lg:w-[740px] lg:ml-[50px] px-4">
      <p
        className="text-sm sm:text-base lg:text-lg font-semibold text-white leading-6 sm:leading-7 lg:leading-8"
        style={{ fontFamily: "Akaya Kanadaka, cursive" }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nesciunt
        officia veniam sed neque ea optio pariatur explicabo expedita fugit est,
        necessitatibus dignissimos quia dolor? Minima temporibus quia ut
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nesciunt
        officia veniam sed neque ea optio pariatur explicabo expedita fugit est,
        necessitatibus dignissimos quia dolor? Minima temporibus quia ut
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nesciunt
        officia veniam sed neque ea optio pariatur explicabo expedita fugit est,
        necessitatibus dignissimos quia dolor? Minima temporibus quia ut
        similique?
      </p>
    </div>

    {/* Images Section */}
    <div className="relative flex justify-center mb-8 lg:mb-8 lg:ml-52 mt-8 lg:mt-0">
      <img
        src="../public/first_image.jpg"
        alt="First"
        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64  rounded-full border-4 border-[#8F84A8]"
      />
      <img
        src="../public/second_image.jpg"
        alt="Second"
        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-[#8F84A8] 
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
        textShadow: "5px 5px 45px #000000",
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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo neque
    facilis nobis quasi eum porro, voluptatibus facere veritatis sapiente
    aliquam voluptate! Voluptas, quae? Nobis minus magnam laboriosam nihil
    praesentium!
  </p>
</div>




        <div className="flex items-center justify-center">
  {/* Visit Us Section */}
  <h1 className="mt-16 text-5xl text-center font-bold text-black relative inline-block">
    VISIT US
    <span className="absolute inset-0 blur-xl bg-green-500 rounded-full opacity-50"></span>
  </h1>
</div>

<div className="mt-16 z-10 flex flex-col mb-20 lg:flex-row items-center justify-center px-4">
  {/* Left Half: Social Media Icons */}
  <div
    className="relative grid grid-cols-2 gap-4 lg:gap-8 w-full lg:w-1/2 lg:grid-cols-2 items-center justify-items-center"
    style={{ height: "auto" }}
  >
    {/* Icon: Instagram */}
    <div className="w-24 h-24 sm:w-28 sm:ml-16 sm:h-28 lg:w-32 lg:h-32 bg-[#EAE6F2] flex items-center justify-center rounded-full shadow-lg relative">
      <img src="../public/insta_img.png" alt="Instagram" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" />
      <p className="absolute mt-28 sm:mt-40 text-sm sm:text-base" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
        safarsaathi_travel
      </p>
    </div>

    {/* Icon: Twitter */}
    <div className="w-24 h-24 sm:w-28  sm:h-28 lg:w-32 sm:mr-32 lg:h-32 bg-[#EAE6F2] flex items-center justify-center rounded-full shadow-lg relative">
      <img src="../public/x_img.png" alt="Twitter" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24" />
      <p className="absolute mt-28 sm:mt-40 text-sm sm:text-base" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
        @safarSathi
      </p>
    </div>

    {/* Icon: LinkedIn */}
    <div className="w-24 h-24 sm:w-28 mt-4 sm:ml-16 sm:h-28 lg:w-32 lg:h-32 bg-[#EAE6F2] flex items-center justify-center rounded-full shadow-lg relative">
      <img src="../public/linkedin_img.png" alt="LinkedIn" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" />
      <p className="absolute mt-28 sm:mt-40 text-sm sm:text-base" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
        @safarSathi
      </p>
    </div>

    {/* Icon: YouTube */}
    <div className="w-24 h-24 sm:w-28 mt-4 sm:h-28 sm:mr-32 lg:w-32 lg:h-32 bg-[#EAE6F2] flex items-center justify-center rounded-full shadow-lg relative">
      <img src="../public/yt_img.png" alt="YouTube" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" />
      <p className="absolute mt-28 sm:mt-40 text-sm sm:text-base " style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
        @safarSathi
      </p>
    </div>
  </div>

  {/* Right Half: Company Logo and Details */}
  <div className="w-full lg:w-1/3 flex flex-col sm:mr-28 items-center lg:items-start justify-center mt-10 lg:mt-0">
    {/* Company Logo */}
    <div className="flex items-center mb-4 lg:ml-24">
      <img
        src="../public/safarsathi_logo.jpg"
        alt="Company Logo"
        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full border-4 border-[#8F84A8]"
      />
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black ml-4">Safarsathi</h1>
    </div>

    {/* Details Section */}
    <div className="w-full flex flex-col sm:flex-row justify-between lg:items-start">
      {/* Services Section */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-black">SafarSathi</h2>
        <ul className="text-black mt-2">
          <li className="mb-1">- Home</li>
          <li className="mb-1">- About</li>
          <li className="mb-1">- Trip</li>
          <li className="mb-1">- Healthcare</li>
        </ul>
      </div>

      {/* Contact Us Section */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-black">Services</h2>
        <ul className="text-black mt-2">
          <li className="mb-1">- Service 1</li>
          <li className="mb-1">- Service 2</li>
          <li className="mb-1">- Service 3</li>
        </ul>
      </div>

      {/* Information Section */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-black">Contact</h2>
        <ul className="text-black mt-2">
          <li className="mb-1">- Email</li>
          <li className="mb-1">- LinkedIn</li>
          <li className="mb-1">- Instagram</li>
          <li className="mb-1">- Twitter(X)</li>
        </ul>
      </div>
    </div>

    {/* Contact Form */}
    <p className="mt-8 text-xl text-black font-bold">Join Us Here</p>
    <form className="w-full max-w-sm mt-6 flex flex-col items-center" onSubmit={SubmitHandler}>
      <input
        type="text"
        placeholder="Enter your email"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8F84A8]"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-[#8F84A8] text-white font-bold rounded-lg hover:bg-[#5E5F89] transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>

      
      <div className='fixed bottom-0 w-full bg-white text-center z-0' style={{ boxShadow: '0px 0px 400px 200px rgba(255, 255, 255, 0.8)' }}></div>
    </div>
  )
}

export default EmergencyPage

