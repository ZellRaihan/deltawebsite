import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import type { Metadata, Viewport } from "next"

const inter = Inter({ subsets: ["latin"] })

// Define base URL for canonical and OG URLs
const baseUrl = "https://deltaexecutor1.net"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0066ff' },
    { media: '(prefers-color-scheme: light)', color: '#0066ff' }
  ],
}

export const metadata: Metadata = {
  title: "Download Delta Executor APK for Android, iOS & PC – Official",
  description:
    "Get the latest Delta Executor to run Roblox scripts safely on Android, iOS & Windows. 100% free, secure key system. Download only from the official site.",
  keywords: "Delta Executor, Roblox scripts, script executor, Android, iOS, Windows, APK, download, free, key system",
  authors: [{ name: "Delta Tools Team" }],
  creator: "Delta Tools Team",
  publisher: "Delta Tools Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Download Delta Executor APK for Android, iOS & PC – Official",
    description:
      "Get the latest Delta Executor to run Roblox scripts safely on Android, iOS & Windows. 100% free, secure key system.",
    url: baseUrl,
    siteName: "Delta Executor",
    images: [
      {
        url: `${baseUrl}/images/Delta-Executor-Download-Banner.webp`,
        width: 800,
        height: 400,
        alt: "Delta Executor - Run Roblox Scripts on Mobile & PC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Delta Executor APK for Android, iOS & PC – Official",
    description:
      "Get the latest Delta Executor to run Roblox scripts safely on Android, iOS & Windows. 100% free, secure key system.",
    images: [`${baseUrl}/images/Delta-Executor-Download-Banner.webp`],
    creator: "@deltaexecutor",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
  category: "software",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Software Application Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Delta Executor",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Android, iOS, Windows",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    softwareVersion: "3.61b",
    description:
      "Delta Executor is a tool that works with Roblox. It lets you use special codes to do cool things in your games, like fly, get rewards faster, or change how the game looks.",
    downloadUrl: "https://deltaexecutor1.net/downloads/delta-executor-v3.61b.exe",
    author: {
      "@type": "Organization",
      name: "Delta Tools Team",
      url: "https://deltaexecutor1.net",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  }

  // Mobile App Schema
  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Delta Executor",
    operatingSystem: ["Android", "iOS"],
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    downloadUrl: "https://deltaexecutor1.net/downloads/delta-v2.669.apk",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "850",
      bestRating: "5",
      worstRating: "1"
    },
    description: "Delta Executor mobile app for Roblox scripting on Android and iOS devices."
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where do I download Delta Executor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit Delta's official site — not delta-executor.com.",
        },
      },
      {
        "@type": "Question",
        name: "Does it work on iOS devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, use AltStore or Scarlet to install it on iPhones and iPads.",
        },
      },
      {
        "@type": "Question",
        name: "Is the key required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It unlocks the app and keeps it safe.",
        },
      },
      {
        "@type": "Question",
        name: "What if Delta doesn't install or launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Follow the steps written in this guide or use the help tools in the app.",
        },
      },
      {
        "@type": "Question",
        name: "Is Delta Executor safe to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Delta Executor is safe to use when you download and install Delta from the official site. It never asks for your Roblox login info, uses a secure delta key, and doesn't collect private data.",
        },
      },
      {
        "@type": "Question",
        name: "What devices can run Delta Executor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Delta Executor works on Android phones (APK), iPhones and iPads (IPA via sideloading), and Windows PCs (EXE setup).",
        },
      },
    ],
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Download",
        item: `${baseUrl}#download-section`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Features",
        item: `${baseUrl}#key-features`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "FAQs",
        item: `${baseUrl}#faqs`,
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="msapplication-TileColor" content="#0066ff" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://deltaexecutor1.net" />
        <link rel="dns-prefetch" href="https://deltaexecutor1.net" />
        <link rel="preload" href="/images/Delta-Executor-Logo.webp" as="image" />
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
        <Script
          id="mobile-app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mobileAppSchema),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
