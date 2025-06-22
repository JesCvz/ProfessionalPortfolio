import "./Home.css"
import { Accounts } from "../../Components/Accounts/Accounts"
import { Abilities } from "../../Components/Abilties/Abilities"
import { Profile } from "../../Components/Profile/Profile"
import { Welcome } from "../../Components/Welcome/Welcome"
import { useRef } from "react"
import { Skills } from "../../Components/Skills/Skills"


export const Home:React.FC = () => {
    const ref = useRef<null | HTMLDivElement>(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };


    return(
        <div className="home-container">
            <Welcome moveToElement={handleClick}/>
            <div 
                ref={ref}
                className="about-section"
            >
                <Profile/>
            </div>
            <div className="section-divider skills-divider"></div>
            <div className="skills-section">
                <Skills/>
            </div>
            <div className="section-divider abilities-divider"></div>
            <div className="abilities-section">
                <Abilities/>
            </div>
            <div className="section-divider accounts-divider"></div>
            <div className="accounts-section">
                <Accounts/>
            </div>
        </div>
    )
}