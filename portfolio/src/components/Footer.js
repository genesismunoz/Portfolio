import React from "react";
import EmailIcon from "@material-ui/icons/Mail";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer(){
    return (
    <div className="footer">
        <div className="socialMedia">
            <EmailIcon />
            <GithubIcon />
        </div>
        <div></div>
        <p>&copy; 2022 Genesis Munoz</p>
    </div>
    );
}

export default Footer;