import React from 'react';
import { useParams } from 'react-router-dom';

const ExplorePageforPlaces = () => {
  const { id } = useParams(); // Get the card ID from the route

  // Dummy data for demonstration
  const cardDetails = {
    1: { title: 'MATHURA', description: 'A beautiful spiritual destination.', image: '../public/mathura.jpg' },
    2: { title: 'AGRA', description: 'Home to the iconic Taj Mahal.', image: '../public/agra.jpg' },
    1: { title: 'MATHURA', description: 'A beautiful spiritual destination.', image: '../public/mathura.jpg' },
    2: { title: 'AGRA', description: 'Home to the iconic Taj Mahal.', image: '../public/agra.jpg' },
    1: { title: 'MATHURA', description: 'A beautiful spiritual destination.', image: '../public/mathura.jpg' },
    2: { title: 'AGRA', description: 'Home to the iconic Taj Mahal.', image: '../public/agra.jpg' },
    1: { title: 'MATHURA', description: 'A beautiful spiritual destination.', image: '../public/mathura.jpg' },
    2: { title: 'AGRA', description: 'Home to the iconic Taj Mahal.', image: '../public/agra.jpg' },
    1: { title: 'MATHURA', description: 'A beautiful spiritual destination.', image: '../public/mathura.jpg' },
    2: { title: 'AGRA', description: 'Home to the iconic Taj Mahal.', image: '../public/agra.jpg' },
    // Add more data or fetch dynamically from an API
  };

  const card = cardDetails[id];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {card ? (
        <>
          <h1 className="text-4xl font-bold mb-4">{card.title}</h1>
          <img
            src={card.image || '/placeholder-image.jpg'}
            alt={card.title}
            className="w-96 h-96 object-cover mb-6"
          />
          <p className="text-lg">{card.description}</p>
        </>
      ) : (
        <h1 className="text-2xl font-bold">Card not found</h1>
      )}
    </div>
  );
};

export default ExplorePageforPlaces;
