import React, { useState } from 'react';
import './Services.css';
import Heading from '../common/Heading';

const servicesData = [
    {
        id: 1,
        title: "Oil Painting",
        description: "Museum-quality oil portraits on canvas. Rich textures and timeless depth.",
        price: "Start from $180",
        image: "/images/1.jpg"
    },
    {
        id: 2,
        title: "Charcoal Sketch",
        description: "Dramatic high-contrast sketches. Bold, expressive, and raw.",
        price: "Start from $80",
        image: "/images/2.jpg"
    },
    {
        id: 3,
        title: "Watercolor",
        description: "Fluid and vibrant pieces that capture emotion with delicate transparency.",
        price: "Start from $120",
        image: "/images/3.jpg"
    },
    {
        id: 4,
        title: "Pencil Drawing",
        description: "Hyper-realistic graphite details. Precision meets emotion.",
        price: "Start from $100",
        image: "/images/4.jpg"
    }
];

export default function Services() {
    const [hoveredService, setHoveredService] = useState(null);

    return (
        <div className="services-container">
            <div className="services-header">
                <span className="eyebrow">02 — EXPERTISE</span>
                <Heading title="Our Services" />
            </div>

            <div className="service-list">
                {servicesData.map((service) => (
                    <div 
                        key={service.id} 
                        className="service-item"
                        onMouseEnter={() => setHoveredService(service.id)}
                        onMouseLeave={() => setHoveredService(null)}
                    >
                        <div className="service-info">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                        <div className="service-meta">
                            <span className="service-price">{service.price}</span>
                            <span className="arrow-icon">→</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
