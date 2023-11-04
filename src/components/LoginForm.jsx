import '../style/components/LoginForm.css'
import { useState } from "react";

function LoginForm({ titolo }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: username, password: password }),
      }).then(response=>{


        if (response.ok) {
          // Se la risposta è OK (status 200), reindirizza l'utente verso un'altra pagina
          window.location.href = 'http://localhost:5173/Chat';
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
      <form className='LoginForm__box' onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' className='LoginForm__input' name='user' onChange={(e) => setUsername(e.target.value)}/>

        <input type="password" placeholder='Password' className='LoginForm__input' name='password' onChange={(e) => setPassword(e.target.value)}/>

        <input type="submit" className='LoginForm__button' value={titolo}/>
      </form>
    </div>
  )
}

export default LoginForm
