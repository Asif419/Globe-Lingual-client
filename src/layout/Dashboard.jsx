import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

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
              <li><NavLink to='/dashboard/home'>Instructors<FaHome></FaHome></NavLink></li>
              <li><NavLink to='/dashboard/home'>Classes<FaHome></FaHome></NavLink></li>
              <li><NavLink to='/dashboard/home'>Students<FaHome></FaHome></NavLink></li>


              <div className="divider"></div>

              <li><NavLink to='/'>Home<FaHome></FaHome></NavLink></li>
              <li><NavLink to='/menu'> Our Menu</NavLink></li>
              <li><NavLink to='/order/salad'>Order Food</NavLink></li>

            </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;