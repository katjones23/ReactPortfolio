import React from "react";

const Portfolio = () => {
    return (
        <section className="container d-flex flex-column">
            <div class="portfolioCard card text-center bg-light">

                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link portLink active" href="#front" id="front-tab" data-toggle="tab" role="tab" aria-controls="front" aria-selected="true">Front-End</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link portLink" href="#back" id="back-tab" data-toggle="tab" role="tab" aria-controls="back" aria-selected="false">Back-End</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link portLink" href="#full" id="full-tab" data-toggle="tab" role="tab" aria-controls="full" aria-selected="false">Full-Stack</a>
                        </li>
                    </ul>
                </div>

                <div class="card-body portCard">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="front" role="tabpanel" aria-labelledby="front-tab">Front-end</div>
                        <div class="tab-pane fade" id="back" role="tabpanel" aria-labelledby="back-tab">Back-end</div>
                        <div class="tab-pane fade" id="full" role="tabpanel" aria-labelledby="full-tab">Full-stack</div>
                    </div>
                </div>
            </div>
        </section>  
    );
};

export default Portfolio;
