import React from 'react';
import Section from '../Section/Section';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <Section id="contact">
            <div className="contact-container glass">
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Message" rows={5} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                </form>
                <div className="contact-info">
                    <h3>Let's Collaborate</h3>
                    <p>Always open to new opportunities and creative collaborations. Feel free to reach out!</p>
                    <div className="social-links">
                        <a href="#">LinkedIn</a>
                        <a href="#">GitHub</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
