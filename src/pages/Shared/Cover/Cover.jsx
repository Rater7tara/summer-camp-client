import React from 'react';
import { Parallax } from 'react-parallax';
import img from '../../../assets/instructor/danceheader.png';

const Cover = () => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the intructor"
        strength={100}
    >
        <div>
            <div className="hero h-[650px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Our Instructors</h1>
      <p className="mb-5">Make you Summer Unforgettable With Us.</p>
      <button className="btn btn-info">Enroll Now!</button>
    </div>
  </div>
</div>
        </div>
    </Parallax>
        
    );
};

export default Cover;