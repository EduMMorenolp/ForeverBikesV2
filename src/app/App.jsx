import React, { useState } from 'react'
import BikeVisualizer from '../components/BikeVisualizer'
import ProductDetails from '../components/ProductDetails'

function App() {
  const [selectedColor, setSelectedColor] = useState('roja')

  const bikeData = {
    name: 'CITY 1.8',
    price: '$680.000',
    description: 'La Traveler es nuestra bicicleta eléctrica plegable diseñada para quienes buscan versatilidad y potencia en un solo paquete. Equipada con componentes de alta gama y un diseño minimalista, es la compañera perfecta para tus trayectos urbanos.',
    colors: [
      { id: 'roja', name: 'Rojo', hex: '#FF0000', image: '/images/bikes/CITY 1.8 roja.png' },
      { id: 'negra', name: 'Negro', hex: '#000000', image: '/images/bikes/CITY 1.8 negra.png' },
      { id: 'fucsia', name: 'Fucsia', hex: '#F70180', image: '/images/bikes/CITY 1.8 fucsia.png' },
      { id: 'naranja', name: 'Naranja', hex: '#FF8C00', image: '/images/bikes/CITY 1.8 naranaja.png' }
    ]
  }

  const activeColor = bikeData.colors.find(c => c.id === selectedColor)

  return (
    <div className="layout">
      <header className="header">
        <div className="container header-content">
          <img src="/logo.webp" alt="Forever Bikes Logo" className="header-logo-img" />
          <p className="prototype-disclaimer">
            WEB PROTOTIPO - SOLO PARA MOSTRAR FUNCIONAMIENTO
          </p>
        </div>
      </header>
      
      <main className="main-content container">
        <div className="product-page">
          <div className="visualizer-column">
            <BikeVisualizer image={activeColor.image} />
          </div>
          <div className="details-sidebar">
            <ProductDetails 
              product={bikeData} 
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
            />
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-logo">FOREVER</div>
          <p>© 2026 Forever Bikes Argentina. Tienda NO oficial.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
