import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NextAuthProvider } from "./Providers";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "MUN",
  description: "by IIST",
  icons: {
    icon: "icon.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body class="bg-cover bg-center h-full bg-fixed" style={{backgroundImage: "url('bg1.png')"}}>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </body>
      </NextAuthProvider>
    </html>
  );
}
