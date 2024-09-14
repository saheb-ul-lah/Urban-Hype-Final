import React from 'react';
import Image1 from "../../assets/images/Our images/bhaiya ji-1 trad.avif"; // Update paths if necessary
import Image2 from "../../assets/images/Our images/bhaiya ji 2-cool.avif";
import Image3 from "../../assets/images/Our images/traditional-1.avif";

const Collection = () => {
  return (
    <>
      {/* 
        - #COLLECTION 
      */}
      <section
        className="section collection"
        id="collection"
        // aria-label="collection"
        // data-section
      >
        <div className="container">
          <ul className="collection-list">
            <li>
              <div className="collection-card has-before hover:shine">
                <div className="sasta-parent">
                  <h2 className="h2 card-title">Summer Collection</h2>

                  <p className="card-text">Starting at $17.99</p>
                  <a href="#" className="btn-link">
                    <span className="span">Shop Now</span>

                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>

                <div
                  className="has-bg-image"
                  style={{ backgroundImage: `url(${Image1})` }}
                ></div>
              </div>
            </li>

            <li>
              <div className="collection-card has-before hover:shine">
                <div className="sasta-parent">
                  <h2 className="h2 card-title">What’s New?</h2>

                  <p className="card-text">Get the glow</p>

                  <a href="#" className="btn-link">
                    <span className="span">Discover Now</span>

                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>

                <div
                  className="has-bg-image"
                  style={{ backgroundImage: `url(${Image2})` }}
                ></div>
              </div>
            </li>

            <li>
              <div className="collection-card has-before hover:shine">
                <div className="sasta-parent">
                  <h2 className="h2 card-title">Buy 1 Get 1</h2>

                  <p className="card-text">Starting at $7.99</p>

                  <a href="#" className="btn-link">
                    <span className="span">Discover Now</span>

                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>

                <div
                  className="has-bg-image"
                  style={{ backgroundImage: `url(${Image3})` }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Collection;
