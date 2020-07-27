import React from "react";

const Section = (props) => {
    return (
        <section className="container d-flex flex-column">
            <div className="row justify-content-center">
                {props.children}
            </div>
        </section>
    );
};

export default Section;