import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import "./index.css";
const NavigationBar = ({ cartCount }) => {
  const [activeItem, setActiveItem] = useState(1);

  const items = [
    { label: "Home", type: "text" },
    { label: "Plants & Pots", type: "text" },
    {
      label: "Tools",
      type: "select",
      options: ["Tools", "Tool 1", "Tool2"],
    },
    {
      label: "Our Services",
      type: "select",
      options: ["Our Services", "Service 1", "Service 2"],
    },
    { label: "Blog", type: "text" },
    { label: "Our Story", type: "text" },
    { label: "FAQs", type: "text" },
  ];

  return (
    <nav>
      <div className="header-tools">
        <img
          className="logo-img"
          alt="logo"
          src="https://res.cloudinary.com/djyawllgy/image/upload/v1729268008/Group_59_fg1zwn.png"
        />
        {items.map((item, index) => (
          <span key={index}>
            {item.type === "text" ? (
              <span
                onClick={() => setActiveItem(index)}
                className={`${
                  activeItem === index ? "apply-orange" : "apply-black"
                }`}
              >
                {item.label}
              </span>
            ) : (
              <span>
                <select
                  id="Tools"
                  // className="selectopt"
                  className={`${
                    activeItem === index
                      ? "apply-orange-select"
                      : "apply-black-select"
                  }`}
                  onFocus={() => setActiveItem(index)}
                >
                  {item.options?.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </span>
            )}
          </span>
        ))}
        <div className="profile-cart">
          <div className="profile">
            <GoPerson className="profile-icon" />
            <span> My Profile</span>
          </div>
          <div className="profile">
            <span className="cart-count">{cartCount}</span>
            <img
              className="image-ele"
              alt="img"
              src="https://res.cloudinary.com/djyawllgy/image/upload/v1729351227/cart_zhmby9.jpg"
            />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
