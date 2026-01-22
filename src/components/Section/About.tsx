import React from 'react';
import Section from '../Section/Section';
import './About.css';

const About: React.FC = () => {
    return (
        <Section id="about" title="About">
            <div className="about-grid">
                <div className="about-text">
                    <p>
                        I am a Developer, Bot Architect, Cybersecurity Specialist, and CCTV Installer dedicated to crafting solutions with precision and excellence. I design and build dynamic websites and intelligent automation systems, ensuring every project is robust, scalable, and tailored to the client’s needs.
                    </p>
                    <p>
                        Beyond development, I specialize in cybersecurity and CCTV installation, implementing secure systems and reliable networks that protect and optimize operations. My work combines technical expertise, innovation, and attention to detail, delivering solutions that are both functional and elegant.
                    </p>
                </div>
                <div className="uiverse-card">
                    <div className="uiverse-card-bg">
                        <div className="uiverse-card-bg-inner"></div>
                    </div>

                    <div className="uiverse-card-center">
                        <div
                            className="uiverse-card-spinner"
                            style={{ animationDuration: '12s' }}
                        ></div>
                    </div>

                    <div className="uiverse-card-content">
                        <div className="uiverse-card-left">
                            <span className="uiverse-card-title">5+ Years</span>
                            <span className="uiverse-card-subtitle">Experience</span>
                            <div className="uiverse-card-year">
                                <span>30+ Projects</span>
                            </div>
                        </div>
                        <div className="uiverse-card-right">
                            <span className="uiverse-label-text">Full Stack</span>
                            <span className="uiverse-label-sub">Developer</span>
                            <div className="uiverse-icon-btn">
                                <span className="uiverse-icon-span">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 12 12"
                                        className="uiverse-icon-svg"
                                    >
                                        <g fill="none">
                                            <path
                                                d="M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                                                fill="currentColor"
                                            ></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
