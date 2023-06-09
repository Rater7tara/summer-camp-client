import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import AllInstructors from '../AllInstructors/AllInstructors';
import useInstructor from '../../../hooks/useInstructor';



const InstructorPage = () => {
  const [instructors] = useInstructor();
    const filteredData = instructors.filter((item) => item.number_of_students !== '');
    const students = filteredData.sort((a, b) => b.number_of_students - a.number_of_students);
    
    return (
        <div>
            <Helmet>
                <title>DancingDream | Instructors</title>
            </Helmet>
            <Cover></Cover>
            <div>
              <h1 className='text-5xl font-bold text-center py-4'>MEET OUR INSTRUCTORS</h1>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6 bg-cover' style={{ 
            backgroundImage: `url("https://i.ibb.co/ynCw2cT/k.jpg")`,
            backgroundRepeat: 'no-repeat',
          }}>
              
              {
                students.map(item => <AllInstructors
                  key={item._id}
                  item={item}
                ></AllInstructors>
                )
                
              }
            </div>
            </div>
        </div>
    );
};

export default InstructorPage;