import React from 'react';
import Image1 from "../assets/images/Our images/bhaiya ji-1 trad.avif";
import Image2 from "../assets/images/Our images/bhaiya ji 2-cool.avif";
import Image3 from "../assets/images/Our images/traditional-1.avif";
// import "../assets/CSS/Collection.css";

const collections = [
  {
    title: "Festive Ethnic Wear",
    text: "Starting at ₹799",
    image: Image1,
    alt: "Festive Ethnic Wear Collection",
    linkText: "Explore Now",
    link: "#",
  },
  {
    title: "Casual Indian Styles",
    text: "Kurta Sets from ₹599",
    image: Image2,
    alt: "Casual Indian Styles Collection",
    linkText: "Shop the Trend",
    link: "#",
  },
  {
    title: "Bridal Lehengas",
    text: "Special Offers from ₹1999",
    image: Image3,
    alt: "Bridal Lehengas Collection",
    linkText: "View Collection",
    link: "#",
  },
  {
    title: "Bridal Lehengas",
    text: "Special Offers from ₹1999",
    image: Image3,
    alt: "Bridal Lehengas Collection",
    linkText: "View Collection",
    link: "#",
  },
  {
    title: "Bridal Lehengas",
    text: "Special Offers from ₹1999",
    image: Image3,
    alt: "Bridal Lehengas Collection",
    linkText: "View Collection",
    link: "#",
  },
  {
    title: "Bridal Lehengas",
    text: "Special Offers from ₹1999",
    image: Image3,
    alt: "Bridal Lehengas Collection",
    linkText: "View Collection",
    link: "#",
  },
  {
    title: "Bridal Lehengas",
    text: "Special Offers from ₹1999",
    image: Image3,
    alt: "Bridal Lehengas Collection",
    linkText: "View Collection",
    link: "#",
  },
  {
    title: "Bridal Lehengas",
    text: "Special Offers from ₹1999",
    image: Image3,
    alt: "Bridal Lehengas Collection",
    linkText: "View Collection",
    link: "#",
  },
  {
    title: "Bridal Lehengas",
    text: "Special Offers from ₹1999",
    image: Image3,
    alt: "Bridal Lehengas Collection",
    linkText: "View Collection",
    link: "#",
  },
  // Add more collections here if needed
];

const Collection = () => {
  return (
    <section className="section collection" id="collection">
      <div className="container">
        <ul className="collection-list">
          {collections.map((collection, index) => (
            <li key={index}>
              <div className="collection-card has-before hover:shine">
                <div className="sasta-parent">
                  <h2 className="h2 card-title">{collection.title}</h2>
                  <p className="card-text">{collection.text}</p>
                  <a href={collection.link} className="btn-link">
                    <span className="span">{collection.linkText}</span>
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
                </div>
                <div
                  className="has-bg-image"
                  style={{ backgroundImage: `url(${collection.image})` }}
                  aria-label={collection.alt} // Added alt text for better accessibility
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Collection;
