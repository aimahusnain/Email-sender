import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Sender SaaS",
  description: "Email Sender website",
  // themeColor: "#0b7555"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta name='theme-color' content="#0b7555" />
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
