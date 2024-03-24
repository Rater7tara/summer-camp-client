// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './Banner.css';
// import { Link } from 'react-router-dom';
// // import "@lottiefiles/lottie-player";
// // import dance from '../../../assets/dance.json';
// // import Lottie from "lottie-react";

// import img1 from '../../../assets/Banner/banner.png';
// import img2 from '../../../assets/Banner/banner (2).jpg';
// import img3 from '../../../assets/Banner/banner (3).jpg';
// import img4 from '../../../assets/Banner/banner (4).jpg';
// import img5 from '../../../assets/Banner/banner (5).jpg';


// const Banner = () => {
//   return (
//     <>
//       <Carousel>
//         <div>
//           <img src={img4} />
//           <div className="legend bg-blue-300">
//             <h3 className="mb-5 text-5xl font-bold text-white">WE'LL TEACH YOU TO</h3>
//             <p className="mb-5 text-9xl font-bold text-white">DANCE!</p>
//           </div>

//         </div>
//         <div>
//           <img className='banner' src={img3} />
//           <div className="legend">
//             <p className="text-2xl font-bold text-white">The best</p>
//           <h3 className="mb-5 text-5xl font-bold text-white">Summer Camp!</h3>
//         <p className='mb-5 text-2xl text-white'>Sign up now to receive a 25-minute taster lesson - Completely free!</p>
//         <button className='btn btn-info'>Enroll Now</button>
//           </div>
//         </div>
//         <div>
//           <img className='banner' src={img2} />
//           <div className="legend">
//             <h3 className="mb-5 text-6xl font-bold text-white">Make Your Summer</h3>
//             <p className="mb-5 text-3xl font-bold text-white">Unforgettable!</p>
//           </div>
//         </div>
//         <div>
//           <img className='banner' src={img1} />
//           <div className="legend">
//           <h3 className="mb-5 text-4xl font-bold text-white">Welcome New Students!</h3>
//         <p className='mb-5 text-2xl text-white'>Sign up now to receive a 25-minute taster lesson - completely free!</p>
//         <button className='btn btn-info'>Sign up Now</button>
//           </div>
//         </div>
//         <div>
//           <img className='banner' src={img5} />
//           <div className="legend">
//             <h3 className="mb-5 text-5xl font-bold text-white">WE'LL TEACH YOU TO</h3>
//             <p className="mb-5 text-9xl font-bold text-white">DANCE</p>
//           </div>
//         </div>
//       </Carousel>
//       <div className='bg-blue-400 flex'>
//   <div className='w-96'>
//     {/* <Lottie
//       animationData={dance}
//       loop={true}
//       options={{
//         rendererSettings: {
//           preserveAspectRatio: 'xMidYMid slice', // Adjust as per your animation's aspect ratio
//         },
//         width: 400, // Adjust to your preference
//         height: 400, // Adjust to your preference
//       }}
//     /> */}
//   </div>
//   {/* <div className='w-1/2 flex flex-col justify-center text-center'>
//     <h3 className="mb-5 text-4xl font-bold text-white">Welcome New Students!</h3>
//     <p className='mb-5 text-2xl text-white'>Sign up now to receive a 25-minute faster lesson - completely free!</p>
//     <Link className="btn btn-info mt-10" to='/register'>CLICK TO SIGN UP!</Link>
//   </div> */}
// </div>

//     </>
//   );
// };

// export default Banner;


import React, { useEffect, useState } from "react";

import { Slide } from "react-awesome-reveal";
import ButtonFill from "../../../components/ButtonFill/ButtonFill";

const backgrounds = [
  
  "url(https://i.ibb.co/HtYrqkQ/young-beautiful-couple-dancing-with-passion-min.jpg)",
  "url(https://i.ibb.co/r7k9VHZ/ballet-dancer-classic-ballerina-dancing-isolated-dark-background-min.jpg)",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAnimation(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
        );
        setShowAnimation(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(timer); // Clear the timer on component unmount
  }, []);
  const backgroundStyle = {
    backgroundImage: backgrounds[currentIndex],
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 1s", // Set transition duration to 500ms
    transform: showAnimation ? "scale(1.03)" : "scale(1)",
  };
  return (
    <div className="w-full h-[60vh] lg:h-screen overflow-hidden">
      <div className="w-full h-full" style={backgroundStyle}>
        <div className="h-full max-w-[1520px] mx-auto flex justify-start items-center relative">
          <div className="max-w-[700px] space-y-4 md:space-y-8 md:mt-16 px-4 2xl:px-0 overflow-hidden">
          <Slide>
          <h1 className="text-4xl lg:text-7xl font-kanit font-extrabold text-white ms-5">
            Let Yourself Be Challenged
      </h1>
      </Slide>
            <p className="text-[#b8b8b8] font-kanit ms-5">
              Unleash your inner strength and embrace the art of mastery with our Karate training program. Join us on a journey of discipline, focus, and self-defense techniques, guided by experienced instructors.
            </p>
            <div className="flex gap-4 ms-5">
              <ButtonFill name="Contact Us"></ButtonFill>
              <button className="btn-orange btn btn-outline py-2 rounded-full font-kanit hover:animate-pulse transition-all duration-300 text-white flex justify-center items-center bg-opacity-10 bg-slate-400">More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
