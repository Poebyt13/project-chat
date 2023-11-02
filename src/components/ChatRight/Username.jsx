import React from 'react'
import "../../style/components/ChatRight/Username.css";

function Username({nome}) {
  return (
    <div className='UsernameContainer'>
      <h3>{nome}</h3>
    </div>
  )
}

export default Username
