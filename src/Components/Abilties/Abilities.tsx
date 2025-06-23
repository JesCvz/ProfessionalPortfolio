import './Abilities.css';
import { Card } from '../Card/Card';
import ReactImage from '../../assets/React-icon.svg.png';
import Angular from '../../assets/Angular_full_color_logo.svg.png';
import PHP from '../../assets/php.png';
import CSharp from '../../assets/Csharp_Logo.png';
import Java from '../../assets/Java-logo.png';
import Python from '../../assets/python_logo_icon_168886.png';
import Node from '../../assets/Node.js_logo.svg.png';
import AWS from '../../assets/Amazon_Web_Services_Logo.svg.png';
import Azure from '../../assets/azure.png';

export const Abilities = () => {
    const techStacks = {
        frontend: [
            { name: 'React', logo: ReactImage },
            { name: 'Angular', logo: Angular }
        ],
        backend: [
            { name: 'PHP', logo: PHP },
            { name: 'C#', logo: CSharp },
            { name: 'Java', logo: Java },
            { name: 'Python', logo: Python },
            { name: 'Node.js', logo: Node }
        ],
        cloud: [
            { name: 'AWS', logo: AWS },
            { name: 'Azure', logo: Azure }
        ]
    };

    return (
        <div className="abilities-container">
            <h2 className="abilities-title">Technical Proficiencies</h2>
            <Card variant="gradient-top" padding="large" borderRadius="large" className="abilities-card-content">
                
                <div className="tech-section">
                    <h3 className="tech-category-title">
                        <span className="category-icon"></span>
                        Frontend Development
                    </h3>
                    <div className="tech-grid">
                        {techStacks.frontend.map((tech, index) => (
                            <div key={index} className="tech-item">
                                <img className="tech-logo" src={tech.logo} alt={tech.name} />
                                <p className="tech-name">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tech-section">
                    <h3 className="tech-category-title">
                        <span className="category-icon"></span>
                        Backend Development
                    </h3>
                    <div className="tech-grid">
                        {techStacks.backend.map((tech, index) => (
                            <div key={index} className="tech-item">
                                <img className="tech-logo" src={tech.logo} alt={tech.name} />
                                <p className="tech-name">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tech-section">
                    <h3 className="tech-category-title">
                        <span className="category-icon"></span>
                        Cloud Platforms
                    </h3>
                    <div className="tech-grid">
                        {techStacks.cloud.map((tech, index) => (
                            <div key={index} className="tech-item">
                                <img className="tech-logo" src={tech.logo} alt={tech.name} />
                                <p className="tech-name">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
}