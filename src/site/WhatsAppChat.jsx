
import '../style/components/WhatsAppChat.css'
import ChatLeft from "../components/ChatLeft/ChatLeft";
import ChatRight from "../components/ChatRight/ChatRight";
import NewUser from "../components/NewUser/NewUser";
import { useState } from "react";

function WhatsAppChat() {

    //creazione di contatti per gestire NewUser e ListChat
    const [Contatti, setContatti] = useState([]);

    //Apre e chiude la finestra di NewUser, gestito da AddChat e Contact
    const [ApriNewUser, setApriNewUser] = useState(false);

    return (
        <div className='WhatsAppChatContainer'>
            <ChatLeft contatti={Contatti} setApriNewUser={setApriNewUser}/>
            {ApriNewUser ? <NewUser setContatti={setContatti} Contatti={Contatti}/> : <ChatRight/>}

            {/* <ChatRight /> */}
            {/* <NewUser setContatti={setContatti} /> */}
        </div>
    )
}

export default WhatsAppChat;