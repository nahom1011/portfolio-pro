import React, { useEffect } from 'react';
import './Toast.css';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`toast-container ${type} liquid-glass`}>
            <div className="toast-content">
                <span className="toast-icon">
                    {type === 'success' ? '✓' : '✕'}
                </span>
                <p className="toast-message">{message}</p>
            </div>
            <button className="toast-close" onClick={onClose} aria-label="Close notification">
                ✕
            </button>
        </div>
    );
};

export default Toast;
