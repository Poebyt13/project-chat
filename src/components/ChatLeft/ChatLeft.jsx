import AddChat from "./AddChat";
import ListChat from "./ListChat";
import '../../style/components/ChatLeft/ChatLeft.css'

function ChatLeft({contatti, setApriNewUser}) {
  return (
    <div className="ChatLeft">
      <AddChat setApriNewUser={setApriNewUser}/>
      <ListChat contatti={contatti} setApriNewUser={setApriNewUser}/>
    </div>
  )
}

export default ChatLeft
