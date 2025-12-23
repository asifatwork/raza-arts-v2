import React from 'react';
import './WhatsApp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShieldAlt, faCheckCircle, faUserShield } from '@fortawesome/free-solid-svg-icons';

export default function WhatsApp() {
    return (
        <div className="whatsapp-container">
            <div className="whatsapp-content">
                <div className="whatsapp-text-section">
                    <h2 className="whatsapp-title">Direct & Secure Communication</h2>
                    <p className="whatsapp-subtitle">
                        Experience a personal connection with the artist. We believe in transparency and trust.
                    </p>
                    
                    <div className="trust-badges">
                        <div className="trust-badge">
                            <FontAwesomeIcon icon={faUserShield} className="trust-icon" />
                            <span>Verified Artist</span>
                        </div>
                        <div className="trust-badge">
                            <FontAwesomeIcon icon={faShieldAlt} className="trust-icon" />
                            <span>Secure Process</span>
                        </div>
                        <div className="trust-badge">
                            <FontAwesomeIcon icon={faCheckCircle} className="trust-icon" />
                            <span>Direct Support</span>
                        </div>
                    </div>

                    <a href="https://wa.me/91123456789" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                        <FontAwesomeIcon icon={faWhatsapp} className="btn-icon" />
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
