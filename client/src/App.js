import './App.css';
import io from 'socket.io-client'
import Form from './components/Form';
import Chat from './components/Chat'
import React, { useState, useEffect, Fragment } from 'react';

const socket = io.connect('https://react-chat-app12345.herokuapp.com/');


function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setChat] = useState(false);

  const userHandler = (e) => {
    setUsername(e.target.value);
  }

  const roomHandler = (e) => {
    setRoom(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit('join', username, room, (err) => {
      if (err) {
        alert(err);
      }
      else {
        setChat(true);
      }
    })
  }


  return (

    <Fragment>
      {
        showChat === false ? (
          <Form
            room={room}
            username={username}
            userHandler={userHandler}
            roomHandler={roomHandler}
            handleSubmit={handleSubmit}
            socket={socket}

          >

          </Form>) : (<Chat
            username={username}
            room={room}
            socket={socket}
          ></Chat>)
      }
    </Fragment>


  )
}

export default App;