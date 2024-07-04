// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Shared/Layout.jsx";
import LoginLayout from "./components/Shared/LoginLayout.jsx"; // Import the new LoginLayout
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx"; // Import Register

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />, // Use the LoginLayout component for the login route
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    element: <LoginLayout />, // Use the LoginLayout component for the register route
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
