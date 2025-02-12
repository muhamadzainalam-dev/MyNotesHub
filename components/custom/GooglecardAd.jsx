"use client";
import { useEffect, useState } from "react";

const GoogleAd = ({ slot }) => {
  const [adsLoaded, setAdsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkAds = () => {
        if (window.adsbygoogle) {
          setAdsLoaded(true);
          window.adsbygoogle.push({});
        }
      };

      if (window.adsbygoogle) {
        checkAds();
      } else {
        const interval = setInterval(() => {
          if (window.adsbygoogle) {
            checkAds();
            clearInterval(interval);
          }
        }, 500);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minHeight: "100px" }} // Ensure visibility
      data-ad-client="ca-pub-8503201959339230"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleAd;
