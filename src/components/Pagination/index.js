import React from "react";
import "./index.css";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Function to handle "Next" button click
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Function to handle "Previous" button click
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="prev-btn"
      >
        Previous
      </button>
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="next-btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
