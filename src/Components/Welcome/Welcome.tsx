import "./Welcome.css";
import DownloadIcon from '@mui/icons-material/Download';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PDF from '../../assets/Jesus Marroquin CV (2025)_rev2.pdf'
import { useEffect, useState } from 'react';

interface WelcomeProps {
    moveToElement: () => void;
}

export const Welcome = ({ moveToElement }: WelcomeProps) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleDownload = () => {
        console.log(PDF);
        const a = document.createElement("a");
        a.href = PDF;
        a.target = '_blank';
        a.click();
        a.remove();
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(isScrolled)

    return (
        <div className="introduction">
            <h1 className="hero-title">
                I am <span className="name-highlight">Jesus Marroquin</span>,<br />
                a Sr Software Engineer
            </h1>

            <p className="subtitle">
                Crafting digital experiences with passion and innovation
            </p>

            <div className="cta-buttons">
                <button onClick={moveToElement} className="btn-primary">
                    <ArrowDownwardIcon sx={{ marginRight: 1 }} />
                    Explore Portfolio
                </button>
                <button onClick={() => handleDownload()} className="btn-secondary">
                    <DownloadIcon sx={{ marginRight: 1 }} />
                    <span className="btn-text-desktop">Download&nbsp;</span>CV
                </button>
            </div>
            
            {/* Mobile scroll indicator */}
            <div style={{
                    transitionProperty: "opacity",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease",
                    opacity: isScrolled ? 0 : 1
                }}>
                <div 
                    className="mobile-scroll-indicator"
                >
                    <div className="scroll-arrow" onClick={moveToElement}>
                        <ArrowDownwardIcon />
                    </div>
                    <p className="scroll-text">Scroll to explore</p>
                </div>
            </div>
            
        </div>
    )
}