import "./Header.css"
import { NavLink } from "react-router-dom"

export const Header = () =>{
    return(
        <header className="header">
            <div className="header-content">
                <div className="header-left">
                    <div className="header-accent-dot"></div>
                    <NavLink to={"/"} className="header-title">
                        Jesus Marroquin
                    </NavLink>
                </div>
                
                <div className="header-right">
                    <span className="header-subtitle">Sr. Software Engineer</span>
                </div>
            </div>
        </header>
    )
}