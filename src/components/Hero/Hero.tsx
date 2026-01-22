import React from 'react';
import './Hero.css';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-grid-bg"></div>
            <div className="hero-content">
                <h1 className="hero-name">NAHOM TESHOME</h1>
            </div>
            <ScrollIndicator />
        </section>
    );
};

export default Hero;
