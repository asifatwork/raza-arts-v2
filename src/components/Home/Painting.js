import React from 'react'
import './Painting.css'
import Image from '../common/Image'

export default function Painting() {
    return (
        <div className="weber-gallery-container">
            <div className="weber-header">
                <h2 className="weber-title">Selected Works</h2>
                <div className="weber-separator"></div>
            </div>
            
            <div className="weber-grid">
                {/* Row 1 */}
                <div className="weber-item">
                    <Image url="/images/1.jpg"/>
                    <span className="artwork-caption">Portrait Study No. 1</span>
                </div>
                <div className="weber-item">
                    <Image url="/images/2.jpg"/>
                    <span className="artwork-caption">Commissioned Work</span>
                </div>
                <div className="weber-item">
                    <Image url="/images/3.jpg"/>
                    <span className="artwork-caption">Graphite Series</span>
                </div>

                {/* Row 2 */}
                <div className="weber-item">
                    <Image url="/images/4.jpg"/>
                    <span className="artwork-caption">Oil on Canvas</span>
                </div>
                <div className="weber-item">
                    <Image url="/images/5.jpg"/>
                    <span className="artwork-caption">Hyper-Realism</span>
                </div>
                <div className="weber-item">
                    <Image url="/images/6.jpg"/>
                    <span className="artwork-caption">The Gaze</span>
                </div>
            </div>
        </div>
    )
}
