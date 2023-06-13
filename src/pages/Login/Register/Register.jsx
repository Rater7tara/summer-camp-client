import React, { useContext, useState } from 'react';
import { useNavigate, Link, } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import './Register.css';
import "@lottiefiles/lottie-player";
import sign from '../../../assets/sign.json';
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = data => {

        createUser(data.email, data.password, data.photoURL)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo:data.photoURL }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className=" p-10 md:flex justify-center">
            <Helmet>
                <title>DancingDream | Register</title>

            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={sign} loop={true} />
                    </div>

                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-5xl font-bold mb-5">Sign Up Now!</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">

                                <div className="md:flex mb-6">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered w-full" />
                                            {errors.name && <span className="text-red-600">Name is required</span>}
                                        </label>
                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Email Address</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered w-full" />
                                            {errors.email && <span className="text-red-600">Email is required</span>}
                                        </label>
                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered w-full" />
                                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                        </label>
                                    </div>
                                </div>

                                <div className="md:flex mb-6">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <label className="input-group">
                                            <input type={showPassword ? "text" : "password"}  {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                            })} placeholder="password" className="input input-bordered w-full" />
                                            <button
                                                type="button"
                                                className="btn bg-blue-100"
                                                onClick={handleTogglePasswordVisibility}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 6 characters</p>}
                                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Capital letter and one Special character.</p>}
                                        </label>

                                    </div>
                                </div>


                                <input type="submit" value="Sign Up" className="btn btn-info btn-block" />

                                <div className=" mt-4">
                                    <span className='text-centered mb-4'>Already Have an Account?</span><br /> <Link to='/login' className='btn btn-primary w-full mt-4'>Login</Link>
                                    <SocialLogin></SocialLogin>
                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;