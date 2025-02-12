// "use client";
// import "./globals.css";
// import { Toaster } from "@/components/ui/toaster";
// import { Header } from "@/components/ui/header";
// import Footer from "@/components/custom/Footer";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";
// import Script from "next/script";
// import { useEffect, useState } from "react";
// import { MobileSidebar } from "@/components/mobile-sidebar";
// import { ContactCard } from "@/components/custom/ContactCard";
// import GoogleAd from "@/components/custom/GooglecardAd";
// import { usePathname } from "next/navigation";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const [adsLoaded, setAdsLoaded] = useState(false);

//   useEffect(() => {
//     const handleAdsLoaded = () => setAdsLoaded(true);

//     if (typeof window !== "undefined") {
//       if (window.adsbygoogle) {
//         setAdsLoaded(true);
//       } else {
//         window.addEventListener("adsbygoogle", handleAdsLoaded);
//       }
//     }

//     return () => {
//       window.removeEventListener("adsbygoogle", handleAdsLoaded);
//     };
//   }, []);

//   return (
//     <html lang="en">
//       <body className="bg-gray-100 pt-32">
//         {/* Google AdSense Script */}
//         <Script
//           async
//           strategy="afterInteractive"
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8503201959339230"
//           crossOrigin="anonymous"
//           onLoad={() => setAdsLoaded(true)}
//         />

//         <header>
//           <Header />
//         </header>
//         <MobileSidebar />
//         <main>
//           {pathname !== "/pages/AboutUs" && (
//             <div className="h-auto bg-gray-100 px-4 mb-5">
//               <div className="flex items-center justify-center">
//                 <GoogleAd slot="4228674601" />
//               </div>
//             </div>
//           )}
//           {children}
//           {/* Bottom Ads */}
//           {pathname !== "/pages/AboutUs" && (
//             <div className="bg-gray-100 px-4 pb-6 mb-5">
//               <div className="h-full flex items-center justify-center">
//                 <GoogleAd slot="4228674601" />
//               </div>
//               <ContactCard />
//             </div>
//           )}
//         </main>
//         <footer>
//           <Footer />
//         </footer>

//         <Toaster />
//         <SpeedInsights />
//         <Analytics />
//       </body>
//     </html>
//   );
// }

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
  const excludedPaths = ["/pages/AboutUs", "/pages/howto", "/pages/ContactUs"];

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
      <body className="bg-gray-100">
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
          {pathname !== "/pages/AboutUs" && (
            <div className="h-auto bg-gray-100 px-4 mb-5">
              <div className="flex items-center justify-center">
                <GoogleAd slot="4228674601" />
              </div>
            </div>
          )}

          {children}
          {/* Bottom Ads */}
          {pathname !== "/pages/AboutUs" && (
            <div className="bg-gray-100 px-4 pb-6 mb-5">
              <div className="h-full flex items-center justify-center">
                <GoogleAd slot="4228674601" />
              </div>
              {!excludedPaths.includes(pathname) && <ContactCard />}
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
