import "./Footer.css"
import githubLogo from "../../assets/github logo.png"
import linkedinLogo from "../../assets/linkedin-svgrepo-com.svg"

export const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <a 
                    href="https://www.linkedin.com/in/jesusmarroquin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <img 
                        src={linkedinLogo} 
                        alt="LinkedIn Profile" 
                        className="social-logo linkedin-logo"
                    />
                    <span className="social-text">LinkedIn</span>
                </a>
                <a 
                    href="https://github.com/JesCvz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <img 
                        src={githubLogo} 
                        alt="GitHub Profile" 
                        className="social-logo github-logo"
                    />
                    <span className="social-text">GitHub</span>
                </a>
            </div>
        </footer>
    )
}