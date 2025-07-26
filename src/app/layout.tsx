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

// Метадані для SEO
export const metadata: Metadata = {
  title: {
    default: "NeuroLover - AI-Powered Messaging for Content Creators",
    template: "%s - NeuroLover",
  },
  description:
    "Boost your income with AI-powered messaging. NeuroLover helps content creators save 80% of messaging time and increase tips by 65%. Works with OnlyFans and Fansly.",
  keywords: [
    "AI messaging",
    "content creators",
    "OnlyFans",
    "Fansly",
    "automation",
    "tips",
    "income boost",
    "NeuroLover",
  ],
  authors: [{ name: "NeuroLover Team" }],
  creator: "NeuroLover",
  publisher: "NeuroLover",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://neurolover.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NeuroLover - AI-Powered Messaging for Content Creators",
    description:
      "Boost your income with AI-powered messaging. NeuroLover helps content creators save 80% of messaging time and increase tips by 65%.",
    url: "https://neurolover.com",
    siteName: "NeuroLover",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "NeuroLover Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroLover - AI-Powered Messaging for Content Creators",
    description:
      "Boost your income with AI-powered messaging. NeuroLover helps content creators save 80% of messaging time and increase tips by 65%.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Типи
interface RootLayoutProps {
  children: React.ReactNode;
}

// Основний layout
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4CAF50" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

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
