import React, { useEffect } from 'react';
import { FaKey } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Signin = () => {
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
        Sign <span>In</span>
      </h2>
      <div className='row justify-content-center'>
        <div className='col-lg-6' data-aos="fade-right">
          <form className='bg-white shadow form rounded p-4 p-md-5'>
            <div className='row g-3'>

              <div className='col-12'>
                <label className='form-label fw-semibold'>Your Email</label>
                <div className='input-group'>
                  <span className='input-group-text bg-white'>
                    <IoMdMail />
                  </span>
                  <input type='email' className='form-control' placeholder='Enter your email' required />
                </div>
              </div>

              <div className='col-12'>
                <label className='form-label fw-semibold'>Password</label>
                <div className='input-group'>
                  <span className='input-group-text bg-white'>
                    <FaKey />
                  </span>
                  <input type='password' className='form-control' placeholder='Password' required />
                </div>
              </div>

              <div className='col-12 text-center mt-4'>
                <button type='submit' className='btn custom-btn px-5 py-2 shadow-sm'>
                  Sign In
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
