import React from "react";
import EmailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer(){
    return (
    <div className="footer">
        <div className="socialMedia">
            <EmailIcon />
            <a href="https://github.com/genesismunoz">
                <GitHubIcon />
            </a>
        </div>
        <div></div>
        <p>&copy; 2022 Genesis Munoz</p>
    </div>
    );
}

export default Footer;