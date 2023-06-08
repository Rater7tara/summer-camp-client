import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopInstructors from './PopInstructors/PopInstructors/PopInstructors';
import Popular from './Popular/Popular';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DancingDream | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='m-10'>
            <Popular></Popular>
            </div>
            <div className='m-10'>
            <PopInstructors></PopInstructors>
            </div>
        </div>
    );
};

export default Home;