import { useState, useEffect } from 'react';
import '../globals.css';

const ImageSlider = () => {
  const images = [
    "/images/aboutme1.png",
    "/images/aboutme2.png",
    "/images/aboutme3.png",
    "/images/aboutme4.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto aspect-[4/3] overflow-hidden rounded-xl shadow-lg mb-6">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="w-full h-full object-cover transition-opacity duration-1000 slider-image"
      />
    </div>
  );
};

export default ImageSlider;
