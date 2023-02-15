import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return params.roomCode;
}
export const Room = (props) => {
  const [guestCanPause, setGuestCanPause] = useState(true);
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [isHost, setIsHost] = useState(false);
  const roomCode = useLoaderData();
  
  const getRoomDetails = () => {
    console.log('GET ROOM DETS');
    fetch('/api/get-room?code='+roomCode).then(response=> response.json()).then(data=>{
        setVotesToSkip(data.votes_to_skip)
        setGuestCanPause(data.guest_can_pause)
        setIsHost(data.is_host)
        console.log(data);
    })
  };
  getRoomDetails()

  return (
    <div>
      <h3>{roomCode}</h3>
      <p>Votes: {votesToSkip}</p>
      <p>Guest Can Pause: {guestCanPause ? 'yes' : 'no'}</p>
      <p>Host: {isHost.toString()}</p>
    </div>
  );
};
