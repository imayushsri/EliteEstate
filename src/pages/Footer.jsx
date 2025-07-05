import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="text-dark mt-5 pt-4 pb-3 border-top bg-light">
            <div className="container">
                <div className="row text-center text-md-start">
                    {/* Brand */}
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold text-dark"><span className="text-color">Elite</span>Estate</h5>
                        <p className="small text-muted ">
                            Helping you find the perfect property
                            <br />for rent or for sale — with ease and trust.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-md-4 mb-3 text-center">
                        <h6 className="fw-semibold ">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-decoration-none text-dark nav-text ">Home</Link></li>
                            <li><Link to="/about" className="text-decoration-none text-dark nav-text ">About</Link></li>
                            <li><Link to="/search" className="text-decoration-none text-dark nav-text ">Search</Link></li>
                            <li><Link to="/signin" className="text-decoration-none text-dark nav-text ">Sign In</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 mb-3">
                        <h6 className="fw-semibold ">Contact</h6>
                        <p className="small mb-1 ">📍 123 Elite Street, New Delhi, India</p>
                        <p className="small mb-1">
                            📞 <a href="tel:+919876543210" className="text-decoration-none text-dark">+91 9876543210</a>
                        </p>
                        <p className="small ">
                            📧 <a href="mailto:contact@eliteestate.com" className="text-decoration-none text-dark">contact@eliteestate.com</a>
                        </p>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="text-center pt-3 border-top mt-3">
                    <small className="text-muted ">&copy; {new Date().getFullYear()} EliteEstate. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}
