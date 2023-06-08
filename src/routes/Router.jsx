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
import AdminStudents from "../pages/Dashboard/Admin/AdminStudents";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import InstructorClasses from "../pages/Dashboard/Instructor/InstructorClasses";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";

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
        element: <AdminInstructors />,
      },
      {
        path: 'admin-classes',
        element: <AdminClasses />,
      },
      {
        path: 'admin-students',
        element: <AdminStudents />,
      },
      //instructor
      {
        path: 'add-class',
        element: <AddClass />,
      },
      {
        path: 'instructor-classes',
        element: <InstructorClasses />,
      },
      //student
      {
        path: 'enrolled-classes',
        element: <EnrolledClasses />,
      },
      {
        path: 'selected-classes',
        element: <SelectedClasses />,
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />,
      },
    ]
  },
]);

export default router;