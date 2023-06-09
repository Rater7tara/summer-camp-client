import React from 'react';

const PopInstructors = ({item}) => {
  const { instructor_image, instructor_name, name, number_of_students } = item;

    return (
        <div>
            <div className="card max-w-sm glass text-white">
  <figure><img src={instructor_image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold">{instructor_name}</h2>
    
    <div className='border-y-2 border-black py-2'><p className='font-bold text-1xl text-white uppercase'><span className=' text-orange-500 bg-white p-1'>{name}</span> __Instructor</p></div>
    <p className='text-white font-bold'>Attend {number_of_students} Students</p>
    <div className="card-actions justify-center">
      <button className="btn btn-info">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopInstructors;