import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Logo = "<DE/>";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <span>{Logo}</span>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Carrer</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#" target="_blank">
                <FaFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaLinkedin className="linkdin" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaGithub className="github" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      <section className="hero-section">
        <p>Welcome</p>
        <h2>Santu De</h2>
      </section>
    </>
  );
};

export default Navbar;
