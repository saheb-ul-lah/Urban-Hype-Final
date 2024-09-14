import React from 'react';
import fest1 from "../../assets/images/fest/fest1.avif";
import fest2 from "../../assets/images/fest/fest2.avif";
import fest3 from "../../assets/images/fest/fest3.avif";
import fest4 from "../../assets/images/fest/fest4.avif";
import fest5 from "../../assets/images/fest/fest5.avif";
import fest6 from "../../assets/images/fest/fest6.avif";

import fashion1 from "../../assets/images/fest/fashion-1.avif";
import fashion2 from "../../assets/images/fest/fashion-2.avif";
import fashion3 from "../../assets/images/fest/fashion-3.avif";
import fashion4 from "../../assets/images/fest/fashion-4.avif";
import fashion5 from "../../assets/images/fest/fashion-5.avif";
// import fashion6 from "../../assets/images/fest/fashion-6.avif";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { IoGitCompare } from "react-icons/io5";

const ShopCard = ({ image, discount, price, originalPrice, title, rating, reviews }) => (
  <li className="scrollbar-item">
    <div className="shop-card">
      <div className="card-banner img-holder" style={{ aspectRatio: '540 / 720' }}>
        <img
          src={image}
          width="270"  // Reduced width (half of 540)
          height="360" // Reduced height (half of 720)
          loading="lazy"
          alt={title}
          className="img-cover"
        />
        {discount && <span className="badge" aria-label={`${discount}% off`}>-{discount}%</span>}
        <div className="card-actions">
          <div style={{padding:"0px 0px", backgroundColor:"white"}}><button style={{fontSize:"18px", width:"50px"}} className="action-btn" aria-label="add to cart"><FaShoppingCart /></button></div>
          <div style={{padding:"0px 0px", backgroundColor:"white"}}><button style={{fontSize:"18px", width:"50px"}} className="action-btn" aria-label="add to wishlist"><IoMdHeart /></button></div>
          <div style={{padding:"0px 0px", backgroundColor:"white"}}><button style={{fontSize:"18px", width:"50px"}} className="action-btn" aria-label="compare"><IoGitCompare /></button></div>
        </div>
      </div>
      <div className="card-content">
        <div className="price">
          {originalPrice && <del className="del">₹{originalPrice}</del>}
          <span className="span">₹{price}</span>
        </div>
        <h3>
          <a href="#" className="card-title">{title}</a>
        </h3>
        <div className="card-rating">
          <div className="rating-wrapper" aria-label={`${rating} star rating`}>
            {[...Array(5)].map((_, i) => (
              i < rating ? <span key={i}>&#9733;</span> : <span key={i}>&#9734;</span>
            ))}
          </div>
          <p className="rating-text">{reviews} reviews</p>
        </div>
      </div>
    </div>
  </li>
);

const ShopSection = ({ title, items }) => (
  <section className="section shop" id="shop">
    <div className="container">
      <div className="title-wrapper">
        <h2 className="h2 section-title">{title}</h2>
        <a href="#" className="btn-link">
          <span className="span">Shop All Products</span>
          →
        </a>
      </div>
      <ul className="has-scrollbar">
        {items.map((item, index) => (
          <ShopCard key={index} {...item} />
        ))}
      </ul>
    </div>
  </section>
);

const Shop = () => {
  const bestsellers = [
    {
      image: fest1, // Imported image
      discount: 20,
      price: 999,
      originalPrice: 1999,
      title: "Desi Fusion",
      rating: 5,
      reviews: 5170
    },
    {
      image: fest2, // Imported image
      // discount: 20,
      price: 999,
      // originalPrice: 1999,
      title: "Trendy Tara",
      rating: 5,
      reviews: 5170
    },
    {
      image: fest3, // Imported image
      discount: 20,
      price: 999,
      originalPrice: 2999,
      title: "Fusion Fashion",
      rating: 5,
      reviews: 5170
    },
    {
      image: fest4, // Imported image
      discount: 20,
      price: 999,
      originalPrice: 2599,
      title: "Tiny Trendsetters",
      rating: 5,
      reviews: 5170
    },
    {
      image: fest5, // Imported image
      discount: 20,
      price: 1199,
      originalPrice: 2599,
      title: "Vibrant Verve",
      rating: 5,
      reviews: 5170
    },
    {
      image: fest6, // Imported image
      // discount: 20,
      price: 1199,
      // originalPrice: 1999,
      title: "Glamour Gents",
      rating: 5,
      reviews: 5170
    },
    // Add more bestseller items here
  ];

  const underFiveThousand = [
    {
      image: fashion1, // Imported image
      discount: 20,
      price: 1499,
      originalPrice: 2499,
      title: "Kids Charisma",
      rating: 5,
      reviews: 5170
    },
    {
      image: fashion2, // Imported image
      // discount: 20,
      price: 2499,
      // originalPrice: 3999,
      title: "White Serene",
      rating: 5,
      reviews: 5170
    },
    {
      image: fashion3, // Imported image
      discount: 35,
      price: 1199,
      originalPrice: 1799,
      title: "Office Vibes",
      rating: 5,
      reviews: 5170
    },
    {
      image: fashion4, // Imported image
      discount: 20,
      price: 1499,
      originalPrice: 2499,
      title: "Street Glamour",
      rating: 5,
      reviews: 5170
    },
    {
      image: fashion5, // Imported image
      discount: 20,
      price: 1499,
      originalPrice: 2499,
      title: "Timeless Swag",
      rating: 5,
      reviews: 5170
    },
    {
      image: fest5, // Another product with same image
      price: 1499,
      title: "Childish Cherish",
      rating: 5,
      reviews: 5170
    },
    // Add more items under 5000 here
  ];

  return (
    <>
      <ShopSection title="Our Bestsellers" items={bestsellers} />
      <ShopSection title="Under ₹5000" items={underFiveThousand} />
    </>
  );
};

export default Shop;
