import type { Metadata } from "next";
import "./globals.css";
import {IBM_Plex_Sans} from 'next/font/google'
import SideNav from "./components/dashboard/SideNav/SideNav";


const plex_sans = IBM_Plex_Sans({weight:"500"});

export const metadata: Metadata = {
  title: "Gomez Private Housing",
  description: "A Dashboard for reviewing Gomez House Private assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={plex_sans.className}>
        <SideNav></SideNav>
        {children}
      </body>
    </html>
  );
}
