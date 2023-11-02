
import '../style/components/WhatsAppChat.css'
import ChatLeft from "../components/ChatLeft/ChatLeft";
import ChatRight from "../components/ChatRight/ChatRight";


function WhatsAppChat() {
    return (
        <div className='WhatsAppChatContainer'>
            <ChatLeft/>
            <ChatRight/>
        </div>
    )
}

export default WhatsAppChat;