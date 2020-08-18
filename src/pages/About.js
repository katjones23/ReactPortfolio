import React, { useEffect } from "react";
import profile from "../images/profile.jpg"
import Section from "../components/Section"
import Row from "../components/Row"
import BackgroundVideo from "../components/BackgroundVideo"
import AOS from "aos"
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div className="aboutSec">
            <BackgroundVideo>
                <Section>
                    <div>
                        <img src={profile} className="img-fluid profileImg" alt="Katherine Jones"></img>
                        <h3>Katherine Jones</h3>
                        <p>Full-Stack Developer</p>
                    </div>
                </Section>
            </BackgroundVideo>

            <Section className="aboutMe">
                <h2 data-aos="fade-down" className="aboutHeader">Welcome</h2>

                <p data-aos="fade-left" className="abouMeText">
                    Full-Stack Developer in the greater Atlanta area.  I particularly enjoy
                    working on the logic behind the site or application. I have a background in working with platform
                    administration, and a degree in Chinese Language and Literature. My education and my work has helped me
                    develop an appreciation for technology and a more global, cross-cultural perspective.
                    </p>

                <p data-aos="fade-right" className="abouMeText">
                    Beyond coding, I enjoy knitting, video games, and tabletop games, usually with a cat getting in the way.
                    </p>

                <div data-aos="fade-up" className="skillsBox col-9">
                <i style={{justifySelf: "center"}} className="fas fa-code fa-2x"></i>
                    <h4 style={{textAlign: "center"}} className="skillsText">Skills</h4>
                    <Row>
                    <ul className="skillsList col">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                    </ul>
                    <ul className="skillsList col">
                        <li>Node</li>
                        <li>Express</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>JSON</li>
                    </ul>
                    <ul className="skillsList col">
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                    </ul>
                    </Row>
                </div>
            </Section>
        </div>
    );
};


export default About;
