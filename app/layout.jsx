import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/ui/header";
import Footer from "@/components/custom/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Notes Hub",
  description: "Notes Sharing App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4728036164112649"
          crossorigin="anonymous"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-4728036164112649",
            enable_page_level_ads: true
          });
        `,
          }}
        />
      </Head>
      <body>
        <header>
          <Header />
        </header>
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
