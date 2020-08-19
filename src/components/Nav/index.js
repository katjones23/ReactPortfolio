import React from "react";
import "./style.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark navbarCustom">
            <div className="container">
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand" id="name">KATHERINE JONES</div>
                <div className="collapse navbar-collapse ml-auto" id="navbarNav">


                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/about" title="About">ABOUT</a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/portfolio" title="Portfolio">PORTFOLIO</a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/contact" title="Contact">CONTACT</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Nav;






