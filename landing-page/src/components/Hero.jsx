// src/components/Hero.jsx
import { useState, useEffect } from 'react';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: "/Hero.gif", alt: "Workspace Illustration" },
    { src: "/hero2.png", alt: "Workspace Image 1" },
    { src: "/hero3.png", alt: "Workspace Image 2" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Your Favourite<br/>Workspace</h1>
        <div className="buttons">
          <button className="btn-primary">Get WebPro Toolkit</button>
          <button className="btn-secondary">Login</button>
        </div>
      </div>
      <div className="hero-image">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;