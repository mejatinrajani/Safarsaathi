import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  { useState } from 'react';

function ContactusPage() {
  const [message, setMessage] = useState('');
    
  const SubmitHandler = (e) => {
    e.preventDefault();
    const data = message; // Receive the message box data from here.
    setMessage('');
  }
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-[#1D3465] to-[#CDCED1]">
        <nav className="bg-white shadow-lg rounded-lg mx-4 my-4 flex items-center justify-between px-6 py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <img
              src="../public/safarsathi_logo.jpg"
              alt="Company Logo"
              className="w-16 h-16 rounded-full border-2 border-[#8F84A8] mr-3"
            />
            <h1 className="text-xl font-bold text-black">Safarsathi</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
                to="/home"
              className="text-black font-semibold text-lg relative hover:scale-105 transition-all"
            >
              Home
              <span className="absolute inset-0 blur-md bg-green-500 rounded-lg opacity-50"></span>
            </Link>
            <Link
              className="text-black font-semibold text-lg relative hover:scale-105 transition-all"
            >
              Trip Planning
              <span className="absolute inset-0 blur-md bg-green-500 rounded-lg opacity-50"></span>
            </Link>
            <Link
              to={"/emergency"}
              className="text-black font-semibold text-lg relative hover:scale-105 transition-all"
            >
              Emergency
              <span className="absolute inset-0 blur-md text-lg bg-green-500 rounded-lg opacity-50"></span>
            </Link>
            <Link
                to="/contact"
              className="text-black font-semibold relative scale-110  transition-all"
            >
              <span className="uppercase text-3xl">Contact Us</span>
              <span className="absolute inset-0 blur-md bg-green-500 rounded-lg opacity-50"></span>
            </Link>
          </div>

          {/* Search Bar and Profile */}
          <div className="flex items-center space-x-4">
            <div className="relative w-full max-w-xs">
              {/* Input Field */}
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-lg pl-12 pr-10 focus:outline-none focus:ring-2 focus:ring-[#8F84A8]"
              />

              {/* Thin Vertical Line Separator */}
              <div className="absolute left-[230px] top-1/2 transform -translate-y-1/2 border-l-2 border-gray-500 h-6"></div>

              {/* Search Icon */}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>

            <img
              src="../public/profile_img.png"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-[#8F84A8]"
            />
          </div>
        </nav>



    {/* Contact Us Form */}


    <div className="relative min-h-screen flex justify-center items-center z-10">
        <img className='z-0 absolute w-96 h-96 mr-[700px] mb-32' src='../public/travel_1.png'></img>
        <img className='w-80 h-80 absolute ml-[620px] mb-80' src='../public/travel_3.png'></img>
        <img className='z-20 w-80 h-80 absolute ml-[670px] mt-[450px]' src='../public/travel_6.png'></img>
        <img className='z-20 w-60 h-60 absolute mr-[400px] mt-[550px]' src='../public/travel_7.png'></img>
      <div className="max-w-lg w-[450px] p-6 z-10 bg-white rounded-lg bg-gradient-to-b from-[#454141] to-[#988F8F] shadow-lg">
        <h2 className="text-3xl font-semibold text-left ml-6 text-white" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
          How can we help<br></br> you?
        </h2>

        <form
          className="z-10 space-y-4 p-6 rounded-lg"
        >
          {/* Full Name Field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-black text-lg font-medium mb-1" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}
            >
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
            <label
              htmlFor="category"
              className="block text-black text-lg font-medium mb-1" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}
            >
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
              <option style={{ fontFamily: 'Akaya Kanadaka, cursive' }} value="cateogry 2">cateogry 2</option>
              <option style={{ fontFamily: 'Akaya Kanadaka, cursive' }} value="cateogry 3">cateogry 3</option>
              <option style={{ fontFamily: 'Akaya Kanadaka, cursive' }} value="cateogry 4">cateogry 4</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-black text-lg font-medium mb-1" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}
            >
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-1/2 items-center ml-20 bg-[#1D3465] text-white py-3 rounded-md mt-4 hover:bg-[#1A2D4D] focus:outline-none" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>



    
    <h1 className="mt-44 text-5xl font-bold text-center text-black relative z-10 inline-block">
          VISIT US
          <span className="absolute w-1/4 ml-[560px] items-center inset-0 blur-xl bg-green-500 rounded-full opacity-50"></span>
        </h1>

        <div className="mt-6 z-10 flex flex-col md:flex-row items-center mb-32  justify-center px-4">
         {/* Left Half: Social Media Icons */}
         <div className="relative w-full md:w-1/2  flex items-center justify-center" style={{ height: "300px" }}>
           {/* Top Left Icon */}
           <div className="absolute top-8 left-8 w-32 h-32 bg-[#EAE6F2] flex items-center justify-center rounded-full shadow-lg">
             <img src="../public/insta_img.png" alt="Facebook" className="w-28  h-28" />
             <p className='absolute mt-40 text-lg' style={{ fontFamily: 'Akaya Kanadaka, cursive' }} >safarsaathi_travel</p>
           </div>
           {/* Top Right Icon */}
           <div className="absolute top-8 right-22 w-32 h-32 bg-[#EAE6F2] flex items-center justify-center rounded-full shadow-lg">
             <img src="../public/x_img.png" alt="Twitter" className="w-24  h-24" />
             <p className='absolute mt-40 text-lg' style={{ fontFamily: 'Akaya Kanadaka, cursive' }} >@safarSathi</p>
           </div>
           {/* Bottom Left Icon */}
           <div className="absolute -bottom-12 left-8 w-32 h-32 bg-[#EAE6F2] flex items-center justify-center rounded-full shadow-lg">
             <img src="../public/linkedin_img.png" alt="Instagram" className="w-28  h-28" />
             <p className='absolute mt-40  text-lg' style={{ fontFamily: 'Akaya Kanadaka, cursive' }} >@safarSathi</p>
           </div>
           {/* Bottom Right Icon */}
           <div className="absolute -bottom-12 right-22 w-32 h-32 bg-[#EAE6F2] flex items-center justify-center rounded-full shadow-lg">
             <img src="../public/yt_img.png" alt="LinkedIn" className="w-28 h-28" />
             <p className='absolute mt-40 text-lg' style={{ fontFamily: 'Akaya Kanadaka, cursive' }} >@safarSathi</p>
           </div>
         </div>
         {/* Right Half: Company Logo and Details */}
         <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center">
           {/* Company Logo */}
           <div className="flex items-center mb-4 ml-20">
             <img
              src="../public/safarsathi_logo.jpg"
              alt="Company Logo"
              className="w-36 h-36 rounded-full border-4 border-[#8F84A8]"
            />
            <h1 className="text-2xl font-bold text-black ml-4">Safarsathi</h1>
          </div>

          <div className="w-full flex flex-row justify-between items-start">
            {/* Services Section */}
            <div>
              <h2 className="text-xl font-semibold text-black">SafarSathi</h2>
              <ul className="text-black mt-2">
                <li className="mb-1">- Home</li>
                <li className="mb-1">- About</li>
                <li className="mb-1">- Trip</li>
                <li className="mb-1">- Heallthcare</li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-black">Services</h2>
              <ul className="text-black mt-2">
                <li className="mb-1">- Service 1</li>
                <li className="mb-1">- Service 2</li>
                <li className="mb-1">- Service 3</li>
              </ul>
            </div>

            {/* Information Section */}
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-black">Contact</h2>
              <ul className="text-black mt-2">
                <li className="mb-1">- Email</li>
                <li className="mb-1">- Linkedin</li>
                <li className="mb-1">- Instagram</li>
                <li className="mb-1">- Twitter(X)</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <p className='mt-8 text-xl ml-8 text-black font-bold'>Join Us Here</p>
          <form className="w-full max-w-sm mt-6 flex flex-col items-center" onSubmit={SubmitHandler}>
            <input
              type="text"
              placeholder="Enter your message"
              value={message}
              onChange={(e)=>{
                setMessage(e.target.value)
              }}
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
