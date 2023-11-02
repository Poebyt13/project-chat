import AddChat from "./AddChat";
import ListChat from "./ListChat";
import '../../style/components/ChatLeft/ChatLeft.css'

function ChatLeft() {
  return (
    <div className="ChatLeft">
      <AddChat/>
      <ListChat/>
    </div>
  )
}

export default ChatLeft
