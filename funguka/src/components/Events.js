import React from 'react';
import Event1 from '../assets/images/event-1.jpg';
import Event2 from '../assets/images/event-2.jpg';
import Event3 from '../assets/images/event-3.jpg';

const Events = () => {
    return(
        <div className="Events">
            <section className="ftco-section ftco-no-pt">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center">
                            <span className="subheading">Events</span>
                            <h2>Latest Events</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 event-wrap d-md-flex">
                            <div className="img" style={{backgroundImage:`url(${Event1})`}}></div>
                            <div className="text p-4 px-md-5 d-flex align-items-center">
                                <div className="desc">
                                    <h2 className="mb-4"><a href="sermons.html">Giving Hope to Our Spiritual Needs</a></h2>
                                    <div className="meta">
                                        <p>
                                            <span><i className="fa fa-calendar mr-2"></i> Monday, 8:00 Am - Tuesday, 8:00 Pm</span>
                                            <span><i className="fa fa-map-marker mr-2"></i> <a href="#">Salvation Church</a></span>
                                            <span><i className="fa fa-building mr-2"></i> 203 Fake St. Mountain View, San Francisco, California, USA</span>
                                        </p>
                                    </div>
                                    <p><a href="sermons.html" className="btn btn-primary">More Details</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 event-wrap d-md-flex">
                            <div className="img" style={{backgroundImage:`url(${Event2})`}}></div>
                            <div className="text p-4 px-md-5 d-flex align-items-center">
                                <div className="desc">
                                    <h2 className="mb-4"><a href="sermons.html">Giving Hope to Our Spiritual Needs</a></h2>
                                    <div className="meta">
                                        <p>
                                            <span><i className="fa fa-calendar mr-2"></i> Monday, 8:00 Am - Tuesday, 8:00 Pm</span>
                                            <span><i className="fa fa-map-marker mr-2"></i> <a href="#">Salvation Church</a></span>
                                            <span><i className="fa fa-building mr-2"></i> 203 Fake St. Mountain View, San Francisco, California, USA</span>
                                        </p>
                                    </div>
                                    <p><a href="sermons.html" className="btn btn-primary">More Details</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 event-wrap d-md-flex">
                            <div className="img" style={{backgroundImage:`url(${Event3})`}}></div>
                            <div className="text p-4 px-md-5 d-flex align-items-center">
                                <div className="desc">
                                    <h2 className="mb-4"><a href="sermons.html">Giving Hope to Our Spiritual Needs</a></h2>
                                    <div className="meta">
                                        <p>
                                            <span><i className="fa fa-calendar mr-2"></i> Monday, 8:00 Am - Tuesday, 8:00 Pm</span>
                                            <span><i className="fa fa-map-marker mr-2"></i> <a href="#">Salvation Church</a></span>
                                            <span><i className="fa fa-building mr-2"></i> 203 Fake St. Mountain View, San Francisco, California, USA</span>
                                        </p>
                                    </div>
                                    <p><a href="sermons.html" className="btn btn-primary">More Details</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Events;