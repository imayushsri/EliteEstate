import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const OurValues = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Left Side - Image */}
                <div className="col-md-6 mt-3 mb-4 mb-md-0">
                    <img
                        src="images/hero-image.png"
                        alt="Our Values"
                        className="img-fluid rounded shadow"
                    />
                </div>

                {/* Right Side - Accordion with single open item */}
                <div className="col-md-6 ps-3">
                    <h2 className="mb-4 mt-3 text-color fw-bold">Our Core Values</h2>
                    <p>We always ready to help by providing the best services for you.
                        We beleive a good place to live can make your life better.</p>
                    <div style={{ height: '300px', overflowY: 'auto' }}>
                        <Accordion defaultActiveKey="0" className='text-color'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Integrity</Accordion.Header>
                                <Accordion.Body>
                                    We believe in being honest, transparent, and ethical in all our actions and decisions.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Innovation</Accordion.Header>
                                <Accordion.Body>
                                    Embracing change and driving innovation to stay ahead in a competitive world.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Customer Focus</Accordion.Header>
                                <Accordion.Body>
                                    Our customers are at the center of everything we do — their success is our success.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValues;