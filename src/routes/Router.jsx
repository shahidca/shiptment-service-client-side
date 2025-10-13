import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import Authantication from "./Authantication";
import SignIn from "../pages/Authantications/SignIn";
import SignUp from "../pages/Authantications/SignUp";
import BeRider from "../pages/home/BeRider";
import Pricing from "../pages/Pricing";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: 'about',
          Component: About
        },
        {
          path: "beRider",
          Component: BeRider
        },
        {
          path: 'pricing',
          Component: Pricing
        }
    ]
  },
  {
    path: "/",
    Component: Authantication,
    children: [
      {
        path: "sign-in",
        Component: SignIn
      },
      {
        path: "sign-up",
        Component: SignUp
      }
    ]
  }
])