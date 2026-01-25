import React from 'react';
import emailjs from '@emailjs/browser';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import Section from '../Section/Section';
import './Contact.css';

interface ContactProps {
    onSendStart?: () => void;
    onSendEnd?: () => void;
    onMessageSent?: (message: string, type: 'success' | 'error') => void;
}

const Contact: React.FC<ContactProps> = ({ onSendStart, onSendEnd, onMessageSent }) => {
    const form = React.useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (onSendStart) onSendStart();

        try {
            if (!form.current) return;

            console.log("Sending email with Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID ? "Preset" : "Missing");

            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log("EmailJS Success:", result.text);
            if (onMessageSent) onMessageSent("Message sent successfully!", "success");
            if (form.current) form.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            if (onMessageSent) onMessageSent("Failed to send message. Check console for details.", "error");
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
                    <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Name"
                                name="user_name"
                                className="liquid-glass-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                name="user_email"
                                className="liquid-glass-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                placeholder="Message"
                                name="message"
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
                            <a href="mailto:nahomteshome708@gmail.com" className="info-value">nahomteshome708@gmail.com</a>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Phone</span>
                            <span className="info-value">+251945293560</span>
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
                        <a href="https://www.linkedin.com/in/nahom-teshome05" className="social-link liquid-glass-link">
                            <Linkedin size={18} strokeWidth={2} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/nahom1011" className="social-link liquid-glass-link">
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
