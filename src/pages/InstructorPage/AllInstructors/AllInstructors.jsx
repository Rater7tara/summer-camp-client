import React from 'react';


const AllInstructors = ({item}) => {
    const { instructor_image, instructor_name, name, number_of_students, instructor_email } = item;
    
    return (
        <div>
        <div className="card max-w-sm glass">
<figure><img src={instructor_image} alt="car!"/></figure>
<div className="card-body text-white">
<h2 className="card-title text-3xl font-bold">{instructor_name}</h2>

<div className='border-y-2 border-black py-2'><p className='font-bold text-1xl text-white uppercase'><span className=' text-orange-500 bg-white p-1'>{name}</span> __Instructor</p></div>

<div className='border-b-2 border-black pb-2'><p className='font-bold text-1xl text-white'>Email : <span className=' text-orange-500 bg-white p-1'>{instructor_email}</span> </p></div>

<p className='text-white font-bold'>Attend {number_of_students} Students</p>
<div className="card-actions justify-center">
  <button className="btn btn-info">See Classes</button>
</div>
</div>
</div>
    </div>
    );
};

export default AllInstructors;