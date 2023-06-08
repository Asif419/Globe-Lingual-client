import { NavLink, Outlet } from "react-router-dom";
import logo from '../../public/logo.png';
import DashboardMenu from "../pages/Dashboard/DashboardMenu";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-[100vh]">
        <div className="fixed drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-ghost border-2 border-x-blue-600 flex drawer-button lg:hidden">Open Menu</label>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="max-w-[230px] text-base font-semibold flex justify-center items-end menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}

              <DashboardMenu></DashboardMenu>

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