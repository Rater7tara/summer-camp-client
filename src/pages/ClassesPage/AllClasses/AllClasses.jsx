import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import './AllClasses.css';
import { useNavigate, useLocation } from "react-router-dom";
import useCart from '../../../hooks/useCart';

const AllClasses = ({ item }) => {
    const { instructor_name, name, number_of_students, dance_image, available_seats, price, _id } = item;

    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddClass = item => {
        console.log(item);
        if(user && user.email){
            const selectClass = {classId: _id, name, dance_image, instructor_name, price, available_seats, number_of_students, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in cart
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class Added on the Cart',
                        showConfirmButton: false,
                        timer: 1500
                      }) 
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to Select the Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}});
                }
              })
        }
    }
    return (
        <>
            <div className="card w-96 bg-slate-950 shadow-xl items-center">
                <div className="container  rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
                    <img src={dance_image} className="imgAll" />

                    <span className="absolute bottom-4 right-0 left-20 top-auto z-10 inline-block rotate-0 p-2.5 bg-orange-500 text-md text-white font-bold uppercase">{name}</span>
                </div>

                <div className="card-body text-white items-center text-center" >
                    <h2 className="card-title">Instructor : {instructor_name}</h2>
                    <p>Available Seats : {available_seats}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-center">
                        <button 
                        onClick={() => handleAddClass(item)}
                         className="btn btn-outline border-0 border-b-4 border-orange-500 bg-slate-950 text-white">Select</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AllClasses;