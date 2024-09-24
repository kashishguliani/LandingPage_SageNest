import  { useState } from 'react';

const Carousel = () => {
  const texts = [
    "Elevate Your Impact and Grow Your Influence",
    "Unlock Your Potential with Our Expertise",
   "SageNest has been a game-changer for my learning journey."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

 

  return (
    <div className="bg-blue-50 flex justify-center items-center h-[232px] mb-8 mt-8 relative">
     
      <div className="flex-1 text-center">
        <p className="my-8 text-2xl text-wrap">{texts[currentIndex]}</p>
      </div>
      <button
        onClick={handleNext}
        className="absolute right-4 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Next
      </button>
     
    </div>
  );
};

export default Carousel;
