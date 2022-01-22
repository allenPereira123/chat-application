import React, { useState, useEffect } from 'react';


const Form = (props) => {
    


    return (
        <form onSubmit={(e)=>{props.handleSubmit(e)}} className='sign-in-form'>
            <h2>Enter Room</h2>
            <label><strong>Username</strong></label>
            <input onChange={(e)=>props.userHandler(e)} value={props.username} name='username' type='text' placeholder='Enter Username' required></input>
            <label><strong>Chat Room</strong></label>
            <input onChange={e => props.roomHandler(e)} value={props.room} name='room' type='text' placeholder='Enter Chat Room' required></input>
            <button type='submit'>Submit</button>
        </form> 
    )
}

export default Form;