import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Product from "./pages/products/Product";
import Movie from "./pages/movie/Movie";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/hello",
    element: <Product />
  },
  {
    path: "/hello/:id",
    element: <Movie />
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
