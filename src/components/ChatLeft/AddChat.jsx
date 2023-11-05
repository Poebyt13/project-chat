
import { useState,useEffect } from 'react';
import '../../style/components/ChatLeft/AddChat.css'


function AddChat({setApriNewUser}) {
  const[myUser,setMyUser]=useState('');
  const ChangeState =async ()=>{
    setApriNewUser(true);
  }

  useEffect(()=>{
    fetch("http://localhost:9000/find-user",{
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
      setMyUser(data.user);
    })
  },[]);
  

  




  return (
    <div className='AddChatContainer' >
        <h2>{myUser}</h2>
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={ChangeState}>
        <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"/>
        <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    </div>   
  );  




  
}




export default AddChat;
