import "./Footer.css"
import githubLogo from "../../assets/github logo.png"

export const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <a 
                    href="https://github.com/JesCvz/ProfessionalPortfolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    <img 
                        src={githubLogo} 
                        alt="GitHub Repository" 
                        className="github-logo"
                    />
                    <span className="github-text">View Source</span>
                </a>
            </div>
        </footer>
    )
}