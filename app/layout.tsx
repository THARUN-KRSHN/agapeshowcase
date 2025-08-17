import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agape — Personality Development School",
  description: "Showcasing creative works and digital products from Agape",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
