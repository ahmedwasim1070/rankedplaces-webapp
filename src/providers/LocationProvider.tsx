'use client';

// Imports
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
// Component
import CountrySelector from "@/components/CountrySelector";
// Types
import { LocationCookieData } from "@/types";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

// Interfaces
interface LocationProviderTypes {
    locationCookieData: LocationCookieData | null;
    setLocationCookieData: React.Dispatch<React.SetStateAction<LocationCookieData | null>>
}
interface LocationProviderProps {
    children: ReactNode;
    initialLocation: LocationCookieData | null;
}

// Context 
const LocationContext = createContext<LocationProviderTypes | undefined>(undefined);

// 
export const LocationProvider = ({ children, initialLocation }: LocationProviderProps) => {
    // Search Params
    const searchParams = useSearchParams();
    // Pathn Name
    const pathname = usePathname();
    // Router
    const router = useRouter();
    // States
    // Location cookie data in var
    const [locationCookieData, setLocationCookieData] = useState<LocationCookieData | null>(initialLocation);
    // Location prompt for country selection
    const [isCountrySelector, setIsCountrySelector] = useState<boolean>(false);
    // Url Params
    const [urlParams, setUrlParams] = useState<Record<string, string>>(Object.fromEntries(searchParams.entries()));

    // Updates cookie if the cookie state changes
    const updateCookie = () => {
        const expires = new Date();
        expires.setDate(expires.getDate() + 1);

        document.cookie = `user_location=${JSON.stringify(locationCookieData)}; expires=${expires.toUTCString()}; path=/`;
    }
    // Set Params
    const setParam = (key: string, value: string) => {
        setUrlParams(prev => ({ ...prev, [key]: value }));

        const newParams = new URLSearchParams(searchParams.toString());
        if (value) newParams.set(key, value);
        else newParams.delete(key);

        router.push(`?${newParams.toString()}`);
    }
    // Apply defaults for required params routes if not any 
    const applyParams = () => {
        if (pathname === "/" || pathname === "/top/country/places" || pathname === "/top/city/places") {
            if ((!urlParams.tag || searchParams.get('tag')) && (!urlParams.page || searchParams.get('page'))) {
                setParam('tag', 'all');
                setParam('page', '1');
            }
        }
    }

    // Effect 
    // Updates cookie if the locationData gets changed
    useEffect(() => {
        if (locationCookieData) {
            setIsCountrySelector(false);
            updateCookie();
        } else {
            setIsCountrySelector(true);
        }
    }, [locationCookieData])

    // Values
    const values = useMemo(() => ({
        locationCookieData, setLocationCookieData
    }), [locationCookieData, setLocationCookieData])

    return (
        <LocationContext.Provider value={values}>
            {/*  */}
            {isCountrySelector && <CountrySelector />}

            {/*  */}
            {locationCookieData && children}

        </LocationContext.Provider>
    )
}

// Hook to fetch provider data
export const useLocationProvider = (): LocationProviderTypes => {
    const context = useContext(LocationContext);
    if (context === undefined) {
        throw new Error('useLocationProvider must be used within a LoactionProvider');
    }
    return context;
}
