import React from "react";
import "./footer.css"; // Import CSS for styling
import SenaiLogo from "../assets/logo-senai.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="image-container">
          <img src={SenaiLogo} alt="Senai Logo" />
        </div>
        <div className="author">
          <a href="https://github.com/MaSander">By: Marcelo Sander</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
