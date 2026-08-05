import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import { EditorPage } from "./pages/EditorPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <HomePage />
      },
      {
        path: "doc/:id",
        element: <EditorPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
