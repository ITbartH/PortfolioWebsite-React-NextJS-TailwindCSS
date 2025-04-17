import { useState, useEffect } from 'react';
import '../globals.css'; // Plik CSS z animacją

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
    }, 9900); // Zmiana co 10 sekund

    return () => clearInterval(interval); // Czyszczenie intervala po odmontowaniu komponentu
  }, []);
  console.log("Current image:", images[currentImageIndex]);  // Debugowanie ścieżki obrazu
  return (
    <div className="image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}

        className="slider-image place-self-center rounded-xl "
      />
    </div>
  );
};

export default ImageSlider;  // Eksportujemy komponent jako default