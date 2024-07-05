import Navbar from "@/components/navbar/navbar";
import TailwindIndicator from "@/components/shared/tailwind-indicator";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import NeueMontreal from "./fonts";
import "./globals.css";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keyWords,
  authors: siteConfig.authors,
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={NeueMontreal.className}>
        <main className="flex flex-col max-w-2xl mx-auto w-full mt-auto min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Toaster />
            <Analytics />
            <SpeedInsights />
            <TailwindIndicator />
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
