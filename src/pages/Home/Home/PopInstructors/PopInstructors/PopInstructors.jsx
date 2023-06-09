import React from 'react';

const PopInstructors = ({item}) => {
  const { instructor_image, instructor_name, name, number_of_students } = item;

    return (
        <div>
            <div className="card w-80 glass">
  <figure><img src={instructor_image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{instructor_name}</h2>
    
    <div className='border-y-2 border-black py-1'><p className='font-bold text-1xl'>{name} Instructor</p></div>
    <p className='text-white font-bold'>Attend {number_of_students} Students</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopInstructors;