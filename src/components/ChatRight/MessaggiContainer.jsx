import React, { useState } from 'react'
import "../../style/components/ChatRight/MessaggiContainer.css";
import Messaggi from "./Messaggi";

function MessaggiContainer({messaggiInviati}) {

  const messaggiTotale=messaggiInviati.map((elemento,index)=>{
   return <Messaggi lato="MessaggiRight" key={index}  messaggio={elemento}/>;

  });

  return (
    <div className='MessaggiContainer'>
      {messaggiTotale}
    </div>
  )
}

export default MessaggiContainer
