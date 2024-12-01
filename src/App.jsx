import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// --- //
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";
import Login from "./pages/Login.jsx";
import "./styles/App.css";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Inicio", element: <Login /> },
  { path: "/Editar", element: <Edit /> },
  { path: "/Error", element: <Error /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
