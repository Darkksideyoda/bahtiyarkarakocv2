import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MotionWrapper from "@/components/motion-wrapper";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { WebVitals } from '@/components/web-vitals';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bahtiyarkarakoc.dev'),
  title: "Bahtiyar Karakoç – Software Engineer (React/TS)",
  description: "Passionate Computer Engineer with 2+ years of experience in software development, specializing in React, TypeScript, and AI-powered solutions.",
  keywords: ["Software Engineer", "React", "TypeScript", "Next.js", "Full Stack Developer", "AI", "Indoor Mapping"],
  authors: [{ name: "Bahtiyar Karakoç" }],
  creator: "Bahtiyar Karakoç",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bahtiyarkarakoc.dev",
    title: "Bahtiyar Karakoç – Software Engineer (React/TS)",
    description: "Passionate Computer Engineer with 2+ years of experience in software development, specializing in React, TypeScript, and AI-powered solutions.",
    siteName: "Bahtiyar Karakoç Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bahtiyar Karakoç - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahtiyar Karakoç – Software Engineer (React/TS)",
    description: "Passionate Computer Engineer with 2+ years of experience in software development, specializing in React, TypeScript, and AI-powered solutions.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://bahtiyarkarakoc.dev",
    types: {
      'application/rss+xml': [
        { url: '/rss.xml', title: 'Bahtiyar Karakoç Blog RSS Feed' }
      ]
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bahtiyar Karakoç",
              url: "https://bahtiyarkarakoc.dev",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Borda Technology"
              },
              sameAs: [
                "https://github.com/Darkksideyoda",
                "https://www.linkedin.com/in/bahtiyar-karakoc-4763b31a1/"
              ],
              knowsAbout: ["React", "TypeScript", "Node.js", "AI", "Indoor Mapping"],
              alumniOf: {
                "@type": "Organization",
                name: "Karamanoğlu Mehmetbey University"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionWrapper>
          {children}
          <Analytics />
          <SpeedInsights />
          <WebVitals />
        </MotionWrapper>
      </body>
    </html>
  );
}
