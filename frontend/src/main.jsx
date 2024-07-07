// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
// import "./index.css";
// import Layout from "./components/Shared/Layout.jsx";
// import LoginLayout from "./components/Shared/LoginLayout.jsx"; // Import the new LoginLayout
// import Login from "./components/Auth/Login.jsx";
// import Register from "./components/Auth/Register.jsx"; // Import Register
// import { Auth0Provider } from "@auth0/auth0-react";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // Use the Layout component
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <LoginLayout />, // Use the LoginLayout component for the login route
//     children: [
//       {
//         path: "/login",
//         element: <Login />,
//       },
//     ],
//   },
//   {
//     path: "/register",
//     element: <LoginLayout />, // Use the LoginLayout component for the register route
//     children: [
//       {
//         path: "/register",
//         element: <Register />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Shared/Layout.jsx";
import LoginLayout from "./components/Shared/LoginLayout.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import Dashboard from "./components/Dasboard/Dashboard.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
]);

const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || window.location.pathname
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ucupvgvo7h3231ok.us.auth0.com"
    clientId="ISA1zJx2E4iXuPoTnc3FTtninkdCOZvX"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    onRedirectCallback={onRedirectCallback}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Provider>
);
