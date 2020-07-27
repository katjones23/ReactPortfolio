import React, { useState } from "react";
import projectList from "../projects.json"
import Section from "../components/Section"
import Row from "../components/Row"
import PortfolioCard from "../components/PortfolioCard"

function Portfolio() {
    const [projects, setProject] = useState(
        projectList.sort((proj1, proj2) => { return compare(proj1.id, proj2.id) }).slice(0, 5)
    )

    // to return in descending order so most recent is at top
    function compare(item1, item2) {
        if (item1 > item2) {
            return -1;
        }
        else if (item1 < item2) {
            return 1;
        }
        else {
            return 0;
        };
    };

    function handleOnClick(event) {
        const tab = event.target.dataset.text;
        let filteredProj = projects;

        switch (tab) {
            case "recent":
                filteredProj = projectList;
                filteredProj.sort((proj1, proj2) => { return compare(proj1.id, proj2.id) });
                break;
            case "front-end":
                filteredProj = projectList;
                filteredProj = filteredProj.filter(project => project.type === "front-end");
                filteredProj.sort((proj1, proj2) => { return compare(proj1.id, proj2.id) });
                break;
            case "back-end":
                filteredProj = projectList;
                filteredProj = filteredProj.filter(project => project.type === "back-end");
                filteredProj.sort((proj1, proj2) => { return compare(proj1.id, proj2.id) });
                break;
            case "full-stack":
                filteredProj = projectList;
                filteredProj = filteredProj.filter(project => project.type === "full-stack");
                filteredProj.sort((proj1, proj2) => { return compare(proj1.id, proj2.id) });
                break;
            default:
                filteredProj = projectList;
                filteredProj = filteredProj.filter(project => project.type === "front-end");
                filteredProj.sort((proj1, proj2) => { return compare(proj1.id, proj2.id) });
        };

        setProject(filteredProj.slice(0, 5));
    }

    return (
        <Section>
            <div className="portfolioMain card bg-light">

                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs" role="tablist">
                        <li className="nav-item">
                            <a onClick={handleOnClick} data-text="recent" className="nav-link portLink active" href="#recent" id="recent-tab" data-toggle="tab" role="tab" aria-controls="recent" aria-selected="true">Recent Projects</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleOnClick} data-text="front-end" className="nav-link portLink" href="#front" id="front-tab" data-toggle="tab" role="tab" aria-controls="front" aria-selected="false">Front-End</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleOnClick} data-text="back-end" className="nav-link portLink" href="#back" id="back-tab" data-toggle="tab" role="tab" aria-controls="back" aria-selected="false">Back-End</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleOnClick} data-text="full-stack" className="nav-link portLink" href="#full" id="full-tab" data-toggle="tab" role="tab" aria-controls="full" aria-selected="false">Full-Stack</a>
                        </li>
                    </ul>
                </div>

                <div className="card-body portCard">
                    <div className="tab-content" id="myTabContent">

                        <div className="tab-pane fade show active" id="recent" role="tabpanel" aria-labelledby="recent-tab">
                            <Row>
                                {projects.map(project => (
                                    <PortfolioCard key={project.id.toString()} {...project}></PortfolioCard>
                                ))}
                            </Row>
                        </div>

                        <div className="tab-pane fade" id="front" role="tabpanel" aria-labelledby="front-tab">
                            <Row>
                                {projects.map(project => (
                                    <PortfolioCard key={project.id.toString()} {...project}></PortfolioCard>
                                ))}
                            </Row>
                        </div>

                        <div className="tab-pane fade" id="back" role="tabpanel" aria-labelledby="back-tab">
                            <Row>
                                {projects.map(project => (
                                    <PortfolioCard key={project.id.toString()} {...project}></PortfolioCard>
                                ))}
                            </Row>
                        </div>

                        <div className="tab-pane fade" id="full" role="tabpanel" aria-labelledby="full-tab">
                            <Row>
                                {projects.map(project => (
                                    <PortfolioCard key={project.id.toString()} {...project}></PortfolioCard>
                                ))}
                            </Row>
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Portfolio;
