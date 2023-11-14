import React, { useState } from 'react'
import "../../style/components/ChatRight/InvioMessaggi.css";

function InvioMessaggi({setMessaggiInviati, NomeContatto, myUser}) {
  
const[messaggio,setMessaggio]=useState('');

const inviaMessaggio = () => {

  const date = new Date();

  const timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  if (messaggio.trim() !== '') {
    setMessaggiInviati(prevMessaggi => [...prevMessaggi, [messaggio, "MessaggiRight"]]);
    
    fetch('http://localhost:9000/save-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({myUser: myUser, message: messaggio, timestamp: timestamp, friend: NomeContatto}),
    })  
    .then(res=>{
      if (res.ok) {
        console.log("messaggio inviato e salvato")
      }
    })
    .catch(err=>{
      console.log("errore:" + err);
    })
  }
};


  
  return (
    <div className='InvioMessaggi'>
      <input type="text"   onChange={(e)=>{setMessaggio(e.target.value)}} />
      <button onClick={inviaMessaggio}  >  Invio</button>
    </div>
  )
}

export default InvioMessaggi
