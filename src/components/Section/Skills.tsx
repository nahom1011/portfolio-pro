import React from 'react';
import Section from '../Section/Section';
import './Skills.css';

const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'GSAP & Framer Motion', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Three.js', level: 70 },
];

const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Skills">
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-card liquid-glass">
                        <div className="liquid-glass-inner">
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar-fill"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
