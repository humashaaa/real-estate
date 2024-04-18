import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Details from "../Components/Details";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
            loader: ()=> fetch('/estate.json'),
        },
        {
            path: '/villa/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader: ()=> fetch('/estate.json'),
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/about',
            element:<About></About>
        },
        {
            path: '/contact',
            element:<Contact></Contact>
        },
      ]
     },
  ]);
  export default router