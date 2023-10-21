import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import NavBar from "./components/NavBar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx"
import Pledge from "./pages/Pledge.jsx";
import AboutPage from "./pages/AboutPage.jsx";
// import CreateAccount from "./pages/CreateAccount.jsx";


import "./main.css";


const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/login", element: <LoginPage /> },
            { path: "/projects/:id", element: <ProjectPage /> },
            { path: "/projects", element: <ProjectPage /> },
            { path: "/pledges", element: <Pledge /> },
            { path: "/about", element: <AboutPage /> },
            // { path: "/account", element: <CreateAccount /> },
        ]
    }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
)

