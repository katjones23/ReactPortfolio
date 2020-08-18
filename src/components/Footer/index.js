import React from "react";
import "./style.css";
import Row from "../Row"
import logo from "../../images/DevKatLogo.png"

const Footer = () => {
    return (
        <div>
            <footer id="myFooter" className="text-white-50 footer">
                <Row>
                    <div className="col">
                        <p style={{ color: "#D6D8D9" }}>Navigate</p>
                            <a style={{ color: "#D6D8D9" }} href="/about" title="About"><em>About</em> </a>
                            <a style={{ color: "#D6D8D9" }} href="/portfolio" title="Portfolio"><em>Portfolio</em> </a>
                            <a style={{ color: "#D6D8D9" }} href="/contact" title="Contact"><em>Contact</em></a>
                    </div>

                    <div  className="col">
                        <img className="logo" src={logo} alt="Logo"></img>
                    </div>

                    <div className="col">
                        <div>
                            <small>
                                Video by <a href="https://www.pexels.com/@digitech?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
                                    rel="noopener noreferrer" target="_blank"
                                    title="LogoMakr URL">
                                    Ruvim Miksanskiy
                            </a> from <a href="https://www.pexels.com/video/video-of-forest-1448735/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="LogoMakr URL">Pexels</a>.
                            </small>
                        </div>

                        <div>
                            <small>Created my free logo at <a href="https://Logomakr.com" rel="noopener noreferrer" target="_blank"
                                title="LogoMakr URL">LogoMakr.com</a>.</small>
                        </div>
                    </div>
                </Row>
            </footer>
        </div>
    );
};

export default Footer;