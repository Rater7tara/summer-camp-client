import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png';
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { AuthContext } from '../../../providers/AuthProvider';
import './NavBar.css';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {

  const {user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
  }
  

  const navOptions = <>
    <li className='hover:bg-orange-500 rounded-md'><Link to="/home">Home</Link></li>
    <li className='hover:bg-orange-500 rounded-md'><Link to="/instructors">Instructors</Link></li>
    <li className='hover:bg-orange-500 rounded-md'><Link to="/classes">Classes</Link></li>
   
    

    {user?.email ? <>
      <li className='hover:bg-orange-500 rounded-md'><Link to='/dashboard'>Dashboard</Link></li>
      
    </>
    :
    <Link to='/login'>

    </Link>

    }
     <li className='hover:bg-orange-500 rounded-md'><Link to="/dashboard/mycart">
      
        <FaShoppingCart></FaShoppingCart>
        <div className='badge badge-warning'>+{cart?.length || 0}</div>
      </Link></li>
    
  </>
    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img className='logo' src={logo} alt="" /> Dancing Dream</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    {
            
            user?.photoURL ?<img src={user.photoURL} className=" user-img rounded-full me-2 " alt="" title={user.displayName} />:<FaUser className='user-img rounded-full me-2 text-3xl'></FaUser>
           }
          {user?
            
          <button onClick={handleLogOut} className="btn btn-info">Logout</button>
          
             :
            <Link to="/login">
              <button className="btn btn-info  ">Login</button>
            </Link>
          }
  </div>
</div>
        </>
    );
};

export default NavBar;