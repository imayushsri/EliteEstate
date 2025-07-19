// Testimonial.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Ravi Sharma',
    title: 'Home Buyer',
    quote: 'Elite Estate helped me find my dream home in just a few days. The process was smooth and transparent.',
    image: 'images/testimonial1.jpg',
  },
  {
    name: 'Anita Verma',
    title: 'Property Seller',
    quote: 'Great experience with the Elite Estate team. They marketed my property professionally and it sold fast.',
    image: 'images/testimonial2.jpg',
  },
  {
    name: 'Rahul Mehta',
    title: 'Investor',
    quote: 'Professional service and excellent support. I highly recommend Elite Estate for real estate investments.',
    image: 'images/testimonial3.jpg',
  },
  {
    name: 'Sneha Patel',
    title: 'Home Buyer',
    quote: 'Elite Estate made the buying process easy and stress-free. They provided excellent customer service.',
    image: 'images/testimonial4.jpg',
  },
  {
    name: 'Amit Kumar',
    title: 'Property Seller',
    quote: 'Elite Estate helped me sell my property quickly and efficiently. They provided great marketing support.',
    image: 'images/testimonial5.jpg',
  },
  {
    name: 'Shruti Sharma',
    title: 'Home Buyer',
    quote: 'Elite Estate made the buying process easy and stress-free. They provided excellent customer service.',
    image: 'images/testimonial6.jpg',
  },
  {
    name: 'Rajesh Kumar',
    title: 'Property Seller',
    quote: 'Elite Estate helped me sell my property quickly and efficiently. They provided great marketing support.',
    image: 'images/testimonial7.jpg',
  },
];

export default function Testimonial() {
  return (
      <div className='container py-4'>
        <h2 className='text-center fw-bold mb-4 text-color'>What Our Clients Say</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{paddingBottom: '3rem'}}
          
          
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='card h-100 custom-card shadow border-0 p-4 text-center'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='rounded-circle mx-auto mb-3'
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <h5 className='fw-semibold mb-1'>{testimonial.name}</h5>
                <p className='text-muted mb-2'>{testimonial.title}</p>
                <p className='small fst-italic text-dark'>“{testimonial.quote}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
}