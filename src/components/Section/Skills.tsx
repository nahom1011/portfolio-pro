import React from 'react';
import Section from '../Section/Section';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

const skills = [
    { name: 'React', icon: 'react', color: '#61DAFB' },
    { name: 'Next.js', icon: 'nextdotjs', color: '#ffffff' },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
    { name: 'GSAP', icon: 'greensock', color: '#88CE02' },
    { name: 'Framer Motion', icon: 'framer', color: '#0055FF' },
    { name: 'UI/UX Design', icon: 'figma', color: '#F24E1E' },
    { name: 'Node.js', icon: 'nodedotjs', color: '#339933' },
    { name: 'Three.js', icon: 'threedotjs', color: '#ffffff' },
    { name: 'Linux', icon: 'linux', color: '#FCC624' },
    { name: 'Python', icon: 'python', color: '#3776AB' },
    { name: 'C#', icon: 'dotnet', color: '#239120' },
    { name: 'C++', icon: 'cplusplus', color: '#00599C' },
    { name: 'Java', icon: 'java', color: '#007396' },
    { name: 'OSINT', icon: 'osint', color: '#4CAF50' },
    { name: 'Arch', icon: 'archlinux', color: '#1793D1' },
];

const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Skills">
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="skill-card liquid-glass"
                        style={{ '--skill-color': skill.color } as React.CSSProperties}
                    >
                        <div className="liquid-glass-inner">
                            <div className="skill-icon-container">
                                {skill.name === 'Java' ? (
                                    <FontAwesomeIcon icon={faJava} className="skill-icon font-awesome-icon" />
                                ) : skill.name === 'OSINT' ? (
                                    <FontAwesomeIcon icon={faUserSecret} className="skill-icon font-awesome-icon" />
                                ) : (
                                    <div
                                        className="skill-icon simple-icon"
                                        style={{
                                            maskImage: `url(https://cdn.simpleicons.org/${skill.icon})`,
                                            WebkitMaskImage: `url(https://cdn.simpleicons.org/${skill.icon})`
                                        }}
                                    />
                                )}
                            </div>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
