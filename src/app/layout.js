import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import { GlobalProvider } from './context/GlobalContext';
import './globals.css';
import { Inter } from 'next/font/google';
import { ToastProvider } from './context/ToastProvider'; // Import as a named export
import ThemeSwitch from './_components/ThemeSwitch';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fit Wear',
  description: 'e-commerce site for fit clothes and more',
};
// bg-[#75dfff]
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <div className="bg-[#c56fed] dark:hidden h-[21.25rem] -z-10 w-[21.25rem] sm:w-[58.75rem] fixed top-[-6rem] right-[11rem] rounded-full blur-[10rem]"></div>
        <div className="bg-cyan-300 dark:hidden h-[21.25rem] -z-10 w-[21.25rem] sm:w-[58.75rem] fixed top-[-1rem] left-[-35rem] md:left-[-33rem] lg:lef-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] rounded-full blur-[10rem]"></div>
        <GlobalProvider>
          <ToastProvider>{/* Correct order of wrapping providers */}
            <Navbar />
            <div className='dark:bg-gradient-to-tr from-black to-[#01172e] pt-32 sm:pt-20'>
            {children}
            </div>
            <Footer />
          </ToastProvider>
        </GlobalProvider>
        <ThemeSwitch/>
      </body>
    </html>
  );
}
