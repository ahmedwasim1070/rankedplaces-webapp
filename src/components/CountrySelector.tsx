'use client';

// Imports
import Link from "next/link";
import React, { useEffect, useState } from "react";
// Types
import { ApiResponse, CapitalReponse, CountryResponse } from "@/types";
// Porviders
import { useLocationProvider } from "@/providers/LocationProvider";

// Interface
interface Props {
    setIsCountrySelector: React.Dispatch<React.SetStateAction<boolean>>;
}

// 
function CountrySelector({ setIsCountrySelector }: Props) {
    // Providers
    // Location
    const { locationCookieData, setLocationCookieData, setParams } = useLocationProvider();
    // States
    // Country data state
    const [countries, setCountries] = useState<CountryResponse[] | null>(null);
    // Loader state
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // Error message 
    const [errMsg, setErrMsg] = useState<string | null>(null);
    // is fetching and setting capital
    const [isFetchingCapital, setIsFetchingCapital] = useState<boolean>(false);

    // Nav Contents
    const navigationItems = [
        {
            href: '/top-world-places',
            label: 'Top World Places',
        },
    ]
    // Fetch and set Capital
    const fetchCapital = async (capital: string): Promise<CapitalReponse | null> => {
        setIsFetchingCapital(true);
        try {
            const res = await fetch(`/api/fetch/capital/?&capital=${capital}`);
            const data = (await res.json()) as ApiResponse<CapitalReponse | never>;

            if (!data.success) {
                throw new Error(data.message);
            }

            if (data.success) {
                return data.data;
            }
        } catch (err) {
            const msg =
                err instanceof Error ? err.message : "Unexpected error.";
            // 
            console.error("Error in fetchCountries in CountrySelector.", "Message : ", msg, "Error : ", err);
            return null;
        } finally {
            setIsFetchingCapital(false);
        }
    }
    // Handle selection
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry: CountryResponse = JSON.parse(e.target.value);
        fetchCapital(selectedCountry.capital);
    };

    // Effects
    // Fetch countries if not any
    useEffect(() => {
        const fetchCountries = async () => {
            if (countries) return;

            // 
            setIsLoading(true);
            // 
            setErrMsg(null);
            try {
                const res = await fetch('/api/fetch/countries');
                const data = (await res.json()) as ApiResponse<CountryResponse[] | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                if (data.success) {
                    setCountries(data.data);
                }

            } catch (err) {
                const msg =
                    err instanceof Error ? err.message : "Unexpected error.";
                // 
                setErrMsg(msg);
                console.error("Error in fetchCountries in CountrySelector.", "Message : ", msg, "Error : ", err);
            } finally {
                setIsLoading(false);
            }
        }

        // 
        fetchCountries();
    }, [])

    return (
        <>
            <dialog role="dialog" aria-labelledby="location-title" aria-modal="true" className="fixed z-50 min-w-screen min-h-screen flex flex-col items-center space-y-2 justify-center bg-background/60 overflow-hidden backdrop-blur-sm">
                <h2 className="text-3xl text-primary font-semibold">Failed to fetch location.</h2>

                <p className="text-secondary text-lg font-semibold">Select Manually.</p>

                <form className="flex flex-row space-x-4 items-center justify-center">
                    <select
                        value={locationCookieData?.country || ""}
                        className="border border-secondary cursor-pointer text-secondary bg-background font-semibold rounded-xl p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                        disabled={isLoading || !!errMsg || !countries}
                        onChange={handleSelect}
                    >
                        {isLoading && (
                            <option className="text-white bg-secondary" hidden>Loading countries...</option>
                        )}

                        <option hidden>
                            Select Country
                        </option>

                        {errMsg && (
                            <option className="text-red-500 bg-secondary" hidden>{errMsg}</option>
                        )}

                        {countries && countries.length > 0 && countries.map((country, idx) => (
                            <option
                                key={idx}
                                value={JSON.stringify(country)}
                                className="font-poppin font-semibold"
                            >
                                {country.country}
                            </option>
                        ))}
                    </select>
                </form>

                <h3 className="text-secondary font-bold">Or</h3>

                <h4 className="text-primary font-bold">Continue to</h4>

                <nav>
                    <ul className="inline-flex space-x-2">
                        {navigationItems.map((nav, idx) => (
                            <li key={idx} className="list-none text-secondary">
                                <Link className="translate-x-full hover:text-primary hover:decoration-secondary duration-100 underline decoration-primary group" href={nav.href} title={nav.label} >
                                    <span className="text-primary group-hover:text-secondary">|</span> {nav.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <span className="text-primary">Cookies should be enabled for best experience.</span>

            </dialog>
        </>
    )
}

export default CountrySelector;
