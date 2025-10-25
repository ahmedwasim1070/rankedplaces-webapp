// Imports
import type { Metadata } from "next";
import { cookies } from "next/headers";
// CSS
import "./globals.css";
// Providers
import { LocationProvider } from "@/providers/LocationProvider";
// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Types
import { LocationCookieData } from "@/types";
import { SessionWrapper } from "@/providers/SessionWrapper";

// Metadata
export const metadata: Metadata = {
  title: "RankedPlaces",
  description: "Ranking Places based on tags.",
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
      </body>
    </html>
  );
}
