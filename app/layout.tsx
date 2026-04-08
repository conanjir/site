import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteSettings } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  title: "conanjir",
  description: siteSettings.infoText,
  icons: {
    icon: "/images/favicon/favicon.png",
    shortcut: "/images/favicon/favicon.png",
    apple: "/images/favicon/favicon.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-frame">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
