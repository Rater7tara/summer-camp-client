import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Vortex } from 'react-loader-spinner';
import { AuthContext } from '../../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <div className='flex justify-center text-center align-middle'>
            <Vortex
                visible={true}
                height="100"
                width="100"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />

        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;