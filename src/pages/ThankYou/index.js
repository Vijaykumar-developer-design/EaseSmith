import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./index.css";
const ThankYou = () => {
  const location = useLocation();
  const history = useHistory();
  const product = location.state?.product;
  const goToBack = () => {
    history.goBack();
  };
  return (
    <div className="thankyou">
      <h1>Thank You for Your Interest in {product?.name}!</h1>
      <button onClick={goToBack} className="back-button" type="button">
        Back to product list
      </button>
    </div>
  );
};

export default ThankYou;
