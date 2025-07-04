import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ListingItem from '../components/ListingItem';
import Typewriter from 'typewriter-effect';
import OurValues from '../components/OurValues';

// ✅ Static sample data
const offerListings = [
    {
        _id: '1',
        name: 'Modern Apartment',
        imageUrls: ['https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'],
        price: 1200,
        location: 'New Delhi',
        type: 'rent',
    },
    {
        _id: '2',
        name: 'Luxury Villa',
        imageUrls: ['https://images.pexels.com/photos/8082219/pexels-photo-8082219.jpeg'],
        price: 250000,
        location: 'Mumbai',
        type: 'sale',
    },
];

const rentListings = [
    {
        _id: '3',
        name: 'Cozy Studio',
        imageUrls: ['https://images.pexels.com/photos/3288104/pexels-photo-3288104.png'],
        price: 800,
        location: 'Bangalore',
        type: 'rent',
    },
    {
        _id: '7',
        name: 'Cozy Studio',
        imageUrls: ['https://images.pexels.com/photos/3288104/pexels-photo-3288104.png'],
        price: 800,
        location: 'Bangalore',
        type: 'rent',
    },
    {
        _id: '8',
        name: 'Cozy Studio',
        imageUrls: ['https://images.pexels.com/photos/3288104/pexels-photo-3288104.png'],
        price: 800,
        location: 'Bangalore',
        type: 'rent',
    },
];

const saleListings = [
    {
        _id: '4',
        name: 'Family House',
        imageUrls: ['https://images.pexels.com/photos/3288100/pexels-photo-3288100.png'],
        price: 180000,
        location: 'Pune',
        type: 'sale',
    },
    {
        _id: '5',
        name: 'Family House',
        imageUrls: ['https://images.pexels.com/photos/3288100/pexels-photo-3288100.png'],
        price: 180000,
        location: 'Pune',
        type: 'sale',
    },
    {
        _id: '6',
        name: 'Family House',
        imageUrls: ['https://images.pexels.com/photos/3288100/pexels-photo-3288100.png'],
        price: 180000,
        location: 'Pune',
        type: 'sale',
    },
];

export default function Home() {
    return (
        <div className="container-fluid px-4 mt-5">
            {/* Top Section */}
            <div className="text-center py-5">
                <h1 className="fw-bold display-4 text-color mt-4">
                    Find your next <span className="text-secondary">perfect</span> <br /> place with ease
                </h1>
                <p className="text-muted mt-3">
                    Elite Estate is the best place to find your next perfect place to live.
                    <br />
                    We have a wide range of properties for you to choose from.
                </p>
                <Link to="/search" className="custom-btn btn btn-sm mt-2">
                    Let's get started...
                </Link>
            </div>

            {/* Type-Writer */}
            <div className="mx-auto text-center mb-5 mt-2" style={{ height: '110px' }}>
                <h4 className="fw-bold display-6 text-secondary">
                    Helping you find the perfect property
                    <Typewriter
                        options={{
                            strings: [' for Rent with ease and trust.', ' for Sale with ease and trust.'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h4>
            </div>


            {/* Swiper Section */}
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{ clickable: true }}
            >
                {offerListings.map((listing) => (
                    <SwiperSlide key={listing._id}>
                        <div
                            className="w-100"
                            style={{
                                height: '500px',
                                background: `url(${listing.imageUrls[0]}) center center / cover no-repeat`,
                            }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <OurValues/>

            {/* Listings Section */}
            <div className="my-5 container">
                {/* Offers */}
                <div className="mb-4">
                    <h2 className="h4 text-dark mt-5">Recent Offers</h2>
                    <Link to="/recentoffers" className="text-primary small d-block mb-2">
                        Show more offers
                    </Link>
                    <div className="row g-4">
                        {offerListings.map((listing) => (
                            <div className="col-md-4 col-lg-4" key={listing._id}>
                                <ListingItem listing={listing} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rent */}
                <div className="my-4">
                    <h2 className="h4 mt-5 text-dark">Recent Places for Rent</h2>
                    <Link to="/rent" className="text-primary small d-block mb-2">
                        Show more places for rent
                    </Link>
                    <div className="row g-4">
                        {rentListings.map((listing) => (
                            <div className="col-md-4 col-lg-4" key={listing._id}>
                                <ListingItem listing={listing} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sale */}
                <div className="mb-4">
                    <h2 className="h4 mt-5 text-dark">Recent Places for Sale</h2>
                    <Link to="/sale" className="text-primary small d-block mb-2">
                        Show more places for sale
                    </Link>
                    <div className="row g-4">
                        {saleListings.map((listing) => (
                            <div className="col-md-4 col-lg-4" key={listing._id}>
                                <ListingItem listing={listing} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
