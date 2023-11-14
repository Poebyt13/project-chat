import AddChat from "./AddChat";
import ListChat from "./ListChat";
import '../../style/components/ChatLeft/ChatLeft.css'

function ChatLeft({contatti, setApriNewUser, setNomeContatto, setMessaggiInviati, myUser}) {



  
  return (
    <div className="ChatLeft">
      <AddChat setApriNewUser={setApriNewUser} myUser={myUser}/>
      <ListChat contatti={contatti} setApriNewUser={setApriNewUser} setNomeContatto={setNomeContatto} setMessaggiInviati={setMessaggiInviati} myUser={myUser}/>
    </div>
  )
}

export default ChatLeft
