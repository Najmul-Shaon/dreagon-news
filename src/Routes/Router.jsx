import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news",
    element: <h1>News</h1>,
  },
  {
    path: "/auth",
    element: <h1>Login</h1>,
  },
  {
    path: "*",
    element: <h1>error</h1>,
  },
]);

export default Router;
