import "./index.css";
import { lazy } from "react";
import AppLayout from "./Layout/AppLayout.jsx";
import { createRoot } from "react-dom/client";

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const Home = lazy(() => wait(1000).then(() => import("./pages/Home.jsx")));
const About = lazy(() => wait(1000).then(() => import("./pages/About.jsx")));
const Contact = lazy(() =>
  wait(1000).then(() => import("./pages/Contact.jsx")),
);

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
