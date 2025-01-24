import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import Navbar_ContactUsPage from '../components/Navbar_ContactUsPage';
import Footer from '../components/Footer';

function ContactusPage() {
  const [message, setMessage] = useState('');
    
  const SubmitHandler = (e) => {
    e.preventDefault();
    const data = message; // Receive the message box data from here.
    setMessage('');
  }

  const [isNavOpen, setIsNavOpen] = useState(false);



  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-[#1D3465] to-[#CDCED1]">


      <Navbar_ContactUsPage />      

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




    
 <Footer/>

      
      <div className='fixed bottom-0 w-full bg-white text-center z-0' style={{ boxShadow: '0px 0px 400px 200px rgba(255, 255, 255, 0.8)' }}></div>
    </div>
  )
}

export default ContactusPage
