import React, { useState } from 'react'
import "../../style/components/ChatRight/MessaggiContainer.css";
import Messaggi from "./Messaggi";

function MessaggiContainer({messaggiInviati}) {

  const messaggiTotale=messaggiInviati.map((elemento,index)=>{
    return <Messaggi lato={elemento[1]} key={index}  messaggio={elemento[0]} date={elemento[2]}/>;
  });

  return (
    <div className='MessaggiContainer'>
      {messaggiTotale}
    </div>
  )
}

export default MessaggiContainer
