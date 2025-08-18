import { useEffect, useState } from 'react';

const ImageSlider = ({ currentImageIndex, setCurrentImageIndex }) => {
  const images = [
    "/images/aboutme1.png",
    "/images/aboutme2.png",
    "/images/aboutme3.png", 
    "/images/aboutme4.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [setCurrentImageIndex, images.length]);

  return (
    <div className="w-full max-w-xl mx-auto aspect-[4/3] overflow-hidden rounded-xl shadow-lg mb-6">
      <div 
        key={currentImageIndex}
        className="w-full h-full animate-fade-in "
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 3000ms ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;