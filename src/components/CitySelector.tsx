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
    const { urlParams, setParam } = useLocationProvider();
    // States
    // Cities
    const [cities, setCities] = useState<CitiesResponse[] | null>(() => {
        if (urlParams.country) {
            const stored = localStorage.getItem("cities");
            const storedCities: Record<string, CitiesResponse[]> | null = stored ? JSON.parse(stored) : null;
            if (storedCities && storedCities[urlParams.country]) {
                return storedCities[urlParams.country];
            } else {
                localStorage.removeItem("cities");
                return null;
            }
        } else {
            return null;
        }
    });
    // Loader
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // Error message 
    const [errMsg, setErrMsg] = useState<string | null>(null);

    // Handle selection
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        const selectedCityData = cities?.find((city) => city.name === selected) || null;
        if (!selectedCityData || !selectedCityData.name || !selectedCityData.lat || !selectedCityData.lng) return;
        setParam('city', selectedCityData.name);
    };

    // Effects
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
                const res = await fetch(`/api/fetch/cities/?country-code=${urlParams.country}`);
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
    }, [cities]);

    return (
        <select
            value={urlParams.city || ""}
            className={'max-w-44 cursor-pointer bg-background text-primary rounded-xl px-2 font-semibold focus:outline-none focus:ring-2 focus:ring-secondary transition-all'}
            disabled={isLoading || !!errMsg || !cities}
            onChange={handleSelect}
        >

            {isLoading && (
                <option className="text-white bg-secondary" hidden>Loading cities...</option>
            )}

            {!urlParams.city &&
                <option hidden>
                    Select City
                </option>
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