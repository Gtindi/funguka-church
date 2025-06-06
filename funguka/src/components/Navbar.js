import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      console.log("Scroll Y:", offset); // Debug
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky-top">
        {/* <div style={{ height: "2000px" }}>
            <h2>Scroll down to see the navbar change</h2>
        </div> */}
      {/* Top Info Bar */}
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <p className="mb-0 location">
                <span className="fa fa-map-marker mr-2"></span> 203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <nav
        id="ftco-navbar"
        className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light"
        style={{
            backgroundColor: scrolled ? "rgba(0, 0, 0, 0.95)" : "transparent",
            boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.3)" : "none",
            transition: "all 0.3s ease-in-out",
            padding: "1rem 0",
          }}
          
      >
        <div className="container">
          <Link className="navbar-brand" to="/">Salvation</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
              <li className="nav-item"><Link to="/ministries" className="nav-link">Ministries</Link></li>
              <li className="nav-item"><Link to="/sermons" className="nav-link">Sermons</Link></li>
              <li className="nav-item"><Link to="/events" className="nav-link">Events</Link></li>
              <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
              <li className="nav-item cta"><Link to="/donate" className="nav-link">Donate</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;