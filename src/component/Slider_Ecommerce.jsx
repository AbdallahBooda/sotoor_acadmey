import React from "react";
import { Link } from "react-router-dom";
import "../style/Ecommerce_style.css";

const Slider_Ecommerce = () => {
  return (
    <>
      <div class="card card_style ">
        <div class="card-body">
          <div className="container">
            <Link to="/sotoor-ecommerce" className="link_style">
              <img
                src="https://sotooracademy.com/public/sotoor_ecommerce_assets/images/main-logo.png"
                width="30px"
              />{" "}
              متجر سطور للقدرات{" "}
            </Link>
            <Link to="/login" className="icon_style">
              <i className="fa fa-user-circle"></i>{" "}
            </Link>

            <Link to="/" className="icon_style">
              <i className="fa fa-shopping-bag"></i>
            </Link>
          </div>
        </div>
      </div>

      <img
        src="https://sotooracademy.com/public/sotoor_ecommerce_assets/images/head_banner.jpg"
        className="img_style"
      ></img>
    </>
  );
};

export default Slider_Ecommerce;
