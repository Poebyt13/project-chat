import React from 'react'
import '../../style/components/ChatLeft/Contact.css'

function Contact({nome_utente, setApriNewUser, setNomeContatto}) {

  const ChangeState = (e)=>{
    setApriNewUser(false);
    setNomeContatto(e.target.outerText);
  }

  return (
    <div className='AddContactContainer' onClick={ChangeState}>
        <p>{nome_utente}</p>
      
    </div>
  )
}

export default Contact
