import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Layout/ErrorPage";
import Main from "../Layout/Main";
import ClassesPage from "../pages/ClassesPage/ClassesPage/ClassesPage";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import DashHome from "../pages/Dashboard/DashHome/DashHome";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Home from "../pages/Home/Home/Home";
import InstructorPage from "../pages/InstructorPage/InstructorPage/InstructorPage";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AdminRoute from "./PrivateRoute/AdminRoute";
import InstructorRoute from "./PrivateRoute/InstructorRoute";
import StudentRoute from "./PrivateRoute/StudentRoute";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instructors',
        element: <InstructorPage></InstructorPage>
      },
      {
        path: 'classes',
        element: <ClassesPage></ClassesPage>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'home',
        element:<DashHome></DashHome>
      },
      {
        path: 'mycart',
        element: <StudentRoute><MyCart></MyCart></StudentRoute> 
      },
      {
        path: 'payment/:id',
        element:<StudentRoute><Payment></Payment></StudentRoute>,
      },
      {
        path: 'payment/history',
        element:<StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>,
      },
      {
        path: 'manage-classes',
        element:<AdminRoute><ManageClass></ManageClass></AdminRoute>,
      },
      // Admin routes
      // {
      //   path: 'adminhome',
      //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      // },
      {
        path: 'manage-users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
      {
        path: 'add-class',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'myclasses',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute> 
      }
    ]
  }
]);