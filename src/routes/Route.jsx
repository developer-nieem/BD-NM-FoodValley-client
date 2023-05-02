import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Pages/Home";
import ErrorPage from "../components/Pages/ErrorPage";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import Blog from "../components/Pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ],
  },
]);

export default router;
