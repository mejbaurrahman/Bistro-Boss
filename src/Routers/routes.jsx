import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Components/Secret/Secret";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import MyCart from "../Pages/Dashbord/MyCart/MyCart";
import Dashbord from "../Layouts/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/menu",
            element: <Menu></Menu>,
        },
        {
            path: "order/:category",
            element: <Order></Order>,
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ]
        
    },
    {
      path: '/dashboard',
      element: <PrivateRoutes><Dashbord></Dashbord></PrivateRoutes>, 
      children: [
        {
          path: 'mycart', 
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);

