import "./Welcome.css";
import DownloadIcon from '@mui/icons-material/Download';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PDF from '../../assets/Jesus Marroquin CV (2025)_rev2.pdf'

interface WelcomeProps {
    moveToElement: () => void;
}

export const Welcome = ({ moveToElement }: WelcomeProps) => {

    const handleDownload = () => {
        console.log(PDF);
        const a = document.createElement("a");
        a.href = PDF;
        a.target = '_blank';
        a.click();
        a.remove();
    }

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
                    Download CV
                </button>
            </div>
        </div>
    )
}