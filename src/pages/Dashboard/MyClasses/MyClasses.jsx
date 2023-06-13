import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useInstructor from '../../../hooks/useInstructor';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';

const MyClasses = () => {
    const [instructors, loading] = useInstructor();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/students/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full'>
            <SectionTitle heading="My Classes" subHeading="Wanna Change Something?"></SectionTitle>

            <Helmet>
                <title>DancingDream | My Cart</title>
            </Helmet>
              <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {instructors.length}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    
                    <thead className='bg-slate-900 text-lg text-white rounded-md'>
                        <tr>
                            <th>#</th>
                            <th>Classes</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructors.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.dance_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className='text-2xl'>${item.price}</td>
                                <td className="">
                                    <button onClick={() => handleDelete(item)} className="btn btn-info">Pending</button>
                                    
                                </td>
                                <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-warning"><FaTrashAlt className='text-red-600 text-2xl'></FaTrashAlt> Denied</button>
                                </td>
                                
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;