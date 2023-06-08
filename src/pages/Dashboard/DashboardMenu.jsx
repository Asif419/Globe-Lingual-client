import { NavLink } from "react-router-dom";
import home from '../../assets/icon/house.png';
import instructors from '../../assets/icon/instructor.png';
import classes from '../../assets/icon/classes.png';
import students from '../../assets/icon/students.png';
import enrolled from '../../assets/icon/enrolled.png';
import add from '../../assets/icon/add.png';
import useUser from "../../hooks/useUser";

const DashboardMenu = () => {
  const [userFromDB] = useUser();
  const role = userFromDB?.role;
  return (
    <>
      {
        role === 'admin' ?
          <>
            <li><NavLink
              to='/dashboard/admin-home'
              className={({ isActive }) =>
                isActive ? "text-black-600 font-extrabold border-r-4 border-blue-600" : ""
              }>
              Admin Home<img className="w-8 h-8" src={home} alt="gl" /></NavLink></li>
            <li><NavLink
              to='/dashboard/admin-instructors'
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-extrabold border-r-4 border-blue-600" : ""
              }>
              Instructors<img className="w-8 h-8" src={instructors} alt="gl" /></NavLink></li>
            <li><NavLink
              to='/dashboard/admin-classes'
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-extrabold border-r-4 border-blue-600" : ""
              }>
              Manage Classes<img className="w-8 h-8" src={classes} alt="gl" /></NavLink></li>
            <li><NavLink
              to='/dashboard/admin-students'
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-extrabold border-r-4 border-blue-600" : ""
              }>
              Manage Students<img className="w-8 h-8" src={students} alt="gl" /></NavLink></li>
          </>
          :
          role === 'instructor' ?
            <>
              <li><NavLink to='/dashboard/instructor-home'>Instructor Home<img className="w-8 h-8" src={home} alt="gl" /></NavLink></li>
              <li><NavLink
                to='/dashboard/add-class'
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-extrabold border-r-4 border-blue-600" : ""
                }>
                Add a Class<img className="w-8 h-8" src={add} alt="gl" /></NavLink></li>
              <li><NavLink
                to='/dashboard/instructor-classes'
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-extrabold border-r-4 border-blue-600" : ""
                }>
                My Classes<img className="w-8 h-8" src={classes} alt="gl" /></NavLink></li>
            </>
            :
            <>
              <li><NavLink
                to='/dashboard/student-home'
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-extrabold border-r-4 border-blue-600" : ""
                }>
                Student Home<img className="w-8 h-8" src={home} alt="gl" /></NavLink></li>
              <li><NavLink
                to='/dashboard/enrolled-classes'
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-extrabold border-r-4 border-blue-600" : ""
                }>
                Enrolled Classes<img className="w-8 h-8" src={instructors} alt="gl" /></NavLink></li>
              <li><NavLink
                to='/dashboard/selected-classes'
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-extrabold border-r-4 border-blue-600" : ""
                }>
                Selected Classes<img className="w-8 h-8" src={classes} alt="gl" /></NavLink></li>
              <li><NavLink
                to='/dashboard/payment-history'
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-extrabold border-r-4 border-blue-600" : ""
                }>
                Payment History<img className="w-8 h-8" src={enrolled} alt="gl" /></NavLink></li>
            </>
      }
    </>
  );
};

export default DashboardMenu;