import React from 'react';
import './Hero.css';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-grid-bg"></div>
            <div className="hero-content">
                <div className="hero-status-container">
                    <span className="status-dot"></span>
                    <span className="status-text">OPEN FOR NEW PROJECTS</span>
                </div>
                <h1 className="hero-name">NAHOM TESHOME</h1>
            </div>
            <ScrollIndicator />
        </section>
    );
};

export default Hero;
