import React from "react";
import "./style.css";

const Footer = () => {
    return (
        <footer id="myFooter" className="py-4 text-white-50 justify-content-center navbar">
            <div className="text-center justify-content-center">

                <a href="https://www.linkedin.com/in/katherineetjones/" title="LinkedIn" rel="noopener noreferrer" target="_blank">
                    <i id="linkedinIcon" className="fab fa-linkedin fa-2x"></i>
                </a>

                <a href="https://github.com/katjones23" title="GitHub" rel="noopener noreferrer" target="_blank">
                    <i id="githubIcon" className="fab fa-github fa-2x"></i>
                </a>

                <br></br>
                <small>Created my free logo at <a href="https://Logomakr.com" rel="noopener noreferrer" target="_blank"
                    title="LogoMakr URL">LogoMakr.com</a></small>
                <br></br>
                <small>&copy; <small id="copyrightYear"></small> Katherine Jones</small>
            </div>
        </footer>
    );
};

export default Footer;