import React, { useState } from 'react'
import "../../style/components/ChatRight/InvioMessaggi.css";

function InvioMessaggi({setMessaggiInviati,NomeContatto}) {
const[messaggio,setMessaggio]=useState('');

const inviaMessaggio = () => {

  const date=new Date();
  console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
  const ora=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  

  if (messaggio.trim() !== '') {
    setMessaggiInviati(prevMessaggi => [...prevMessaggi, messaggio]);
    fetch("http://localhost:9000/save-message",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messaggio:messaggio,ora:ora,nomeContatto:NomeContatto }),
    }).then(res=>{
      console.log("Operazione passata");

    })
    .catch(err=>{
      console.log(err);
    })
    
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
