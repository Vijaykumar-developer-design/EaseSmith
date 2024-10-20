import React, { useState } from "react";
import { products } from "../../data";
import ProductCard from "../../components/ProductCard";
import AddToCartModal from "../../components/AddToCartModal";
import Pagination from "../../components/Pagination";
import "./index.css";
const ProductList = ({ onAddToCart }) => {
  const [cartProduct, setCartProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const handleAddToCart = (product) => {
    setCartProduct(product);
    setModalOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleConfirmAddToCart = () => {
    onAddToCart(cartProduct);
    setModalOpen(false);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="product-items">
      <div className="tab-items">
        <div className="filter-tab">
          <p>Filter</p>
          <p>CLEAR ALL</p>
        </div>
        <div className="filter-tab">
          <p>Type of plants</p>
          <p>+</p>
        </div>
        <div className="filter-tab">
          <p>Price</p>
          <p>+</p>
        </div>
        <div className="filter-tab">
          <p>Nursery</p>
          <p>+</p>
        </div>
        <div className="filter-tab">
          <p>Ideal Plants Location</p>
          <p>+</p>
        </div>
        <div className="filter-tab">
          <p>Indoor/ Outdoor</p>
          <p>+</p>
        </div>
        <div className="filter-tab">
          <p>Maintenance</p>
          <p>+</p>
        </div>
        <div className="filter-tab">
          <p>Plant Size</p>
          <p>+</p>
        </div>
        <div className="filter-tab">
          <p>Water Schedule</p>
          <p>+</p>
        </div>
        <div className="filter-tab">
          <p>Color</p>
          <p>+</p>
        </div>
        <div className="filter-tab">
          <p>Seasonal</p>
          <p>+</p>
        </div>
        <div className="filter-tab">
          <p>Light Efficient</p>
          <p>+</p>
        </div>
      </div>
      <div>
        <div className="sort-by-div">
          <p>300 products</p>
          <select className="sort-options">
            <option>SORTBY</option>
          </select>
        </div>

        <div className="product-list">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / productsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
      <AddToCartModal
        product={cartProduct}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmAddToCart}
      />
    </div>
  );
};

export default ProductList;
