import type { Metadata } from "next";
import { Geist} from "next/font/google";

import { geistMono } from "./fonts";

import Header from "app/components/shared/Header/Header";
import Footer from "app/components/shared/Footer/Footer";


import "./global.css";
import "../styles/animations.css";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Virtual library',
  description: 'Welcome to an Ebook library app made in Next JS',
  keywords: ['eBook', 'API', 'Digital library'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable}`}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
