// Imports
import { Search, X } from "lucide-react"
import React, { useEffect, useRef, useState } from "react";
// Provider
import { useGlobalProvider } from "@/providers/GlobalProvider"

// 
const AddPlace = () => {
    // Refs
    const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
    // States
    // user searched place
    const [searchedPlace, setSearchedPlace] = useState<string>("");
    // debouncer function for fetchPlaceSuggestion
    const debouncedFetchPlaceSuggestion = (value: string) => {
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        if (value.length > 3) {
            debounceTimerRef.current = setTimeout(() => {
            }, 1000);
        } else {

        }

    }
    // handle keystrokes change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchedPlace(value);
        debouncedFetchPlaceSuggestion(value);
    };

    return (
        <>
            <div className="relative w-full">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-primary bg-background" />

                {/*  */}
                <input onChange={handleChange} type="search" className="rounded-xl border-2 border-gray-400 w-full p-2 outline-none my-2 focus:border-primary transition-colors text-secondary" placeholder="Search place name" />
            </div>

            <p className="text-sm text-secondary underline">via google maps</p>

            <form>
                <div className="my-2 border-2 border-primary rounded-lg text-center">
                    <div className="m-4">
                        <p className="text-gray-500">No Place Selected</p>
                        <p className="text-[10px] text-gray-500">Click the suggested place to add.</p>
                    </div>
                </div>

                <button type="submit" className="border-2 border-secondary w-full p-2 text-white font-semibold bg-secondary rounded-lg cursor-pointer hover:bg-transparent hover:text-secondary transition-colors mt-1">
                    Countinue
                </button>
            </form>
        </>
    );
}

// 
function AddPlacePop() {
    // Providers
    // Global
    const { setIsAddPlacePop } = useGlobalProvider();
    // Refs
    const debouncerTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (debouncerTimerRef.current) {
            clearTimeout(debouncerTimerRef.current);
        }
    }, [])
    return (
        <section className="fixed min-w-screen min-h-screen bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center px-2">
            <div className="w-1/3 min-w-xxs bg-background rounded-lg shadow-sm px-2 py-4 border border-secondary/20 relative text-center">

                {/*  */}
                <button onClick={() => setIsAddPlacePop(false)} type="button" className="p-2 bg-white shadow-sm absolute top-2 right-2 rounded-full cursor-pointer hover:bg-secondary/20 transition-colors">
                    <X className="w-5 h-5 text-secondary" />
                </button>

                {/*  */}
                <h3 className="text-2xl text-secondary font-semibold">
                    Add Place
                </h3>

                {/*  */}
                <p className="text-primary pb-2">Search the place to add</p>

                {/*  */}
                <AddPlace />
            </div>
        </section>
    )
}

export default AddPlacePop;