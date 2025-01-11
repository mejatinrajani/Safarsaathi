// import React from 'react';

// const SignupPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2C416E] to-[#A8ABB2]">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-12 absolute">

//         {/* Circular Background Image */}
//         <div className="absolute mt-16 w-96 h-96 bg-center bg-cover rounded-full opacity-80" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661962425238-aeb9b022a94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', top: '10%', left: '13%' }}></div>

//         {/* Left Section */}
//         <div className="flex flex-col items-center lg:items-start text-black mb-8 lg:mb-0 mr-8">
//           <div className="flex ml-10 items-center space-x-4">
//             <img
//               src="../public/safarsathi_logo.jpg"
//               alt="SafarSathi Logo"
//               className="h-20 w-20 object-contain rounded-full"
//             />
//             <h1 className="text-4xl font-bold">SafarSathi</h1>
//           </div>

//           {/* Form with Glassmorphism */}
//           <div className="mt-4 w-full max-w-md backdrop-blur-sm bg-white/20 p-6 rounded-lg shadow-lg opacity-90">
//             <h2 className="text-2xl font-semibold mb-4 text-center">Please Enter Your Details</h2>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full px-4 py-2 rounded-lg bg-pink-100 text-black ring-2 ring-black"
//               />
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full px-4 py-2 rounded-lg bg-pink-100 text-black ring-2 ring-black"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-2 rounded-lg bg-pink-100 text-black ring-2 ring-black"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-2 rounded-lg border-black bg-pink-100 text-black  ring-2 ring-black"
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 className="w-full px-4 py-2 rounded-lg bg-pink-100 text-black ring-2 ring-black"
//               />
//               <button
//               type="submit"
//               className="w-full bg-[#2C416E] text-white py-2 rounded-lg hover:bg-[#1A2C47] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
//               >
//                 Sign Up
//               </button>


//             </form>

//             <p className="mt-4 text-center text-white">
//               Already have an account? <a href="#" className="text-blue-800 hover:underline">Login here.</a>
//             </p>
//           </div>
//             <div className="mt-16 flex justify-center space-x-8 ml-16">
//               <a href="#" className="text-white hover:text-gray-300 text-2xl">
//               <img src="../public/x_img.png" alt="Twitter" className="w-14 h-14" />
//               </a>
//               <a href="#" className="text-white hover:text-gray-300 text-2xl">
//               <img src="../public/insta_img.png" alt="Facebook" className="w-14  h-14" />
//               </a>
//               <a href="#" className="text-white hover:text-gray-300 text-2xl">
//               <img src="../public/yt_img.png" alt="LinkedIn" className="w-14 h-14" />
//               </a>
//               <a href="#" className="text-white hover:text-gray-300 text-2xl">
//               <img src="../public/linkedin_img.png" alt="Instagram" className="w-14 h-14" />
//               </a>
//             </div>
//         </div>

//         {/* Right Image */}
//         <div className="hidden lg:block w-1/2 h-[400px] ">
//           <img
//             src="https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548_1280.jpg"
//             alt="Side Illustration"
//             className="object-cover rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;









import React from 'react';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2C416E] to-[#A8ABB2]">
      <div className="container mx-auto relative flex flex-col lg:flex-row items-center justify-center px-4 lg:px-12">
        {/* Circular Background Image */}
        <div
          className="absolute w-96 h-96 bg-center bg-cover rounded-full "
          style={{
            backgroundImage:
              'url(https://plus.unsplash.com/premium_photo-1661962425238-aeb9b022a94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            top: '20%',
            left: '13%',
          }}
        ></div>

        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-black mb-8 lg:mb-0 lg:mr-8">
          <div className="flex items-center space-x-4 ml-10">
            <img
              src="../public/safarsathi_logo.jpg"
              alt="SafarSathi Logo"
              className="h-20 w-20 object-contain rounded-full"
            />
            <h1 className="text-4xl font-bold">SafarSathi</h1>
          </div>

          {/* Form with Glassmorphism */}
          <div className="mt-4 w-full max-w-md backdrop-blur-sm bg-[#928ba8] p-6 rounded-[70px] shadow-lg opacity-85 mr-56">
            <h2 className="text-2xl font-semibold mb-4 text-center">Please Enter Your Details</h2>
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
              <a href="#" className="text-blue-800 hover:underline">
                Login here.
              </a>
            </p>
          </div>

          <div className="mt-16 flex justify-center space-x-8 ml-16">
            <a href="#" className="text-white hover:text-gray-300">
              <img src="../public/x_img.png" alt="Twitter" className="w-14 h-14" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img src="../public/insta_img.png" alt="Instagram" className="w-14 h-14" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img src="../public/yt_img.png" alt="YouTube" className="w-14 h-14" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img src="../public/linkedin_img.png" alt="LinkedIn" className="w-14 h-14" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[500px] h-[600px]">
          <div className="object-cover bg-[#928ba8] border-gray-300/30 opacity-60 w-full h-full rounded-[70px] shadow-lg" style={{ boxShadow: '-45px -45px 5px rgba(190, 190, 190,0.5)' }}>
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
