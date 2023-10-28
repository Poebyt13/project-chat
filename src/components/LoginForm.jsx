import '../style/components/LoginForm.css'

function LoginForm({ titolo, funzione}) {
  return (

    <div className='LoginForm'>
      <p className='LoginForm__title'>{titolo}</p>
      <form className='LoginForm__box' method='POST' action={funzione}>
        <input type="text" placeholder='Username' className='LoginForm__input' name='user'/>

        <input type="password" placeholder='Password' className='LoginForm__input' name='password'/>

        <input type="submit" className='LoginForm__button' value={titolo}/>
      </form>
    </div>
  )
}

export default LoginForm
