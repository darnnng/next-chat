'use client';

import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

type IProviderProps = {
  children: ReactNode;
};

const Providers = ({ children }: IProviderProps) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default Providers;
