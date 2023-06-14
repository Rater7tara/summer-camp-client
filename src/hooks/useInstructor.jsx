import { useQuery } from '@tanstack/react-query';


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
    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/student');
            return res.json();
        }
    })

    return [instructors, loading, refetch]
}

export default useInstructor;