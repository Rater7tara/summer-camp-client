import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Input, Ripple, initTE } from "tw-elements";
initTE({ Input, Ripple, }, true);
import { FaGoogle } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/home');
            })
            .catch(error => {
                console.log(error);
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

            <form className='form md:w-2/4 sm:w-full bg-sky-200 p-10 rounded-lg' onSubmit={handleLogin}>
                <h2 className="text-4xl font-extrabold text-center mt-2 mb-2">Please Login</h2>
                {/* form email row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Email" required className="input input-bordered w-full" />
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


                <input type="submit" value="Login" className="btn bg-purple-500 btn-block" />
                <br />


                <form className="mt-4 text-center">
                    Don't Have an Account?<br /> <Link to='/register' className='regi-btn btn mt-4'>Register</Link>
                </form>

                <div
                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p
                        className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                    </p>
                </div>

                <div className='mt-4 google-btn'>
                    <button className='btn bg-sky-500 w-full' onClick={google}><FaGoogle className='text-violet-500 text-2xl me-2'></FaGoogle> Sign in with google</button>
                </div>

            </form>

            <div className='form md:w-1/2 sm:w-full'>
                <img className='' src={"https://i.ibb.co/FYsh5Pd/fun-3d-illustration-cartoon-teenage-girl.jpg"} alt="" />
            </div>
        </div>
    );
};

export default Login;