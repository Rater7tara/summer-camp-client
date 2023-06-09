import React from 'react';
import useInstructor from '../../../hooks/useInstructor';
import { Helmet } from 'react-helmet-async';
import AllClasses from '../AllClasses/AllClasses';

const ClassesPage = () => {
    const [instructors] = useInstructor();
    const filteredData = instructors.filter((item) => item.number_of_students !== '');
    const students = filteredData.sort((a, b) => b.number_of_students - a.number_of_students);
    return (
        <div>
             <Helmet>
                <title>DancingDream | Classes</title>
            </Helmet>

            <div className='rounded-lg bg-slate-950 py-6'>
            <div className='text-center'>
                <h1 className='text-6xl text-white my-4 font-bold'>Our Popular Classes</h1>
                <p className='text-1xl text-orange-500 my-4 font-bold'>Choose your Style</p>
            </div>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6 '>
              
              {
                students.map(item => <AllClasses
                  key={item._id}
                  item={item}
                ></AllClasses>
                
                )
                
              }
            </div>
            </div>
        </div>
    );
};

export default ClassesPage;