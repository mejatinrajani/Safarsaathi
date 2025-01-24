import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar_ExplorePage from '../components/Navbar_ExplorePage';
import Footer from '../components/Footer';

const ExplorePageforPlaces = () => {
  const { id } = useParams(); // Get the card ID from the route

  // Dummy data for demonstration
  const cardDetails = {
    1: { title: 'MATHURA', description: 'A beautiful spiritual destination.', image: 'https://www.theindia.co.in/blog/wp-content/uploads/2020/08/Kusum-Sarovar.jpg' },
    2: { title: 'AGRA', description: 'Home to the iconic Taj Mahal.', image: '/agra.jpg' },
    3: { title: 'AYODHYA', description: 'A beautiful spiritual destination.', image: '/ayodhya.jpg' },
    4: { title: 'BANARAS', description: 'Home to the iconic Taj Mahal.', image: '/banaras.jpg' },
    5: { title: 'DELHI', description: 'A vibrant city with rich history and culture.', image: '/delhi.jpg' },
    6: { title: 'LUCKNOW', description: 'A city known for its Mughal heritage and cuisine.', image: '/lucknow.jpg' },
    7: { title: 'PRAYAGRAJ', description: 'A city where spirituality and history meet.', image: '/prayagraj.jpg' },
    8: { title: 'UJJAIN', description: 'A city famous for its temples and religious importance.', image: '/ujjain.jpg' },
    9: { title: 'JAIPUR', description: 'The Pink City with majestic palaces and forts.', image: '/jaipur.jpg' },
  };

  const card = cardDetails[id];

  return (
    <div
      className="bg-blend-saturation min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-[#233768] to-[#6E648E] text-white"
    >
      <Navbar_ExplorePage />

      {/* Main Content */}
      <main className="flex-grow px-6 sm:px-12 md:px-16 lg:px-20 py-12">
        {card ? (
          <>
            {/* Heading Section */}
            <section className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 border-b-4 border-yellow-500 pb-2 max-w-4xl mx-auto">
                {card.title}
              </h1>
              <p className="text-xl sm:text-2xl text-white opacity-80 max-w-3xl mx-auto">
                {card.description || "Here you can provide a brief overview of the place or topic. Engage the reader by explaining its uniqueness."}
              </p>
            </section>

            {/* Image Section */}
            <section className="text-center mb-12 ml-16">
              <img
                src={card.image || '/placeholder-image.jpg'}
                alt={card.title}
                className="w-full max-w-[1200px] h-[800px] object-cover mb-6 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              />
            </section>

            {/* More Details Section */}
            <section className="text-center mb-12 px-4 sm:px-8 md:px-12 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Discover More</h2>
              <p className="text-lg sm:text-xl text-white opacity-80 leading-relaxed">
                Dive deeper into the history, culture, and experience of this place. Whether you're planning a trip or exploring virtually, there's always more to learn and experience. Explore our detailed guide and plan your visit today!
              </p>
              <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                Learn More
              </button>
            </section>

            {/* Additional Content Section */}
            <section className="text-center mb-12 px-4 sm:px-8 md:px-12 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Plan Your Trip</h2>
              <p className="text-lg sm:text-xl text-white opacity-80 leading-relaxed mb-4">
                Need help planning your trip? We offer detailed itineraries and recommendations to make your experience unforgettable. From the best places to visit to hidden gems, we've got you covered!
              </p>
              <div className="flex justify-center">
                <button className="px-8 py-4 bg-yellow-500 text-black rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mr-6">
                  Start Planning
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                  Contact Us
                </button>
              </div>
            </section>
          </>
        ) : (
          <h1 className="text-2xl font-bold text-white">Card not found</h1>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ExplorePageforPlaces;
