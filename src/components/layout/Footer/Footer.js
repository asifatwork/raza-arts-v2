import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-minimal-content'>
                
                {/* 1. Top: Links & Contact (Row) */}
                <div className="footer-top-row">
                    <div className="footer-nav">
                        <span className="footer-label">Menu</span>
                        <ul className='footer-links'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Gallery</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <span className="footer-label">Connect</span>
                        <div className="social-links">
                            <a href="/">Instagram</a>
                            <a href="/">YouTube</a>
                            <a href="/">WhatsApp</a>
                        </div>
                    </div>
                </div>

                {/* 2. Bottom: Massive Brand Anchor */}
                <div className="footer-brand-anchor">
                    <h1>RAZA ARTS</h1>
                </div>

                {/* 3. Sub-footer */}
                <div className="footer-bottom-bar">
                    <span className="copyright">© 2024 Raza Arts. All rights reserved.</span>
                    <span className="credit">Designed for Artists.</span>
                </div>

            </div>
        </div>
    )
}
