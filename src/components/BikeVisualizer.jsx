import React, { useState, useEffect } from 'react'

function BikeVisualizer({ image }) {
  const [displayImage, setDisplayImage] = useState(image);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (image !== displayImage) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayImage(image);
        setIsTransitioning(false);
      }, 300); // Coincide con la duración de la transición CSS
      return () => clearTimeout(timer);
    }
  }, [image, displayImage]);

  return (
    <div className="bike-visualizer-wrapper">
      <div className={`bike-image-container ${isTransitioning ? 'fade' : ''}`}>
        <img src={displayImage} alt="Visualización de bicicleta" className="bike-main-image" />
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .bike-visualizer-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        .bike-image-container {
          width: 100%;
          display: flex;
          justify-content: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        }
        .bike-image-container.fade {
          opacity: 0.5;
          transform: scale(0.98);
        }
        .bike-main-image {
          max-width: 90%;
          max-height: 75vh;
          object-fit: contain;
          filter: drop-shadow(0 10px 30px rgba(0,0,0,0.05));
        }
      `}} />
    </div>
  )
}

export default BikeVisualizer
