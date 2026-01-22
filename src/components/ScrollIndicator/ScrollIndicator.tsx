import React from 'react';
import './ScrollIndicator.css';

const ScrollIndicator: React.FC = () => {
    const scrollToContent = () => {
        const introSection = document.querySelector('.intro-section');
        if (introSection) {
            introSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="scroll-indicator-container" onClick={scrollToContent}>
            <svg
                className="scroll-arrow"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 5V19M12 19L5 12M12 19L19 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default ScrollIndicator;
