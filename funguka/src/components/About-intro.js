import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch, faPrayingHands, faHeart } from '@fortawesome/free-solid-svg-icons';

import about3 from "../assets/images/about-3.jpg";

const AboutIntro = () => {
    return(
        <div>
        <section className="ftco-section ftco-no-pb ftco-no-pt">
            <div className="container">
            <div className="row no-gutters">
                <div className="col-md-8 d-flex">
                <div className="row no-gutters">
                    {[
                        { icon: faChurch, title: "Worship", subtitle: "What to expect" },
                        { icon: faPrayingHands, title: "Connect", subtitle: "Contact Members" },
                        { icon: faHeart, title: "God's Love", subtitle: "Beliefs and History" },
                        ].map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="services-2">
                            <div className="icon">
                                <FontAwesomeIcon icon={service.icon} size="3x" style={{color:"black"}}/>
                            </div>
                            <div className="text">
                                <h4>{service.title}</h4>
                                <span className="subheading">{service.subtitle}</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            </div>
                            </div>
                        </div>
                        ))}
                </div>
                </div>
                <div className="col-md-4 d-flex">
                <div className="services-2 services-block">
                    <div className="text">
                    <h4>A Christian should live for the glory of God and the well-being of others.</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="ftco-section ftco-no-pt ftco-no-pb bg-light">
            <div className="container">
            <div className="row d-flex">
                <div className="col-md-6 d-flex">
                <div
                    className="img img-video d-flex align-self-stretch align-items-center justify-content-center mb-4 mb-sm-0"
                    style={{ backgroundImage: `url(${about3})` }}
                >
                </div>
                </div>
                <div className="col-md-6 pl-md-5 py-md-5">
                <div className="heading-section pt-md-5 mb-4">
                    <span className="subheading">Welcome to Salvation Church</span>
                    <h2 className="mb-5">Connect, Grow and Serve with Us</h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <p><a href="#" className="btn btn-primary">Learn More</a></p>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
};
export default AboutIntro;