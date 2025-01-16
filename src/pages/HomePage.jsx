import  { useEffect } from 'react';
import  { useState } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTextSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function HomePage() {

    const [message, setMessage] = useState('');
    
      const SubmitHandler = (e) => {
        e.preventDefault();
        const data = message; // Receive the message box data from here.
        setMessage('');
      }

    useEffect(() => {
        const canvas = document.getElementById('connectionCanvas');
        const ctx = canvas.getContext('2d');
      
        function resizeCanvas() {
          document.body.style.margin = '0'; // Remove any default margin
        //   document.body.style.overflow = 'hidden'; // Prevent scrolling
      
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
      
          const container = document.querySelector('.container');
          container.style.width = `${window.innerWidth}px`;
          container.style.height = `${window.innerHeight}px`;
        }
      
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function drawFloatingLines() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
      
            const leftImg = document.getElementById('left-image');
            const rightImg = document.getElementById('right-image');
            const centerImg = document.getElementById('center-image');
      
            const time = Date.now() * 0.0005;
      
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
      
            ctx.beginPath();
      
            // Starting points
            const leftStart = {
              x: leftImg.offsetLeft + 170,
              y: leftImg.offsetTop + 1
            };
      
            const rightStart = {
              x: rightImg.offsetLeft,
              y: rightImg.offsetTop + 10
            };
      
            const centerStart = {
              x: centerImg.offsetLeft + 10,
              y: centerImg.offsetTop
            };

            const StartA = {
              x: centerImg.offsetLeft - 500,
              y: centerImg.offsetTop-350,

            };

            ctx.moveTo(StartA.x, StartA.y);
            ctx.bezierCurveTo(
              StartA.x + 800, StartA.y - 10,
              StartA.x + 900, StartA.y + 800,
              StartA.x + 750, StartA.y - 1000 // Endpoint
            );

            const StartB = {
              x: centerImg.offsetLeft - 100,
              y: centerImg.offsetTop-550,

            };

            ctx.moveTo(StartB.x, StartB.y);
            ctx.bezierCurveTo(
              StartA.x + 100, StartA.y - 10,
              StartA.x + 900, StartA.y + 100,
              StartA.x + 350, StartA.y - 400 // Endpoint
            )

            const StartC = {
              x: centerImg.offsetLeft - 300,
              y: centerImg.offsetTop+150,

            };
            ctx.moveTo(StartC.x, StartC.y);
            ctx.bezierCurveTo(
              StartA.x + 100, StartA.y + 10,
              StartA.x + 900, StartA.y + 100,
              StartA.x + 650, StartA.y - 400 // Endpoint
            )

            const StartD = {
              x: leftImg.offsetLeft - 10,
              y: leftImg.offsetTop-15

            };
            ctx.moveTo(StartD.x, StartD.y);
            ctx.bezierCurveTo(
              StartA.x - 300, StartA.y - 400,
              StartA.x + 300, StartA.y + 500,
              StartA.x + 1100, StartA.y - 10 // Endpoint
            )

            
            const StartE = {
              x: rightImg.offsetLeft + 140,
              y: rightImg.offsetTop-300

            };
            ctx.moveTo(StartE.x, StartE.y);
            ctx.bezierCurveTo(
              StartA.x + 100, StartA.y - 100,
              StartA.x + 400, StartA.y - 100,
              StartA.x+120, StartA.y + 500 // Endpoint
            )
            
      
            // Left to Center connection with shapes
            ctx.moveTo(leftStart.x, leftStart.y);
      
            // First go up with a circle
            const circle1X = leftStart.x + 300;
            const circle1Y = leftStart.y - 300;
            const circle1Radius = 20;
      
            // Path to circle
            ctx.bezierCurveTo(
              leftStart.x + 400, leftStart.y,
              circle1X - 50, circle1Y + 100,
              circle1X - circle1Radius, circle1Y
            );
      
            // Create rectangular path
            const rectX = circle1X + 200;
            const rectY = circle1Y - 100;
      
            // Path to rectangle
            ctx.bezierCurveTo(
              circle1X + 1000, circle1Y,
              rectX - 500, rectY + 440,
              rectX, rectY
            );
      
            // Path down to center image
            ctx.bezierCurveTo(
              rectX + 10, rectY + 150,
              centerStart.x - 100, centerStart.y - 100,
              centerStart.x, centerStart.y
            );
      
            // Center to Right connection with different shapes
            ctx.moveTo(centerStart.x, centerStart.y);
      
            // Create triangle-like path
            const triX = centerStart.x + 200;
            const triY = centerStart.y - 110;
      
            ctx.bezierCurveTo(
              centerStart.x + 400, centerStart.y - 600,
              triX - 500, triY + 200,
              triX, triY
            );
      
            // Create wavy path to final destination
            const wave1 = triX + 400;
            const wave2 = triX + 100;
      
            ctx.bezierCurveTo(
              wave1, triY - 180 + Math.sin(time) * 3,
              wave2, triY + 10 + Math.sin(time) * 3,
              rightStart.x, rightStart.y
            );
      
            ctx.stroke();
      
            requestAnimationFrame(drawFloatingLines);
          }
      
          drawFloatingLines();
      
        return () => {
          window.removeEventListener('resize', resizeCanvas);
        };
      }, []);

      const [isNavOpen, setIsNavOpen] = useState(false);

      const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        document.body.style.overflow = isNavOpen ? 'unset' : 'hidden';
      };
      

  return (

    <div className="bg-gradient-to-b from-[#1D3465] via-[#766992] to-[#FFFFFF] bg-blend-saturation min-h-screen flex flex-col overflow-x-hidden">
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
            className="text-black font-semibold text-3xl relative scale-110 transition-all"
          >
            Home
            <span className="absolute inset-0 blur-md bg-green-500 rounded-lg opacity-50"></span>
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
              className="text-white font-semibold text-4xl relative hover:scale-110 transition-all"
              onClick={toggleNav}
            >
              Home
              <span className="absolute inset-0 blur-md bg-green-500 rounded-lg opacity-30"></span>
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
      
      <div className="container relative w-screen h-screen mt-32 z-10">
        <div className='absolute w-screen h-screen'>
          <p className='absolute text-6xl mt-56'>✈️</p>
          <p className='absolute text-6xl mt-[47px] ml-[1200px]'>🚗</p>
          <p className='absolute text-6xl mt-20 ml-[510px]'>⛽️</p>
          <p className='absolute text-6xl -rotate-12 mt-[53px] ml-[710px]'>🏍️</p>
          <p className='absolute text-6xl mt-[350px] ml-[240px]'>🚶‍♂️‍➡️</p>
          <p className='absolute text-6xl mt-[400px] ml-[900px]'>🏨</p>
          <p className='absolute text-6xl mt-[530px] ml-[395px]'>🏖️</p>
          <p className='absolute text-6xl mt-[286px] -rotate-12 ml-[1125px]'>🚑</p>
          <p className='absolute text-6xl   ml-[125px]'>🛸</p>
        </div>
        <canvas id="connectionCanvas"></canvas>
        <img src="../public/binary_3img.png" id="left-image" className="image absolute w-48 h-48 object-cover" style={{ left: '50px', top: '50%', transform: 'translateY(-50%)' }} alt="Left"/> 
        <img src="../public/binary_2img.png" id="right-image" className="image absolute w-48 h-48 object-cover" style={{ right: '50px', top: '50%', transform: 'translateY(-50%)' }} alt="Right" />
        <img src="../public/binary_1img.png" id="center-image" className="image absolute w-48 h-48 object-cover" style={{ left: '50%', bottom: '100px', transform: 'translateX(-50%)' }} alt="Center" />
      </div>

      <div className="mb-16 flex flex-col items-center justify-center">
      <h1 className="text-5xl mt-32 z-10 font-bold text-black absolute inline-block">
          FEATURES
          <span className="absolute inset-0 blur-xl bg-green-500 rounded-full opacity-50"></span>
        </h1>
        <img className='opacity-90' src='../public/india_img6.png'></img>
      </div>



      <div className="relative flex justify-center items-center w-full mt-16 rounded-3xl">
      {/* Background Card */}
      <div
        className="absolute bg-[#7C77A0] border-black border-2 rounded-3xl opacity-95 w-[32rem] h-[32rem]"
        style={{ top: "-60px", left: "280px", boxShadow: "0px 0px 400px 80px 1 #948BB4" }}
      ></div>

      {/* Outer Card with Chessboard Pattern */}
      <div
        className="relative bg-white border-2 border-black p-8 w-[32rem] ml-28 h-[32rem]"
        style={{ boxShadow: "0px 4px 400px 80px #ADA0C8" }}
      >
        {/* Chessboard pattern */}
        <div className="absolute inset-0 grid grid-cols-8 gap-1">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className={`w-full h-full ${
                Math.floor(i / 8) % 2 === i % 2 ? "bg-gray-300" : "bg-white"
              }`}
              style={{ opacity: 0.5 }}
            ></div>
          ))}
        </div>

        {/* Form Content */}
        <div className="relative z-10">
          <form className="space-y-6">
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-red-500" />
              <input
                type="text"
                placeholder="Current Location"
                className="block w-full pl-10 border-b-2 border-black bg-transparent text-black placeholder-black focus:outline-none"
              />
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-red-500" />
              <input
                type="text"
                placeholder="Destination Location"
                className="block w-full pl-10 border-b-2 border-black bg-transparent text-black placeholder-black focus:outline-none"
              />
            </div>
            <p className="text-black">Add more destinations</p>
            <div className="flex items-center space-x-4">
              <span>From :</span>
              <input
                type="date"
                className="border-b-2 border-black bg-transparent text-black focus:outline-none"
              />
              <span className="text-black text-2xl ml-2">&#x1F4C5;</span>
              <span>To :</span>
              <input
                type="date"
                className="border-b-2 border-black bg-transparent text-black focus:outline-none"
              />
            </div>
            <div className="relative">
              <select className="block w-full pl-4 pr-10 border-b-2 border-black bg-transparent text-black focus:outline-none appearance-none">
                <option value="" disabled selected>
                  Type of Group
                </option>
                <option>Family</option>
                <option>Friends</option>
                <option>Corporate</option>
              </select>
              <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
            </div>
            <div className="flex space-x-4">
              <div className="relative">
                <select className="block w-full pl-4 pr-10 border-b-2 border-black bg-transparent text-black focus:outline-none appearance-none">
                  <option value="" disabled selected>
                    Men
                  </option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
              </div>
              <div className="relative">
                <select className="block w-full pl-4 pr-10 border-b-2 border-black bg-transparent text-black focus:outline-none appearance-none">
                  <option value="" disabled selected>
                    Women
                  </option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
              </div>
              <div className="relative">
                <select className="block w-full pl-4 pr-10 border-b-2 border-black bg-transparent text-black focus:outline-none appearance-none">
                  <option value="" disabled selected>
                    Children
                  </option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
              </div>
            </div>
            <div className="relative">
              <select className="block w-full pl-4 pr-10 border-b-2 border-black bg-transparent text-black focus:outline-none appearance-none">
                <option value="" disabled selected>
                  Budget
                </option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500" />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="unsure" className='w-4 h-4' />
              <label htmlFor="unsure" className="text-black">
                If not sure? Let us decide together to let you enjoy your trip
              </label>
            </div>
            <button
              type="submit"
              className="w-1/2 ml-28 border-2 border-black rounded-3xl bg-[#DF898B] py-2 text-lg text-black"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Circular Image */}
      <div className="w-96 h-96 rounded-full flex items-center justify-center border-none ml-8">
        <img
          src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Placeholder"
          className="w-96 h-96 rounded-full mr-10"
        />
      </div>
    </div>













      <div className="min-h-screen flex flex-col items-center mt-12 justify-center z-10">
        {/* Services Section */}
        <h1 className="text-5xl z-10 font-bold text-black relative inline-block">
          SERVICES
          <span className="absolute inset-0 blur-xl bg-green-500 rounded-full opacity-50"></span>
        </h1>

        {/* Cards Section */}
        <div className="mt-16 z-10 flex flex-col md:flex-row gap-32 px-4">
          {/* Card 1 */}
          <div className="bg-[#5E5F89] rounded-3xl shadow-lg p-6 w-72 h-[450px] flex flex-col items-center justify-between hover:scale-105 transform transition duration-300" style={{boxShadow : 'inset 6px 6px 6px #444564'}}>
            <img
              src="https://via.placeholder.com/100"
              alt="Service 1"
              className="w-32 h-32 rounded-full border-4 border-[#8F84A8]"
            />
            <h2 className="text-xl font-semibold text-black text-center">Service 1</h2>
            <p className="text-black text-center mt-2" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
              Description about the second service provided here.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#5E5F89] rounded-3xl shadow-lg p-6 w-72 h-[450px]  flex flex-col items-center justify-between hover:scale-105 transform transition duration-300" style={{boxShadow : 'inset 6px 6px 6px #444564'}} >
            <img
              src="https://via.placeholder.com/100"
              alt="Service 2"
              className="w-32 h-32 rounded-full border-4 border-[#8F84A8]"
            />
            <h2 className="text-xl font-semibold text-black text-center">Service 2</h2>
            <p className="text-black text-center mt-2" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
              Description about the second service provided here.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#5E5F89] rounded-3xl shadow-lg p-6 w-72 h-[450px]  flex flex-col items-center justify-between hover:scale-105 transform transition duration-300" style={{boxShadow : 'inset 6px 6px 6px #444564'}} >
            <img
              src="https://via.placeholder.com/100"
              alt="Service 3"
              className="w-32 h-32 rounded-full border-4 border-[#8F84A8]"
            />
            <h2 className="text-xl font-semibold text-black text-center">Service 3</h2>
            <p className="text-black text-center mt-2" style={{ fontFamily: 'Akaya Kanadaka, cursive' }}>
              Description about the third service provided here.
            </p>
          </div>
        </div>
        </div>


        {/* Visit Us Section */}

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
  );
}

export default HomePage;


