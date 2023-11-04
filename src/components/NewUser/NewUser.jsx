import React from 'react'
import "../../style/components/NewUser/NewUser.css";
import { useState } from "react";

function NewUser({setContatti, Contatti}) {

    const[username,setUsername]=useState('');


    const handleAddChat=async (e)=>{
        e.preventDefault();

        fetch("http://localhost:9000/create-user",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: username}),
          }
        ).then(
            response=>{
                if(response.ok){
                    if (!Contatti.includes(username)) {
                        setContatti(prevUser => [...prevUser, username]);
                    }
                } else {
                    console.log("Utente non trovato");
                }
            }
        ).catch(err=>{
            console.log("error:" + err);
        })
    }

    return (
        <div className='AddChatPageContainer'>
            <p className="AddChat_title">ADD A NEW USER</p>
            <form className="AddChat_form">
                <input type="text" name="user" onChange={(e)=>{setUsername(e.target.value)}}/>
                <button type="submit" className="AddChat_button" onClick={handleAddChat}>ADD USER</button>
            </form>

        </div>
    )
}

export default NewUser
