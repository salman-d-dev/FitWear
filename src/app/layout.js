import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import './globals.css';
import { Inter } from 'next/font/google';
import ToastProvider from './context/ToastProvider';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fit Wear',
  description: 'e-commerce site for fit clothes and more',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ToastProvider>

        <Navbar/>
        {children}
        <Footer/>
          </ToastProvider>
        </CartProvider>
        </body>
    </html>
  )
}
