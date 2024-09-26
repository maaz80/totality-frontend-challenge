import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from './context/CartContext'; // Import the CartProvider
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MyProps",
  description: "My Estate app as an assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Navbar/>
          {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
