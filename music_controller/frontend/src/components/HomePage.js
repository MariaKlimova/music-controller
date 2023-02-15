import React from "react";
import { CreateRoomPage } from "./CreateRoomPage";
import { RoomJoinPage } from "./RoomJoinPage";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  Routes,
} from "react-router-dom";
import { Room, loader as roomLoader } from "./Room";
import {loader as createRoomLoader} from "./CreateRoomPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is home page</div>,
  },
  {
    path: "room/:roomCode",
    loader: roomLoader,
    element: <Room />,
    //loader: eventLoader,
  },
  {
    path: "/join",
    element: <RoomJoinPage />,
  },
  {
    path: "/create",
    loader: createRoomLoader,
    element: <CreateRoomPage />,
  },
  // {
  //   path: "/room/:roomCode",
  //   element: <Room />,
  // },
]);
export const HomePage = (props) => {
  return (
    //   <h1>edkedm</h1>
    <RouterProvider router={router} his/>
  );
};
