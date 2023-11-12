import React from 'react'
import "../../style/components/ChatRight/Messaggi.css";

function Messaggi({lato,messaggio, date}) {


  return (

    <div className={'Messaggi '+lato}>
      <p>{messaggio}</p>
      <p>{date}</p>
    </div>
  )
}

export default Messaggi
