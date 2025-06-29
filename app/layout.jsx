"use client";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/ui/header";
import Footer from "@/components/custom/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { useEffect, useState } from "react";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ContactCard } from "@/components/custom/ContactCard";
import GoogleAd from "@/components/custom/GooglecardAd";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [adsLoaded, setAdsLoaded] = useState(false);

  useEffect(() => {
    const handleAdsLoaded = () => setAdsLoaded(true);

    if (typeof window !== "undefined") {
      if (window.adsbygoogle) {
        setAdsLoaded(true);
      } else {
        window.addEventListener("adsbygoogle", handleAdsLoaded);
      }
    }

    return () => {
      window.removeEventListener("adsbygoogle", handleAdsLoaded);
    };
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
          onLoad={() => setAdsLoaded(true)}
        />

        <header>
          <Header />
        </header>

        <MobileSidebar />
        <main>
          <div>
            {pathname !== "/pages/AboutUs" && (
              <div className="bg-gray-100 px-4 pb-6">
                <div className="mt-32 h-auto">
                  <GoogleAd slot="4228674601" />
                </div>
              </div>
            )}
          </div>
          {children}
          {pathname !== "/pages/AboutUs" && (
            <div className="bg-gray-100 px-4 pb-6">
              <div className="h-auto">
                <GoogleAd slot="4228674601" />
              </div>
              <ContactCard />
            </div>
          )}
        </main>

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
