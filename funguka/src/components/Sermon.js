import React from 'react';
import sermon1 from '../assets/images/sermon-1.png';
import sermon2 from '../assets/images/sermon-2.png';
import sermon3 from '../assets/images/sermon-3.png';

import '../assets/css/animate.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/owl.theme.default.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/bootstrap-datepicker.css';
import '../assets/css/jquery.timepicker.css';
import '../assets/css/style.css';
import '../assets/css/sermonFix.css';

const Sermon = () => {
    return (
        <div>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center">
                            <span className="subheading">Our Sermons</span>
                            <h2>Watch and Listen to our Sermons</h2>
                        </div>
                    </div>

                    {/* First Sermon */}
                    <div className="row no-gutters d-flex sermon-wrap bg-light">
                        <div className="col-md-6 d-flex align-items-stretch js-fullheight">
                            <a href="#" className="img" style={{ backgroundImage: `url(${sermon1})` }}></a>
                        </div>
                        <div className="col-md-6 py-4 py-md-5 d-flex align-items-center">
                            <div className="text p-md-5">
                                <h2 className="mb-4"><a href="sermon.html">God Wants To Do A New Thing In Your Life</a></h2>
                                <div className="meta">
                                    <p>
                                        <span>Speaker: <a href="#" className="ptr">Dr. Rolando Henderson</a></span>
                                        <span>Categories: <a href="#">God</a>, <a href="#">Pray</a>, <a href="#">Faith</a></span>
                                        <span><a href="#">On Sunday 13 Jan, 2019</a></span>
                                    </p>
                                </div>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p className="mt-4 btn-customize">
                                    <a href="https://vimeo.com/45830194" className="btn btn-primary px-4 py-3 mr-md-2 popup-vimeo">
                                        <span className="fa fa-play"></span> Watch Sermons
                                    </a>
                                    <a href="#" className="btn btn-primary btn-outline-primary px-4 py-3 ml-lg-2">
                                        <span className="fa fa-download"></span> Download Sermons
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Sermon */}
                    <div className="row no-gutters d-flex sermon-wrap bg-light">
                        <div className="col-md-6 d-flex align-items-stretch js-fullheight order-md-last">
                            <a href="#" className="img" style={{ backgroundImage: `url(${sermon2})` }}></a>
                        </div>
                        <div className="col-md-6 py-4 py-md-5 d-flex align-items-center">
                            <div className="text p-md-5">
                                <h2 className="mb-4"><a href="sermon.html">God Wants To Do A New Thing In Your Life</a></h2>
                                <div className="meta">
                                    <p>
                                        <span>Speaker: <a href="#" className="ptr">Dr. Rolando Henderson</a></span>
                                        <span>Categories: <a href="#">God</a>, <a href="#">Pray</a>, <a href="#">Faith</a></span>
                                        <span><a href="#">On Sunday 13 Jan, 2019</a></span>
                                    </p>
                                </div>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p className="mt-4 btn-customize">
                                    <a href="https://vimeo.com/45830194" className="btn btn-primary px-4 py-3 mr-md-2 popup-vimeo">
                                        <span className="fa fa-play"></span> Watch Sermons
                                    </a>
                                    <a href="#" className="btn btn-primary btn-outline-primary px-4 py-3 ml-lg-2">
                                        <span className="fa fa-download"></span> Download Sermons
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Third Sermon */}
                    <div className="row no-gutters d-flex sermon-wrap bg-light">
                        <div className="col-md-6 d-flex align-items-stretch js-fullheight">
                            <a href="#" className="img" style={{ backgroundImage: `url(${sermon3})` }}></a>
                        </div>
                        <div className="col-md-6 py-4 py-md-5 d-flex align-items-center">
                            <div className="text p-md-5">
                                <h2 className="mb-4"><a href="sermon.html">God Wants To Do A New Thing In Your Life</a></h2>
                                <div className="meta">
                                    <p>
                                        <span>Speaker: <a href="#" className="ptr">Dr. Rolando Henderson</a></span>
                                        <span>Categories: <a href="#">God</a>, <a href="#">Pray</a>, <a href="#">Faith</a></span>
                                        <span><a href="#">On Sunday 13 Jan, 2019</a></span>
                                    </p>
                                </div>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p className="mt-4 btn-customize">
                                    <a href="https://vimeo.com/45830194" className="btn btn-primary px-4 py-3 mr-md-2 popup-vimeo">
                                        <span className="fa fa-play"></span> Watch Sermons
                                    </a>
                                    <a href="#" className="btn btn-primary btn-outline-primary px-4 py-3 ml-lg-2">
                                        <span className="fa fa-download"></span> Download Sermons
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sermon;