import React from 'react';
// import offerBanner1 from '../../assets/images/fest/jacket.jpg';
// import offerBanner2 from '../../assets/images/fest/stylish.jpg';

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

                {/* <h2 style={{fontSize:"20px", backgroundColor:"lightyellow", borderRadius:"10px", padding:"15px", cursor:"pointer", boxShadow:"10px 0 0 0 rgba(0, 0, 0, 0.3);"}} className="h2 card-title">
                  Discover Our Durga Puja Collections
                </h2> */}

                <a style={{position:"absolute", bottom:"10px", left:"30px"}} href="#" className="btn btn-secondary">Explore More</a>

                <div
                  className="has-bg-image"
                  style={{ backgroundImage: `url(${BannerImage1})` }}
                ></div>
              </div>
            </li>

            <li>
              <div className="banner-card banner-card-2 has-before hover:shine">
                {/* <h2 className="h2 card-title">25% off Everything</h2>

                <p className="card-text">
                  Enjoy the blessings of Maa Durga ...
                </p> */}

                <a href="#" style={{borderRadius:"15px",textAlign:"center"}} className="btn btn-secondary">25% off Everything</a>

                <div
                  className="has-bg-image"
                  style={{filter:"brightness(100%)", backgroundImage: `url(${BannerImage2})` }}
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
