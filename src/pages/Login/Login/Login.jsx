import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Input, Ripple, initTE } from "tw-elements";
initTE({ Input, Ripple, }, true);
import { FaGoogle } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import "@lottiefiles/lottie-player";
import login from '../../../assets/login.json';
import Lottie from "lottie-react";
import Swal from 'sweetalert2'

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const google = () => {
        signInWithGoogle()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(error => {
                console.log(error.massage);
            })
    }


    return (
        <div className=" p-10 md:flex justify-center">
            <Helmet>
                <title>DancingDream | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <Lottie animationData={login} loop={true}/>
                    </div>

                    <form className='w-full' onSubmit={handleLogin}>
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-info">Login</button>
                                    <div
                                        className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                        <p
                                            className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                            OR
                                        </p>
                                    </div>

                                    <div className='mt-4 google-btn'>
                                        <button className='btn btn-primary w-full' onClick={google}><FaGoogle className='text-blue-500 text-2xl me-2'></FaGoogle> Sign in with google</button>
                                    </div>
                                </div>
                                <form className="mt-4 text-center">
                                    Don't Have an Account?<br /> <Link to='/register' className='regi-btn btn mt-4'>Register</Link>
                                </form>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* form end*/}

        </div>
    );
};

export default Login;