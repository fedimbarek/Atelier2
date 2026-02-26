import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./RootLayout";
import AddEvent from "./AddEvent";
import UpdateEvent from "./UpdateEvent";
import Events from "./events";

// Lazy Loading
// const Home = lazy(() => import("./Pages/Home"));
const Event = lazy(() => import("./Event"));
const EventDetails = lazy(() => import("./EventDetails"));
const NotFound = lazy(() => import("./NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Event /> },
      { path: "events/:name", element: <EventDetails /> },
      { path: "*", element: <NotFound /> }
    ]
  },
  {
  path: "events",
  element: <Events />
},
  {
  path: "events/:id",
  element: <EventDetails />
},
{
  path: "add",
  element: <AddEvent/>
},
{
  path: "update/:id",
  element: <UpdateEvent />
}
]);

export default router;