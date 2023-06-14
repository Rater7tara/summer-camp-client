import { useQuery } from '@tanstack/react-query';


const useInstructor = () => {
    // const [instructors, setInstructors] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://summer-camp-server-git-main-rater7tara.vercel.app/student')
    //         .then(res => res.json())
    //         .then(data => {
    //             setInstructors(data);
    //             setLoading(false);
    //         });
    // }, [])
    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() =>{
            const res = await fetch('https://summer-camp-server-git-main-rater7tara.vercel.app/student');
            return res.json();
        }
    })

    return [instructors, loading, refetch]
}

export default useInstructor;