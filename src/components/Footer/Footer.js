import React from 'react';
import "./Footer.scss";

// Functional component for the footer section of the webpage
const Footer = () => {
  return (
    // HTML for the footer section
    <footer className = "footer py-5 bg-dark">
        <div className = "container">
            <div className = "footer-content text-white grid">

                {/* Links section */}
                <div className = "footer-item text-center">
                    <h6 className = "fs-17 fw-6">Links</h6>
                    <ul>
                        <li><a href = "/aboutus" className = "fs-15">About Us</a></li>
                        <li><a href = "/contact" className = "fs-15">Contact Us</a></li>
                        <li><a href = "/blog" className = "fs-15">Blog</a></li>
                        <li><a href = "faq" className = "fs-15">FAQ's</a></li>
                    </ul>
                </div>

                {/* Policies section */}
                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Policies</h6>
                    <ul>
                        <li><a href = "/terms" className = "fs-15">Terms & Conditions</a></li>
                        <li><a href = "/cookies" className = "fs-15">Cookies Policy</a></li>
                        <li><a href = "/policy" className = "fs-15">Data Policy</a></li>
                    </ul>
                </div>

                {/* Company information section */}
                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>About goCart</h6>
                    <ul>
                        <li><a href = "/terms" className = "fs-15">Company Info</a></li>
                        <li><a href = "/cookies" className = "fs-15">Branches</a></li>
                        <li><a href = "/policy" className = "fs-15">Store</a></li>
                    </ul>
                </div>

                {/* Contact section */}
                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Contact</h6>
                    <ul>
                        <li>
                            <span><i className = "fas fa-phone"></i></span>
                            <span className = "fs-15">+91 82 7873 56 27</span>
                        </li>
                        <li>
                            <span><i className = "fas fa-envelope"></i></span>
                            <span className = "fs-15">sushantbharwal@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

// Export the Footer component for use in other files
export default Footer
