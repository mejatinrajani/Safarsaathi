import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Button } from "r3dy";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaChevronDown } from "react-icons/fa";

function ContactusPage() {
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
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-[#1D3465] to-[#CDCED1]">
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
            <span className="absolute inset-0 blur-md  rounded-lg opacity-50"></span>
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
            className="text-black font-semibold text-2xl mt-6 relative hover:scale-105 transition-all"
          >
            Emergency
            <span className="absolute inset-0 blur-md text-3xl mt-6 rounded-lg opacity-50"></span>
          </Link>
          <Link
            to="/contact"
            className="text-black font-semibold  relative hover:scale-110 transition-all"
          >
            <span className="text-3xl">Contact Us</span>
            <span className="absolute inset-0 blur-md bg-green-500 rounded-lg opacity-50"></span>
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
              className="text-white font-semibold text-3xl relative hover:scale-105 transition-all"
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
              <span className="absolute inset-0 blur-md rounded-lg opacity-30"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-white font-semibold text-3xl relative hover:scale-110 transition-all"
              onClick={toggleNav}
            >
              Contact Us
              <span className="absolute inset-0 blur-md bg-green-500 rounded-lg opacity-30"></span>
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


    {/* Contact Us Form */}


    <div className="relative min-h-screen flex justify-center items-center z-10">
    {/* Images, hidden on small screens (mobile) */}
    <img className='z-0 absolute w-96 h-96 mr-[700px] mb-32 hidden lg:block' src='../public/travel_1.png' alt="travel_1" />
    <img className='w-80 h-80 absolute ml-[620px] mb-80 hidden lg:block' src='../public/travel_3.png' alt="travel_3" />
    <img className='z-20 w-80 h-80 absolute ml-[670px] mt-[450px] hidden lg:block' src='../public/travel_6.png' alt="travel_6" />
    <img className='z-20 w-60 h-60 absolute mr-[400px] mt-[550px] hidden lg:block' src='../public/travel_7.png' alt="travel_7" />

    <div className="max-w-lg w-[450px] p-6 z-10 bg-white rounded-3xl bg-gradient-to-b from-[#454141] to-[#988F8F] shadow-lg" style={{boxShadow:'inset 16px 16px 25px rgba(48,45,45,0.8)'}}>
        <h2 className="text-3xl font-semibold text-left ml-6 text-white" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
            How can we help<br></br> you?
        </h2>

        <form className="z-10 space-y-4 p-6 rounded-lg">
            {/* Full Name Field */}
            <div>
                <label htmlFor="fullName" className="block text-black text-lg font-medium mb-1" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3465]"
                    placeholder="Enter your full name"
                />
            </div>

            {/* Category Dropdown */}
            <div>
                <label htmlFor="category" className="block text-black text-lg font-medium mb-1" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
                    Category
                </label>
                <select
                    id="category"
                    name="category"
                    className="w-full p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3465]"
                >
                    <option value="" className='' style={{ fontFamily: 'Akaya Kanadaka, cursive' }} disabled>
                        Select a category
                    </option>
                    <option style={{ fontFamily: 'Akaya Kanadaka, cursive' }} value="trip planning">Trip Planning</option>
                    <option style={{ fontFamily: 'Akaya Kanadaka, cursive' }} value="category 2">Category 2</option>
                    <option style={{ fontFamily: 'Akaya Kanadaka, cursive' }} value="category 3">Category 3</option>
                    <option style={{ fontFamily: 'Akaya Kanadaka, cursive' }} value="category 4">Category 4</option>
                </select>
            </div>

            {/* Message Field */}
            <div>
                <label htmlFor="message" className="block text-black text-lg font-medium mb-1" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full p-3 rounded-3xl border resize-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3465]"
                    placeholder="Enter your message"
                />
            </div>

            <button
                type="submit"
                className="w-1/2 items-center ml-20 bg-[#1D3465] text-white py-3 rounded-md mt-4 hover:bg-[#1A2D4D] focus:outline-none"
                style={{ fontFamily: 'Akaya Kanadaka, cursive' }}
            >
                Submit
            </button>
        </form>
    </div>
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

export default ContactusPage
