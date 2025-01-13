import { useState } from 'react'
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const login = { email, password }
    console.log(login)
  }

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <pan>email:</pan>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>
      <label>
        <pan>password:</pan>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      <button className='btn'>Login</button>
    </form>
  )
}
