"use client";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/ui/header";
import Footer from "@/components/custom/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { useEffect } from "react";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ContactCard } from "@/components/custom/ContactCard";
import GoogleAd from "@/components/custom/GooglecardAd";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
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
        <main>
          <div className="mt-32 max-w-4xl mx-auto bg-gray-100 p-4">
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
          {children}
          {pathname !== "/pages/AboutUs" && (
            <div className="bg-gray-100 px-4 pb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white overflow-hidden">
                  <div className="aspect-square ">
                    <GoogleAd slot="4228674601" />
                  </div>
                </div>
                <div className="bg-white overflow-hidden">
                  <div className="aspect-square ">
                    <GoogleAd slot="4228674601" />
                  </div>
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
