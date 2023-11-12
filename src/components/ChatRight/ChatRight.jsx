import React from 'react'
import "../../style/components/ChatRight/ChatRight.css"
import Username from "./Username";
import MessaggiContainer from "./MessaggiContainer";
import InvioMessaggi from "./InvioMessaggi";
import { useState, useEffect } from 'react'

function ChatRight({NomeContatto, messaggiInviati, setMessaggiInviati}) {


  return (
    <div className='ChatRight'>
      <Username nome={NomeContatto}/>
      <MessaggiContainer messaggiInviati={messaggiInviati}/>
      <InvioMessaggi  setMessaggiInviati={setMessaggiInviati}/>
    </div>
  )
}

export default ChatRight
