import { useState } from 'react';
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);


  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);

      if (!res) {
        throw new Erro('Could not complate signup');
      }

      // ad display name to user
      await res.user.updateProfile({ displayName });

      setIsPending(false);
      setError(null);

    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  }

  export { error, isPending, signup }
}
