
import Contact from "./Contact";
import '../../style/components/ChatLeft/ListChat.css';

function ListChat({ contatti, setApriNewUser }) {


    const ContattiTottali = contatti.map((element, key) => {
        return <Contact nome_utente={element} key={key} setApriNewUser={setApriNewUser} />;
    })

    return (
        <div className="ListChatContainer">
        
            {
                ContattiTottali
            }
        </div>
    );

}

export default ListChat;


