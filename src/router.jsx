import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from './features/auth'
import DashboardLayout from './features/dashboard'
import Users from "./features/dashboard/users";
import Settings from "./features/dashboard/settings";
import Dashboard from "./features/dashboard/dashboard";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "settings",
                element: <Settings />
            }
        ]
    }
  ]);
  