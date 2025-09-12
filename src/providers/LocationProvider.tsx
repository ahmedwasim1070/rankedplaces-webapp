'use client';

// Imports
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState, useCallback, Provider } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation";
// Component
import CountrySelector from "@/components/CountrySelector";
// Types
import { ApiResponse, IpGeoDataResponse, LatNLngResponse, LocationCookieData } from "@/types";

// Interfaces
interface ProviderProps {
    locationCookieData: LocationCookieData | null;
    setLocationCookieData: React.Dispatch<React.SetStateAction<LocationCookieData | null>>
    isLocationProviderLoading: boolean;
    urlParams: UrlParams;
    setParam: (key: keyof UrlParams, value: string) => void;
}
interface Props {
    children: ReactNode;
    initialLocation: LocationCookieData | null;
}

// Types
type UrlParams = {
    tag: string;
    page: string;
    country: string | null;
    city: string | null;
    lat: string | null;
    lng: string | null;
}

// Context 
const LocationContext = createContext<ProviderProps | undefined>(undefined);

// 
export const LocationProvider = ({ children, initialLocation }: Props) => {
    // Search Params
    const searchParams = useSearchParams();
    // Pathname
    const pathname = usePathname();
    // Router
    const router = useRouter();
    // States
    // Loader For Location Provider
    const [isLocationProviderLoading, setIsLocationProviderLoading] = useState<boolean>(false);
    // Location cookie data in var
    const [locationCookieData, setLocationCookieData] = useState<LocationCookieData | null>(initialLocation);
    // Location prompt for country selection
    const [isCountrySelector, setIsCountrySelector] = useState<boolean>(false);
    // Url Params
    const urlParams: UrlParams = useMemo(() => {
        const allParams = Object.fromEntries(searchParams.entries());
        return {
            tag: allParams.tag ?? "all",
            page: allParams.page ?? "1",
            country: allParams.country ?? locationCookieData?.countryCode ?? null,
            city: allParams.city ?? locationCookieData?.defaultCity ?? locationCookieData?.capital ?? null,
            lat: allParams.lat ?? locationCookieData?.lat ?? null,
            lng: allParams.lng ?? locationCookieData?.lng ?? null,
        };
    }, [searchParams, initialLocation]);

    // Updates cookie if the cookie state changes
    const updateCookie = () => {
        const expires = new Date();
        expires.setDate(expires.getDate() + 1);

        document.cookie = `user_location=${encodeURIComponent(JSON.stringify(locationCookieData))}; expires=${expires.toUTCString()}; path=/`;
    }
    // Set Params
    const setParam = useCallback((key: keyof UrlParams, value: string) => {
        const newParams = new URLSearchParams(searchParams.toString());

        if (value) newParams.set(key, value);
        else newParams.delete(key);

        router.push(`?${newParams.toString()}`);
    }, [router, searchParams]);
    // Fetch Ip Location 
    const fetchIpLocation = async (): Promise<IpGeoDataResponse | null> => {
        if (pathname === "/top-country-places") {
            try {
                const res = await fetch(`/api/fetch/ip-geo-data`);
                const data = (await res.json()) as ApiResponse<IpGeoDataResponse | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                if (data.success) {
                    return data.data;
                }
            } catch (err) {
                // Message
                const msg =
                    err instanceof Error ? err.message : "Unexpected error.";
                // 
                console.error("Error in fetchIpLocation in LocationProvider.", "Message : ", msg, "Error : ", err);
                return null;
            }
        }
        return null;
    }
    // Fetch Lat and Lng Location
    const fetchLatnLngLocation = async (): Promise<LatNLngResponse | null> => {
        if (pathname === '/top-city-places' && locationCookieData?.defaultCity) {
            try {
                const res = await fetch(`/api/fetch/lat-n-lng-data`);

                const data = (await res.json()) as ApiResponse<LatNLngResponse | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                if (data.success) {
                    return data.data;
                }
            } catch (err) {
                // Message
                const msg =
                    err instanceof Error ? err.message : "Unexpected error.";
                // 
                console.error("Error in fetchIpLocation in LocationProvider.", "Message : ", msg, "Error : ", err);
                return null;
            }
        };

        return null;
    }
    // Set's Cookie Data
    const applyLocationParams = async (params: URLSearchParams) => {
        if (!locationCookieData || !locationCookieData.country || locationCookieData.defaultCity) {
            // 
            setIsLocationProviderLoading(true);

            try {
                const ipLocation = await fetchIpLocation();
                if (ipLocation) {
                    setLocationCookieData(ipLocation);
                } else {
                }
            } catch (err) {
            } finally {
                setIsLocationProviderLoading(false);
            }
        }
    }

    // Effect 
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        let changed = false;

        if (!params.has("tag")) { params.set("tag", urlParams.tag); changed = true; }
        if (!params.has("page")) { params.set("page", urlParams.page); changed = true; }

        if (pathname === '/top-country-places' || pathname === '/top-city-places') {
            if (!params.has('country') || !params.has('city')) {
                applyLocationParams(params);
            }
        }

        if (changed) router.replace(`?${params.toString()}`);
    }, []);
    // Update Location Cookie if locationCookieData Changes
    useEffect(() => {
        if (!locationCookieData)
            return;

        setIsLocationProviderLoading(true);

        const timeout = setTimeout(() => {
            updateCookie();
        }, 200);

        setIsLocationProviderLoading(false);
        return () => clearTimeout(timeout);
    }, [locationCookieData]);

    // Values
    const values = useMemo(() => ({
        locationCookieData, setLocationCookieData, isLocationProviderLoading, urlParams, setParam
    }), [locationCookieData, isLocationProviderLoading, urlParams])

    return (
        <LocationContext.Provider value={values}>
            {/*  */}
            {isCountrySelector && <CountrySelector setIsCountrySelector={setIsCountrySelector} />}

            {/*  */}
            {children}

        </LocationContext.Provider>
    )
}

// Hook to fetch provider data
export const useLocationProvider = (): ProviderProps => {
    const context = useContext(LocationContext);
    if (context === undefined) {
        throw new Error('useLocationProvider must be used within a LocationProvider');
    }
    return context;
}
