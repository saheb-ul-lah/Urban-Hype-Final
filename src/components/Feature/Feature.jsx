import React from 'react';
import Feature1 from "../../assets/images/feature-1.jpg";
import Feature2 from "../../assets/images/feature-2.jpg";
import Feature3 from "../../assets/images/feature-3.jpg";
import "./Feature.css"
const features = [
  {
    imgSrc: Feature1,
    alt: "High-Quality Fabrics",
    title: "High-Quality Fabrics",
    description: "Our clothing is made from the finest materials, ensuring both comfort and durability."
  },
  {
    imgSrc: Feature2,
    alt: "Eco-Friendly Practices",
    title: "Eco-Friendly Practices",
    description: "We are committed to sustainability, using eco-friendly methods and materials."
  },
  {
    imgSrc: Feature3,
    alt: "Fashion-Forward Designs",
    title: "Fashion-Forward Designs",
    description: "Stay ahead of the trends with our exclusive, fashion-forward collections."
  }
];

const Feature = () => {
  return (
    <section className="section feature">
      <div className="container">
        <h2 className="h2-large section-title">Why Shop with UrbanHype?</h2>

        <ul className="flex-list">
          {features.map((feature, index) => (
            <li key={index} className="flex-item">
              <div className="feature-card glassmorphism">
                <img
                  src={feature.imgSrc}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt={feature.alt}
                  className="card-icon"
                />
                <h3 className="h3 card-title">{feature.title}</h3>
                <p className="card-text">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Feature;
