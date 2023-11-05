import '../style/components/LoginForm.css'
import { useState } from "react";

function LoginForm({ titolo }) {
 const [username,setUserName]=useState('');
 const [password,setPassword]=useState('');

  const loginUser= async (event) => {
    event.preventDefault();
    try {
        fetch('http://localhost:9000/sign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: username, password: password }),
      }).then(response=>{


        if (response.ok) {
          console.log("Utente creato");
          window.location.href = 'http://localhost:5173/Login';
          
          // Se la risposta è OK (status 200), reindirizza l'utente verso un'altra pagina
          //
        } else {
          // Gestione di altri casi di risposta
          console.log('Errore durante il login');
        }
      }).catch(err=>{
        console.log("errore durantio l'avvio del sito + "+ err);
      })

    } catch (error) {
      // Gestione degli errori di rete o altri errori
      console.error('Errore:', error);
    }
  };
 

  return (

    <div className='LoginForm'>
      <p className='LoginForm__title'>{titolo}</p>
      <form className='LoginForm__box' onSubmit={loginUser}  >
        <input onChange={(e)=>{setUserName(e.target.value)}}  type="text" placeholder='Username' className='LoginForm__input' name='user' />

        <input  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' className='LoginForm__input' name='password' />

        <input type="submit"  className='LoginForm__button' value={titolo}/>
      </form>
    </div>
  )
}

export default LoginForm
