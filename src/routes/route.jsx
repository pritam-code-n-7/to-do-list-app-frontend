import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import LogOut from "../components/LogOut";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/logout",
    element: <LogOut />,
  },
]);
