import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import ThankYou from "./pages/ThankYou";
import NavigationBar from "./components/Navigation";
import "./App.css";
Modal.setAppElement("#root");
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Router>
      <div className="top-head">
        <p className="first">Free Shipping on orders above 999/-</p>
        <p className="second">Call us on : +91 9876805120 </p>
      </div>
      <NavigationBar cartCount={cartItems.length} />
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <ProductList onAddToCart={addToCart} />}
        />
        <Route path="/thank-you/:id" component={ThankYou} />
      </Switch>
    </Router>
  );
};

export default App;
