import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "Visionize",
  description: "Visionize is a software designed to help diagnose certain eye diseases",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={poppins.variable}>
          <Nav />
          {children}
          <Footer />
        </body>
    </html>
    </ClerkProvider>
    
  );
}
