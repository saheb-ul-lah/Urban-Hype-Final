import React from 'react';

import BannerImage1 from "../../assets/images/fest/New-fashion-in-Puja-festival.jpg"; // Ensure this path-is correct
import BannerImage2 from "../../assets/images/fest/couple-performing-dhunuchi-dance-bengal-durga-puja-vector-design-indian-art-style-76846200.webp";

function Banner() {
  return (
    <>
      {/* 
        - #BANNER
      */}
      <section className="section banner">
        <div className="container">
          <ul className="banner-list">
            <li>
              <div className="banner-card banner-card-1 has-before hover:shine">
                <p className="card-subtitle">New Collection</p>

                <h2 className="h2 card-title">
                  Discover Our Durga Puja Collections
                </h2>

                <a href="#" className="btn btn-secondary">Explore More</a>

                <div
                  className="has-bg-image"
                  style={{ backgroundImage: `url(${BannerImage1})` }}
                ></div>
              </div>
            </li>

            <li>
              <div className="banner-card banner-card-2 has-before hover:shine">
                <h2 className="h2 card-title">25% off Everything</h2>

                <p className="card-text">
                  Makeup with extended range in colors for every human.
                </p>

                <a href="#" className="btn btn-secondary">Shop Sale</a>

                <div
                  className="has-bg-image"
                  style={{ backgroundImage: `url(${BannerImage2})` }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Banner;
