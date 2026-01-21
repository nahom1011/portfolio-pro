import React, { type ReactNode } from 'react';
import './Section.css';

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <section id={id} className="content-section">
            <div className="section-header">
                <h2 className="section-title">{title}</h2>
                <div className="section-line"></div>
            </div>
            <div className="section-body">
                {children}
            </div>
        </section>
    );
};

export default Section;
