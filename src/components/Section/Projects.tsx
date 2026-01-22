import React, { useState } from 'react';
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
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', ...new Set(projects.map(p => p.category.split(' / ')[0]))];

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category.includes(activeCategory));

    return (
        <Section id="projects" title="Projects">
            <div className="projects-filter">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="projects-grid" key={activeCategory}>
                {filteredProjects.map((project) => (
                    <div key={project.title} className="liquid-glass-card projects-reveal">
                        <div className="liquid-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="liquid-project-image"
                            />
                        </div>
                        <div className="liquid-content">
                            <span className="liquid-category">{project.category}</span>
                            <h3 className="liquid-title">{project.title}</h3>
                            <p className="liquid-description">{project.description}</p>
                            <a href={project.link} className="liquid-link">
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
