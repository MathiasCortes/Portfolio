import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// --- //

import Home from "./app/(main)/page.tsx";

import Error from "./app/(main)/error/page.tsx";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Error", element: <Error /> }
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
