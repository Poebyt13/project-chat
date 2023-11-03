import React, { useState } from 'react'
import "../../style/components/ChatRight/InvioMessaggi.css";

function InvioMessaggi({setMessaggiInviati}) {
const[messaggio,setMessaggio]=useState('');

const inviaMessaggio = () => {
  if (messaggio.trim() !== '') {
    setMessaggiInviati(prevMessaggi => [...prevMessaggi, messaggio]);
    
  }
};


  
  return (
    <div className='InvioMessaggi'>
      <input type="text"   onChange={(e)=>{setMessaggio(e.target.value)}} />
      <button onClick={inviaMessaggio} >  Invio</button>
    </div>
  )
}

export default InvioMessaggi
