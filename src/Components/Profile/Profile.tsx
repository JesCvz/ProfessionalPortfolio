import './Profile.css';
import JesusPhoto from '../../assets/jesus.jpg';

export const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-card'>
                <div className='profile-image-container'>
                    <img className='profile-image' src={JesusPhoto} alt="Jesus Marroquin" />
                </div>
                <div className='profile-content'>
                    <h2 className='profile-title'>About Me</h2>
                    <p className="profile-description">
                        I’m a <strong>Senior Software Engineer</strong> with{' '}
                        <span className="highlight-text">4+ years</span> of full-stack experience. My expertise
                        lies in backend development using{' '}
                        <span className="highlight-text">C#, Python, Java, and PHP</span>, complemented by
                        frontend proficiency with{' '}
                        <span className="highlight-text">React and Angular</span>.
                        <br />
                        <br />
                        As a <strong>Technical Lead</strong>, I’ve guided client engagements, optimized resource
                        allocation, and delivered successful outcomes across multiple projects.
                    </p>
                </div>
            </div>
        </div>
    )
}