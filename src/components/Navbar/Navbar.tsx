import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar liquid-glass">
            <div className="navbar-content">
                <div className="logo-text">NAHOM.DEV</div>
                <div className="nav-links">
                    <a href="#about" className="nav-link liquid-glass-link">About</a>
                    <a href="#projects" className="nav-link liquid-glass-link">Projects</a>
                    <a href="#contact" className="nav-link liquid-glass-link">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
