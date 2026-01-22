import React from 'react';
import './LoadingOverlay.css';

interface LoadingOverlayProps {
    isVisible: boolean;
    message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible, message = "Sending message..." }) => {
    if (!isVisible) return null;

    return (
        <div className="loading-overlay-backdrop">
            <div className="loading-overlay-container liquid-glass">
                {/* From Uiverse.io by ClawHack1 */}
                <div className="loader">
                    <div className="loader-inner">
                        <div className="loader-block"></div>
                        <div className="loader-block"></div>
                        <div className="loader-block"></div>
                        <div className="loader-block"></div>
                        <div className="loader-block"></div>
                        <div className="loader-block"></div>
                        <div className="loader-block"></div>
                        <div className="loader-block"></div>
                    </div>
                </div>
                <p className="loading-status-text">{message}</p>
            </div>
        </div>
    );
};

export default LoadingOverlay;
