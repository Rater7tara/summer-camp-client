import React from 'react';
import { Navigate, useLocation } from "react-router";
import Loading from "../../components/Loading/Loading";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import Swal from 'sweetalert2';


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isLoading] = useRole();
    if(loading || isLoading){
        return <Loading></Loading>
    }

    if (user && role === 'admin'){
        return children;
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Unauthorized Access',
            showConfirmButton: false,
            timer: 1500
          })
         return <Navigate to="/" replace></Navigate>;
    }
};

export default AdminRoute;