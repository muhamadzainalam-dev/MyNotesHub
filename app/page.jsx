"use client";
import { useEffect } from "react";
import { PromoBanner } from "@/components/ui/promo-banner";
import { Category } from "@/components/ui/category";
import { ContactCard } from "@/components/custom/ContactCard";

export default function Page() {
  useEffect(() => {
    // Adsterra script
    const adsterraScript = document.createElement("script");
    adsterraScript.src =
      "//www.highperformanceformat.com/1b6f536665cfb41a48128ffa56f41fb9/invoke.js";
    adsterraScript.async = true;
    document.getElementById("adsterra-container")?.appendChild(adsterraScript);

    // New ad script
    const newAdScript = document.createElement("script");
    newAdScript.src =
      "//pl25798106.profitablecpmrate.com/f9/d5/8a/f9d58a6cace5d29e7fcab606eac0df05.js";
    newAdScript.type = "text/javascript";
    newAdScript.async = true;
    document.body.appendChild(newAdScript);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 pb-6">
      <div className="md:hidden flex items-center justify-center my-5">
        <div id="adsterra-container">
          <script
            dangerouslySetInnerHTML={{
              __html: `
            atOptions = {
              'key' : '1b6f536665cfb41a48128ffa56f41fb9',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
          `,
            }}
          />
        </div>
      </div>
      <PromoBanner />
      <Category />
      <ContactCard />
    </div>
  );
}
