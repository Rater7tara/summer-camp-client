import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Layout/ErrorPage";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import ClassesPage from "../pages/ClassesPage/ClassesPage/ClassesPage";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Home from "../pages/Home/Home/Home";
import InstructorPage from "../pages/InstructorPage/InstructorPage/InstructorPage";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


  export const router = createBrowserRouter([
    {
      path:'/',
      element: <LoginLayout></LoginLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element: <Navigate to="/home"></Navigate>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path:'register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/home',
            element: <Home></Home>
        },
        {
          path:'/instructors',
          element:<InstructorPage></InstructorPage>
        },
        {
          path:'/classes',
          element:<ClassesPage></ClassesPage>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);