import React from 'react'
import "../../style/components/ChatRight/ChatRight.css"
import Username from "./Username";
import MessaggiContainer from "./MessaggiContainer";
import InvioMessaggi from "./InvioMessaggi";
import { useState, useEffect } from 'react'

function ChatRight({NomeContatto, messaggiInviati, setMessaggiInviati, myUser}) {


  return (
    <div className='ChatRight'>
      <Username nome={NomeContatto}/>
      <MessaggiContainer messaggiInviati={messaggiInviati}/>
      <InvioMessaggi  setMessaggiInviati={setMessaggiInviati} NomeContatto={NomeContatto} myUser={myUser}/>
    </div>
  )
}

export default ChatRight
