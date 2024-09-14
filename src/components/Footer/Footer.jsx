import React from 'react';
// import logo from '../../assets/images/logo.png';
import logo from '../../assets/images/Our images/newlogo.png';
import paymentMethods from '../../assets/images/pay.png';

const Footer = () => {
  return (
    <>
      {/* <!-- FOOTER --> */}

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">About Us</p>
              </li>
              <li>
                <p className="footer-list-text">
                  Discover our latest collections and fashion trends. Visit{' '}
                  <a href="#" className="link">
                    Our Stores
                  </a>
                </p>
              </li>
              <li>
                <p className="footer-list-text bold">+391 (0)35 2568 4593</p>
              </li>
              <li>
                <p className="footer-list-text">support@urbanhype.com</p>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Shop</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Gift Cards
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Customer Service</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>

            <div className="footer-list">
              <p className="newsletter-title">Stay in Fashion</p>
              <p className="newsletter-text">
                Sign up to get the latest updates on new arrivals, exclusive offers, and more.
              </p>

              <form action="" className="newsletter-form">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Enter your email address"
                  required
                  className="email-field"
                />
                {/* <button type="submit" className="btn btn-primary">
                  Subscribe
                </button> */}
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="wrapper">
              <p className="copyright">&copy; 2024 UrbanHype. All rights reserved.</p>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    {/* Add your social media icons here */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* Add your social media icons here */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* Add your social media icons here */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* Add your social media icons here */}
                  </a>
                </li>
              </ul>
            </div>

            <a href="#" className="logo">
              <img
                src={logo}
                width="179"
                height="26"
                loading="lazy"
                alt="UrbanHype"
              />
            </a>

            <img
              src={paymentMethods}
              width="313"
              height="28"
              alt="Available payment methods"
              className="w-100"
            />
          </div>
        </div>
      </footer>

      {/* <!-- BACK TO TOP --> */}
      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
      >
        {/* Add your back to top icon here */}
      </a>
    </>
  );
};

export default Footer;
