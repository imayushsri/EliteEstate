import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurValues from '../components/OurValues';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='mt-5 pt-2'>
      <div className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 display-6 text-color" data-aos="fade-up">
            About Elite<span className='text-dark'>Estate</span>
          </h2>
          <p className="text-center mb-5 text-muted" data-aos="fade-up">
            Your trusted partner in finding the perfect property – for rent or sale.
          </p>

          <div className="row align-items-center mb-5">
            <div className="col-md-6 mt-3" data-aos="fade-right">
              <img
                src="/images/AboutHero.jpeg"
                alt="Our Mission"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 mt-3 px-4" data-aos="fade-left">
              <h3 className="fw-bold text-color">Our Mission</h3>
              <p>
                At <strong>EliteEstate</strong>, our mission is to simplify your real estate journey. We bring together a curated selection of top listings, cutting-edge technology, and a commitment to trust, transparency, and customer service.
              </p>
              <p>
                Whether you're a buyer, seller, or renter, we aim to deliver a seamless, secure, and satisfying experience.
              </p>
            </div>
          </div>

          <div className="row text-center mb-5">
            <div className="col-md-4 mb-4" data-aos="zoom-in">
              <div className="card p-3 shadow-sm border-0 h-100">
                <img src="/images/AboutCard1.jpeg" className="card-img-top" alt="Verified Listings" />
                <div className="card-body">
                  <h5 className="card-title text-color fw-bold">Verified Listings</h5>
                  <p className="card-text">All properties are verified for authenticity and updated regularly.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="card p-3 shadow-sm border-0 h-100">
                <img src="/images/AboutCard2.jpeg" className="card-img-top" alt="Trusted Agents" />
                <div className="card-body">
                  <h5 className="card-title text-color fw-bold">Trusted Agents</h5>
                  <p className="card-text">Work with our experienced and trusted agents to find the best deal.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="card p-3 shadow-sm border-0 h-100">
                <img src="/images/AboutCard3.jpeg" className="card-img-top" alt="24/7 Support" />
                <div className="card-body">
                  <h5 className="card-title text-color fw-bold">24/7 Support</h5>
                  <p className="card-text">We’re here to help you anytime, every day of the week.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8 text-center" data-aos="fade-up">
              <h3 className="text-color fw-bold">Why Choose Us?</h3>
              <p className='px-2'>
                EliteEstate stands out because of our deep market knowledge, digital-first approach, and customer-centric mindset. We are more than a platform – we're a property partner you can rely on.
              </p>
              <a href="/contact" className="btn custom-btn btn-lg mt-2">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
<div data-aos="fade-right">
      <OurValues />

</div>
    </div>
  );
};

export default About;