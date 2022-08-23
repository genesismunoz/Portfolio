import React from "react";
import EmailIcon from "@material-ui/icons/Mail";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home(){
    return (
        <div className="home">
            <div className="about">
                <h2>Howdy! I'm Genesis</h2>
                <div className="prompt">
                    <p>A computer engineer with a passion for learning new things and creating.</p>
                    <EmailIcon />
                    <GithubIcon />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            ReactJS, HTML, CSS, Bootstrap, SwiftUI
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, MySQL, MAMP PHP, PostgreSQL
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>
                            Javascript, Java, Python, C++, C, Haskell
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home