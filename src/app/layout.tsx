import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pi Global Co.",
    template: "%s | Pi Global Co."
  },
  description: "Our company, based on the principles of trust and quality, is a business leader operating in the trade, production, and service sectors.",

  openGraph: {
    title: "Pi Global Co.",
    description: "Our company, based on the principles of trust and quality, is a business leader operating in the trade, production, and service sectors.",
    url: "https://www.piglobalco.com/",
    siteName: "Pi Global Co.",
    images: [
      {
        url: "https://raw.githubusercontent.com/DogukanTopcu/piglobal/master/src/images/piglobal-logo-2.png",
        width: 882,
        height: 260
      },
    ]
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} id="body">
        <SpeedInsights /> 
        {children}
      </body>
    </html>
  );
}
