import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#2D406F] to-[#756992]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg px-4">

        {/* Logo and Text */}
        <div className="mt-10 mb-6 md:mt-0 flex flex-col items-center md:items-start md:w-1/2">
          <div className="flex items-center mb-6">
            <img
              src="../public/safarsathi_logo.jpg"
              alt="Company Logo"
              className="w-32 h-32 rounded-full mr-4"
            />
            <h1 className="text-black text-3xl font-semibold">SafarSathi</h1>
          </div>

      <div className=" bg-[#2C416E] z-10 ml-40 text-white rounded-full w-[410px] h-[410px] flex justify-center items-center shadow-[0px_0px_15px_4px_rgba(255,255,255,100),0px_0px_30px_10px_rgba(255,255,255,300)]">
        <div className=" text-center px-4">
          <h2 className="text-xl font-semibold mb-6">Login</h2>
          <form>
            <input
              type="email"
              placeholder="Email/Username"
              className="w-4/5 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-4/5 p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
            <a href="/forgot-password" className="block text-sm text-blue-200 hover:underline mb-4">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="w-4/5 py-3 bg-[#1E3050] text-white rounded-lg hover:bg-[#1E3050] transition duration-300"
            >
              Login
            </button>
            <p className="mt-4 text-sm">
              Don’t have an account?{' '}
              <a href="/signup" className="text-blue-200 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
        </div> 
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 md:ml-6 w-full md:w-1/2 opacity-70">
          <img
            src="https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            className="w-full h-[500px] mt-24 rounded-[80px] shadow-md"
          />
        </div>

      </div>
    </div>
  );
};

export default LoginPage;