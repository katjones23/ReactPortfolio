import React from "react";
// import "./style.css";

const Image = ({source}) => {
    return (
       <img src={`../images/${source}`} alt="projectgif" className="portImg"></img>
    );
};

export default Image;