import { Header } from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import Providers from '@/components/Providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Real-time chat',
  description: 'Real-time chat with ability to add friends and message them',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`wrapper ${inter.className}`}>
        <Providers>
          <Header />
          <main className="container"> {children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
