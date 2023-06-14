import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useInstructor from '../../../hooks/useInstructor';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyClasses = () => {
    const [instructors, loading] = useInstructor();
    const [approvedItems, setApprovedItems] = useState([]);
    const [pendingItems, setPendingItems] = useState([]);
    const [deletedItems, setDeletedItems] = useState([]);

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
                            setDeletedItems([...deletedItems, item._id]);
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            );
                        }
                    });
            }
        });
    };

    const handleApprove = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This class will be approved.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, approve it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform the approve action here
                setApprovedItems([...approvedItems, item._id]);
                Swal.fire(
                    'Approved!',
                    'The class has been approved.',
                    'success'
                );
            }
        });
    };

    const handlePending = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This class will be marked as pending.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, mark as pending!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform the pending action here
                setPendingItems([...pendingItems, item._id]);
                Swal.fire(
                    'Pending!',
                    'The class has been marked as pending.',
                    'success'
                );
            }
        });
    };

    return (
        <div className='w-full'>
            <SectionTitle heading="My Classes" subHeading="Wanna Change Something?" />
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
                            <th>Instructor Name</th>
                            <th>Email</th>
                            <th>Available Seat</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instructors.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.dance_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.instructor_name}</td>
                                <td>{item.instructor_email}</td>
                                <td>{item.available_seats}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-info btn-sm"
                                        disabled={deletedItems.includes(item._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleApprove(item)}
                                        className="btn btn-warning btn-sm"
                                        disabled={approvedItems.includes(item._id)}
                                    >
                                        Approve
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handlePending(item)}
                                        className="btn btn-warning btn-sm"
                                        disabled={pendingItems.includes(item._id)}
                                    >
                                        Pending
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-warning btn-sm"
                                        disabled={deletedItems.includes(item._id)}
                                    >
                                        <FaTrashAlt className='text-red-600 text-2xl' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;
