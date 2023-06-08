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
  const role = userFromDB.role;
  console.log(userFromDB.role);
  return (
    <>
      {
        role === 'admin' ?
          <>
            <li><NavLink to='/dashboard/admin-home'>Admin Home<img className="w-8 h-8" src={home} alt="gl" /></NavLink></li>
            <li><NavLink to='/dashboard/admin-instructors'>Instructors<img className="w-8 h-8" src={instructors} alt="gl" /></NavLink></li>
            <li><NavLink to='/dashboard/admin-classes'>Manage Classes<img className="w-8 h-8" src={classes} alt="gl" /></NavLink></li>
            <li><NavLink to='/dashboard/admin-students'>Manage Students<img className="w-8 h-8" src={students} alt="gl" /></NavLink></li>
          </>
          :
          role === 'instructor' ?
            <>
              <li><NavLink to='/dashboard/instructor-home'>Instructor Home<img className="w-8 h-8" src={home} alt="gl" /></NavLink></li>
              <li><NavLink to='/dashboard/add-class'>Add a Class<img className="w-8 h-8" src={add} alt="gl" /></NavLink></li>
              <li><NavLink to='/dashboard/instructor-classes'>My Classes<img className="w-8 h-8" src={classes} alt="gl" /></NavLink></li>
            </>
            :
            <>
              <li><NavLink to='/dashboard/student-home'>Student Home<img className="w-8 h-8" src={home} alt="gl" /></NavLink></li>
              <li><NavLink to='/dashboard/enrolled-classes'>Enrolled Classes<img className="w-8 h-8" src={instructors} alt="gl" /></NavLink></li>
              <li><NavLink to='/dashboard/selected-classes'>Selected Classes<img className="w-8 h-8" src={classes} alt="gl" /></NavLink></li>
              <li><NavLink to='/dashboard/payment-history'>Payment History<img className="w-8 h-8" src={enrolled} alt="gl" /></NavLink></li>
            </>
      }
    </>
  );
};

export default DashboardMenu;