import React from "react";
import video from "../../images/background-video.mp4"
import classes from "./BackgroundVideo.module.css";

const BackgroundVideo = ({ children }) => {
    
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo