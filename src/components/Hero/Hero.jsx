import React, { useEffect } from 'react';

import Banner1 from "../../assets/images/Banner-images/1-min.png";
import Banner2 from "../../assets/images/Banner-images/2-min.png";
import Banner3 from "../../assets/images/Banner-images/3-min.png";
import Banner4 from "../../assets/images/Banner-images/4-min.png";
import Banner5 from "../../assets/images/Banner-images/5-min.png";
import Banner6 from "../../assets/images/Banner-images/6-min.png";
import Banner7 from "../../assets/images/Banner-images/7-min.png";

const Hero = () => {
  useEffect(() => {
    const slider = document.querySelector('.has-scrollbar'); // The slider container
    const slides = document.querySelectorAll('.scrollbar-item'); // All slides
    const slideCount = slides.length; // Total number of slides
    const slideWidth = slider.clientWidth; // Width of each slide
    let currentIndex = 0; // Current slide index
    const slideInterval = 2000; // Slide interval in milliseconds (2 seconds)
  
    // Clone the first slide and append it to the end of the slider
    const firstSlideClone = slides[0].cloneNode(true);
    slider.appendChild(firstSlideClone);
  
    // Function to go to the next slide
    function goToNextSlide() {
      currentIndex++; // Increment the index
  
      // Smoothly scroll to the new position
      slider.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth'
      });
  
      // If we've reached the cloned slide, reset to the start instantly
      if (currentIndex === slideCount) {
        setTimeout(() => {
          slider.scrollTo({
            left: 0,
            behavior: 'auto' // Instantly move back to the first slide
          });
          currentIndex = 0; // Reset index to the original first slide
        }, 500); // Wait for the smooth scroll to finish
      }
    }
  
    // Automatically slide every 2 seconds
    const intervalId = setInterval(goToNextSlide, slideInterval);
  
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section className="section hero" id="home">
      <div className="container">
        <ul className="has-scrollbar">
          {[Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7].map((banner, index) => (
            <li key={index} className="scrollbar-item">
              <div className="hero-card has-bg-image" style={{ backgroundImage: `url(${banner})` }}>
                <div className="card-content">
                  {/* Add your content here */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
