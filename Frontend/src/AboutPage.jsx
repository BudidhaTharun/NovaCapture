import React from 'react';
import './AboutPage.css';
import Navbar from './Navbar';
import StickyButton from './StickyButton';
import logoImage from './assets/about.jfif';

function AboutPage() {
    return (
        <div>
            <Navbar />
            <div className="about-container">

                <section className="about-description">
                    <h2>About Us</h2>
                    <p>
                        Welcome to <b>NovaCapture</b>, where we specialize in capturing life's most precious moments through stunning imagery.

                        Our team of passionate photographers is dedicated to delivering exceptional results with a personalized touch. With a keen eye for detail and a commitment to excellence, we strive to create timeless memories that you'll cherish for a lifetime.

                        From weddings and portraits to events and landscapes, we approach each project with creativity, professionalism, and a genuine love for our craft.

                        Contact us today to learn more about our services and how we can help bring your vision to life.
                    </p>
                </section>
                <section className="about-image">
                    <img src={logoImage} alt="Photography Studio" />
                </section>
            </div>
            {/* <StickyButton /> */}
        </div>
    );
}

export default AboutPage;

