'use client';
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
    }, 15000); // Zmiana co 10 sekund

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-[4/3] overflow-hidden rounded-xl shadow-xl shadow-black/40 mb-6">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute  top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100 z-1' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;