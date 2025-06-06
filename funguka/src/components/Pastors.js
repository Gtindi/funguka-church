import React from 'react';
import staff1 from "../assets/images/staff-1.jpg";
import staff2 from "../assets/images/staff-2.jpg";
import staff3 from "../assets/images/staff-3.jpg";
import staff4 from "../assets/images/staff-4.jpg";

const Pastors = () => {
    return(
        <div>
            <section class="ftco-section">
            <div class="container">
            <div class="row justify-content-center pb-5 mb-3">
                <div class="col-md-7 heading-section text-center">
                <span class="subheading">Pastors</span>
                <h2>Our Pastors</h2>
            </div>
            </div>
            <div class="row">
            <div class="col-md-6 col-lg-3">
                <div class="staff">
                <div class="img" style={{ backgroundImage: `url(${staff1})` }}></div>
                <div class="text text-1">
                <h3>Alex Martin</h3>
                <span>Bible Pastor</span>
                </div>
            </div>
            </div>
            <div class="col-md-6 col-lg-3">
            <div class="staff">
            <div class="img" style={{ backgroundImage: `url(${staff2})` }}></div>
            <div class="text text-2">
                <h3>Cedrick Brown</h3>
                <span>Bible Pastor</span>
            </div>
            </div>
            </div>
            <div class="col-md-6 col-lg-3">
            <div class="staff">
            <div class="img" style={{ backgroundImage: `url(${staff3})` }}></div>
            <div class="text text-3">
                <h3>John Wick</h3>
                <span>Bible Pastor</span>
            </div>
            </div>
            </div>
            <div class="col-md-6 col-lg-3">
            <div class="staff">
            <div class="img" style={{ backgroundImage: `url(${staff4})` }}></div>
            <div class="text text-4">
                <h3>Max Love</h3>
                <span>Bible Pastor</span>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
        </div>
    );
};
export default Pastors;