import React, { useState, useEffect } from 'react';

const GeneralChatMessage = ({username, msgInfo, date}) => {


    return (
        <div className={(msgInfo.username === username) ? 'msg-right':'msg-left'}>
            <div className='avatar'></div>
            <div className='bubble'>
                <div className='msg-info'>
                    <div className='msg-name'>{msgInfo.username}</div>
                    <div className='msg-time'>{msgInfo.date}</div>
                </div>
                <div className='msg-text'>{msgInfo.message}</div>
            </div>
            
        </div>
    )
}

export default GeneralChatMessage;