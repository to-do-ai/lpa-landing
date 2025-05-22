import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LPAgents | AI-powered Lead Processing",
  description: "Keep your leads hot and qualified until they're ready to close with our AI-powered lead processing system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
