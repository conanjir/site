import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteSettings } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  title: `${siteSettings.name} Portfolio`,
  description: siteSettings.infoText
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
