import { FaShoppingCart, FaWallet, FaHome, FaCalendar, FaUsers, FaUserTie } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-info drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-slate-950 text-white">

                    {
                        isAdmin ? <>
                            <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/home'><FaHome></FaHome> Admin Home</NavLink></li>

                            <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/addclass'><FaUsers></FaUsers> Add New Class</NavLink></li>
                            
                            <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/reservations'><FaUserTie></FaUserTie> Manage Classes</NavLink></li>
                            <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/allusers'><FaUserTie></FaUserTie>All Users</NavLink></li>
                            
                        </> :
                            <>
                            
                                <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>

                                <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li className='hover:bg-orange-500 rounded-md'>
                                    <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                                        <span className="badge inl badge-bg-white font-bold">+{cart?.length || 0}</span>
                                    </NavLink>

                                </li>
                                <li className='hover:bg-orange-500 rounded-md'><NavLink to='/dashboard/reservations'><FaCalendar></FaCalendar> Reservations</NavLink></li>
                            </>
                    }


                    <div className="divider"></div>

                    <li className='hover:bg-orange-500 rounded-md'><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li className='hover:bg-orange-500 rounded-md'><NavLink to="/instructors"><FaUserTie></FaUserTie> Instructors</NavLink></li>
                    <li className='hover:bg-orange-500 rounded-md'><NavLink to="/classes"><FaUsers></FaUsers> Classes</NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;