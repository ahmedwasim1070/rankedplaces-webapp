'use client';

// Imports
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState, useCallback } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation";
// Component
import CountrySelector from "@/components/CountrySelector";
// Types
import { ApiResponse, IpGeoDataResponse, LatNLngDataResponse, LocationCookieData } from "@/types";

// Interfaces
interface ProviderProps {
    locationCookieData: LocationCookieData | null;
    setLocationCookieData: React.Dispatch<React.SetStateAction<LocationCookieData | null>>
    isLocationProviderLoading: boolean;
    urlParams: UrlParams;
    setParams: (keys: Array<keyof UrlParams>, values: Array<string>) => void;
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
            tag: allParams.tag ?? "All",
            page: allParams.page ?? "1",
            country: allParams.country ?? locationCookieData?.countryCode ?? null,
            city: allParams.city ?? locationCookieData?.city ?? null,
            lat: allParams.lat ?? locationCookieData?.lat ?? null,
            lng: allParams.lng ?? locationCookieData?.lng ?? null,
        };
    }, [searchParams, initialLocation, locationCookieData]);

    // Updates cookie if the cookie state changes
    const updateCookie = () => {
        const expires = new Date();
        expires.setDate(expires.getDate() + 1);

        document.cookie = `user_location=${encodeURIComponent(JSON.stringify(locationCookieData))}; expires=${expires.toUTCString()}; path=/`;
    }
    // Set Params
    const setParams = useCallback((keys: Array<keyof UrlParams>, values: Array<string>) => {
        const newParams = new URLSearchParams(searchParams.toString());

        keys.map((key, idx) => {
            newParams.set(key, values[idx]);
        });

        router.push(`?${newParams.toString()}`);
    }, [router, searchParams]);
    // Fetch Ip Location 
    const fetchIpLocation = async (): Promise<IpGeoDataResponse | null> => {
        if (pathname === "/top-country-places") {
            setIsLocationProviderLoading(true);

            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch/ip-geo-data`);
                const data = (await res.json()) as ApiResponse<IpGeoDataResponse | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                return data.data;
            } catch (err) {
                // Message
                const msg =
                    err instanceof Error ? err.message : "Unexpected error.";
                // 
                console.error("Error in fetchIpLocation in LocationProvider.", "Message : ", msg, "Error : ", err);
                return null;
            } finally {
                setIsLocationProviderLoading(false);
            }
        }
        return null;
    }
    // Fetch Lat and Lng Location
    const fetchLatnLngLocation = async (): Promise<LatNLngDataResponse | null> => {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    setIsLocationProviderLoading(true);

                    try {
                        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch/lat-n-lng-data/?lat=${latitude}&lng=${longitude}`);
                        const data = (await res.json()) as ApiResponse<LatNLngDataResponse | never>;

                        if (!data.success) {
                            throw new Error(data.message);
                        }

                        resolve(data.data);
                    } catch (err) {
                        const msg = err instanceof Error ? err.message : "Unexpected error.";
                        console.error("Error in fetchLatnLngLocation API call.", "Message:", msg, "Error:", err);
                        resolve(null);
                    } finally {
                        setIsLocationProviderLoading(false);
                    }
                },
                (err) => {
                    const msg = err instanceof GeolocationPositionError
                        ? `Geolocation error (Code: ${err.code}): ${err.message}`
                        : "Unexpected geolocation error.";

                    console.error("Error in Navigator geolocation in fetchLatnLngLocation.", "Message:", msg, "Error:", err);
                    resolve(null);
                },
                {
                    timeout: 30000,
                    maximumAge: 0,
                }
            );
        });
    };

    // Effect 
    // Apply param's on load
    useEffect(() => {
        const applyUrlParams = async () => {
            const params = new URLSearchParams(searchParams.toString());
            let changed = false;

            // Always ensure basic params exsists
            if (!params.has("tag")) {
                params.set("tag", urlParams.tag);
                changed = true;
            }
            if (!params.has("page")) {
                params.set("page", urlParams.page);
                changed = true;
            }

            // Handle country-specific route
            if (pathname === "/top-country-places") {
                if (!params.has("country")) {
                    setIsLocationProviderLoading(true);
                    if (!urlParams.country) {
                        if (!locationCookieData || !locationCookieData.countryCode) {
                            const userIpLocation = await fetchIpLocation();
                            if (userIpLocation) {
                                changed = true;
                                params.set("country", userIpLocation.countryCode);
                                setLocationCookieData(userIpLocation);
                            } else {
                                setIsCountrySelector(true);
                            }
                        }
                    } else {
                        changed = true;
                        params.set("country", urlParams.country);
                    }

                    setIsLocationProviderLoading(false);
                }
            }

            // Handle city-specific route
            if (pathname === "/top-city-places") {
                if (!params.has("country") || !params.has("city") || !params.has("lat") || !params.has("lng")) {
                    setIsLocationProviderLoading(true);
                    if (
                        !urlParams.country ||
                        !urlParams.city ||
                        !urlParams.lat ||
                        !urlParams.lng
                    ) {
                        if (!locationCookieData ||
                            !locationCookieData.country ||
                            !locationCookieData.city ||
                            !locationCookieData.lat ||
                            !locationCookieData.lng
                        ) {
                            const userLatnLngLocation = await fetchLatnLngLocation();
                            if (userLatnLngLocation) {
                                changed = true;
                                params.set("country", userLatnLngLocation.countryCode);
                                params.set("city", userLatnLngLocation.city);
                                params.set("lat", userLatnLngLocation.lat.toString());
                                params.set("lng", userLatnLngLocation.lng.toString());
                                setLocationCookieData(userLatnLngLocation);
                            } else {
                                setIsCountrySelector(true);
                            }
                        }
                    } else {
                        changed = true;
                        params.set("country", urlParams.country);
                        params.set("city", urlParams.city);
                        params.set("lat", urlParams.lat);
                        params.set("lng", urlParams.lng);
                    }

                    setIsLocationProviderLoading(false);
                }
            }

            if (changed) {
                router.replace(`${pathname}?${params.toString()}`);
            }
        };

        applyUrlParams();
    }, [pathname, searchParams]);
    // Update Location Cookie if locationCookieData Changes
    useEffect(() => {
        if (!locationCookieData)
            return;

        setIsLocationProviderLoading(true);

        const timeout = setTimeout(() => {
            updateCookie();
            setIsLocationProviderLoading(false);
        }, 200);

        return () => {
            clearTimeout(timeout);
            setIsLocationProviderLoading(false);

        };
    }, [locationCookieData]);

    // Values
    const values = useMemo(() => ({
        locationCookieData, setLocationCookieData, isLocationProviderLoading, urlParams, setParams
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
