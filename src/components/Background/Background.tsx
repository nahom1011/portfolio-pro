import React from 'react';
import './Background.css';

const Background: React.FC = () => {
    return (
        <div className="background-container">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
            <div className="overlay"></div>
        </div>
    );
};

export default Background;
