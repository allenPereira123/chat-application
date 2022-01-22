import React, { useState, useEffect } from 'react';
import GeneralChatMessage  from './GeneralChatMessage';
import JoinLeaveChatMessage from './JoinLeaveChatMessage';
import ScrollToBottom from 'react-scroll-to-bottom'

const Chat = ({username, room, socket}) => {

    const [currentMessage, setCurrentMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState(0);

    useEffect(() => {
      socket.emit('join-room', username,room);
      socket.on('message', (msg,count)=> {
          setChatMessages(prev => [...prev, msg]);
          setOnlineUsers(count);
      })

      socket.on('user-disconnected', count => {
          setOnlineUsers(count);
      })
      
    }, [])

    useEffect(()=>{
        socket.on('chatMessage', (msg) => setChatMessages(prev => [...prev, msg]))
    }, [])


    const chatFormHandler = (e) => {
        e.preventDefault();
        setCurrentMessage("")
        socket.emit('message', currentMessage)
    }
    
    return (
    <div className="chat-container">
        <div className="header">
            <div className="chat-room">
                <div className="icon"><i className="fas fa-comment-alt"></i></div>
                <div className="chat-room-name">{room}</div>
            </div>
            <div className="connected-users">Connected Users: {onlineUsers}</div>
        </div>
        <div className="messages">
            <ScrollToBottom className='scroll'>
                { 
                    chatMessages.map((element,index) => {
                        return element.username ? <GeneralChatMessage key={index} msgInfo={element} username={username}/> :<JoinLeaveChatMessage key={index} msg={element.message} date={element.date}/>
                    })
                }
            </ScrollToBottom>
        </div>
        <form onSubmit={e => chatFormHandler(e)} className="input-messages">
            <input onChange={(e)=> setCurrentMessage(e.target.value)} value={currentMessage} type="text" className="input-message" placeholder="Enter Message" required/>
            <button>Send</button>
        </form>
    </div>
    )
}

export default Chat;