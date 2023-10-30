import '../style/components/AddChat.css'
import { useState } from "react";

function AddChat() {
  const [flag, setFlag] = useState(false);

  const handleFlag = ()=>{
    setFlag(true);
  };



  if (!flag) {
    return (
  

      <div className='AddChatContainer'>
  
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleFlag}>
          <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"/>
          <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
  
  
  
  
      </div>   
    );
    
  }
  else{

  }
  




  
}




export default AddChat;
