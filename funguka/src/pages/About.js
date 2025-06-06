import React from 'react';
// import { Link } from 'react-router-dom';

import Header from "../components/About-header";
import Intro from "../components/About-intro";
import Count from "../components/Count";
import Pastors from '../components/Pastors';
import Testimony from '../components/Testimony';
import Gallery from '../components/Gallery';

const Home = () => {
    return(
        <div>
            <Header />
            <Intro />
            <Count />
            <Pastors />
            <Testimony />
            <Gallery />
        </div>
    );
};
export default Home;