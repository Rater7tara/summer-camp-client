import React from 'react';
import './PopularClass.css';
import img1 from '../../../assets/class/break.jpg';
import img2 from '../../../assets/class/couple.jpg';
import img3 from '../../../assets/class/disco.jpg';
import img4 from '../../../assets/class/indian.jpg';
import img5 from '../../../assets/class/jazzz.jpg';
import img6 from '../../../assets/class/modern.jpg';

const PopularClass = () => {
    return (
        <div className='rounded-lg bg-slate-950 py-6'>
            <div className='text-center'>
                <h1 className='text-6xl text-white my-4 font-bold'>Our Popular Classes</h1>
                <p className='text-1xl text-orange-500 my-4 font-bold'>Choose your Style</p>
            </div>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6 '>

                <div className="avatar relative inline-flex w-fit">


                    <div className="container  rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
                        <img src={img1} class="image" />
                        <div class="middle">
                            <div class="text text-6xl"><button>+</button></div>
                        </div>
                    </div>
                    <span className="absolute bottom-7 right-0 top-auto z-10 inline-block rotate-0 p-2.5 bg-orange-500 text-md text-white font-bold uppercase">Break Dance</span>

                </div>
                <div className="avatar relative inline-flex w-fit">
                    <div className="container  rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
                    <img src={img2} class="image" />
                        <div class="middle">
                            <div class="text text-6xl"><button>+</button></div>
                        </div>
                    </div>
                    <span className="absolute bottom-7 right-0 top-auto z-10 inline-block rotate-0 p-2.5 bg-orange-500 text-md text-white font-bold uppercase">Couple Dance</span>
                </div>
                <div className="avatar relative inline-flex w-fit">
                    <div className="container  rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
                    <img src={img3} class="image" />
                        <div class="middle">
                            <div class="text text-6xl"><button>+</button></div>
                        </div>
                    </div>
                    <span className="absolute bottom-7 right-0 top-auto z-10 inline-block rotate-0 p-2.5 bg-orange-500 text-md text-white font-bold uppercase">Disco Dance</span>
                </div>
                <div className="avatar relative inline-flex w-fit">
                    <div className="container  rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
                    <img src={img4} class="image" />
                        <div class="middle">
                            <div class="text text-6xl"><button>+</button></div>
                        </div>
                    </div>
                    <span className="absolute bottom-7 right-0 top-auto z-10 inline-block rotate-0 p-2.5 bg-orange-500 text-md text-white font-bold uppercase">Indian Dance</span>
                </div>
                <div className="avatar relative inline-flex w-fit">
                    <div className="container  rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
                    <img src={img6} class="image" />
                        <div class="middle">
                            <div class="text text-6xl"><button>+</button></div>
                        </div>
                    </div>
                    <span className="absolute bottom-7 right-0 top-auto z-10 inline-block rotate-0 p-2.5 bg-orange-500 text-md text-white font-bold uppercase">Modern Dance</span>
                </div>
                <div className="avatar relative inline-flex w-fit">
                    <div className="container  rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
                    <img src={img5} class="image" />
                        <div class="middle">
                            <div class="text text-6xl"><button>+</button></div>
                        </div>
                    </div>
                    <span className="absolute bottom-7 right-0 top-auto z-10 inline-block rotate-0 p-2.5 bg-orange-500 text-md text-white font-bold uppercase">Jazz Funk</span>
                </div>
            </div>
        </div>
    );
};

export default PopularClass;