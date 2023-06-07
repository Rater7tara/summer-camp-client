import React, { useContext, useState } from 'react';
import { useNavigate, Link, } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import './Register.css';


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

            <form className='form md:w-2/4 sm:w-full bg-blue-100 p-10' onSubmit={handleRegister}>
                <h2 className="text-3xl font-extrabold text-center mt-2 mb-2">Please Register</h2>
                {/* form toy name and row */}
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
                {/* form seller row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" id="" placeholder='Email'
                                required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
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


                <input type="submit" value="Register" className="btn bg-purple-500 btn-block" />

                <div className=" mt-4">
                    <span className='text-centered mb-4'>Already Have an Account?</span><br /> <Link to='/login' className='regi-btn btn mt-4'>Login</Link>
                </div>

            </form>

            <div className='form md:w-1/2 sm:w-full'>
                <img className='form-img' src={"https://i.ibb.co/vQYcyLs/funny-duck-3d-illustration.jpg"} alt="" />
            </div>
        </div>
    );
};

export default Register;