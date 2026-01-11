import Home from "./pages/Home";
import ReactDOM from 'react-dom/client';
import AppLayout from "./Layout/AppLayout";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleCountry from "./components/SingleCountry";
import { ThemeProvider } from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/:country",
        element: <SingleCountry />,
        errorElement: <ErrorPage />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider>
  <RouterProvider router={router} />
</ThemeProvider>
);