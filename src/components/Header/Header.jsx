import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import Logo from "../../assets/images/Our images/newlogo.png";
import useEventListener from '../../hooks/useEventListener'; // Ensure the path is correct
import { Link } from 'react-router-dom';

import {useAuth0} from "@auth0/auth0-react";
const Header = () => {
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const { loginWithRedirect} = useAuth0();
  useEffect(() => {
    // GSAP Animation
    const t1 = gsap.timeline();
    t1.from(".header-top .container .input-wrapper", {
      y: -20,
      opacity: 0,
      delay: 0.3,
      duration: 1,
    })
      .from(".header-top .container .logo", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
      })
      .from(".header-top .container .header-actions", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
      })
      .from(".alert", {
        y: -20,
        opacity: 0,
        duration: 0.5,
      });
  }, []);

  // Navbar Toggle Handler
  const toggleNavbar = () => {
    const navbar = document.querySelector("[data-navbar]");
    const overlay = document.querySelector("[data-overlay]");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  // Close Navbar Handler
  const closeNavbar = () => {
    const navbar = document.querySelector("[data-navbar]");
    const overlay = document.querySelector("[data-overlay]");
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  };

  // Scroll Event Handlers
  const handleScroll = () => {
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    // Sticky Header & Back to Top Button
    if (window.scrollY > 150) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }

    // Hide Header on Scroll Down
    if (lastScrollPos >= window.scrollY) {
      header.classList.remove("header-hide");
    } else {
      header.classList.add("header-hide");
    }
    setLastScrollPos(window.scrollY);
  };

  // Scroll Reveal Effect
  const handleScrollReveal = () => {
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight / 2) {
        section.classList.add("active");
      }
    });
  };

  // Attach Event Listeners
  useEventListener("scroll", () => {
    handleScroll();
    handleScrollReveal();
  });

  useEffect(() => {
    handleScrollReveal(); // Initial call for scroll reveal
  }, []);

  return (
    <>
      <header className="header" data-header>
        <div className="alert">
          <div className="container">
            <p className="alert-text">Free Shipping On all Indian orders of ₹999+</p>
          </div>
        </div>

        <div className="header-top">
          <div className="container">
            <button
              className="nav-open-btn"
              aria-label="open menu"
              data-nav-toggler
              onClick={toggleNavbar}
            >
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>

            <div className="input-wrapper">
              <input
                type="search"
                name="search"
                placeholder="Search product"
                className="search-field"
              />
              <button className="search-submit" aria-label="search">
                <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>

            <NavLink to="/" className="logo">
              <img
                src={Logo}
                width="200"
                height="30"
                alt="UrbanHype"
              />
            </NavLink>

            <div className="header-actions">
              <button onClick={() => loginWithRedirect()} className="header-action-btn" aria-label="user">
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
              </button>
              <button className="header-action-btn" aria-label="favourite item">
                <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                <span className="btn-badge">0</span>
              </button>
              <Link to="/cart">
                <button className="header-action-btn" aria-label="cart item">
                  <data className="btn-text" value="0">$0.00</data>
                  <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                  <span className="btn-badge">0</span>
                </button>
              </Link>
            </div>

            <nav className="navbar">
              <ul className="navbar-list">
                {['home', 'collection', 'shop', 'offer', 'blog'].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={item === 'home' ? '/' : `/${item}`} // Conditional routing for home
                      className="navbar-link has-after"
                      data-nav-link
                      activeClassName="active"
                      onClick={closeNavbar} // Close navbar when clicked
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="sidebar">
        <div className="mobile-navbar" data-navbar>
          <div className="wrapper">
            <NavLink to="/" className="logo">
              <img
                src={Logo}
                width="179"
                height="26"
                alt="UrbanHype"
              />
            </NavLink>
            <button
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
              onClick={toggleNavbar}
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list">
            {['home', 'collection', 'shop', 'offer', 'blog'].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item}`} // This is the route path for mobile
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNavbar} // Close navbar when clicked
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>

              </li>
            ))}
          </ul>
        </div>
        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </>
  );
};

export default Header;
