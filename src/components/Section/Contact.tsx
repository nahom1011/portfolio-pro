import React from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import Section from '../Section/Section';
import './Contact.css';

interface ContactProps {
    onSendStart?: () => void;
    onSendEnd?: () => void;
    onMessageSent?: (message: string, type: 'success' | 'error') => void;
}

const Contact: React.FC<ContactProps> = ({ onSendStart, onSendEnd, onMessageSent }) => {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (onSendStart) onSendStart();

        // Realistic placeholder logic for email request
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (onMessageSent) onMessageSent("Message sent successfully!", "success");
        } catch (error) {
            console.error("Failed to send message:", error);
            if (onMessageSent) onMessageSent("Failed to send message. Please try again.", "error");
        } finally {
            if (onSendEnd) onSendEnd();
        }
    };

    return (
        <Section id="contact" title="Contact">
            <div className="contact-grid liquid-glass">
                {/* 1. Send a Message */}
                <div className="contact-column">
                    <h3 className="column-title">Send a Message</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
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
                                rows={4}
                                className="liquid-glass-input"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn liquid-glass-button">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* 2. Contact Information */}
                <div className="contact-column">
                    <h3 className="column-title">Contact Information</h3>
                    <div className="info-list">
                        <div className="info-item">
                            <span className="info-label">Email</span>
                            <a href="mailto:contact@example.com" className="info-value">contact@example.com</a>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Phone</span>
                            <span className="info-value">+1 (234) 567-890</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Location</span>
                            <span className="info-value">Addis Ababa, Ethiopia</span>
                        </div>
                    </div>
                </div>

                {/* 3. Connect with Me */}
                <div className="contact-column">
                    <h3 className="column-title">Connect with Me</h3>
                    <p className="column-description">
                        Feel free to reach out on social media or professional platforms.
                    </p>
                    <div className="social-links-vertical">
                        <a href="#" className="social-link liquid-glass-link">
                            <Linkedin size={18} strokeWidth={2} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="#" className="social-link liquid-glass-link">
                            <Github size={18} strokeWidth={2} />
                            <span>GitHub</span>
                        </a>
                        <a href="#" className="social-link liquid-glass-link">
                            <Twitter size={18} strokeWidth={2} />
                            <span>Twitter</span>
                        </a>
                        <a href="#" className="social-link liquid-glass-link">
                            <Instagram size={18} strokeWidth={2} />
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
