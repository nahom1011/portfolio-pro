import React from 'react';
import Section from '../Section/Section';
import './Projects.css';

const projects = [
    {
        title: 'Nexa AI Platform',
        category: 'SaaS / AI',
        description: 'A cutting-edge platform for deploying and monitoring AI models with real-time analytics.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        link: '#',
    },
    {
        title: 'Lumina Dashboard',
        category: 'UI/UX Design',
        description: 'An iOS-inspired dashboard for smart home management with fluid glassmorphism effects.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        link: '#',
    },
    {
        title: 'Ethereal Mobile App',
        category: 'Mobile / React Native',
        description: 'A minimalist meditation app focusing on sensory experience and haptic feedback.',
        image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
        link: '#',
    },
];

const Projects: React.FC = () => {
    return (
        <Section id="projects" title="Projects">
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.title} className="project-card glass">
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                        <div className="project-info">
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} className="project-link">View Project →</a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
