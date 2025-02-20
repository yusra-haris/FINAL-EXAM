import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './MainPage.css';  // Ensure this is the correct relative path to your CSS file

const ProductsDetails = ({ addToCart }) => {
  const products = [
    {id: 1, name: 'Minimal Desk Lamp', price: 89.99, image: 'https://www.depuley.com/cdn/shop/products/dllt-nordic-minimalist-desk-lamp-modern-nightstand-lamp-with-plug-in-cord-industrial-table-lamp-with-adjustable-angle-5w-led-warm-light-desk-lamp-for-study-offi-733791.jpg?v=1677838951'},
    {id: 2, name: 'Ceramic Coffee Mug', price: 24.99, image: 'https://www.benningtonpotters.com/images/uploads/9925-american-classic-mug-w-pop.jpg'},
    {id: 3, name: 'Leather Notebook', price: 34.99, image: 'https://img.drz.lazcdn.com/static/pk/p/4b0c324498b10a0de357b4f3f299ce5d.jpg_720x720q80.jpg'},
    {id: 4, name: 'Bamboo Plant Stand', price: 49.99, image: 'https://www.ikea.com/us/en/images/products/daksjus-plant-stand-bamboo__1289437_ph196769_s5.jpg'},
    {id: 5, name: 'Abstract Wall Art', price: 129.99, image: 'https://primedecor.pk/cdn/shop/products/ColorfulBrushStrokePatches_3Panel_AbstractWallArt.jpg?v=1658150042'},
    {id: 6, name: 'Geometric Bookends', price: 39.99, image: 'https://modernquests.com/cdn/shop/files/esq-living-hollow-blocks-metal-bookends-set-of-2-black-1.jpg?v=1716723334&width=2048'},
  ];

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          {product.image ? (
            <img className="product-image" src={product.image} alt={product.name} />
          ) : (
            <div className="no-image">No Image Available</div>
          )}
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="button-container">
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <i className="fa fa-heart wishlist-icon"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsDetails;
