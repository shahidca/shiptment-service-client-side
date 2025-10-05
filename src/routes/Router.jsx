import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            Component: Home,
        }
    ]
  },
])