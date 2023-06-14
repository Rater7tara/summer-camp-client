import React, { useEffect, useState } from 'react';
import PopularClass from '../../PopularClass/PopularClass';

const Popular = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() =>{
        fetch('https://summer-camp-server-git-main-rater7tara.vercel.app/student')
        .then(res => res.json())
        .then(data => {
            const filteredData = data.filter((item) => item.number_of_students !== '');
            const sortedData = filteredData.sort((a, b) => b.number_of_students - a.number_of_students);
            setClasses(sortedData);
        });
    }, [])

    return (
        <div className='rounded-lg bg-slate-950 py-6'>
            <div className='text-center'>
                <h1 className='text-6xl text-white my-4 font-bold'>Our Popular Classes</h1>
                <p className='text-1xl text-orange-500 my-4 font-bold'>Choose your Style</p>
            </div>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6 '>
            
            {
               classes.slice(0, 6)?.map(item => <PopularClass
               key={item._id}
               item={item}
               ></PopularClass>) 
            }
        </div>
        </div>
    );
};

export default Popular;