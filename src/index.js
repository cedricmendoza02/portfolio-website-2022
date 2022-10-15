import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route
  } from "react-router-dom";
import { Root } from "./routes"
import { Main } from "./components"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/main",
          element: <Main />,
        }
      ]
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)