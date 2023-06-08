import { NavLink, Outlet } from "react-router-dom";
import logo from '../../public/logo.png';
import home from '../../src/assets/icon/house.png';
import instructors from '../../src/assets/icon/instructor.png';
import classes from '../../src/assets/icon/classes.png';
import students from '../../src/assets/icon/students.png';

const Dashboard = () => {
  return (
    <>
      <div className="min-h-[100vh]">
        <div className="fixed drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="max-w-[230px] text-base font-semibold flex justify-center items-end menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li><NavLink to='/dashboard/home'>Home<img className="w-8 h-8" src={home} alt="gl" /></NavLink></li>
              <li><NavLink to='/dashboard/instructors'>Instructors<img className="w-8 h-8" src={instructors} alt="gl" /></NavLink></li>
              <li><NavLink to='/dashboard/classes'>Classes<img className="w-8 h-8" src={classes} alt="gl" /></NavLink></li>
              <li><NavLink to='/dashboard/students'>Students<img className="w-8 h-8" src={students} alt="gl" /></NavLink></li>


              <div className="divider"></div>

              <li><NavLink to='/'>Globe Lingual <img className="w-8 h-8" src={logo} alt="gl" /> </NavLink></li>

            </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;