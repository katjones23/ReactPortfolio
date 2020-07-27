import React from "react";
import PortImage from "../PortImage"

const PortfolioCard = ({ projectname, description, image, sitelink, repolink }) => {
    let returnCode = ""

    if (sitelink === repolink) {
        returnCode = <div className="col-md-6 col-sm-12 card text-center bg-light">
        <h5 className="card-header">{projectname}</h5>
        <PortImage source={require("../../images/" + image)} altTxt={projectname} />
        <p className="card-body portText">{description}</p>
        <a className="repoLink" href={repolink} title="RepoLink" rel="noopener noreferrer" target="_blank">Repo Link</a>
    </div>
    } else {
        returnCode = <div className="col-md-6 col-sm-12 card text-center bg-light">
            <h5 className="card-header">{projectname}</h5>
            <PortImage source={require("../../images/" + image)} altTxt={projectname} />
            <p className="card-body portText">{description}</p>
            <a href={sitelink} title="SiteLink" rel="noopener noreferrer" target="_blank">Site Link</a>
            <a className="repoLink" href={repolink} title="RepoLink" rel="noopener noreferrer" target="_blank">Repo Link</a>
        </div>
    }

    return (returnCode);
};

export default PortfolioCard;