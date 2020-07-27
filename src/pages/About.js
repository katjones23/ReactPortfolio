import React from "react";
import profile from "../images/profile.jpg"
import Section from "../components/Section"
import Row from "../components/Row"

const About = () => {
    return (
        <Section id="aboutSec">
            <div className="col-md-8 col-sm-2 about-me">
                <Row>
                    <img src={profile} className="img-fluid profile" alt="Katherine Jones"></img>

                    <p className="about-me-text">I am Katherine, also known as Kat. I am a Full-Stack Developer, and particularly enjoy
                    working on the logic behind the site or application. I have a background in working with platform
                    administration, and a degree in Chinese Language and Literature. My education and my work has helped me
                        develop an appreciation for technology and a more global, cross-cultural perspective.</p>

                    <p className="about-me-text"> Outside of my career, I am passionate about rescue animals. I also enjoy knitting, video
                        games, and tabletop games.</p>

                    <p className="skills-text">JavaScript | HTML | CSS | jQuery | Bootstrap | Materialize | Node | Express | MySql | Sequelize | MongoDB | Mongoose | React | NPM | Git Bash | GitHub</p>

                </Row>
            </div>
        </Section>
    );
};

export default About;
