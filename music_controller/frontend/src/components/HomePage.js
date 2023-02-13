import React from "react";
import { CreateRoomPage } from "./CreateRoomPage";
import {RoomJoinPage} from "./RoomJoinPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is home page</div>,
  },
  {
    path: "/join",
    element: <RoomJoinPage/>
  },
  {
    path: "/join/1",
    element: <p>ekd</p>
  },
  {
    path: "/create",
    element: <CreateRoomPage/>
  },
]);
export const HomePage = (props) => {
  return (
    //   <h1>edkedm</h1>
    <RouterProvider router={router} />
  );
};
