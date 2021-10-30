import React from 'react';
import Advantages from '../Advantages/Advantages';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Advantages></Advantages>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;