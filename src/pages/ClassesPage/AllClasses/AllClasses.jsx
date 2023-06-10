import React from 'react';
import './AllClasses.css';

const AllClasses = ({ item }) => {
    const { instructor_name, name, number_of_students, dance_image, available_seats, price } = item;
    return (
        <>
            <div className="card w-96 bg-slate-950 shadow-xl items-center">
                <div className="container  rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
                    <img src={dance_image} className="imgAll" />

                    <span className="absolute bottom-4 right-0 left-20 top-auto z-10 inline-block rotate-0 p-2.5 bg-orange-500 text-md text-white font-bold uppercase">{name}</span>
                </div>

                <div className="card-body text-white items-center text-center" >
                    <h2 className="card-title">Instructor : {instructor_name}</h2>
                    <p>Available Seats : {available_seats}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 border-orange-500 bg-slate-950 text-white">Select</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AllClasses;