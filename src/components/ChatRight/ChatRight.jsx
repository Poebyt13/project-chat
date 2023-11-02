import React from 'react'
import "../../style/components/ChatRight/ChatRight.css"
import Username from "./Username";
import MessaggiContainer from "./MessaggiContainer";
import InvioMessaggi from "./InvioMessaggi";

function ChatRight() {
  return (
    <div className='ChatRight'>
      <Username nome="mizu"/>
      <MessaggiContainer/>
      <InvioMessaggi/>
    </div>
  )
}

export default ChatRight
