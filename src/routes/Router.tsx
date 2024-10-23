import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Test from "../views/Test";
import Login from "../views/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default router;