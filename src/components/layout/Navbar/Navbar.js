import React from 'react';
import './Navbar.css'
import YoutubeBtn from '../../features/youtube/YoutubeBtn';

export default function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const homeContainer = document.querySelector('.home-container');
            if (homeContainer) {
                if (homeContainer.scrollTop > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
        };

        const homeContainer = document.querySelector('.home-container');
        if (homeContainer) {
            homeContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (homeContainer) {
                homeContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>

            <div className="navbar-container">
                
                <div className="brand">
                        <a href=""><img className="brand-logo" src="images/logo.jpg" alt="" /></a>
                        <a href=""><h1 className="brand-title">Raza Arts</h1></a>
                </div>

                <div className="nav-items">
                    {/* Navigation links removed for premium minimalist look */}
                    <YoutubeBtn text="Subscribe & Join" />
                </div>

            </div>
            
        </div>
    )
}
