import React, { useState, useEffect } from 'react';
import './ViewSource.css';
import githubLogo from '../../assets/github logo.png';

export const ViewSource: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isForceExpanded, setIsForceExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 100);
            
            // Reset force expanded on any scroll when already force expanded
            if (isForceExpanded) {
                setIsForceExpanded(false);
            }
            
            // Also reset when scrolling back to top
            if (scrollY <= 100) {
                setIsForceExpanded(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isForceExpanded]);

    const handleClick = (e: React.MouseEvent) => {
        // Check if we're on mobile and in minimized state
        if (window.innerWidth <= 768 && isScrolled && !isForceExpanded) {
            e.preventDefault();
            setIsForceExpanded(true);
        }
        // Otherwise, let the default link behavior happen
    };

    const isMinimized = isScrolled && !isForceExpanded;

    return (
        <div className={`view-source-container expanded ${isMinimized ? 'mobile-minimized' : ''}`}>
            <a 
                href="https://github.com/JesCvz/ProfessionalPortfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-source-link"
                onClick={handleClick}
            >
                <img 
                    src={githubLogo} 
                    alt="View Source Code" 
                    className="view-source-logo"
                />
                <span className="view-source-text">View Source</span>
            </a>
        </div>
    );
};