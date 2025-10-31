import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "713 Cybersecurity",
  description:
    "713 Cybersecurity is a leading provider of cybersecurity solutions.",
  keywords: [
    "software license",
    "license resale",
    "software marketplace",
    "713 Cybersecurity",
  ],
  icons: {
    icon: [
      { url: '/713 Logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <style dangerouslySetInnerHTML={{ __html: `
          /* Safari-specific rendering fixes */
          @supports (-webkit-touch-callout: none) {
            * {
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              -webkit-transform: translateZ(0);
              transform: translateZ(0);
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            
            /* Fix backdrop filter in Safari */
            [class*="backdrop-blur"] {
              -webkit-backdrop-filter: blur(8px);
              backdrop-filter: blur(8px);
            }
            
            /* Fix gradient text */
            [class*="bg-clip-text"] {
              -webkit-background-clip: text !important;
              background-clip: text !important;
              -webkit-text-fill-color: transparent !important;
            }
            
            /* Fix transforms and animations */
            [class*="transform"],
            [class*="transition"],
            [class*="animate"] {
              -webkit-transform-style: preserve-3d;
              transform-style: preserve-3d;
              will-change: transform;
            }
            
            /* Prevent layout shifts */
            img, svg {
              display: block;
              max-width: 100%;
              height: auto;
            }
          }
        `}} />
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
