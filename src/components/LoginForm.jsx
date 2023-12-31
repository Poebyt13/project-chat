import '../style/components/LoginForm.css'

function LoginForm({ titolo }) {
  return (

    <div className='LoginForm'>
      <p className='LoginForm__title'>{titolo}</p>
      <form className='LoginForm__box'>
        <input type="text" placeholder='Username' className='LoginForm__input'/>

        <input type="password" placeholder='Password' className='LoginForm__input'/>

        <input type="submit" className='LoginForm__button' value={titolo}/>
      </form>
    </div>
  )
}

export default LoginForm
