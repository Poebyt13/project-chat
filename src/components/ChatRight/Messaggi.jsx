import React from 'react'
import "../../style/components/ChatRight/Messaggi.css";

function Messaggi({lato,messaggio}) {


  return (

    <div className={'Messaggi '+lato}>
      <p>{messaggio}</p>
    </div>
  )
}

export default Messaggi
