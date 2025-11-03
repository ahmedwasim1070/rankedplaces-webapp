"use client";

// Imports
import { useEffect, useState } from "react";
// Types
import { ApiResponse, CitiesResponse } from "@/types";
// Porviders
import { useLocationProvider } from "@/providers/LocationProvider";

// 
function CitySelector() {
    // Providers
    // Location
    const { urlParams, locationCookieData, setLocationCookieData, setParams } = useLocationProvider();
    // States
    // Cities
    const [cities, setCities] = useState<CitiesResponse[] | null>(null);
    // Loader
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // Error message 
    const [errMsg, setErrMsg] = useState<string | null>(null);

    // Handle selection
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        const selectedCityData = cities?.find((city) => city.name === selected) || null;

        if (!selectedCityData || !selectedCityData.name || !selectedCityData.lat || !selectedCityData.lng) return;
        setParams(['city', 'lat', 'lng'], [selectedCityData.name, selectedCityData.lat.toString(), selectedCityData.lng.toString()]);

        if (!locationCookieData) return;
        const locationDataPayload = {
            country: locationCookieData.country,
            countryCode: locationCookieData.countryCode,
            city: selectedCityData.name,
            lat: selectedCityData.lat,
            lng: selectedCityData.lng,
        }
        setLocationCookieData(locationDataPayload);
    };

    // Effects
    // Try to find cities from localSorage if any
    useEffect(() => {
        // if it's SSR returns
        if (typeof window === "undefined") return;

        if (urlParams.country) {
            const stored = localStorage.getItem("cities");
            const storedCities: Record<string, CitiesResponse[]> | null = stored ? JSON.parse(stored) : null;
            if (storedCities && storedCities[urlParams.country]) {
                setCities(storedCities[urlParams.country]);
            } else {
                localStorage.removeItem("cities");
                setCities(null);
            }
        } else {
            setCities(null);
        }
    }, [urlParams.country])
    // Fetch cities if not any 
    useEffect(() => {
        // Fetch city from (/api/fetchCities)
        const fetchCities = async () => {
            if (cities) return;
            if (!urlParams?.country) return;

            // 
            setIsLoading(true);
            // 
            setErrMsg(null);
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch/cities/?country=${urlParams.country}`);
                const data = (await res.json()) as ApiResponse<CitiesResponse[] | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                if (data.success) {
                    setCities(data.data);

                    const citiesLocalStoragePayload = {
                        [urlParams.country]: data.data
                    }
                    localStorage.setItem('cities', JSON.stringify(citiesLocalStoragePayload));
                }
            } catch (err) {
                // Message
                const msg =
                    err instanceof Error ? err.message : "Unexpected error.";
                // 
                setErrMsg(msg);
                console.error("Error in fetchCities in CitySelector.", "Message : ", msg, "Error : ", err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, [cities, urlParams.country]);

    return (
        <select
            className={'max-w-44 cursor-pointer bg-background text-primary rounded-xl px-2 font-semibold outline-none focus:ring-2 focus:ring-secondary transition-all'}
            disabled={isLoading || !!errMsg || !cities}
            onChange={handleSelect}
        >

            {isLoading && (
                <option className="text-white bg-secondary" hidden>Loading cities...</option>
            )}

            {!urlParams.city ?
                (<option hidden>
                    Select City
                </option>) :
                (<option defaultValue={urlParams.city} hidden>
                    {urlParams.city}
                </option>)
            }

            {errMsg && (
                <option className="text-red-500 bg-secondary" hidden>{errMsg}</option>
            )}

            {cities?.map((city, idx) => (
                <option key={idx} value={city.name} className="font-poppin font-semibold ">
                    {city.name}
                </option>
            ))}

        </select>

    )
}

export default CitySelector;