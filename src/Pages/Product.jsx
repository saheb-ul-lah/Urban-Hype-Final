import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "../styles/productpage.css";
import img1 from "../shoes_images/shoe_1.jpg";
import img2 from "../shoes_images/shoe_2.jpg";
import img3 from "../shoes_images/shoe_3.jpg";
import img4 from "../shoes_images/shoe_4.jpg";
import { FaStar } from "react-icons/fa6";
import { IoIosStarHalf } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const ProductPage = () => {
  const [imgId, setImgId] = useState(1);

  useEffect(() => {
    // GSAP animations
    gsap.from(".card-wrapper", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".product-imgs", {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(".product-content", {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(".img-item", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      delay: 1,
    });

    gsap.from(
      ".product-title, .product-link, .product-rating, .product-price, .product-detail, .purchase-info, .social-links",
      {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.8,
        stagger: 0.3,
      }
    );

    // Resize handler
    const handleResize = () => slideImage();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imgId]);

  const slideImage = () => {
    const displayWidth = document.querySelector(".img-showcase img").clientWidth;
    document.querySelector(
      ".img-showcase"
    ).style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
  };

  const handleImageClick = (id) => {
    setImgId(id);
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        {/* card left */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src={img1} alt="shoe image 1" />
              <img src={img2} alt="shoe image 2" />
              <img src={img3} alt="shoe image 3" />
              <img src={img4} alt="shoe image 4" />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img
                  src={img1}
                  alt="shoe image 1"
                  onClick={() => handleImageClick(1)}
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img
                  src={img2}
                  alt="shoe image 2"
                  onClick={() => handleImageClick(2)}
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img
                  src={img3}
                  alt="shoe image 3"
                  onClick={() => handleImageClick(3)}
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img
                  src={img4}
                  alt="shoe image 4"
                  onClick={() => handleImageClick(4)}
                />
              </a>
            </div>
          </div>
        </div>
        {/* card right */}
        <div className="product-content">
          <h2 className="product-title">Nike Shoes</h2>
          <a href="#" className="product-link">
            Visit Nike Store
          </a>
          <div className="product-rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <IoIosStarHalf />
            <span>4.7(21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">
              Old Price: <span>$257.00</span>
            </p>
            <p className="new-price">
              New Price: <span>$249.00 (5%)</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>About this item:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
            </p>
            <ul>
              <li>
              <FaCheckCircle />
              Color: <span>Black</span>
              </li>
              <li><FaCheckCircle />

                Available: <span>In stock</span>
              </li>
              <li><FaCheckCircle />

                Category: <span>Shoes</span>
              </li>
              <li><FaCheckCircle />

                Shipping Area: <span>All over the world</span>
              </li>

              <li><FaCheckCircle />

                Shipping Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <input type="number" min="0" defaultValue="1" />
            <button type="button" className="btn">
              Add to Cart <IoCart />

            </button>
            <button type="button" className="btn">
              Compare
            </button>
          </div>

          <div className="social-links">
            <p>Share At: </p>
            <a href="#">
            <FaFacebook />
            </a>
            <a href="#">
            <FaXTwitter />
            </a>
            <a href="#">
            <FaInstagram />
            </a>
            <a href="#">
            <FaWhatsapp />
            </a>
            <a href="#">
            <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;