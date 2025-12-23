import React from 'react';
import './Home.css';
import Intro from './Intro';
import Painting from './Painting';
import Services from './Services';
import WhatsApp from './WhatsApp';
import LatestVideo from './LatestVideo';
import Footer from '../layout/Footer/Footer';

export default function Home() {
    return (
        <div className="home-container">
            <Intro/>
            <Painting/>
            <Services/>
            {/* <WhatsApp/> */}
            <LatestVideo/>
            <Footer/>
        </div>
    )
}
