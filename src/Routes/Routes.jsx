import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Layout/ErrorPage";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import ClassesPage from "../pages/ClassesPage/ClassesPage/ClassesPage";
import Home from "../pages/Home/Home/Home";
import InstructorPage from "../pages/InstructorPage/InstructorPage/InstructorPage";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";


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
  ]);