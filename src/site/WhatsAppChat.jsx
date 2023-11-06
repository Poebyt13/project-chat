
import '../style/components/WhatsAppChat.css'
import ChatLeft from "../components/ChatLeft/ChatLeft";
import ChatRight from "../components/ChatRight/ChatRight";
import NewUser from "../components/NewUser/NewUser";
import { useState, useEffect } from "react";

function WhatsAppChat() {

    //creazione di contatti per gestire NewUser e ListChat
    const [Contatti, setContatti] = useState([]);

    //nome contatto in alto a destra
    const [NomeContatto, setNomeContatto] = useState("");

    //Apre e chiude la finestra di NewUser, gestito da AddChat e Contact
    const [ApriNewUser, setApriNewUser] = useState(2);

    useEffect(()=>{
        fetch("http://localhost:9000/find-contact",{
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
          //console.log("Ciao questo è il dato:"+data);
            const allData = data.map((element)=>{
              return element.contact_name;
              
            })
            setContatti([...allData])
        })
      },[]);

    return (
        <div className='WhatsAppChatContainer'>
            <ChatLeft contatti={Contatti} setApriNewUser={setApriNewUser} setNomeContatto={setNomeContatto}/>

            {ApriNewUser == 1 ? (<NewUser setContatti={setContatti} Contatti={Contatti}/>) : ApriNewUser == 0 ? <ChatRight NomeContatto={NomeContatto}/> : null}

            {/* <ChatRight /> */}
            {/* <NewUser setContatti={setContatti} /> */}
        </div>
    )
}

export default WhatsAppChat;