import React from 'react'
import '../../style/components/ChatLeft/Contact.css'

function Contact({nome_utente, setApriNewUser, setNomeContatto, setMessaggiInviati}) {


  const ChangeState = (e)=>{
    setApriNewUser(false);
    setNomeContatto(e.target.outerText);

    fetch("http://localhost:9000/find-friend",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ friend: e.target.outerText }),
    })
    .then(res=>{  
      if (res.ok) {
        console.log("contatto salvato nel server");
      } 
    })
    .catch(err=>{
      console.log("errore: "+err);
    })


    fetch("http://localhost:9000/get-all-message",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      
    })
    .then(response=>{
      if(response.ok){
        return  response.json();
      }
    })
    .then(data=>{
      const allData = data.map((element)=>{
        return [element.message, element.by, element.timestamp];  
      })

      setMessaggiInviati([...allData])
    })
    .catch(err=>{
      console.log("messaggi non recuperati: "+ err)
    })
  }

  return (
    <div className='AddContactContainer' onClick={ChangeState}>
        <p>{nome_utente}</p>
      
    </div>
  )
}

export default Contact
