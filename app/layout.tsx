import type { Metadata } from "next";
import "./globals.css";


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
      <body>
        {children}
      </body>
    </html>
  );
}
