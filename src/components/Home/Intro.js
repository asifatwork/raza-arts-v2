import React from 'react'
import './Intro.css'

export default function Intro() {
    return (
        <div className="intro-container">
            <div className="hero-image-wrapper">
                {/* Placeholder for high-res artist-at-work image */}
                <img src="/images/Intro.jpg" alt="Artist at work" className="hero-bg-image" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h2 className="hero-subtitle">HYPER-REALISTIC PAINTINGS</h2>
                <h1 className="hero-title">RAZA ARTS</h1>
            </div>

            <div className="scroll-indicator">
                <span>SCROLL</span>
                <div className="line"></div>
            </div>
        </div>
    )
}
