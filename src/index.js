import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Login from "./pages/Login";
import ItemCollection from "./pages/ItemCollection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Margon from "./pages/Margon";
import PDFGeneratorContract from "./pages/PDFGenerator";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Margon/>
  },
  {
    path: "/login",
    element: <Login param="login"/>,
  },
  {
    path: "/register",
    element: <Login param="register"/>,
  },
  {
    path: "/collection",
    element: <ItemCollection/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },

  {
    path: "/pdf",
    element: <PDFGeneratorContract />,
  },

  {
    path: "/imogon",
    element: <Login param="login" company="imogon"/>,
  },

  {
    path: "/holyhouse",
    element: <Login param="login" company="holyhouse"/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <html id="central" className=""> 
    <body className="m-0 p-0 bg-slate-100 dark:bg-gray-900">
    <RouterProvider router={router}	/>
    </body>
    </html>
  </React.StrictMode>
);
