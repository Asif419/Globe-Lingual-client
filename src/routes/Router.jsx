import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../layout/Dashboard";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Error from "../pages/Shared/Error/Error";
import AdminInstructors from "../pages/Dashboard/Admin/AdminInstructors";
import AdminClasses from "../pages/Dashboard/Admin/AdminClasses";
// import AdminStudents from "../pages/Dashboard/Admin/AdminStudents";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import InstructorClasses from "../pages/Dashboard/Instructor/InstructorClasses";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/instructors',
        element: <Instructors />
      },
      {
        path: '/classes',
        element: <Classes />
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'registration',
        element: <Registration />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    errorElement: <Error />,
    children: [
      //admin
      {
        path: 'admin-instructors',
        element: <AdminRoute><AdminInstructors /></AdminRoute>,
      },
      {
        path: 'admin-classes',
        element: <AdminRoute><AdminClasses /></AdminRoute>,
      },
      // {
      //   path: 'admin-students',
      //   element: <AdminRoute><AdminStudents /></AdminRoute>,
      // },
      
      //instructor
      {
        path: 'add-class',
        element: <InstructorRoute><AddClass /></InstructorRoute>,
      },
      {
        path: 'instructor-classes',
        element: <InstructorRoute><InstructorClasses /></InstructorRoute>,
      },
      //student
      {
        path: 'enrolled-classes',
        element: <StudentRoute><EnrolledClasses /></StudentRoute>,
      },
      {
        path: 'selected-classes',
        element: <StudentRoute><SelectedClasses /></StudentRoute>,
      },
      {
        path: 'payment-history',
        element: <StudentRoute><PaymentHistory /></StudentRoute>,
      },
    ]
  },
]);

export default router;