import React from 'react';
import './HomePage.css';
import Navbar from './Navbar';
import {useEffect} from 'react';

function HomePage() {
    useEffect(() => {
        const h1 = document.querySelector('.hero-content h1');
        h1.classList.add('animated');
    }, []);
    return (
        <div>
            <Navbar />
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to NOVA CAPTURE</h1>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
