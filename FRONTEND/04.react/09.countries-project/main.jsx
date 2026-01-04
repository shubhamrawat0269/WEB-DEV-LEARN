import ReactDOM from 'react-dom/client';
import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

console.log(createBrowserRouter);
console.log(RouterProvider);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);