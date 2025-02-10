"use client"
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/ui/header";
import Footer from "@/components/custom/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { useEffect } from "react";
import { MobileSidebar } from "@/components/mobile-sidebar";

// export const metadata = {
//   title: "My Notes Hub",
//   description: "Notes Sharing App",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Ads error:", e);
    }
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Google AdSense Script */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8503201959339230"
          crossOrigin="anonymous"
        />
        <header>
          <Header />
        </header>
        <MobileSidebar />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
