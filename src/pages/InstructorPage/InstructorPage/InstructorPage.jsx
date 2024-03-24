import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import AllInstructors from '../AllInstructors/AllInstructors';
import useInstructor from '../../../hooks/useInstructor';



const InstructorPage = () => {
  const [instructors] = useInstructor();
    // const filteredData = instructors.filter((item) => item.number_of_students !== '');
    // const students = filteredData.sort((a, b) => b.number_of_students - a.number_of_students);
    console.log(instructors);
    
    return (
        <div>
            <Helmet>
                <title>DancingDream | Instructors</title>
            </Helmet>
            <Cover></Cover>
            <div className='bg-cover mt-10'>
            <div className='bg-slate-950 py-16'>
            <h1 className='text-5xl font-bold text-center py-4 mb-5 text-orange-500'>MEET OUR INSTRUCTORS</h1>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6' >
              
              {
                instructors.map(item => <AllInstructors
                  key={item._id}
                  item={item}
                ></AllInstructors>
                )
                
              }
            </div>
            </div>
              
            </div>
        </div>
    );
};

export default InstructorPage;