import React from 'react'
import "../../style/components/ChatRight/ChatRight.css"
import Username from "./Username";
import MessaggiContainer from "./MessaggiContainer";
import InvioMessaggi from "./InvioMessaggi";
import { useState } from 'react'

function ChatRight({NomeContatto}) {
  const[messaggiInviati,setMessaggiInviati]=useState([]);




  return (
    <div className='ChatRight'>
      <Username nome={NomeContatto}/>
      <MessaggiContainer messaggiInviati={messaggiInviati}/>
      <InvioMessaggi  setMessaggiInviati={setMessaggiInviati}  NomeContatto={NomeContatto}/>
    </div>
  )
}

export default ChatRight
