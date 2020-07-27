import React from "react";
import "./style.css";

const Image = ({source, altTxt}) => {
    return (
       <img src={source} alt={altTxt} className="portImg"></img>
    );
};

export default Image;