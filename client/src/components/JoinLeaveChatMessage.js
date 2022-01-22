import React, { useState, useEffect } from 'react';

const JoinLeaveChatMessage = ({msg, date}) => {






    return (
        <div className='join-leave'>
            <div className='join-leave-msg'>
                {msg}
            </div>
            <div className='join-leave-msg-time'>{date}</div>
        </div>
    )
}

export default JoinLeaveChatMessage;