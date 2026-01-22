import React from 'react';
import Section from '../Section/Section';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <Section id="contact">
            <div className="contact-container liquid-glass">
                <div className="contact-form-wrapper">
                    <form className="contact-form">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Name"
                                className="liquid-glass-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                className="liquid-glass-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                placeholder="Message"
                                rows={5}
                                className="liquid-glass-input"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn liquid-glass-button">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="contact-info liquid-glass-info">
                    <h3 className="contact-title">Let's Collaborate</h3>
                    <p className="contact-description">
                        Always open to new opportunities and creative collaborations. Feel free to reach out!
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link liquid-glass-link">LinkedIn</a>
                        <a href="#" className="social-link liquid-glass-link">GitHub</a>
                        <a href="#" className="social-link liquid-glass-link">Twitter</a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
