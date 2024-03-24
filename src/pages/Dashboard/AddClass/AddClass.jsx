import React, { useContext, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        setIsButtonDisabled(true);
        console.log(data)

        const formData = new FormData();
        formData.append('image', data.dance_image[0])
         
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            console.log(imgRes);
            if(imgRes.success){
                const imgURL = imgRes.data.display_url;
                const {name, available_seats, price} = data;
                const newClass = {name, available_seats, dance_image:imgURL, instructor_name:user?.displayName, instructor_email:user?.email, price, status: 'pending'}
                console.log(newClass);
                axiosSecure.post('/student', newClass)
                .then(data =>{
                    console.log('after posting new class', data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'New Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                    setIsButtonDisabled(false);
                })
                .catch((error) => {
                    console.error(error);
                    setIsButtonDisabled(false);
                  });
            }
            
        })

    }

    return (
        <div className='w-full'>
            <SectionTitle subHeading="What's New" heading="Add New Dance Class"></SectionTitle>
            <div className='w-full'>
            <form className='form md:w-full sm:w-full bg-base-200 p-10 rounded' onSubmit={handleSubmit(onSubmit)}>
    
                {/* form name and row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Class Name*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("name", { required: true, maxLength: 120 })}placeholder="Class Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Instructor row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">Instructor Name*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" value={user?.displayName} {...register("instructor_name", { required: true })} className="input input-bordered w-full" readOnly/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Instructor Email*</span>
                        </label>
                        <label className="input-group">
                            <input type="email"  value={user?.email} {...register("instructor_email", { required: true })}  className="input input-bordered w-full" readOnly />
                        </label>
                    </div>
                </div>

                {/* form Price and seats row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Price*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Available Seats*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("available_seats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Dance Image*</span>
                        </label>
                        <label className="input-group">
                        <input type="file" {...register("dance_image", { required: true })} className="file-input file-input-bordered w-full " />
                        </label>
                    </div>
                </div>


                <input type="submit" value={isButtonDisabled ? 'Adding...' : 'Add Class'} className="btn btn-info btn-block" disabled={isButtonDisabled} />

            </form>
            </div>
        </div>
    );
};

export default AddClass;