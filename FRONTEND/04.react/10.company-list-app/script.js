import "./style.css";
import AppLayout from "./App";
import Error from "./components/Error";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import CompanyDetail from "./components/CompanyDetail";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/company",
        element: <CompanyDetail />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
