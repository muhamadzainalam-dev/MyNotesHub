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

// Ad Component to handle initialization properly
const AdBanner = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <div className="mt-32 max-w-8xl mx-auto bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-400 text-white text-center py-2">
          <h2 className="text-lg font-semibold">Advertisement</h2>
        </div>

        {/* Ad Container */}
        <div className="p-4 flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-8503201959339230"
            data-ad-slot="1436658600"
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>
    </div>
  );
};

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
          {/* Render Ad Only When Script is Loaded */}
          {adsLoaded && pathname !== "/pages/AboutUs" && <AdBanner />}
          {children}

          {/* Bottom Ads */}
          {pathname !== "/pages/AboutUs" && (
            <div className="bg-gray-100 px-4 pb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white overflow-hidden">
                  <GoogleAd slot="4228674601" />
                </div>
                <div className="bg-white overflow-hidden">
                  <GoogleAd slot="4228674601" />
                </div>
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
