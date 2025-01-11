import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import './responsiveness.css'

function EmergencyPage() {
    const [message, setMessage] = useState('');
    
    const SubmitHandler = (e) => {
      e.preventDefault();
      const data = message; // Receive the message box data from here.
      setMessage('');
    }
  return (
    <div className="bg-gradient-to-b from-[#4E517E] to-[#CDCED1] min-h-screen flex flex-col overflow-x-hidden">
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
              className="text-black font-semibold text-3xl relative scale-110 transition-all"
            >
              Emergency
              <span className="absolute inset-0 blur-md text-3xl bg-green-500 rounded-lg opacity-50"></span>
            </Link>
            <Link
                to="/contact"
              className="text-black font-semibold relative hover:scale-105  transition-all"
            >
              <span className="uppercase text-lg">Contact Us</span>
              <span className="absolute inset-0 blur-md bg-green-500 rounded-lg opacity-50"></span>
            </Link>
          </div>

          {/* Search Bar and Profile */}
          <div className="flex items-center space-x-4 z-10 ">
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

      
      {/* Main Content */}
      <div className="flex flex-col items-center my-8 z-10">
        {/* Stylish Text */}
        <h2 style={{ fontFamily: 'Akaya Kanadaka, cursive' }} className="text-left font leading-snug text-6xl font-extrabold text-[#EBE1B5] mt-12 mb-16">
          Your health is the <span className='text-black text-8xl' style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>foundation</span> of every <br />
          great adventure — So, we are here to protect <br />
          it fiercely.
        </h2>

        {/* Images and Left-Side Text */}
        <div className="flex  w-full mt-8">
          <div className="text-left space-y-12 w-[700px] ml-[70px]">
            <p className="text-lg font-semibold text-left text-white leading-8" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nesciunt officia veniam sed neque ea optio pariatur explicabo expedita fugit est, necessitatibus dignissimos quia dolor? Minima temporibus quia ut similique?
              Maiores modi natus, earum illum et voluptate praesentium dolores porro ab quidem minima enim! Tempore hic expedita quaerat ad perspiciatis laudantium, molestiae optio asperiores aperiam quo cum reprehenderit incidunt ipsum.
              Praesentium est dolor illo quae, reiciendis blanditiis quaerat, rem nesciunt, accusantium fugit et voluptatibus ullam officiis suscipit provident natus similique nostrum possimus aut facere accusamus? Sed impedit unde labore ullam.
              Autem quia cupiditate tenetur nam. Saepe nam placeat, eaque nulla minus accusantium temporibus, magnam nihil, sint perferendis delectus dolores. Cum iusto culpa inventore ut repudiandae recusandae, nisi atque et deserunt.
              Incidunt repudiandae voluptates, at numquam natus voluptatibus explicabo earum unde, magni esse laboriosam porro. Placeat doloribus inventore enim odit deleniti delectus nobis, laboriosam nam dolor hic ducimus reprehenderit, cupiditate facilis.
            </p>
          </div>
          <div className="relative ml-20">
            <img
              src="../public/first_image.jpg"
              alt="First"
              className="w-64 h-64 ml-16 rounded-full border-4 border-[#8F84A8]"
            />
            <img
              src="../public/second_image.jpg"
              alt="Second"
              className="w-64 h-64 ml-64 mt-4 rounded-full border-4 border-[#8F84A8] absolute left-6 top-20"
            />
          </div>
        </div>

        <div className="mt-12 w-3/4">
              {/* Emergency Heading with Akaya Kanadaka Font */}
              <h1 className="text-center text-6xl font-bold text-shadow-outline text-red-500 mt-20 mb-12" style={{ fontFamily: 'Akaya Kanadaka, cursive',textShadow: '5px 5px 15px #000000' }}>
                EMERGENCY
              </h1>

        <div className="mb-8">
            <input
              style={{ fontFamily: 'Akaya Kanadaka, cursive' , color: 'black' ,boxShadow : 'inset 5px 5px 6px #444564' }}
              type="text"
              placeholder="How can we help you? Write your health condition."
              className="p-4 w-full rounded-3xl placeholder-black border-black resize-none text-black bg-[#7D79A3] focus:outline-none focus:ring-2 focus:ring-black"
            />
        </div>

        <div className="flex items-center space-x-4 mb-8 z-10 ">
            <button
              style={{ fontFamily: 'Akaya Kanadaka, cursive', }}
              type="button"
              // onClick={getlocation}
              className="p-4 w-2/3 rounded-3xl border-black  placeholder-black bg-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-black"
            >Current location permission</button>  
            <button
              style={{
                fontFamily: 'Akaya Kanadaka, cursive',
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(255, 255, 255, 0.05))',
                color: 'white',
              }}
              className="px-8 w-80 py-4 text-xl rounded-3xl font-semibold hover:bg-red-600"
            >
              SUBMIT
            </button>
        </div>

          <textarea
            style={{ fontFamily: 'Akaya Kanadaka, cursive' ,boxShadow : 'inset 5px 5px 6px #444564'}}
            placeholder="Here is Your Solution..."
            className="w-full rounded-3xl h-32 px-4 py-2 resize-none  placeholder-black text-black border-black bg-[#7D79A3] focus:outline-none focus:ring-2 focus:ring-black mb-6"
          ></textarea>
        </div>
          {/* Footer Text */}
          <p className="text-lg mr-12 mt-12 w-[1330px] font-medium text-white text-left" style={{ fontFamily: 'Akaya Kanadaka, cursive'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo neque facilis nobis quasi eum porro, voluptatibus facere veritatis sapiente aliquam voluptate! Voluptas, quae? Nobis minus magnam laboriosam nihil praesentium!
            A cupiditate corporis repudiandae explicabo repellendus magni dicta inventore adipisci porro modi maxime soluta quam necessitatibus vel unde quia quae, minus facilis numquam quidem autem nesciunt dolores et. Porro, voluptate!
          </p>
        </div>



        <h1 className="mt-44 text-5xl font-bold text-center text-black relative inline-block">
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

export default EmergencyPage

