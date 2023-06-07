import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../layout/Dashboard";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {

      }
    ]
  }
]);

export default router;