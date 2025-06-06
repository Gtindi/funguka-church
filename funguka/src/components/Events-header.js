import React from "react";
import bg1 from "../assets/images/bg_1.jpg";

const EventsHeader = () => {
    return(
        <div>
            <section className="hero-wrap" style={{ zIndex: "0" }}>
                <div className="slider-item" style={{ backgroundImage: `url(${bg1})` }} >
                <div className="overlay"></div>
                <div className="slider-text0">
                <p class="breadcrumbs mb-2"><span class="mr-2"><a href="index.html">Home <i class="fa fa-chevron-right"></i></a></span> <span>Events<i class="fa fa-chevron-right"></i></span></p>
                <h1 class="mb-0 bread" style={{ color : "white" }}>Events</h1>
                </div>
                </div>
            </section>
        </div>
    );
};
export default EventsHeader;