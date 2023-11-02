import React from 'react'
import "../../style/components/ChatRight/MessaggiContainer.css";
import Messaggi from "./Messaggi";

function MessaggiContainer() {
  return (
    <div className='MessaggiContainer'>
      <Messaggi lato="MessaggiLeft"/>
      <Messaggi lato="MessaggiRight"/>
    </div>
  )
}

export default MessaggiContainer
