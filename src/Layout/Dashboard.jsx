import React from "react";
import { Outlet, NavLink, useNavigate, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
// import { FaShoppingCart, FaWallet, FaHome, FaCalendar, FaUsers, FaUserTie } from "react-icons/fa";
import { FaBookOpen, FaPlus, FaHome, FaPowerOff, FaReadme, FaWallet, FaEdit, FaUserFriends, FaBars } from "react-icons/fa";
import Loading from "../components/Loading/Loading";


const Dashboard = () => {
    const { user, logOut, loading } = useAuth();
    let [role] = useRole();
    const navigate = useNavigate();
    if (loading) {
        return <Loading></Loading>
    }
    const handleLogOut = () => {
        logOut().then(() => {
            navigate('/', { replace: true });
        })
    }

    return (
        <>
            <Helmet>
                <title>DancingDream | Dashboard</title>
            </Helmet>
            {/* <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-info drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-950 text-white">
                        {user && (<>
                            <div className="avatar d-flex justify-center mb-2">
                                <div className="mask mask-circle w-32">
                                    <img src={user.photoURL} alt="Avatar" />

                                </div>

                            </div>
                            <p className="text-center mb-10">{user.email}</p>
                        </>
                        )}

                        {
                            isAdmin ? <>
                                <li className='hover:bg-orange-500 rounded-md'><NavLink to='/'><FaHome></FaHome> Admin Home</NavLink></li>

                                <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/addclass'><FaUsers></FaUsers> Add New Class</NavLink></li>

                                <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/myclasses'><FaUserTie></FaUserTie>Manage Class</NavLink></li>
                                <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/allusers'><FaUserTie></FaUserTie>Manage Users</NavLink></li>

                            </> :
                                <>

                                    <li className='hover:bg-orange-500 rounded-md'><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
                                    <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/manageclass'><FaUserTie></FaUserTie>My Classes</NavLink></li>

                                    <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/paymenthistory'><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li className='hover:bg-orange-500 rounded-md'>
                                        <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                                            <span className="badge inl badge-bg-white font-bold">+{cart?.length || 0}</span>
                                        </NavLink>

                                    </li>

                                </>
                        }


                        <div className="divider"></div>

                        <li className='hover:bg-orange-500 rounded-md'><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                        <li className='hover:bg-orange-500 rounded-md'><NavLink to="/instructors"><FaUserTie></FaUserTie> Instructors</NavLink></li>
                        <li className='hover:bg-orange-500 rounded-md'><NavLink to="/classes"><FaUsers></FaUsers> Classes</NavLink></li>



                    </ul>

                </div>
            </div> */}

<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content relative">
    <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden absolute top-10 md:top-24 left-7"><FaBars className="w-6 h-6 text-darkcolor"></FaBars></label>
    <div className="w-full lg:col-start-2 lg:col-end-6 px-5 lg:px-10 mt-8 lg:mt-0 min-h-screen">
            <Outlet></Outlet>
        </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <div className="menu p-3 bg-gray-300 w-[50%] sm:w-60 h-full">
      <div>
          <div>
            <img
              className="w-[150px] h-[150px] rounded-full mx-auto"
              src={user?.photoURL}
              alt=""
            />
            <h1 className="text-lg font-extrabold text-center font-kanit">
              {user?.displayName}
            </h1>
            <p className="text-xs font-bold font-kanit text-center">
              {user?.email}
            </p>
          </div>
          <div className="px-3 md:px-5 min-h-[20%] w-full lg:mt-7 flex flex-col items-center gap-4">
            {/* instructor routes */}
            {
                role === 'instructor' && <>
                <NavLink
                to="/dashboard/myclasses"
                className={({ isActive }) =>
                  isActive
                    ? " font-kanit font-bold dashboard-btn-active "
                    : "text-black font-kanit font-bold dashboard-btn"
                }
              >
                <FaBookOpen className="w-4 h-4"></FaBookOpen>
                My Classes
              </NavLink>
              <NavLink
                to="/dashboard/add-class"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-kanit font-bold dashboard-btn-active "
                    : "text-black font-kanit font-bold dashboard-btn"
                }
              >
                <FaPlus className="w-4 h-4"></FaPlus>
                Add Class
              </NavLink>
                </>
            }
            {/* students routes */}
            {
                role === "student" && <>
                <NavLink
              to="/dashboard/selected-classes"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              <FaBookOpen className="w-4 h-4"></FaBookOpen>
              Selected Classes
            </NavLink>
            <NavLink
              to="/dashboard/enrolled-classes"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              <FaReadme className="w-4 h-4"></FaReadme>
              Enrolled Classes
            </NavLink>
            <NavLink
              to="/dashboard/payment/history"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              <FaWallet className="w-4 h-4"></FaWallet>
              Payment History
            </NavLink>
                </>
            }
            {/* admin routes */}
            {
                role === "admin" && <>
                <NavLink
              to="/dashboard/manage-classes"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              <FaEdit className="w-4 h-4"></FaEdit>
              Manage Classes
            </NavLink>
            <NavLink
              to="/dashboard/manage-users"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              <FaUserFriends className="w-4 h-4"></FaUserFriends>
              Manage Users
            </NavLink>
                </>
            }
          </div>
          <div className="mt-5 md:mt-10 border-t  w-full h-full flex flex-col items-center gap-4 px-3 md:px-5">
            <Link to='/' className="w-full mt-5 "><button className="dashboard-btn text-black font-kanit font-bold flex justify-center items-center text-sm gap-2 hover:bg-primary duration-200 hover:text-white"><FaHome className="w-4 h-4"></FaHome> Home</button></Link>
            <button onClick={handleLogOut} className="dashboard-btn text-black font-kanit font-bold flex justify-center items-center text-sm gap-2 hover:bg-primary duration-200 hover:text-white"><FaPowerOff className="w-4 h-4"></FaPowerOff> LogOut</button>
          </div>
        </div>
    </div>
  
  </div>
</div>



        </>
    );
};

export default Dashboard;