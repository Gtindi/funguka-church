import React from "react";
import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";
import person4 from "../assets/images/person_4.jpg";

const Testimony = () => {
    return(
        <div className="Testimony">
            <section className="ftco-section testimony-section">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col-md-7 heading-section heading-section-white text-center">
                            <span className="subheading">Testimony</span>
                            <h2>Transform Lives</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="carousel-testimony owl-carousel">
                                <div className="item">
                                    <div className="testimony-wrap d-md-flex">
                                        <div className="user-img" style={{backgroundImage:`url(${person1})`}}>
                                        </div>
                                        <div className="text pl-md-4">
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="fa fa-quote-left"></i>
                                            </span>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Michael Fox</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap d-md-flex">
                                        <div className="user-img" style={{backgroundImage:`url(${person2})`}}>
                                        </div>
                                        <div className="text pl-md-4">
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="fa fa-quote-left"></i>
                                            </span>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Mike Shawn</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap d-md-flex">
                                        <div className="user-img" style={{backgroundImage:`url(${person3})`}}>
                                        </div>
                                        <div className="text pl-md-4">
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="fa fa-quote-left"></i>
                                            </span>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Mark Smith</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap d-md-flex">
                                        <div className="user-img" style={{backgroundImage:`url(${person4})`}}>
                                        </div>
                                        <div className="text pl-md-4">
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="fa fa-quote-left"></i>
                                            </span>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Kyle Meyer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap d-md-flex">
                                        <div className="user-img" style={{backgroundImage:`url(${person1})`}}>
                                        </div>
                                        <div className="text pl-md-4">
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="fa fa-quote-left"></i>
                                            </span>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">John Doe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};
export default Testimony;