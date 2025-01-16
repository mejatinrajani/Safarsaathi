import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2C416E] to-[#A8ABB2]">
  <div className="container mx-auto relative flex flex-col lg:flex-row items-center justify-center px-4 lg:px-12">
    {/* Circular Background Image (Visible on laptops only) */}
    <div
      className="absolute w-96 h-96 bg-center bg-cover rounded-full hidden opacity-100 lg:block"
      style={{
        backgroundImage:
          'url(https://plus.unsplash.com/premium_photo-1661962425238-aeb9b022a94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        top: '20%',
        left: '13%',
      }}
    ></div>

    {/* Left Section */}
    <div className="flex flex-col items-center lg:items-start text-black mb-8 lg:mb-0 lg:mr-8 w-full lg:w-auto">
      <div className="flex items-center space-x-4 ml-0 sm:ml-10">
        <img
          src="../public/safarsathi_logo.jpg"
          alt="SafarSathi Logo"
          className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-full"
        />
        <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">
          SafarSathi
        </h1>
      </div>

      {/* Form Section */}
      <div className="mt-4 w-full max-w-sm lg:mr-56 md:max-w-md backdrop-blur-sm bg-[#928ba8] p-6 rounded-[30px] sm:rounded-[70px] shadow-lg opacity-80">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          Please Enter Your Details
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-pink-100 text-black ring-2 ring-black"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-lg bg-pink-100 text-black ring-2 ring-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-pink-100 text-black ring-2 ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-pink-100 text-black ring-2 ring-black"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 rounded-lg bg-pink-100 text-black ring-2 ring-black"
          />
          <button
            type="submit"
            className="w-full bg-[#2C416E] text-white py-2 rounded-lg hover:bg-[#1A2C47] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-white">
          Already have an account?{' '}
          <Link to={'/'} className="text-blue-800 hover:underline">
            Login here.
          </Link>
        </p>
      </div>

      <div className="mt-16 flex justify-center space-x-8 ml-0 sm:ml-16">
        <a href="#" className="text-white hover:text-gray-300">
          <img src="../public/x_img.png" alt="Twitter" className="w-10 sm:w-14 h-10 sm:h-14" />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <img src="../public/insta_img.png" alt="Instagram" className="w-10 sm:w-14 h-10 sm:h-14" />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <img src="../public/yt_img.png" alt="YouTube" className="w-10 sm:w-14 h-10 sm:h-14" />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <img src="../public/linkedin_img.png" alt="LinkedIn" className="w-10 sm:w-14 h-10 sm:h-14" />
        </a>
      </div>
    </div>

    {/* Right Section (Hidden on Phones) */}
    <div className="relative hidden lg:flex w-[500px] h-[600px]">
      {/* Back Card */}
      <div className="absolute top-[0px] left-[0px] w-full h-full bg-[#A0A8BC] rounded-[72px] shadow-lg"></div>

      {/* Front Card */}
      <div className="absolute w-full h-full ml-12 mt-12 bg-[#918AA8] rounded-[72px] shadow-lg border-gray-300/30 opacity-60 object-cover flex items-center">
        <h1
          className="absolute mb-52 text-[78px] ml-4 text-white font-bold"
          style={{
            fontFamily: 'Akaya Kanadaka, cursive',
            textShadow: '5px 5px 45px rgba(29, 52, 101, 1)',
          }}
        >
          SafarSathi
        </h1>
        <p
          className="text-3xl ml-4 text-black mt-20"
          style={{
            fontFamily: 'Akaya Kanadaka, cursive',
            lineHeight: '45px',
          }}
        >
          Your journey, your way. Ready
          <br />
          to explore the world like never
          <br />
          before?
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default SignupPage;
