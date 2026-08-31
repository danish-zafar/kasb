import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "KasbMarkaz - Local Business & Services Marketplace",
  description: "Discover local businesses, services, shops, property, and tutors near you on KasbMarkaz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className="flex flex-col min-h-screen antialiased bg-slate-50"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <GoogleAnalytics gaId="G-C4L1BKXP5D" />
      </body>
    </html>
  );
}