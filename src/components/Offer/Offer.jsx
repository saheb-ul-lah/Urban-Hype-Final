import React, { useEffect, useState } from 'react';
import offerBanner1 from '../../assets/images/fest/jacket.jpg';
import offerBanner2 from '../../assets/images/fest/stylish.jpg';
import gsap from 'gsap';
import "./Offer.css"
const Offer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 21,
    minutes: 46,
    seconds: 8,
  });

  useEffect(() => {
    const endTime = new Date().getTime() + 15 * 24 * 60 * 60 * 1000; // 15 days from now

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.offer-banner img',
      { scale: 1, opacity: 1 },
      {
        scale: 1.05,
        opacity: 0.9,
        duration: 1.5,
        ease: 'power1.inOut',
        // stagger: 0.1,
        repeat: -1,
        yoyo: true
      }
    );

    gsap.from('.offer-content', {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: 'power1.out',
      delay: 0.5,
    });

    gsap.from('.countdown .time', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power1.out',
      stagger: 0.2,
      delay: 1,
    });

    gsap.from('.btn-primary', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power1.out',
      delay: 1.5,
    });
  }, []);

  return (
    <>
      {/* <!-- #OFFER --> */}
      <section className="section offer" id="offer">
        <div className="container">
          <figure className="offer-banner">
            <img
              src={offerBanner1}
              width="305"
              height="408"
              loading="lazy"
              alt="Offer product - Stylish Dress"
              className="w-100"
            />
            <img
              src={offerBanner2}
              width="450"
              height="625"
              loading="lazy"
              alt="Offer product - Trendy Jacket"
              className="w-100"
            />
          </figure>

          <div className="offer-content">
            <p className="offer-subtitle">
              <span className="span">Exclusive Offer</span>
              <span className="badge" aria-label="20% off">-20%</span>
            </p>

            <h2 className="h2-large section-title">Stylish Dress & Trendy Jacket</h2>

            <p className="section-text">
              Elevate your wardrobe with our latest fashion collection. Enjoy high-quality, trendsetting styles designed to turn heads.
            </p>

            <div className="countdown">
              <span className="time" aria-label="Days remaining">{timeLeft.days}</span>
              <span className="time" aria-label="Hours remaining">{timeLeft.hours}</span>
              <span className="time" aria-label="Minutes remaining">{timeLeft.minutes}</span>
              <span className="time" aria-label="Seconds remaining">{timeLeft.seconds}</span>
            </div>
            <a href="#" className="btn btn-primary">Shop Now</a>

          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
