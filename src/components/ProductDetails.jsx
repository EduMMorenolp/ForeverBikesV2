import React, { useState } from 'react'

function ProductDetails({ product, selectedColor, onColorChange }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-details-container">
      <nav className="breadcrumbs-nav">Bicicletas / {product.name}</nav>
      
      <div className="selectors-section">
        <div className="selector-item">
          <label className="selector-label">COLOR: <span className="selected-value-text">{product.colors.find(c => c.id === selectedColor)?.name}</span></label>
          <div className="color-grid">
            {product.colors.map(color => (
              <button
                key={color.id}
                className={`color-swatch-btn ${selectedColor === color.id ? 'is-active' : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => onColorChange(color.id)}
                aria-label={`Seleccionar color ${color.name}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="product-extra-info">
        <div className="info-tab">DESCRIPCIÓN</div>
        <div className="info-content">
          <p>{product.description}</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-details-container {
          display: flex;
          flex-direction: column;
          animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .breadcrumbs-nav {
          text-transform: uppercase;
          font-size: 11px;
          color: #999;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
        }
        .product-title-bold {
          font-family: var(--font-heading);
          font-size: 34px;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.1;
          letter-spacing: -0.5px;
        }
        .price-block {
          margin-bottom: 40px;
        }
        .main-price {
          font-size: 26px;
          font-weight: 400;
          margin-bottom: 8px;
        }
        .installments-badge {
          font-size: 14px;
          padding: 4px 0;
        }
        .cash-discount {
          font-size: 14px;
          color: var(--color-accent);
          font-weight: 700;
          margin-top: 4px;
        }
        .selectors-section {
          margin-bottom: 40px;
        }
        .selector-label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }
        .selected-value-text {
          font-weight: 400;
          color: #666;
          margin-left: 5px;
          text-transform: none;
        }
        .color-grid {
          display: flex;
          gap: 12px;
        }
        .color-swatch-btn {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0;
          position: relative;
        }
        .color-swatch-btn:hover {
          transform: scale(1.08);
          border-color: rgba(0,0,0,0.3);
        }
        .color-swatch-btn.is-active {
          border: 1px solid #000;
          padding: 3px;
          background-clip: content-box;
          outline: 1px solid #000;
          outline-offset: 3px;
        }
        .purchase-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 50px;
        }
        .quantity-box {
          display: flex;
          border: 1px solid #e2e2e2;
          height: 54px;
        }
        .q-btn {
          width: 45px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .q-btn:hover { background: #f9f9f9; }
        .q-input {
          width: 40px;
          border: none;
          text-align: center;
          font-size: 16px;
          font-family: var(--font-body);
        }
        .primary-cta-btn {
          flex-grow: 1;
          background: #000;
          color: #fff;
          border: none;
          padding: 0 30px;
          height: 54px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 2px;
          border-radius: 0;
        }
        .primary-cta-btn:hover {
          background: #333;
          letter-spacing: 3px;
        }
        .product-extra-info {
          border-top: 1px solid #eee;
          padding-top: 40px;
        }
        .info-tab {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }
        .info-tab::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 30px;
          height: 2px;
          background: #000;
        }
        .info-content {
          font-size: 15px;
          color: #444;
          line-height: 1.7;
        }
      `}} />
    </div>
  )
}

export default ProductDetails
