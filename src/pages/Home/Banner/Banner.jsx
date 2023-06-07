import React from 'react';

const Banner = () => {
    return (
        <>
        <div className="hero min-h-screen" style={{backgroundImage: `url("https://i.ibb.co/kBYD98M/ballet-dancer-ties-up-slippers.jpg")`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h3 className="mb-5 text-4xl font-bold text-white">WE'LL TEACH YOU TO</h3>
      <p className="mb-5 text-9xl font-bold text-white">DANCE</p>
    </div>
    
  </div>
  
</div>
<div className='bg-blue-500 text-center py-6'>
      <h3 className="mb-5 text-5xl font-bold text-white">Welcome New Students!</h3>
      <p className='mb-5 text-3xl text-white'>Sign up now to receive a 25-minute taster lesson - completely free!</p>
      <button className="btn btn-primary">CLICK TO SIGN UP!</button>
      </div>
</>
    );
};

export default Banner;