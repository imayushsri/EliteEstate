import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 200,
      delay: 0,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className='container py-5 mt-5'>
      <h2 className='text-center fw-bold mb-3 text-color' data-aos="fade-down">
        Contact <span>Us!</span>
      </h2>

      <div className='row justify-content-center'>
        <div className='col-lg-8' data-aos="fade-right">
          <form className='bg-white shadow form rounded p-4 p-md-5'>
            <div className='row g-3'>
              <div className='col-md-6'>
                <label className='form-label fw-semibold'>Your Name</label>
                <input type='text' className='form-control' placeholder='Enter your name' required />
              </div>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>Your Email</label>
                <input type='email' className='form-control' placeholder='Enter your email' required />
              </div>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>Phone Number</label>
                <input type='tel' className='form-control' placeholder='Enter phone number' required />
              </div>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>Subject</label>
                <input type='text' className='form-control' placeholder='Subject' />
              </div>

              <div className='col-12'>
                <label className='form-label fw-semibold'>Message</label>
                <textarea className='form-control' rows='5' placeholder='Your message' required></textarea>
              </div>

              <div className='col-12 text-center mt-4'>
                <button type='submit' className='btn custom-btn px-5 py-2 shadow-sm'>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
