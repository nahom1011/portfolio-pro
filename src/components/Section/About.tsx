import React from 'react';
import Section from '../Section/Section';
import './About.css';

const About: React.FC = () => {
    return (
        <Section id="about" title="About">
            <div className="about-grid">
                <div className="about-text">
                    <p>
                        I am a passionate designer and developer dedicated to creating high-fidelity digital experiences.
                        My work is defined by a meticulous attention to detail, a focus on performance, and a deep appreciation for the iOS aesthetic.
                    </p>
                    <p>
                        With a background in both front-end engineering and UI/UX design, I bridge the gap between creative vision and technical implementation.
                        I believe that software should not only be functional but also beautiful and delightful to use.
                    </p>
                </div>
                <div className="about-stats glass">
                    <div className="stat-item">
                        <span className="stat-value">5+</span>
                        <span className="stat-label">Years Exp.</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">50+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">100%</span>
                        <span className="stat-label">Dedication</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
