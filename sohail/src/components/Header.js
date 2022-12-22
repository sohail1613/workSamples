import React from "react";
import "./Header.css";
import Logo from "../assets/logos/logos.avif";

const Header = () => {
  return (
    <>
      <div className="container-header">
        <div className="logo">
          <a>
            <img src={Logo} />
          </a>
        </div>

        <div className="menu">
          <a href="#">Anasayfa </a>
          <a href="#">Iletişim </a>
          <a href="#">Ürünlerimiz </a>
          <a href="#">Hakkımızda </a>
          <a href="#">Projelerimiz </a>
        </div>
      </div>
    </>
  );
};

export default Header;
