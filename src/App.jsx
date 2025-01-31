import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// --- //

import Home from "./app/page.tsx";
import Login from "./app/login/page.tsx";
import Register from "./app/(auth)/register/page.tsx";
import Error from "./app/error/page.tsx";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: "/Error", element: <Error /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
