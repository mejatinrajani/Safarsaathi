import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
<div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-b from-[#2D406F] to-[#756992]">
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg px-4 overflow-hidden">
    {/* Logo and Text */}
    <div className="mt-10 mb-6 md:mt-0 flex flex-col items-center md:items-start md:w-1/2">
      <div className="flex items-center mb-6">
        <img
          src="../public/safarsathi_logo.jpg"
          alt="Company Logo"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mr-4"
        />
        <h1 className="text-black text-2xl md:text-3xl font-semibold text-center md:text-left">
          SafarSathi
        </h1>
      </div>

      <div className="bg-[#2C416E] z-10 text-white lg:ml-36 rounded-full w-[320px] sm:w-[480px] md:w-[420px] h-[320px] sm:h-[420px] md:h-[420px] flex justify-center items-center shadow-[0px_0px_45px_25px_rgba(255,255,255,0.6),0px_0px_45px_25px_rgba(255,255,255,0.6)]">
        <div className="text-center px-4">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Login</h2>
          <form>
            <input
              type="email"
              placeholder="Email/Username"
              className="w-11/12 p-3 mb-3 md:mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-11/12 p-3 mb-2 md:mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
            <a href="/forgot-password" className="block text-sm text-blue-200 hover:underline mb-3 md:mb-4">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="w-11/12 sm:w-8/12 md:w-8/12 lg:w-8/12 py-3 bg-[#1E3050] text-white rounded-lg hover:bg-[#1E3050] transition duration-300"
            >
              Login
            </button>
            <p className="mt-3 md:mt-4 text-sm">
              Don’t have an account?{' '}
              <Link to={'/signup'} className="text-blue-200 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>

    {/* Image */}
    <div className="hidden md:block mt-10 md:mt-0 md:ml-6 w-full md:w-1/2 opacity-70">
      <img
        src="https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] mt-8 md:mt-24 rounded-[40px] sm:rounded-[60px] md:rounded-[80px] shadow-md object-cover"
      />
    </div>
  </div>
</div>


  );
};

export default LoginPage;