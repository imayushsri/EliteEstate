import React, { useEffect, useState } from 'react';
import { FaImage, FaKey, FaPhone, FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Select from 'react-select';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLocationDot } from 'react-icons/fa6';

const Signup = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 200,
      delay: 0,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' }
  ];

  const statesByCountry = {
    India: [
      { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
      { value: 'Maharashtra', label: 'Maharashtra' },
      { value: 'Karnataka', label: 'Karnataka' },
      { value: 'Delhi', label: 'Delhi' }
    ],
    'United States': [
      { value: 'California', label: 'California' },
      { value: 'Texas', label: 'Texas' },
      { value: 'Florida', label: 'Florida' }
    ],
    Canada: [
      { value: 'Ontario', label: 'Ontario' },
      { value: 'British Columbia', label: 'British Columbia' },
      { value: 'Quebec', label: 'Quebec' }
    ],
    Australia: [
      { value: 'New South Wales', label: 'New South Wales' },
      { value: 'Victoria', label: 'Victoria' },
      { value: 'Queensland', label: 'Queensland' }
    ]
  };

  const citiesByState = {
    'Uttar Pradesh': [
      { value: 'Lucknow', label: 'Lucknow' },
      { value: 'Kanpur', label: 'Kanpur' },
      { value: 'Varanasi', label: 'Varanasi' }
    ],
    'Maharashtra': [
      { value: 'Mumbai', label: 'Mumbai' },
      { value: 'Pune', label: 'Pune' },
      { value: 'Nagpur', label: 'Nagpur' }
    ],
    'Karnataka': [
      { value: 'Bangalore', label: 'Bangalore' },
      { value: 'Mysore', label: 'Mysore' }
    ],
    'Delhi': [
      { value: 'New Delhi', label: 'New Delhi' },
      { value: 'Dwarka', label: 'Dwarka' }
    ],
    'California': [
      { value: 'Los Angeles', label: 'Los Angeles' },
      { value: 'San Francisco', label: 'San Francisco' }
    ],
    'Texas': [
      { value: 'Houston', label: 'Houston' },
      { value: 'Dallas', label: 'Dallas' }
    ],
    'Florida': [
      { value: 'Miami', label: 'Miami' },
      { value: 'Orlando', label: 'Orlando' }
    ],
    'Ontario': [
      { value: 'Toronto', label: 'Toronto' },
      { value: 'Ottawa', label: 'Ottawa' }
    ],
    'British Columbia': [
      { value: 'Vancouver', label: 'Vancouver' },
      { value: 'Victoria', label: 'Victoria' }
    ],
    'Quebec': [
      { value: 'Montreal', label: 'Montreal' },
      { value: 'Quebec City', label: 'Quebec City' }
    ],
    'New South Wales': [
      { value: 'Sydney', label: 'Sydney' },
      { value: 'Newcastle', label: 'Newcastle' }
    ],
    'Victoria': [
      { value: 'Melbourne', label: 'Melbourne' },
      { value: 'Geelong', label: 'Geelong' }
    ],
    'Queensland': [
      { value: 'Brisbane', label: 'Brisbane' },
      { value: 'Gold Coast', label: 'Gold Coast' }
    ]
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setStateOptions(statesByCountry[selectedOption.value] || []);
    setSelectedState(null);
    setCityOptions([]);
    setSelectedCity(null);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setCityOptions(citiesByState[selectedOption.value] || []);
    setSelectedCity(null);
  };

  return (
    <div className='container py-5 mt-5'>
      <h2 className='text-center fw-bold mb-3 text-color' data-aos='fade-down'>
        Register <span>Here</span>
      </h2>
      <div className='row justify-content-center'>
        <div className='col-lg-8' data-aos='fade-right'>
          <form className='bg-white shadow form custom-card rounded p-4 p-md-5'>
            <div className='row g-3'>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>Your Name</label>
                <div className='input-group'>
                  <span className='input-group-text bg-white'><FaUser /></span>
                  <input type='text' className='form-control' placeholder='Enter your name' required />
                </div>
              </div>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>Your Email</label>
                <div className='input-group'>
                  <span className='input-group-text bg-white'><IoMdMail /></span>
                  <input type='email' className='form-control' placeholder='Enter your email' required />
                </div>
              </div>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>Phone Number</label>
                <div className='input-group'>
                  <span className='input-group-text bg-white'><FaPhone /></span>
                  <input type='tel' className='form-control' placeholder='Enter phone number' required />
                </div>
              </div>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>Password</label>
                <div className='input-group'>
                  <span className='input-group-text bg-white'><FaKey /></span>
                  <input type='password' className='form-control' placeholder='Password' />
                </div>
              </div>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>Country</label>
                <div className='input-group form-input'>
                  <div className='w-100'>
                    <Select
                      options={countryOptions}
                      placeholder='Select your country'
                      onChange={handleCountryChange}
                      value={selectedCountry}
                      className='w-100'
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          borderColor: state.isFocused ? '#fb246a' : base.borderColor,
                          boxShadow: state.isFocused ? '0 0 0 1px #fb246c4a' : base.boxShadow
                        }),
                      }}
                    />

                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>State</label>
                <div className='input-group'>
                  <div className='w-100'>
                    <Select
                      options={stateOptions}
                      placeholder='Select your state'
                      onChange={handleStateChange}
                      value={selectedState}
                      isDisabled={!selectedCountry}
                      className='w-100'
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          borderColor: state.isFocused ? '#fb246a' : base.borderColor,
                          boxShadow: state.isFocused ? '0 0 0 1px #fb246c4a' : base.boxShadow
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>City</label>
                <div className='input-group'>
                  <div className='w-100'>
                    <Select
                      options={cityOptions}
                      placeholder='Select your city'
                      onChange={(selected) => setSelectedCity(selected)}
                      value={selectedCity}
                      isDisabled={!selectedState}
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          borderColor: state.isFocused ? '#fb246a' : base.borderColor,
                          boxShadow: state.isFocused ? '0 0 0 1px #fb246c4a' : base.boxShadow
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <label className='form-label fw-semibold'>Profile Picture</label>
                <div className='input-group'>
                  <span className='input-group-text bg-white'><FaImage /></span>
                  <input type='file' accept='image/*' className='form-control' placeholder='Password' />
                </div>
              </div>

              <div className='col-12 text-center mt-4'>
                <button type='submit' className='btn custom-btn px-5 py-2 shadow-sm'>
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
