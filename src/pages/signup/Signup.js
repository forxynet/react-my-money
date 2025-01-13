import React, { useState } from 'react'
import styles from './Signup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    const user = { email, password, displayName };

  }


  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <pan>email:</pan>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>
      <label>
        <pan>password:</pan>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      <label>
        <pan>diplay name:</pan>
        <input type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
      </label>
      <button className='btn'>Login</button>
    </form>
  )
}
