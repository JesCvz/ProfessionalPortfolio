import './Accounts.css'
import Ascendion from "../../assets/ascendionLogo.png"
import Meta from "../../assets/Meta.png"
import ATT from "../../assets/ATT.png"
import Microsoft from "../../assets/microsoftLogo.png"

export const Accounts = () => {
    const projects = [
        {
            logo: Microsoft,
            company: "Microsoft",
            area: "Full Stack Software Engineering",
            techStack: {
                frontend: "React",
                backend: ".NET",
                databases: "SQL Server",
                cloud: "Azure"
            },
            achievements: [
                "Leveraged existing skills while embracing expanded responsibilities as a Senior Software Engineer from Ascendion",
                "Utilized React and C# with .NET, along with Azure DevOps for streamlined project management and deployment",
                "Oversaw entire project lifecycle from design and development to implementation and maintenance",
                "Managed a development team to ensure delivery of high-quality, scalable solutions",
                "Led client discussions, incorporated new requirements, and drove alignment with business goals",
                "Recognized for dedication, hard work, and significant contributions to the successful launch of a critical product"
            ]
        },
        {
            logo: Meta,
            company: "Meta",
            area: "Legal Platforms Engineering",
            techStack: {
                frontend: "React",
                backend: "PHP (Hack), Python, C++",
                databases: "MySQL, Apache Cassandra",
                cloud: "AWS"
            },
            achievements: [
                "Developed an enhancement to the internal “Rules” system that emits an event whenever a case is opened. A downstream service consumes that event to automatically generate tasks in an external tool, giving outside agents access to them.",
                "Migrated 80,000 cases to a new platform following the deprecation of the legacy tool.",
                "Engineered a text-extraction and translation pipeline for case records (PDFs), enabling multilingual support and expediting case processing.",
                "Developed a GenAI chatbot on Llama to guide helpdesk inquiries, improving solution accuracy and routing efficiency for external agents."
            ]
        },
        {
            logo: ATT,
            company: "AT&T",
            area: "On-demand Streaming Services",
            techStack: {
                frontend: "React",
                backend: "Java Spring Boot",
                databases: "Oracle Databases",
                cloud: "AWS"
            },
            achievements: [
                "Designed and implemented a purchase API integrating Affirm for seamless service transactions.",
                "Developed a file-encryption API for AWS S3 uploads, ensuring end-to-end data protection.",
                "Authored comprehensive documentation for legacy-dependent features, streamlining maintenance and onboarding.",
                "Built multiple frontend order forms with corresponding backend APIs to automate order processing.",
                "Introduced JUnit-based unit tests for previously untested APIs and functions, boosting overall code reliability."
            ]
        }
    ];

    return (
        <div className="experience-container">
            <h2 className="experience-title">Professional Experience</h2>

            <div className="current-employer-card">
                <h3 style={{ color: 'var(--primary-text)', fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Current Employer
                </h3>
                <img className="employer-logo" src={Ascendion} alt="Ascendion" />
            </div>

            <div className="projects-section">
                <h3 className="projects-title">Notable Projects & Achievements</h3>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <img className="project-logo" src={project.logo} alt={project.company} />
                            </div>
                            <div className="project-meta">
                                <h3>{project.area}</h3>
                            </div>

                            <div className="tech-stack">
                                <h4>Technology Stack</h4>
                                <p><strong>Frontend:</strong> {project.techStack.frontend}</p>
                                <p><strong>Backend:</strong> {project.techStack.backend}</p>
                                <p><strong>Databases:</strong> {project.techStack.databases}</p>
                                <p><strong>Cloud:</strong> {project.techStack.cloud}</p>
                            </div>

                            <div className="achievements">
                                <h4>Key Achievements</h4>
                                <ul>
                                    {project.achievements.map((achievement, achievementIndex) => (
                                        <li key={achievementIndex}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}