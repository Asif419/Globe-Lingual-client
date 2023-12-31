import { Link, NavLink } from "react-router-dom";
import logo from '../../../../public/logo.png';
import useAuth from "../../../hooks/useAuth";
import { BiSun, BiMoon } from 'react-icons/bi';
import useUser from "../../../hooks/useUser";

const Header = () => {
  const { user, logOut, darkTheme, setDarkTheme } = useAuth();
  const [userFromDB] = useUser();  

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error.message);
      })
  }

  const navOptions = <>

    <li>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-extrabold border-b-4 border-blue-600" : ""
        }
      >HOME</NavLink>
    </li>
    <li>
      <NavLink
        to='/instructors'
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-extrabold border-b-4 border-blue-600" : ""
        }
      >INSTRUCTORS</NavLink>
    </li>
    <li>
      <NavLink
        to='/classes'
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-extrabold border-b-4 border-blue-600" : ""
        }
      >CLASSES</NavLink>
    </li>
    {
      user &&
      <li>
        <NavLink
          to={`${userFromDB?.role === 'admin' ? '/dashboard/admin-instructors' : userFromDB?.role === 'instructor' ? '/dashboard/instructor-classes' : '/dashboard/selected-classes'}`}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-extrabold border-b-4 border-blue-600" : ""
          }
        >DASHBOARD</NavLink>
      </li>
    }
  </>

  return (
    <div>
      <div className="navbar min-h-[64px] fixed flex justify-between lg:justify-evenly bg-base-100 z-10 px-2 md:px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="text-2xl font-bold menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link to='/'>
            <div className="flex justify-center items-center gap-2">
              <img className="h-16 w-16" src={logo} alt="logo" />
              {/* <p className="text-2xl md:text-4xl font-extrabold tracking-tight brand-font">GL</p> */}
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="text-1xl font-bold menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="flex gap-2">
          <div onClick={() => setDarkTheme(!darkTheme)} className="cursor-pointer">
            {
              darkTheme ? <BiMoon></BiMoon> : <BiSun></BiSun>
            }
          </div>
          {user ?
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={userFromDB?.user_photo_url} alt={userFromDB?.user_name} />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
                <li>
                  <a className="justify-between">
                    {userFromDB?.user_name}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li onClick={handleLogOut}><a>Logout</a></li>
              </ul>
            </div> :

            <Link
              to='/login'
              className='btn btn-md btn-ghost my-[4px]'
            >LOGIN</Link>
          }
        </div>
      </div>
    </div >
  );
};

export default Header;