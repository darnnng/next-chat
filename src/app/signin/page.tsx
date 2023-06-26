'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Button } from '@/components/Button';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

const Signin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  //   const handleGoogleLogin = async () => {
  //     setLoading(true);
  //     try {
  //       await signIn('google', {});
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/main';

  const handleGoogleLogin = () => {
    setLoading(true);
    console.log(loading);
    signIn('google', { callbackUrl })
      .catch((err) => {
        console.log(err);
        toast.error('smth wrong');
      })
      .finally(() => setLoading(false));
  };

  //TO-DO ADD ERROR DISPLAY
  return (
    <div className={styles.signInContainer}>
      <h1 className={styles.formTitle}>Sign In</h1>
      <Button
        onClick={() => signIn('google', { callbackUrl })}
        isLoading={loading}
        text="Login with Google"
      />
      <button onClick={() => signIn('google', { callbackUrl })}>LOgin</button>
    </div>
  );
};

export default Signin;
