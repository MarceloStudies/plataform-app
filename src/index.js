import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Login from "./pages/Login";
import ItemCollection from "./pages/ItemCollection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavigationBar from './components/navbar/NavigationBar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <html id="teste" className="dark"> 
    <body className="m-0 p-0 bg-slate-100 dark:bg-gray-900">
    <NavigationBar />
    <RouterProvider router={router}	COLOR	CATEGORY	ACCESSORIES	AVAILABLE	PRICE />
    </body>
    </html>
  </React.StrictMode>
);
