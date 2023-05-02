import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Pages/Home";
import ErrorPage from "../components/Pages/ErrorPage";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import Blog from "../components/Pages/Blog";
import Chef from "../components/ChefDetails/Chef";
import ChefViewDetails from "../components/ChefDetails/ChefViewDetails";
import PrivateRoute from "./PrivateRoute";

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
      },
      {
        path:'/chef/:id',
        element:<PrivateRoute><ChefViewDetails></ChefViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment10-server-developer-nieem.vercel.app/chef/${params.id}`)
      }
    ],
  },
]);

export default router;
