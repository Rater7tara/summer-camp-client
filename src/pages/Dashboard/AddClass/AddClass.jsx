import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        console.log(data)
        

        // const form = event.target;

        // const name = form.name.value;
        // const available_seats = form.available_seats.value;
        // const instructor_name = form.instructor_name.value;
        // const instructor_email = form.instructor_email.value;
        // const price = form.price.value;
        // const dance_image = form.dance_image.value;

        // const newClass = {name, available_seats, instructor_name, instructor_email, dance_image, price}

        // console.log(newClass);

        // // send data to the server
        // fetch('http://localhost:5000/student', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newClass)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             reset();
        //             Swal.fire({
        //                 title: 'Successfully Added',
        //                 showClass: {
        //                   popup: 'animate__animated animate__fadeInDown'
        //                 },
        //                 hideClass: {
        //                   popup: 'animate__animated animate__fadeOutUp'
        //                 }
        //               })
        //         }
            // })

    }
    // console.log(errors);

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
                {/* form seller row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold">Instructor Name*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("instructor_name", { required: true })}  placeholder="Instructor Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Instructor Email*</span>
                        </label>
                        <label className="input-group">
                            <input type="email" {...register("instructor_email", { required: true })} id="" placeholder='Instructor Email' className="input input-bordered w-full" />
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


                <input type="submit" value="Add Class" className="btn btn-info btn-block" />

            </form>
            </div>
        </div>
    );
};

export default AddClass;