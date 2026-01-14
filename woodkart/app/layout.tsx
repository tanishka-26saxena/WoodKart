import "./globals.css";
import { Montserrat } from 'next/font/google';
import Navbar from "./components/Navbar";


const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">
        <>
  <div className="relative">
    <Navbar />
  </div>
  <div className="h-[20px] lg:h-[20px]" />
  {children}
</>
      </body>
    </html>
  );
}
