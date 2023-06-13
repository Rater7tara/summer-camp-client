import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const useInstructor = () => {
    // const [instructors, setInstructors] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/student')
    //         .then(res => res.json())
    //         .then(data => {
    //             setInstructors(data);
    //             setLoading(false);
    //         });
    // }, [])
    const {data: instructors = [], isLoading: loading} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/student');
            return res.json();
        }
    })

    return [instructors, loading]
}

export default useInstructor;