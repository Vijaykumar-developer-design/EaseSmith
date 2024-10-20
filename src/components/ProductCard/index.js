import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
const ProductCard = ({ product, onAddToCart }) => {
  const history = useHistory();

  const handleViewProduct = () => {
    history.push(`/thank-you/${product.id}`, { product });
  };

  return (
    <div className="product-card">
      <div className="product-img-div">
        <img
          alt="wish"
          className="wish-image"
          src="https://res.cloudinary.com/djyawllgy/image/upload/v1729405576/wishlist_zadnd9.png"
        />
        <img className="product-image" src={product.image} alt={product.name} />
        <button
          onClick={handleViewProduct}
          className="view-button"
          type="button"
        >
          View Product
        </button>
      </div>
      <div>
        <h3 className="pr-name">{product.name}</h3>
        <p className="pr-type">{product.plant_type}</p>
        <div className="stars-div">
          <img className="stars-img" alt="stars" src={product.stars_img} />{" "}
          <span> {product.rating}</span>
        </div>
        <p className="price">
          <span className="actual_price">&#8377;{product.actual_price} </span>
          &#8377;{product.price}
        </p>
      </div>
      <div className="cart-buy">
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          - Add to cart +
        </button>
        <button className="buy-on-rent-btn">Buy on rent</button>
      </div>
    </div>
  );
};

export default ProductCard;
