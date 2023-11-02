import React from 'react'
import '../../style/components/ChatLeft/Contact.css'

function Contact({nome_utente}) {
  return (
    <div className='AddContactContainer'>
        <p>{nome_utente}</p>
      
    </div>
  )
}

export default Contact
