import "./Skills.css";
import { useState, useEffect, useRef, useMemo } from 'react';
import { Card } from '../Card/Card';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SchoolIcon from '@mui/icons-material/School';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export const Skills = () => {
    const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const skills = useMemo(() => [
        { 
            icon: PsychologyIcon, 
            name: "Problem Solving",
            description: "Analytical thinking and creative solutions"
        },
        { 
            icon: RecordVoiceOverIcon, 
            name: "Communication",
            description: "Clear and effective interpersonal skills"
        },
        { 
            icon: Diversity3Icon, 
            name: "Team Leadership",
            description: "Inspiring and guiding collaborative efforts"
        },
        { 
            icon: SchoolIcon, 
            name: "Continuous Learning",
            description: "Staying current with industry trends"
        },
        { 
            icon: TaskAltIcon, 
            name: "Project Management",
            description: "Organizing and delivering on time"
        },
        { 
            icon: VerifiedIcon, 
            name: "Quality Assurance",
            description: "Ensuring excellence in deliverables"
        },
        { 
            icon: AutoFixHighIcon, 
            name: "Innovation",
            description: "Creative approaches to complex challenges"
        },
        { 
            icon: MenuBookIcon, 
            name: "Documentation",
            description: "Clear and comprehensive knowledge sharing"
        },
        { 
            icon: SmartToyIcon, 
            name: "AI & Automation",
            description: "Leveraging AI tools and automation for efficiency"
        }
    ], []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        
                        skills.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards(prev => {
                                    const updated = [...prev];
                                    updated[index] = true;
                                    return updated;
                                });
                            }, index * 100);
                        });
                        
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [skills]);

    return (
        <div ref={containerRef} className="skills-container">
            <h2 className="skills-title">Professional Skills</h2>
            <p className="skills-description">
                Combining technical expertise with strong soft skills to deliver exceptional results 
                and drive team success in every project.
            </p>
            
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <Card 
                        key={index} 
                        variant="minimal"
                        hover={true}
                        padding="medium"
                        borderRadius="large"
                        className={`skill-card-content ${visibleCards[index] ? 'skill-card-visible' : 'skill-card-hidden'}`}
                    >
                        <div className="skill-icon-wrapper">
                            <skill.icon className="skill-icon" />
                        </div>
                        <h3 className="skill-name">{skill.name}</h3>
                        <p className="skill-description">{skill.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}