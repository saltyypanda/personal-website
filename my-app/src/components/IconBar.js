import { EmailIcon, GitHubIcon, LinkedInIcon } from "./Icons";

function IconBar({ className }) {
    return (
        <div className={`d-flex flex-row ${className}`}>
            <a href="https://github.com/saltyypanda" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="contact-button"/>
            </a>
            <a href="https://www.linkedin.com/in/tess-hacker-741045257/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="contact-button"/>
            </a>
            <a href="mailto:esh7943@rit.edu" target="_blank" rel="noopener noreferrer">
                <EmailIcon className="contact-button"/>
            </a>
        </div>
    );
}

export default IconBar;