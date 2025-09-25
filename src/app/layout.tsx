import type { Metadata } from 'next';
import '../assets/styles/globals.css';
import Navbar from '@/components/header/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Purrfect Fit',
  description: 'Everyday Pets. Everyday Supplies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className=" bg-purple-300 min-h-screen flex flex-col">
        <main className="relative z-0 h-full flex-1 ">
          <div>{children}</div>
        </main>
      </body>
      <Footer />
    </html>
  );
}
