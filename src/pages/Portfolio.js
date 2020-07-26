import React, { useState } from "react";
import projectList from "../projects.json"

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
        <section className="container d-flex flex-column">
            <div className="portfolioCard card bg-light">

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
                        <div className="tab-pane fade show active" id="front" role="tabpanel" aria-labelledby="front-tab">
                            <div className="row">
                                {projects.map(project => (
                                    <div key={project.id.toString()} className="col-md-4 col-sm-12 card text-center bg-light">
                                        <h5 className="card-header">{project.projectname}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tab-pane fade" id="back" role="tabpanel" aria-labelledby="back-tab">
                            {projects.map(project => (
                                <p key={project.id.toString()} className="projectName">{project.projectname}</p>
                            ))}
                        </div>

                        <div className="tab-pane fade" id="full" role="tabpanel" aria-labelledby="full-tab">
                            {projects.map(project => (
                                <p key={project.id.toString()} className="projectName">{project.projectname}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
