import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./index.css";

const Header = () => {
  return (
    <div className="header-header">
      <header className="search-header">
        <div className="search-bar">
          <IoSearchOutline className="search-icon" />
          <input
            className="input-search"
            type="text"
            placeholder="Search Plant"
          />
          <img
            className="leaf-icon"
            alt="leaf"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1729353424/image_91_cmylrk.png"
          />
        </div>
      </header>
      <div>
        <div className="btns-container">
          <button className="plants-btn" type="button">
            Plants
          </button>
          <button className="pots-btn" type="button">
            Pots
          </button>
        </div>
        <p className="header-content">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
        <h1 className="nursery">Nursery</h1>
        <div className="images-row">
          <div className="container-image">
            <img
              className="image-container"
              alt="img1"
              src="https://res.cloudinary.com/djyawllgy/image/upload/v1729403502/Ellipse_68_zcoj45.png"
            />
            <p className="container-image-text">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
            </p>
          </div>

          <div className="container-image">
            <img
              className="image-container"
              alt="img2"
              src="https://res.cloudinary.com/djyawllgy/image/upload/v1729403501/Ellipse_69_k2ijpz.png"
            />
            <p className="container-image-text">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
            </p>
          </div>

          <div className="container-image">
            <img
              className="image-container"
              alt="img3"
              src="https://res.cloudinary.com/djyawllgy/image/upload/v1729403501/Ellipse_70_huru7l.png"
            />
            <p className="container-image-text">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
            </p>
          </div>

          <div className="container-image">
            <img
              className="image-container"
              alt="img4"
              src="https://res.cloudinary.com/djyawllgy/image/upload/v1729403501/Ellipse_71_n2lhix.png"
            />
            <p className="container-image-text">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
            </p>
          </div>

          <div className="container-image">
            <img
              className="image-container"
              alt="img5"
              src="https://res.cloudinary.com/djyawllgy/image/upload/v1729403501/Ellipse_62_rcjkr3.png"
            />
            <p className="container-image-text">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
            </p>
          </div>

          <div className="container-image">
            <img
              className="image-container"
              alt="img6"
              src="https://res.cloudinary.com/djyawllgy/image/upload/v1729403501/Ellipse_63_mg0t7b.png"
            />
            <p className="container-image-text">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
            </p>
          </div>

          <div className="container-image">
            <img
              className="image-container"
              alt="img7"
              src="https://res.cloudinary.com/djyawllgy/image/upload/v1729404560/Ellipse_64_1_frgo3d.png"
            />
            <p className="container-image-text">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
