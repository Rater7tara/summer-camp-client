import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DancingDream | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='m-10'>
            <PopularClass></PopularClass>
            </div>
        </div>
    );
};

export default Home;