import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TripPlanning() {
  const [currentSection, setCurrentSection] = useState(1);
  const cards = [
    { id: 1, title: 'MANALI', image: '' },
    { id: 2, title: 'MANALI', image: '' },
    { id: 3, title: 'MANALI', image: '' },
    { id: 4, title: 'MANALI', image: '' },
    { id: 5, title: 'MANALI', image: '' },
    { id: 6, title: 'MANALI', image: '' },
    { id: 7, title: 'MANALI', image: '' },
    { id: 8, title: 'MANALI', image: '' },
    { id: 9, title: 'MANALI', image: '' },
    { id: 10, title: 'MANALI', image: '' },
    { id: 11, title: 'MANALI', image: '' },
    { id: 12, title: 'MANALI', image: '' },
    { id: 13, title: 'MANALI', image: '' },
    { id: 14, title: 'MANALI', image: '' },
    { id: 15, title: 'MANALI', image: '' },
    { id: 16, title: 'MANALI', image: '' },
    { id: 17, title: 'MANALI', image: '' },
    { id: 18, title: 'MANALI', image: '' },
    { id: 19, title: 'MANALI', image: '' },
    { id: 20, title: 'MANALI', image: '' },
    { id: 21, title: 'MANALI', image: '' },
    { id: 22, title: 'MANALI', image: '' },
    { id: 23, title: 'MANALI', image: '' },
    { id: 24, title: 'MANALI', image: '' },
    { id: 25, title: 'MANALI', image: '' },
    { id: 26, title: 'MANALI', image: '' },
    { id: 27, title: 'MANALI', image: '' },
    { id: 28, title: 'MANALI', image: '' },
  ];

  // Divide cards into sections of 9 cards each
  const sections = [
    { id: 1, cards: cards.slice(0, 9) },
    { id: 2, cards: cards.slice(9, 18) },
    { id: 3, cards: cards.slice(19, 28) },
  ];

  const handleSectionChange = (sectionId) => {
    if (sectionId >= 1 && sectionId <= sections.length) {
      setCurrentSection(sectionId);
    }
  };

  const [message, setMessage] = useState('');
      
  const SubmitHandler = (e) => {
    e.preventDefault();
    const data = message;
    setMessage('');
  }
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflow = isNavOpen ? 'unset' : 'hidden';
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: `linear-gradient(to bottom, #1D3465 0%, #1D3465 60%, #CDCED1 100%)` }}>
      {/* Background Image */}
      <div className="w-full">
        <img
          className="w-full h-[700px] z-0"
          src="https://s3-alpha-sig.figma.com/img/c7b0/b3d7/0f1d21b574aa971aec8958917dab6dd2?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Usc-jEwEAljhLTTlZpIcGwoFIHWdTjAtmV1aBTXb7SbDPU3U-XhxUUEOfdEUFtwbx3NytYu3gXA1Vuz60jpcuax2k5lzSMnkHpsf8e1CJO4mJSXJ54wb6JfpfwBot0FfpCcYja0YdWBj3xbHgo9ypHkiciifQQZRZf7osDn8qvpgKEW161e9A9~QjeQ4WFzC~~kufTWNQl-OWRoiiBgIbe9Z1cnXHGGt3YZO8PSysO1N7UZHrKgaKnL6CfzGs~coBBcrnBCRD3M-HekkgHs2nwEY-fuAaxJKoV3GUOCZuPoEIpY04OCHmeLHVUnwD5qS-qwszGZferp-36a3VFvQrQ__"
          alt="Background"
        />
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-lg rounded-[100px] absolute top-0 left-0 right-0 mx-4 my-4 flex items-center justify-between px-6 py-2">
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
            className="text-black font-semibold mt-6 text-2xl relative hover:scale-105 transition-all"
          >
            Home
            <span className="absolute inset-0 blur-md rounded-lg opacity-50"></span>
          </Link>
          <Link
            to={'/tripplanning'}
            className="text-black font-semibold  text-3xl relative scale-110 transition-all"
          >
            Trip Planning
            <span className="absolute inset-0 bg-green-500  blur-md rounded-lg opacity-50"></span>
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
              className="text-white font-semibold text-3xl relative hover:scale-110 transition-all"
              onClick={toggleNav}
            >
              Home
              <span className="absolute inset-0 blur-md rounded-lg opacity-30"></span>
            </Link>
            <Link 
              to="/tripplanning" 
              className="text-white font-semibold text-3xl relative hover:scale-110 transition-all"
              onClick={toggleNav}
            >
              Trip Planning
              <span className="absolute inset-0 blur-md bg-green-500 rounded-lg opacity-30"></span>
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

      <div className="w-[1000px] h-96 flex rounded-[40px] bg-white absolute top-[calc(100px+1rem)] left-1/2 transform -translate-x-1/2 z-10 mt-28">
        <div className="w-[170%] h-full flex flex-col">
          <div className='h-20 w-20 flex absolute'>
            <img src='https://s3-alpha-sig.figma.com/img/0a64/bb76/7eb883ad8ca934042421f63f79ca55af?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cM0C0ttcfzteSjzLAJfhKbZ5NyT0GNJYIdqXJCPmFQQJ4u1mL4nFP-qfR0BmHCHy~xuo2cqobeoD3wAOhzV6Kf6-6rVVue9sBTzNfsw1xVcxl-WN4RABEZl~fWXV~jRIvNm-pG9y3Gx5SoxeqPg6DNh252ctOLXDB0UeKn~IpOl3I3iEvrshtf1CccGZ0Rni7IHZII89Q-37eA6rB5lbbJ6faAr8qifQhJBMWeR2aq-1lzjf7X-9wsGMMR2~zTSl1272AunUZTOSbbBM3E2PxHGKjP7jw7ouz1eVY2wlggBgB6Tl0s-0xYzZdd2HDqoHF-awZGrXdQFlTWbJLdiilA__' alt="Decorative" />
          </div>
          <div className="w-full h-10 bg-[#345EA1] rounded-tl-[40px]"></div>
        </div>

        <div className="w-1 h-full border-l-8 border-dashed border-black"></div>

        <div className="w-[80%] h-full flex flex-col">
          <div className="w-full h-10 bg-[#345EA1] rounded-br-[40px] mt-auto"></div>
        </div>
        <img src='../public/safarsathi_logo.jpg' className='w-[200px] absolute ml-[740px] mt-20' alt="Logo" />
        <div className='flex align-center justify-normal w-[620px] h-72 ml-8 mt-16 absolute'>
          <div className='flex flex-row justify-between z-40 mt-8 w-full h-32'>
            <p className='text-lg'>Current Location</p>
            <p className='text-lg'>Destination Location</p>
            <div className='w-full h-20 mt-10 flex justify-between absolute'>
              <FaMapMarkerAlt className="absolute text-center ml-[270px] text-[70px] transform -translate-y-1/2 text-red-500" />
              <p className='text-3xl font-bold'>MATHURA</p>
              <p className='text-3xl font-bold'>MANALI</p>
            </div>
          </div>
          <div className='flex flex-row w-[440px] h-40 mt-32 absolute'>
            <div className='w-[170px] border-2 border-black bg-[#345EA1] h-20 flex flex-col'>
              <p className='text-md ml-4'>Departure Date</p>
              <p className='text-xl text-white'>11 Jan, 2025  <span className="text-red-500 text-2xl ml-2" style={{color:'red'}}>&#x1F4C5;</span></p>
            </div>
            <div className='w-[170px] bg-[#345EA1] border-2 border-black h-20 ml-28 flex flex-col'>
              <p className='text-lg ml-4'>Return Date</p>
              <p className='text-xl text-white'>17 Jan, 2025  <span className="text-red-500 text-2xl ml-2" style={{color:'red'}}>&#x1F4C5;</span></p>
            </div>
            <div className='h-20 w-full flex flex-row absolute mt-24'>
              <div className='flex flex-col w-1/2'>
                <p>Budget</p>
                <p className='font-bold text-2xl'>INR 10,000</p>
              </div>
              <div className='flex flex-col ml-28 w-1/2'>
                <p>No. of members</p>
                <p className='font-bold text-2xl'>4</p>
              </div>
            </div>
          </div>
          <div className='h-40 w-[200px] mt-36 absolute ml-[440px] flex justify-center'>
            <img className='w-32 h-32' src='data:image/gif;base64,R0lGODlhZABkAJEAAAAAAP///wAAAAAAACH5BAEAAAIALAAAAABkAGQAAAL/jI+py+0Po5y02ouz3rz7D4biSJbmiabqCgLuC8fyzMDIDNz4zlP8T1vYDjgd8JibIJG1lzH2XO580l/TFXUSqz2l1jI0hBPjJ6b8QEvG6kC7DYELvxU23TzHXuQKfsOu13e3FVg36AA4RZgkFtQog/eoKElVCBTp5pgJuZjFSelladW5mJjoCUW6RnepupkqeVqq6YfZChp7+Mc6ihthSsv7+Ss8+VrJ+FrkurwqmUsbV9x8PFso/Wxcy9xbjdgNPLzte+u9C21ePp4OrosqmyvunpesPh8Py46+vo55VV/szD0yA/9hA5hN4LU0BekdtNVQ0MJvE4lVhJhwT0Rl/1zywdPXcdjBkB9LkhTJ8KTJjPhCIlOJMCZGmMlYoLppUwU1ajlN7NTUs8RPlDn7cWPJkWjSfMgUyjxq7N1Gf6Sekusm9WLKmlVnZuXacqrDrQa3+jHqDCzBimeBjhXRlu1Anm9DxFV79y4JuhLVlsX315xTvV2t4Q24ge9av3UVfxw8d2O4w0hfIqboUdebjpYr03vs6qvif6D7lhZsuNzIy+cyy31dpTPT1G49TJa9mcmI21UdL9k7TTJW2ko58A4a1rPpYFp1tmu+9DQLe9CpM3a+L3J26KJ/1/VqVmzy2N+hrub+WWVg8JjRRucc/mr12havtyYdXN52+1TT4sHPNpQ2wqHX138xBRhgUxrBNlmDrD1EnFX1GXgef1AlWNhy8xXX2HMWRmNYhQqO19996W04G2ZflVgigvSN+J5yi1EYoXH5uWZfbjiOlmGMEq4XYo2J3XiajisK6R+SqIEon4DoQEhiaFI26SKHBSppZIf78XglGNod0R2BJnqJonWqLfjhjOFtORyZabIYoYNW1gcTeyCt9Gac3jU5E56QnWTncSD9SVKgN9qJXKKKLspoo44+Cmmkkk5KaaWWglAAADs=' alt="Loading" />
          </div>
        </div>
      </div>

      <div className='h-40 mt-10 w-full'></div>

  <div className="flex-grow mt-8">
        <div className="flex justify-center mt-10 items-center min-h-screen">
          <div className="max-w-6xl w-full px-4">
            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {sections[currentSection - 1].cards.map((card) => (
                <div 
                  key={card.id} 
                  className="bg-white shadow-md border-2 border-black rounded-[50px] p-4 flex flex-col items-center text-center" 
                  style={{ boxShadow: '12px 12px 8px rgba(0, 0, 0, 0.8)' }}
                >
                  <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
                  <img 
                    src={card.image || '/placeholder-image.jpg'} 
                    alt={card.title} 
                    className="w-60 border-2 border-black h-60 object-cover rounded-3xl mb-4" 
                  />
                  <button className="bg-[#766992] text-white px-6 py-2 rounded">
                    <span className='text-[#E3CC70] text-xl font-bold'>EXPLORE</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className='w-full h-40 mt-20 mb-20 flex text-center flex-col sm:flex-row items-center justify-between'>
  <button 
    className='flex font-bold text-2xl rounded-3xl items-center justify-center w-44 h-20 bg-[#E3CC70] disabled:opacity-50 mb-4 sm:mb-0'
    style={{ boxShadow: 'inset -3px 0px 35px rgba(0,0,0,0.7)' }} 
    onClick={() => handleSectionChange(currentSection - 1)} 
    disabled={currentSection === 1}
  >
    PREVIOUS
  </button>

  <div className='flex justify-center sm:justify-between items-center mb-4 sm:mb-0'>
    {sections.map((section) => (
      <button
        key={section.id}
        className={`bg-[#D9D9D9] font-bold mr-2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${
          currentSection === section.id ? 'bg-[#766992] text-white' : ''
        }`}
        onClick={() => handleSectionChange(section.id)}
      >
        {section.id}
      </button>
    ))}
  </div>
  
  <button 
    className='flex font-bold text-2xl rounded-3xl items-center justify-center w-44 h-20 bg-[#E3CC70] disabled:opacity-50'
    style={{ boxShadow: 'inset -3px 0px 35px rgba(0,0,0,0.7)' }} 
    onClick={() => handleSectionChange(currentSection + 1)} 
    disabled={currentSection === sections.length}
  >
    NEXT
  </button>
</div>

          </div>
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

     {/* <div className='fixed bottom-0 w-full bg-white text-center z-0' style={{ boxShadow: '0px 0px 400px 200px rgba(255, 255, 255, 0.8)' }}></div> */}
   
</div>
  )
}

export default TripPlanning