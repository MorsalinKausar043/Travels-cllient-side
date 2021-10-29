import React from 'react';
import Carousel from './carousel/Carousel';
import Home1stsec from './Home1stsec';
import Home2ndsec from './Home2ndsec';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <Carousel />
            <Services/>
            <Home2ndsec/>
            <Home1stsec/>
        </>
    );
};

export default Home;