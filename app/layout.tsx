import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



export const metadata: Metadata = {
  title: "Project 50 Tracker",
  description: "Achieve your goals easily now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-black px-6 py-3"
      >
        {children}
      </body>
    </html>
  );
}
