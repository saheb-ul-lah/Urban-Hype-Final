import React from 'react';
import blog1 from '../../assets/images/Our images/new1.jpeg';
import blog2 from '../../assets/images/Our images/new2.jpeg';
import blog3 from '../../assets/images/Our images/new3.jpeg';
import { IoArrowForwardOutline } from 'react-icons/io5';

const Blog = () => {
  return (
    <>
      {/* #BLOG */}
      <section className="section blog" id="blog">
        <div className="container">
          <h2 className="h2-large section-title">Explore Our Latest Fashion Insights</h2>

          <ul className="flex-list">
            <li className="flex-item">
              <div className="blog-card">
                <figure
                  className="card-banner img-holder has-before hover:shine"
                  style={{ '--width': '700px', '--height': '450px' }}
                >
                  <img
                    src={blog1}
                    width="700"
                    height="450"
                    loading="lazy"
                    alt="Fashion Trends"
                    className="img-cover"
                  />
                </figure>

                <h3 className="h3">
                  <a href="#" className="card-title">Top Fashion Trends of 2024</a>
                </h3>

                <a href="#" className="btn-link">
                  <span className="span">Read More</span>
                  <IoArrowForwardOutline aria-hidden="true" />
                </a>
              </div>
            </li>

            <li className="flex-item">
              <div className="blog-card">
                <figure
                  className="card-banner img-holder has-before hover:shine"
                  style={{ '--width': '700px', '--height': '450px' }}
                >
                  <img
                    src={blog2}
                    width="700"
                    height="450"
                    loading="lazy"
                    alt="Sustainable Fashion"
                    className="img-cover"
                  />
                </figure>

                <h3 className="h3">
                  <a href="#" className="card-title">Sustainable Fashion: A Guide to Eco-Friendly Choices</a>
                </h3>

                <a href="#" className="btn-link">
                  <span className="span">Discover More</span>
                  <IoArrowForwardOutline aria-hidden="true" />
                </a>
              </div>
            </li>

            <li className="flex-item">
              <div className="blog-card">
                <figure
                  className="card-banner img-holder has-before hover:shine"
                  style={{ '--width': '700px', '--height': '450px' }}
                >
                  <img
                    src={blog3}
                    width="700"
                    height="450"
                    loading="lazy"
                    alt="Fashion Tips"
                    className="img-cover"
                  />
                </figure>

                <h3 className="h3">
                  <a href="#" className="card-title">Style Tips for Every Season</a>
                </h3>

                <a href="#" className="btn-link">
                  <span className="span">Explore Tips</span>
                  <IoArrowForwardOutline aria-hidden="true" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Blog;