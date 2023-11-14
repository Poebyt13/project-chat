
import '../style/components/WhatsAppChat.css'
import ChatLeft from "../components/ChatLeft/ChatLeft";
import ChatRight from "../components/ChatRight/ChatRight";
import NewUser from "../components/NewUser/NewUser";
import { useState, useEffect } from "react";

function WhatsAppChat() {

  //messaggi inviati
  const [messaggiInviati, setMessaggiInviati] = useState([]);

  //creazione di contatti per gestire NewUser e ListChat
  const [Contatti, setContatti] = useState([]);

  //nome contatto in alto a destra
  const [NomeContatto, setNomeContatto] = useState("");

  //Apre e chiude la finestra di NewUser, gestito da AddChat e Contact
  const [ApriNewUser, setApriNewUser] = useState(2);

  //my username nel frontend
  const [myUser, setMyUser] = useState("");

  //IL MIO USERNAME LO VADO A PRENDERE DAL SERVER
  useEffect(() => {
    fetch("http://localhost:9000/find-user", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        setMyUser(data.user);
      })
  }, []);


  //TROVA TUTTI I CONTATTI DEL UTENTE
  // ...

  // TROVA TUTTI I CONTATTI DEL UTENTE
  useEffect(() => {
    if (myUser) {
      fetch(`http://localhost:9000/find-contact?myUser=${myUser}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          console.log(data);
          const allData = data.map((element) => {
            return element.contact_name;
          })

          setContatti([...allData])
        })
        .catch(error => {
          console.error('Errore nella richiesta find-contact:', error);
        });
    }
  }, [myUser]);


  return (
    <div className='WhatsAppChatContainer'>
      <ChatLeft contatti={Contatti} setApriNewUser={setApriNewUser} setNomeContatto={setNomeContatto} setMessaggiInviati={setMessaggiInviati} myUser={myUser} />

      {ApriNewUser == 1
        ? (<NewUser setContatti={setContatti} Contatti={Contatti} />)
        : ApriNewUser == 0 ? <ChatRight myUser={myUser} NomeContatto={NomeContatto} messaggiInviati={messaggiInviati} setMessaggiInviati={setMessaggiInviati} />
          : null}

      {/* <ChatRight /> */}
      {/* <NewUser setContatti={setContatti} /> */}
    </div>
  )
}

export default WhatsAppChat;