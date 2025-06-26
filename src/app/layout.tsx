import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import {
  OutfitFont,
  MulishFont,
  SyneFont,
  PoppinsFont,
  RobotoFont,
  MontserratFont,
} from "@/utils/fonts";

export const metadata: Metadata = {
  title: "NEUROLOVER",
  description: "NEUROLOVER landing page.",
  keywords: "NEUROLOVER, onlyfans, extension",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* add to body ${PoppinsFont.variable} - used on different/banner */}
      <body
        className={`
          ${OutfitFont.variable} 
          ${MulishFont.variable} 
          ${SyneFont.variable}
          ${PoppinsFont.variable}
          ${RobotoFont.variable}
          ${MontserratFont.variable}
        `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
