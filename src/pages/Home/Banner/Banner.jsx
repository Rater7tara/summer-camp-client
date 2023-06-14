import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css';
import { Link } from 'react-router-dom';
import "@lottiefiles/lottie-player";
import dance from '../../../assets/dance.json';
import Lottie from "lottie-react";

import img1 from '../../../assets/Banner/banner.png';
import img2 from '../../../assets/Banner/banner (2).jpg';
import img3 from '../../../assets/Banner/banner (3).jpg';
import img4 from '../../../assets/Banner/banner (4).jpg';
import img5 from '../../../assets/Banner/banner (5).jpg';


const Banner = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src={img4} />
          <div className="legend bg-blue-300">
            <h3 className="mb-5 text-5xl font-bold text-white">WE'LL TEACH YOU TO</h3>
            <p className="mb-5 text-9xl font-bold text-white">DANCE!</p>
          </div>

        </div>
        <div>
          <img className='banner' src={img3} />
          <div className="legend">
            <p className="text-2xl font-bold text-white">The best</p>
          <h3 className="mb-5 text-5xl font-bold text-white">Summer Camp!</h3>
        <p className='mb-5 text-2xl text-white'>Sign up now to receive a 25-minute taster lesson - Completely free!</p>
        <button className='btn btn-info'>Enroll Now</button>
          </div>
        </div>
        <div>
          <img className='banner' src={img2} />
          <div className="legend">
            <h3 className="mb-5 text-6xl font-bold text-white">Make Your Summer</h3>
            <p className="mb-5 text-3xl font-bold text-white">Unforgettable!</p>
          </div>
        </div>
        <div>
          <img className='banner' src={img1} />
          <div className="legend">
          <h3 className="mb-5 text-4xl font-bold text-white">Welcome New Students!</h3>
        <p className='mb-5 text-2xl text-white'>Sign up now to receive a 25-minute taster lesson - completely free!</p>
        <button className='btn btn-info'>Sign up Now</button>
          </div>
        </div>
        <div>
          <img className='banner' src={img5} />
          <div className="legend">
            <h3 className="mb-5 text-5xl font-bold text-white">WE'LL TEACH YOU TO</h3>
            <p className="mb-5 text-9xl font-bold text-white">DANCE</p>
          </div>
        </div>
      </Carousel>
      <div className='bg-blue-400 flex'>
  <div className='w-96'>
    <Lottie
      animationData={dance}
      loop={true}
      options={{
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice', // Adjust as per your animation's aspect ratio
        },
        width: 400, // Adjust to your preference
        height: 400, // Adjust to your preference
      }}
    />
  </div>
  <div className='w-1/2 flex flex-col justify-center text-center'>
    <h3 className="mb-5 text-4xl font-bold text-white">Welcome New Students!</h3>
    <p className='mb-5 text-2xl text-white'>Sign up now to receive a 25-minute taster lesson - completely free!</p>
    <Link className="btn btn-info mt-10" to='/register'>CLICK TO SIGN UP!</Link>
  </div>
</div>

    </>
  );
};

export default Banner;