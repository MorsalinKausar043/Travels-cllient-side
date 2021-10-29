import React from 'react';
import Carousel from './carousel/Carousel';
import Home1stsec from './Home1stsec';
import Home2ndsec from './Home2ndsec';

const Home = () => {
    return (
        <>
            <Carousel/>
            <Home2ndsec/>
            <Home1stsec/>
        </>
    );
};

export default Home;