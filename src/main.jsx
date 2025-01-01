import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Order from "./components/orders/Order";
import Profile from "./components/profle/Profile";
import Root from "./components/root/Root";
import PrivateRoute from "./components/routes/PrivateRoute";
import SignUP from "./components/signUp/SignUP";
import "./index.css";
import AuthProviders from "./providers/AuthProviders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUP></SignUP>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Order></Order>,
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
