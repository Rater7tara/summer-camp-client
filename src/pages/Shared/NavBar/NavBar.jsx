import { useState } from 'react';
import logo from '../../../assets/logo1.png';
import { BsMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import './NavBar.css';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';
import useAuth from '../../../hooks/useAuth';
import useTheme from '../../../hooks/useTheme';

const NavBar = () => {
  const { user, logOut } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [cart] = useCart();

  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const handleProfile = () => {
    setProfile(!profile);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/', { replace: true })
      })
      .catch(err => {
        console.log(err.message);
      })
  }


  const navOptions = <>
    



  </>
  return (
    // <>
    //   <div className="navbar max-w-screen-2xl fixed z-10 bg-opacity-30 bg-black text-white mb-5">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //         </label>
    //         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
    //           {navOptions}
    //         </ul>
    //       </div>
    //       <a className="btn btn-ghost normal-case text-xl"><img className='logo' src={logo} alt="" /> Dancing Dream</a>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1">
    //         {navOptions}
    //       </ul>
    //     </div>
    //     <div className="navbar-end">
    //       {

    //         user?.photoURL ? <img src={user.photoURL} className=" user-img rounded-full me-2 " alt="" title={user.displayName} /> : <FaUser className='user-img rounded-full me-2 text-3xl'></FaUser>
    //       }
    //       {user ?

    //         <button onClick={handleLogOut} className="btn btn-info">Logout</button>

    //         :
    //         <Link to="/login">
    //           <button className="btn btn-info  ">Login</button>
    //         </Link>
    //       }

    //       {/* <button className="theme-toggle" onClick={toggleTheme}>
    //       {theme === 'light' ? 'Dark' : 'Light'} Theme
    //     </button> */}
    //     </div>
    //   </div>
    // </>








    <div className="max-w-[1520px] mx-auto flex justify-between items-center px-4 2xl:px-0 z-10 sticky top-0 bg-opacity-20 bg-gray-500 text-white">
      <div className="lg:hidden">
        <FaTimes
          className={isOpenMenu ? `${location.pathname === '/' ? 'lg:hidden w-6 h-6 text-white' : `${isDarkMode ? 'lg:hidden w-6 h-6 text-white' : 'lg:hidden w-6 h-6 text-black'}`}` : "hidden"}
          onClick={toggleMenu}
        ></FaTimes>
        <FaBars
          className={!isOpenMenu ? `${location.pathname === '/' ? 'lg:hidden w-6 h-6 text-white' : `${isDarkMode ? 'lg:hidden w-6 h-6 text-white' : 'lg:hidden w-6 h-6 text-black'}`}` : "hidden"}
          onClick={toggleMenu}
        ></FaBars>
      </div>
      {/* logo */}
      <div className="flex justify-center items-center gap-2 ">
        <img
          className="w-8 md:w-16"
          src={logo}
          alt=""
        />
        <h1 className={`text-xl sm:text-3xl font-kanit font-extrabold ${location.pathname !== '/' && isDarkMode ? 'text-white' : `${location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}`}>
          Dance<span className="text-orange-500">Swan</span>
        </h1>
      </div>
      {/* nav link */}
      <div
        className={
          isOpenMenu
            ? `${
                isDarkMode
                  ? "bg-darkcolor absolute top-14 rounded left-3 p-4 gap-2 flex flex-col shadow-md lg:hidden"
                  : "bg-white absolute top-14 rounded left-3 p-4 gap-2 flex flex-col shadow-md lg:hidden"
              }`
            : "hidden lg:flex items-center md:gap-8"
        }
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `bg-orange-500 text-white rounded-md p-2  font-bold font-kanit ${location.pathname === '/' ? 'font-medium' : 'font-semibold'}`
              : `${location.pathname === '/' ? "text-black lg:text-white font-medium font-kanit" : `${isDarkMode ? 'text-white md:font-semibold font-kanit' : 'text-gray-700 md:font-semibold font-kanit'}`}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive
              ? `bg-orange-500 text-white rounded-md p-2  font-bold font-kanit ${location.pathname === '/' ? 'font-medium' : 'font-semibold'}`
              : `${location.pathname === '/' ? "text-black lg:text-white  font-medium font-kanit" : `${isDarkMode ? 'text-white md:font-semibold font-kanit' : 'text-gray-700 md:font-semibold font-kanit'}`}`
          }
        >
          Classes
        </NavLink>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive
              ? `bg-orange-500 text-white rounded-md p-2  font-bold font-kanit ${location.pathname === '/' ? 'font-medium' : 'font-semibold'}`
              : `${location.pathname === '/' ? "text-black lg:text-white  font-medium font-kanit" : `${isDarkMode ? 'text-white md:font-semibold font-kanit' : 'text-gray-700 md:font-semibold font-kanit'}`}`
          }
        >
          Instructors
        </NavLink>
        {
          user && <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            isActive
              ? `bg-orange-500 text-white rounded-md p-2  font-bold font-kanit ${location.pathname === '/' ? 'font-medium' : 'font-semibold'}`
              : `${location.pathname === '/' ? "text-black lg:text-white  font-medium font-kanit" : `${isDarkMode ? 'text-white md:font-semibold font-kanit' : 'text-gray-700 md:font-semibold font-kanit'}`}`
          }
        >
          Dashboard
        </NavLink>
        
        }
        <NavLink
          to="/dashboard/mycart"
          className={({ isActive }) =>
            isActive
              ? `bg-orange-500 text-white rounded-md p-2  font-bold font-kanit ${location.pathname === '/' ? 'font-medium' : 'font-semibold'}`
              : `${location.pathname === '/' ? "text-black lg:text-white  font-medium font-kanit" : `${isDarkMode ? 'text-white md:font-semibold font-kanit' : 'text-gray-700 md:font-semibold font-kanit'}`}`
          }
        >
          
      <div className='badge'><FaShoppingCart></FaShoppingCart>  + <span className='text-red-500 mx-1 font-bold'>{cart?.length || 0}</span></div>
        </NavLink>
 
        {/* login and them mode btn for mobile device */}
        <div className="md:hidden flex flex-col items-center gap-4">
        {user ? (
              <div
                className="overflow-hidden w-[35px] h-[35px] rounded-full "
                onClick={handleProfile}
              >
                {
                  user.photoURL === null ? <FaUserAlt className="w-full h-full text-secondary"></FaUserAlt> : <img
                  src={user.photoURL}
                  className="w-full h-full rounded-full origin-center duration-300"
                  alt=""
                  title={user.displayName}
                />
                }
              </div>
            ) : (
              <Link to="/login"><button className={`my-btn btn btn-outline text-orange-600 ${isDarkMode ? 'text-white' : `${location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}`}>Login</button></Link>
            )}
          <div
            onClick={handleProfile}
            className={`w-[250px] z-10 h-fit absolute  rounded-md shadow-md hover:shadow-2xl ${isDarkMode ? 'bg-darkcolor' : 'bg-white'} py-8 px-5 ${
              profile ? "-top-0 left-20 md:left-auto md:top-12 md:right-12 " : "hidden"
            } `}
          >
            <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-primary overflow-hidden">
              <img
                src={user?.photoURL}
                className="w-[120px] h-[120px] mx-auto rounded-full"
                alt="profile"
              />
            </div>
            <div className={`text-center  mt-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <h1 className="text-base font-bold">Name: {user?.displayName}</h1>
              <p className="text-xs mt-3">Email: {user?.email}</p>
              <p
                className={
                  user?.emailVerified
                    ? "text-xs text-white mt-1"
                    : "text-xs text-red-500 mt-1"
                }
              >
                {user?.emailVerified
                  ? "Your Email has been verified!"
                  : "Your Email is not verified!"}
              </p>
              <div
                className="mt-4 my-btn hover:text-white"
                onClick={handleLogOut}
              >
                Logout
              </div>
            </div>
          </div>
          {isDarkMode ? (
            <BsMoonStarsFill
              className={`w-6 h-6 ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
              onClick={toggleTheme}
            ></BsMoonStarsFill>
          ) : (
            <BsFillBrightnessHighFill
              className={`w-6 h-6 ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
              onClick={toggleTheme}
            ></BsFillBrightnessHighFill>
          )}
        </div>
      </div>
      {/* user/login for big device */}
      <div className="md:flex justify-center items-center gap-4 hidden relative">
        {user ? (
              <div
                className="overflow-hidden w-[35px] h-[35px] rounded-full "
                onClick={handleProfile}
              >
                {
                  user.photoURL === null ? <FaUserAlt className="w-full h-full text-secondary"></FaUserAlt> : <img
                  src={user.photoURL}
                  className="w-full h-full rounded-full origin-center duration-300"
                  alt=""
                  title={user.displayName}
                />
                }
              </div>
            ) : (
              <Link to="/login"><button className={`my-btn btn btn-outline text-orange-600 ${isDarkMode ? 'text-white' : `${location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}`}>Login</button></Link>
            )}
          <div
            onClick={handleProfile}
            className={`w-[250px] z-10 h-fit absolute  rounded-md shadow-md hover:shadow-2xl ${isDarkMode ? 'bg-darkcolor' : 'bg-white'} py-8 px-5 ${
              profile ? "-top-0 left-20 md:left-auto md:top-12 md:right-12 " : "hidden"
            } `}
          >
            <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-primary overflow-hidden">
              <img
                src={user?.photoURL}
                className="w-[120px] h-[120px] mx-auto rounded-full"
                alt="profile"
              />
            </div>
            <div className={`text-center  mt-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <h1 className="text-base font-bold">Name: {user?.displayName}</h1>
              <p className="text-xs mt-3">Email: {user?.email}</p>
              <p
                className={
                  user?.emailVerified
                    ? "text-xs text-white mt-1"
                    : "text-xs text-red-500 mt-1"
                }
              >
                {user?.emailVerified
                  ? "Your Email has been verified!"
                  : "Your Email is not verified!"}
              </p>
              <div
                className="mt-4 my-btn btn-outline text-orange-600 hover:text-white"
                onClick={handleLogOut}
              >
                Logout
              </div>
            </div>
          </div>

        {isDarkMode ? (
          <BsMoonStarsFill
            className={`w-6 h-6 ${isDarkMode ? 'text-white' : `${location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}`}
            onClick={toggleTheme}
          ></BsMoonStarsFill>
        ) : (
          <BsFillBrightnessHighFill
            className={`w-6 h-6 ${isDarkMode ? 'text-white' : `${location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}`}
            onClick={toggleTheme}
          ></BsFillBrightnessHighFill>
        )}
      </div>
    </div>
  );
};

export default NavBar;