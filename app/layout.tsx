import type { Metadata } from "next";
import { Poppins, Syne, DM_Sans, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pi R Square — Strategy. Systems. AI that actually delivers.",
  description: "Pi R Square — AI consultancy for Thai enterprises. Strategy, systems, and training that deliver.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${poppins.variable} ${syne.variable} ${dmSans.variable} ${notoSansThai.variable}`}>
      <body>{children}</body>
    </html>
  );
}
