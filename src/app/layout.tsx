export const dynamic = "force-dynamic";

// Imports
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";
// CSS
import "./globals.css";
// Providers
import { LocationProvider } from "@/providers/LocationProvider";
import { SessionWrapper } from "@/providers/SessionWrapper";
// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
// Types
import { LocationCookieData } from "@/types";

// Metadata
export const metadata: Metadata = {
  title: "RankedPlaces – Find & Rank the Best Spots",
  description: "Discover, compare, and rank the best places near you.",
  metadataBase: new URL("https://rankedplaces.vercel.app"),

  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },

  openGraph: {
    title: "RankedPlaces – Find & Rank the Best Spots",
    description: "Discover, compare, and rank the best places near you.",
    url: "/",
    siteName: "RankedPlaces",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RankedPlaces Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RankedPlaces – Find & Rank the Best Spots",
    description: "Discover, compare, and rank the best places near you.",
    images: ["/images/og-image.png"],
    creator: "@yourtwitterhandle",
    site: "@yourtwitterhandle",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  applicationName: "RankedPlaces",

  keywords: ["places", "rankings", "reviews", "local", "discover"],
};

// 
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Cookie
  let locationCookieData: LocationCookieData | null = null;
  try {
    const cookie = await cookies();
    const raw = cookie.get("user_location")?.value;

    if (raw) {
      const decoded = decodeURIComponent(raw);
      locationCookieData = JSON.parse(decoded) as LocationCookieData;
    } else {
      locationCookieData = null;
    }
  } catch (err) {
    console.error("Invalid user_location cookie : ", err);
    locationCookieData = null;
  }

  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Suspense fallback={<Loader />}>
          {/* Location Provider */}
          <LocationProvider initialLocation={locationCookieData}>

            {/* All children wrapped inside GlobalProvider all the global things goes here */}
            <SessionWrapper>
              {/* Header */}
              <Header />

              {children}

              {/* Footer */}
              <Footer />
            </SessionWrapper>

          </LocationProvider>
        </Suspense>
      </body>
    </html>
  );
}
