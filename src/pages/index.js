import Image from 'next/image';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import ContextProvider from '@/ContextProvider';

const Platform = dynamic(() => import('./Platform'), {
  ssr: false,
});

const Overlay = dynamic(() => import('./Overlay'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <ContextProvider>
        <Platform />
        <Overlay />
      </ContextProvider>
    </>
  );
}
