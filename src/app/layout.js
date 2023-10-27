import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { GlobalProvider } from './context/GlobalContext';
import './globals.css';
import { Inter } from 'next/font/google';
import { ToastProvider } from './context/ToastProvider'; // Import as a named export

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fit Wear',
  description: 'e-commerce site for fit clothes and more',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <ToastProvider>{/* Correct order of wrapping providers */}
            <Navbar />
            {children}
            <Footer />
          </ToastProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
