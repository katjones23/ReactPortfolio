import React from "react";
import logo from "../images/DevKatLogo.png"
import resume from "../docs/KatherineJonesResume.pdf"

const Contact = () => {
    return (
        <div className="contact-container">
            <section className="container d-flex flex-column">
                <div className="row justify-content-center">
                    <div className="col-md-6 contact-me">
                        <div className="contactCard card text-center bg-dark">

                            <div className="card-header contactHeader">
                                <h5>Contact</h5>
                            </div>

                            <div className="card-body">
                                <img className="logo" src={logo} alt="Logo"></img>
                                <h5 className="card-title">Katherine Jones</h5>
                                <a className="resume" href={resume} rel="noopener noreferrer" target="_blank"
                                    title="Resume link">Resume</a>
                                <br></br>
                                <br></br>
                                <a className="contactLinks" href="mailto:thedevkat@gmail.com" title="Email link">thedevkat@gmail.com</a>
                                <br></br>
                                <br></br>
                                <p>
                                    <a href="https://www.linkedin.com/in/katherineetjones/" title="LinkedIn" rel="noopener noreferrer" target="_blank">
                                        <i id="linkedinIcon" className="fab fa-linkedin fa-2x"></i>
                                    </a>
                                    <a href="https://github.com/katjones23" title="GitHub" rel="noopener noreferrer" target="_blank">
                                        <i id="githubIcon" className="fab fa-github fa-2x"></i>
                                    </a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
