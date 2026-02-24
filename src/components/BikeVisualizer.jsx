import React from 'react'

function BikeVisualizer({ image }) {
  return (
    <div className="bike-image-container">
      <img src={image} alt="Bicicleta seleccionada" className="bike-main-image" />
      <style dangerouslySetInnerHTML={{ __html: `
        .bike-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .bike-main-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          transition: opacity 0.3s ease-in-out;
        }
      `}} />
    </div>
  )
}

export default BikeVisualizer
