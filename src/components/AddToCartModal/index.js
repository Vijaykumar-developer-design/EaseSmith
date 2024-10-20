import React from "react";
import Modal from "react-modal";
import { HiOutlineXMark } from "react-icons/hi2";

import "./index.css";

const AddToCartModal = ({ product, isOpen, onClose, onConfirm }) => {
  if (!product) return null; // In case product is not provided
  // Event handler for the cancel button
  const handleCancel = () => {
    // Add any logic needed before closing the modal
    console.log("Add to Cart action was cancelled.");
    onClose(); // Close the modal
  };

  // Event handler for the confirm button
  const handleConfirm = () => {
    // Add any logic needed before confirming the action
    console.log("Product added to cart:", product);
    onConfirm(product); // Trigger the confirm action with the product
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add to Cart Modal"
      className="product-picker-modal"
      overlayClassName="modal-overlay"
    >
      <div className="product-card">
        <div className="cancel-x-icon">
          <HiOutlineXMark onClick={handleCancel} />
        </div>

        <div className="product-img-div">
          <img
            alt="wish"
            className="wish-image"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1729405576/wishlist_zadnd9.png"
          />
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
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
      </div>

      <div className="modal-actions">
        <button onClick={handleCancel} className="cancel-btn">
          Cancel
        </button>
        <button onClick={handleConfirm} className="confirm-btn">
          Confirm Add to Cart
        </button>
      </div>
    </Modal>
  );
};

export default AddToCartModal;
