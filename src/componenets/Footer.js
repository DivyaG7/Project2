import React from 'react';
import Logo from '../assets/golden royces design logo.png';
import { FaFacebook, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <img src={Logo} alt="img" />
                <div className="head">
                    <p id="gold">GOLDEN ROYCE DESIGN</p>
                    <p id="business">BUSINESS MADE SMART</p>
                    <div className="footer-icon">
                        <FaFacebook id="FaFacebook" />
                        <FaLinkedin id="FaLinkedin" />
                        <FaInstagramSquare id="FaInstagramSquare" />
                    </div>
                </div>
            </div>
            <div className="right">
                <div class="container-right">
                    <div class="row">
                        <div class="column">
                            <h3>What We Do</h3>
                            <p>Cyber Security</p>
                            <p>Buzz - Y - Bee</p>
                            <p>IT Services and Solutions</p>
                        </div>
                        <div class="column">
                            <h3>Company</h3>
                            <p>About Us</p>
                            <p>Verticals</p>
                            <p>Projects</p>
                            <p>Blogs</p>
                            <p>Gallery</p>
                        </div>
                        <div class="column">
                            <h3>Support</h3>
                            <p>FAQ</p>
                            <p>Policy</p>
                            <p>Business</p>
                        </div>
                        <div class="column">
                            <h3>Contact</h3>
                            <p>WhatsApp</p>
                            <p>Support 24</p>
                        </div>
                    </div>
                    <div class="line"></div>
                </div>
            </div>

        </div>
    )
}

export default Footer