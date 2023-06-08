import React, { useContext, useState } from 'react';
import { useNavigate, Link, } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import './Register.css';
import "@lottiefiles/lottie-player";
import sign from '../../../assets/sign.json';
import Lottie from "lottie-react";


const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        console.log(email, password, name, photo);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate('/home')
            })
            .catch(error => {
                console.log(error);
            })

        // validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
    }






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

                    <form className='w-full' onSubmit={handleRegister}>
                        <h1 className="text-5xl font-bold mb-5">Please Register!</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">

                                <div className="md:flex mb-6">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="name" placeholder="Name"
                                                required className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Email Address</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="email" name="email" id="" placeholder='Email'
                                                required className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="photo" name="photo" id="" placeholder='Photo URL'
                                                required
                                                className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>

                                <div className="md:flex mb-6">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="password" name="password" placeholder="Password" required className="input input-bordered w-full" />
                                        </label>

                                    </div>
                                </div>


                                <input type="submit" value="Register" className="btn btn-primary btn-block" />

                                <div className=" mt-4">
                                    <span className='text-centered mb-4'>Already Have an Account?</span><br /> <Link to='/login' className='btn btn-info w-full mt-4'>Login</Link>
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