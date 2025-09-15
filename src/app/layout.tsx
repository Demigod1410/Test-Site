import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
      { url: '/globe.svg', type: 'image/svg+xml' },
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <style dangerouslySetInnerHTML={{ __html: `
          @supports (-webkit-touch-callout: none) {
            .safari-fix {
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              -webkit-transform: translateZ(0);
              transform: translateZ(0);
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
        </ThemeProvider>
      </body>
    </html>
  );
}
