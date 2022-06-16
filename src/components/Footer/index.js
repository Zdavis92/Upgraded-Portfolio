import React from "react";
import linkedinIcon from '../../Images/linkedin.png';
import githubIcon from '../../Images/GitHub-Mark-120px-plus.png';

const Footer = () => {
    return (
        <div className="border-t-2 flex mt-4 flex-row justify-center shadow-inner">
            <a href="https://www.linkedin.com/in/zachary-davis-2170b4228/" target="_blank" rel="noreferrer"><img className="m-4 w-10" src={linkedinIcon} alt="linkedin Icon"></img></a>
            <a href="https://github.com/Zdavis92/" target="_blank" rel="noreferrer"><img className="m-4 w-10" src={githubIcon} alt="github Icon"></img></a>
        </div>
    )
}

export default Footer;