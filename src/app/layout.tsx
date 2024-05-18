import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Sender SaaS",
  description: "Email Sender website",
  themeColor: "#287efd"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    {/* <head>
      <meta></meta>
    </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
