import React from 'react';
import fest1 from "../../assets/images/fest/fest1.avif";
import fest4 from "../../assets/images/fest/fest4.avif"; // Make sure the file extension is correct

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
          <button className="action-btn" aria-label="add to cart">🛍️</button>
          <button className="action-btn" aria-label="add to wishlist">🤍</button>
          <button className="action-btn" aria-label="compare">🔁</button>
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
    }
    // Add more bestseller items here
  ];

  const underFiveThousand = [
    {
      image: fest4, // Imported image
      discount: 20,
      price: 1499,
      originalPrice: 2499,
      title: "Kids Charisma",
      rating: 5,
      reviews: 5170
    },
    {
      image: fest4, // Another product with same image
      price: 1499,
      title: "Kids Charisma",
      rating: 5,
      reviews: 5170
    }
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
