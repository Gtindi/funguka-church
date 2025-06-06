import React from 'react';
// import { Link } from 'react-router-dom';

import Header from "../components/Header";
import Count from "../components/Count";
import Sermon from "../components/Sermon";
import Blog from "../components/Blog";
import Gallery from "../components/Gallery";
import Events from "../components/Events";
import Testimony from "../components/Testimony";

const Home = () => {
    return(
        <div>
            <Header />
            <Count />
            <Sermon />
            <Testimony />
            <Blog />
            <Events />
            <Gallery />
        </div>
    );
};
export default Home;