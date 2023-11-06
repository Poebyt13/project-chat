import AddChat from "./AddChat";
import ListChat from "./ListChat";
import '../../style/components/ChatLeft/ChatLeft.css'

function ChatLeft({contatti, setApriNewUser, setNomeContatto}) {



  
  return (
    <div className="ChatLeft">
      <AddChat setApriNewUser={setApriNewUser}/>
      <ListChat contatti={contatti} setApriNewUser={setApriNewUser} setNomeContatto={setNomeContatto}/>
    </div>
  )
}

export default ChatLeft
