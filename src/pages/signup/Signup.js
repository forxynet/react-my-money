import React, { useState } from 'react'
import styles from './Signup.module.css'
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();

    signup(email, password, displayName);
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
      {!isPending && <button className='btn'>Signup</button>}
      {isPending && <button className='btn' disabled>loading</button>}
      {error && <p>{error}</p>}
    </form>
  )
}
