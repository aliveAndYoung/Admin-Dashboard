import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import Layout from "../components/layout/Layout";
import Login from "../pages/login/Login";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "users",
                element: <Users />,
            },
        ],
    },
    {
        path:'login' ,
        element : <Login/>
    }
]);
export default Routers;
