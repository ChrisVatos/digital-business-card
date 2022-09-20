import React from "react"
import "./SocialLinks.css"


function SocialLinks() {
    return(
        <div className="buttons">
            <button className="email-button">
                <img className="email-symbol" src="./email-symbol.png" alt="email"/>
                Email
            </button>
            <a href="https://www.linkedin.com/in/chrisvatos/">
                <button className="linkedin-button">
                <img className="linkedin-logo-white" src="./linkedin-logo-white.png" alt="linkedin"/>
                    LinkedIn
                </button>
            </a>
        </div>

    );
}

export default SocialLinks