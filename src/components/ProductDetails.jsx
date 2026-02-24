import React from 'react'

function ProductDetails({ product, selectedColor, onColorChange }) {
  // Formatear precio al estilo argentino
  const formattedPrice = product.price.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  });

  return (
    <div className="product-details">
      <nav className="breadcrumbs">Bicicletas / {product.name}</nav>
      <h1 className="product-name">{product.name}</h1>
      
      <div className="selection-group">
        <label className="selection-label">COLOR</label>
        <div className="color-options">
          {product.colors.map(color => (
            <button
              key={color.id}
              className={`color-button ${selectedColor === color.id ? 'active' : ''}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => onColorChange(color.id)}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div className="description">
        <p>{product.description}</p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-details {
          display: flex;
          flex-direction: column;
        }
        .breadcrumbs {
          text-transform: uppercase;
          font-size: 12px;
          color: #888;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }
        .product-name {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 8px 0;
          line-height: 1.2;
        }
        .price-container {
          margin-bottom: 30px;
        }
        .product-price {
          font-family: var(--font-body);
          font-size: 22px;
          font-weight: 400;
          color: var(--color-primary);
          margin-bottom: 5px;
        }
        .installments-info {
          font-size: 14px;
          color: var(--color-primary);
          margin-bottom: 4px;
        }
        .discount-info {
          font-size: 14px;
          color: var(--color-accent);
          font-weight: 700;
        }
        .selection-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 30px;
        }
        .selection-label {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #000;
        }
        .color-options {
          display: flex;
          gap: 8px;
        }
        .color-button {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer;
          transition: border 0.2s;
          padding: 0;
          border-radius: 0;
        }
        .color-button.active {
          border: 1px solid var(--color-primary);
          outline: 1px solid var(--color-primary);
          outline-offset: 2px;
        }
        .action-area {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }
        .quantity-selector {
          display: flex;
          border: 1px solid rgba(0,0,0,0.2);
          height: 48px;
        }
        .qty-btn {
          width: 40px;
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
        }
        .qty-input {
          width: 40px;
          border: none;
          text-align: center;
          font-size: 16px;
          font-family: var(--font-body);
        }
        .add-to-cart {
          flex-grow: 1;
          background: var(--color-primary);
          color: var(--color-secondary);
          border: none;
          padding: 0 20px;
          height: 48px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: opacity 0.2s;
          letter-spacing: 1px;
          border-radius: 0;
        }
        .add-to-cart:hover {
          opacity: 0.9;
        }
        .description {
          font-size: 15px;
          color: #333;
          line-height: 1.6;
          border-top: 1px solid #eee;
          padding-top: 30px;
        }
      `}} />
    </div>
  )
}
export default ProductDetails
