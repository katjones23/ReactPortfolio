import React from "react";
import "./style.css";

const Footer = () => {
    return (
        <div className="fixed-bottom">
            <footer id="myFooter" className="py-4 text-white-50 navbar">

                <div className="d-flex justify-content-start">
                    <small>&copy; <small id="copyrightYear">{(new Date().getFullYear())}</small> Katherine Jones</small>
                </div>

                <div className="d-flex justify-content-end">
                    <small>Created my free logo at <a href="https://Logomakr.com" rel="noopener noreferrer" target="_blank"
                        title="LogoMakr URL">LogoMakr.com</a></small>
                </div>

            </footer>
        </div>
    );
};

export default Footer;