import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const OurGallery = () => {
    return (
        <div>
            
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-8">
            <SectionTitle heading='Gallery' subHeading='Summer Camp Dance'></SectionTitle>
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={'https://i.ibb.co/n689vf3/istockphoto-483396427-612x612.jpg'} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={'https://i.ibb.co/BLFpbKG/ballet.png'} />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={'https://i.ibb.co/VB7TG7m/teacher-home-nrithyavriksha-online-bharathanatyam-dance-className-from-mythili-narasimhan-grand-student.jpg'} />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={'https://i.ibb.co/t30NLhs/ballet-ballerina-ballet-tutu-dancer.jpg'} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={'https://i.ibb.co/JngcmJk/images-1.jpg'} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={'https://i.ibb.co/fSVyCxF/istockphoto-522420191-612x612.jpg'} />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default OurGallery;