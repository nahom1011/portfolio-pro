import React from 'react';
import Section from '../Section/Section';
import './About.css';

const About: React.FC = () => {
    return (
        <Section id="about" title="About">
            <div className="about-grid">
                <div className="about-text liquid-glass-text">
                    <p className="about-paragraph">
                        I am a Developer, Bot Architect, Cybersecurity Specialist, and CCTV Installer dedicated to crafting solutions with precision and excellence. I design and build dynamic websites and intelligent automation systems, ensuring every project is robust, scalable, and tailored to the client's needs.
                    </p>
                    <p className="about-paragraph">
                        Beyond development, I specialize in cybersecurity and CCTV installation, implementing secure systems and reliable networks that protect and optimize operations. My work combines technical expertise, innovation, and attention to detail, delivering solutions that are both functional and elegant.
                    </p>
                </div>
                <div className="stats-card liquid-glass">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-value">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">30+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">100%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
