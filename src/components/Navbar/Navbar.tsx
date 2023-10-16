import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink, Link } from "react-router-dom";
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
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Career">Career</NavLink>
            </li>
            <li>
              <NavLink to="/Education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Link
                to={"https://www.facebook.com/santu.de.3979"}
                target="_blank"
              >
                <FaFacebook className="facebook" />
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.linkedin.com/in/santu-de-812571158/"}
                target="_blank"
              >
                <FaLinkedin className="linkdin" />
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/santude1997"} target="_blank">
                <FaGithub className="github" />
              </Link>
            </li>
          </ul>
          <div className="hamburger-menu">
            <Link to={"#"} onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </Link>
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
