"use client";

// Imports
import React, { useState, useRef } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
// Components
import SigninBtn from "./SigninBtn";
import AddTagBtn from "./AddTagBtn";
// Providers
import { useLocationProvider } from "@/providers/LocationProvider";
import { useGlobalProvider } from "@/providers/GlobalProvider";
import AddPlaceBtn from "./AddPlaceBtn";
import { signOut } from "next-auth/react";
import { Tags } from "@/generated/prisma";
import { ApiResponse } from "@/types";
import Loader from "./Loader";
import { div } from "motion/react-client";

// 
function Hero() {
    // Provider
    // Location
    const { urlParams, setParams } = useLocationProvider();
    // Global
    const { status, pathname } = useGlobalProvider();
    // Refs
    // Last typed time
    const lastTypedAtRef = useRef<number>(0);
    // Timer
    const debouncerTimerRef = useRef<NodeJS.Timeout | null>(null);
    // States
    // Loader for Searching Place
    const [isFetchingSuggestion, setIsFetchingSuggestion] = useState<boolean>(false);
    // Searched Place 
    const [searched, setSearched] = useState<string>("");
    // Error in Searching
    const [searchedError, setSearchedError] = useState<string | null>(null);
    // Suggested Searches
    const [suggestedSearches, setSuggestedSearches] = useState<Tags[] | null>(null);

    // searchedPlace
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSearched(value);

        lastTypedAtRef.current = Date.now();

        if (debouncerTimerRef.current) {
            clearTimeout(debouncerTimerRef.current);
        }

        if (value.length > 3) {
            setIsFetchingSuggestion(true)
            debouncerTimerRef.current = setTimeout(() => {
                if (Date.now() - lastTypedAtRef.current >= 1000) {
                    fetchSearchSuggestion(value);
                } else {
                    setIsFetchingSuggestion(false);
                };
            }, 1000);
        } else {
            setSuggestedSearches(null);
            setIsFetchingSuggestion(false);
            setSearchedError(null);
        }
    };
    // Fetch Suggestion for search
    const fetchSearchSuggestion = async (value: string) => {
        if (value.length > 3) {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch/tags-suggestion/?searched-tag=${value}`);
                const data = (await res.json()) as ApiResponse<Tags[] | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                setSuggestedSearches(data.data);
            } catch (err) {
                // Message
                const msg =
                    err instanceof Error ? err.message : "Unexpected error.";
                // 
                // 
                setSearchedError(msg);
                // 
                console.error("Error in AddPlacePop in fetchPlaceSuggestion.", "Message : ", msg, "Error : ", err);
            } finally {
                setIsFetchingSuggestion(false);
            }
        }
    }
    // on suggested tag click
    const handleSearchSuggestion = (name: string) => {
        setSearched(name);
        setSuggestedSearches(null);
        setSearchedError(null);
        setParams(['tag'], [name]);
    }
    // handle Sigin out
    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (err) {
            // Message
            const msg =
                err instanceof Error ? err.message : "Unexpected error.";
            // 
            console.error("Error in handleSignOut in Hero.", "Message : ", msg, "Error : ", err);
        }
    }

    return (
        <main onClick={() => { setSuggestedSearches(null) }} role="main" className="min-w-screen py-14 flex flex-col items-center bg-gradient-to-b from-background to-white gap-y-4">
            {/*  */}
            <article className="text-center px-2">
                <header>
                    {/*  */}
                    <h1>
                        <Image className="" src={'/main-logo.svg'} width={270} height={120} alt="RankedPlaces - Business Directory and Ranking Platform logo" />
                        <span className="sr-only">RankedPlaces</span>
                    </h1>

                    {/*  */}
                    <h2 className="font-semibold text-primary">Top Places In World</h2>
                </header>
            </article>

            {/*  */}
            <section className="w-full text-center px-2">
                <div className="relative w-full flex flex-row justify-center items-center gap-x-1 flex-nowrap inset-0">
                    <div className="2xl:w-1/4 sm:w-2/4 md:w-1/2 lg:w-2/5 relative inset-0">
                        <input
                            type="search"
                            onChange={handleSearchChange}
                            value={searched}
                            className="w-full border-2 border-gray-400 rounded-full px-3 py-2 text-secondary placeholder:text-gray-400 outline-none focus:border-primary"
                            placeholder="Search tag."
                        />

                        {/*  */}
                        {(suggestedSearches || isFetchingSuggestion || searchedError) && (
                            <div className="absolute w-full top-12 bg-background rounded-full text-center p-1 border-2 border-secondary">
                                {searchedError && (
                                    <p className="text-secondary font-semibold">{searchedError}</p>
                                )}

                                {isFetchingSuggestion && (
                                    <div className="w-full p-2">
                                        <Loader dotSize="3" />
                                    </div>
                                )}

                                {suggestedSearches?.map((search, idx) => (
                                    <button onClick={() => handleSearchSuggestion(search.name)} key={idx} className="w-full space-y-2 text-gray-400 p-2 rounded-full cursor-pointer text-left hover:bg-gray-200 transition-colors">
                                        <p className="font-medium text-secondary text-sm  group-hover:text-primary transition-colors text-left">
                                            {search.name}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/*  */}
                    <button className="bg-primary outline-none p-2 rounded-full border-2 border-primary hover:bg-transparent cursor-pointer transition-colors">
                        <Search className="w-6 h-6 text-secondary" />
                    </button>

                </div>

                <p className="text-secondary my-2 md:text-md xxs:text-sm">
                    Searching in <strong className="text-primary">{pathname === "/" ? "World" : pathname === "/top-country-places" ? urlParams.country : urlParams.city}</strong> , <strong>{pathname === "/top-city-places" && urlParams.country}</strong>
                </p>

            </section>

            {/*  */}
            <SigninBtn />


            {status !== 'authenticated' ? (
                <p className="text-primary font-semibold text-sm text-center">Login To Add Tag , Places and Votes</p>
            ) : (
                <button onClick={handleSignOut} className="text-primary underline cursor-pointer hover:text-secondary font-semibold">Logout</button>
            )
            }

            <div className="flex xs:flex-row flex-col items-center gap-y-4">
                {/*  */}
                <AddTagBtn />

                <span className="text-secondary xs:block hidden text-2xl">|</span>

                {/*  */}
                <AddPlaceBtn />
            </div>
        </main >
    )
}

export default Hero;