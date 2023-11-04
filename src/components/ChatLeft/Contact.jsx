import React from 'react'
import '../../style/components/ChatLeft/Contact.css'

function Contact({nome_utente, setApriNewUser}) {

  const ChangeState = ()=>{
    setApriNewUser(false);
  }

  return (
    <div className='AddContactContainer' onClick={ChangeState}>
        <p>{nome_utente}</p>
      
    </div>
  )
}

export default Contact
