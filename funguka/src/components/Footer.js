import React from 'react';
import image1 from '../assets/images/image_1.jpg';
import image2 from '../assets/images/image_2.jpg';

const Footer = () => {
    return(
        <div className="Footer">
            <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                        <h2 className="footer-heading">Salvation</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <ul className="ftco-footer-social p-0">
                            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fa fa-twitter"></span></a></li>
                            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="fa fa-facebook"></span></a></li>
                            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fa fa-instagram"></span></a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                        <h2 className="footer-heading">Latest News</h2>
                        <div className="block-21 mb-4 d-flex">
                            <a className="img mr-4 rounded" style={{backgroundImage:`url(${image1})`}}></a>
                            <div className="text">
                                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                                <div className="meta">
                                    <div><a href="#">Aug. 10, 2020</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#">19</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="block-21 mb-4 d-flex">
                            <a className="img mr-4 rounded" style={{backgroundImage:`url(${image2})`}}></a>
                            <div className="text">
                                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                                <div className="meta">
                                    <div><a href="#">Aug. 10, 2020</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#">19</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
                        <h2 className="footer-heading">Quick Links</h2>
                        <ul className="list-unstyled">
                            <li><a href="#" className="py-2 d-block">Home</a></li>
                            <li><a href="#" className="py-2 d-block">About</a></li>
                            <li><a href="#" className="py-2 d-block">Sermons</a></li>
                            <li><a href="#" className="py-2 d-block">Events</a></li>
                            <li><a href="#" className="py-2 d-block">Blog</a></li>
                            <li><a href="#" className="py-2 d-block">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                        <h2 className="footer-heading">Have a Questions?</h2>
                        <div className="block-23 mb-3">
                            <ul>
                                <li><span className="icon fa fa-map"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                <li><a href="#"><span className="icon fa fa-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                                <li><a href="#"><span className="icon fa fa-paper-plane"></span><span className="text"><span className="__cf_email__" data-cfemail="452c2b232a053c2a3037212a28242c2b6b262a28">[email&#160;protected]</span></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <p className="copyright">
                                Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;