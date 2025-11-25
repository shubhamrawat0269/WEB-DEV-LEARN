import './style.css';
import App from './App';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Companies API : --> https://json-placeholder.mock.beeceptor.com/companies
// Single Company data : --> https://json-placeholder.mock.beeceptor.com/companies/1

root.render(<RouterProvider router={router} />);