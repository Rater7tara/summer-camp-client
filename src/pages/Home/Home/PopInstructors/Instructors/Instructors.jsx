import React, { useEffect, useState } from 'react';
import useInstructor from '../../../../../hooks/useInstructor';
import PopInstructors from '../PopInstructors/PopInstructors';


const Instructors = () => {
    const [instructors] = useInstructor();
    const filteredData = instructors.filter((item) => item.number_of_students !== '');
    const sortedData = filteredData.sort((a, b) => b.number_of_students - a.number_of_students);

    // const [instructors, setInstructors] = useState([]);
    // useEffect(() =>{
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const filteredData = data.filter((item) => item.number_of_students !== '');
    //         const sortedData = filteredData.sort((a, b) => b.number_of_students - a.number_of_students);
    //         setInstructors(sortedData);
    //     });
    // }, [])
    return (
        <div className='rounded-lg py-6 bg-cover ' style={{ 
            backgroundImage: `url("https://i.ibb.co/ynCw2cT/k.jpg")`,
            backgroundRepeat: 'no-repeat',
          }}>
            <div className='text-center'>
                <h1 className='text-6xl text-white my-4 font-bold'>Our Popular Instructors</h1>
                <p className='text-1xl text-blue-500 my-4 font-bold'>Choose your Instructor</p>
            </div>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6 '>
            
            {
               sortedData.slice(0, 6)?.map(item => 
               <PopInstructors
               key={item._id}
               item={item}
               ></PopInstructors>) 
            }
        </div>
        </div>
    );
};

export default Instructors;