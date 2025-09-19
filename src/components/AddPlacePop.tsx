// Imports
import { Search, X } from "lucide-react"
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
// Types
import { ApiResponse, PlaceSuggestionResponse } from "@/types";
// Components
import Loader from "./Loader";
// Provider
import { useGlobalProvider } from "@/providers/GlobalProvider"

// 
const AddPlace = () => {
    // Refs
    // Timer
    const debouncerTimerRef = useRef<NodeJS.Timeout | null>(null);
    // Last typed time
    const lastTypedAtRef = useRef<number>(0);
    // States
    // loader for suggestion 
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // user searched place
    const [searchedPlace, setSearchedPlace] = useState<string>("");
    // Suggested place's
    const [suggestedPlaces, setSuggestedPlaces] = useState<PlaceSuggestionResponse[] | null>(null);

    // fetchPlaceSuggestion
    const fetchPlaceSuggestion = async (value: string) => {
        if (value.length > 3) {

            setIsLoading(true);

            try {
                const res = await fetch(`/api/fetch/place-suggestion/?searched-place=${searchedPlace}`);
                const data = (await res.json()) as ApiResponse<PlaceSuggestionResponse[] | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                setSuggestedPlaces(data.data);
            } catch (err) {
                // Message
                const msg =
                    err instanceof Error ? err.message : "Unexpected error.";
                // 
                toast.error(msg);
                // 
                console.error("Error in AddPlacePop in fetchPlaceSuggestion.", "Message : ", msg, "Error : ", err);
            } finally {
                setIsLoading(false);
            }

        }
    };
    // handle keystrokes change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSearchedPlace(value);

        lastTypedAtRef.current = Date.now();

        if (debouncerTimerRef.current) {
            clearTimeout(debouncerTimerRef.current);
        }

        if (value.length > 3) {
            setIsLoading(true);
            debouncerTimerRef.current = setTimeout(() => {
                if (Date.now() - lastTypedAtRef.current >= 500) {
                    fetchPlaceSuggestion(value);
                } else {
                    setIsLoading(false);
                }
            }, 500);
        } else {
            setSuggestedPlaces(null);
            setIsLoading(false);
        }
    };
    // 
    const handlePlaceSelect = async (plaecId: string) => {
        try {
            const res = await fetch(`/api/fetch/place-details/?place-id=${plaecId}`);
            const data = (await res.json()) as ApiResponse<PlaceSuggestionResponse[] | never>;

            if (!data.success) {
                throw new Error(data.message);
            }

        } catch (err) {
            // Message
            const msg =
                err instanceof Error ? err.message : "Unexpected error.";
            // 
            toast.error(msg);
            // 
            console.error("Error in AddPlacePop in handlePlaceSelect.", "Message : ", msg, "Error : ", err);
        } finally {

        };
    };

    return (
        <>
            <div className="relative w-full">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-primary bg-background" />

                {/*  */}
                <input onChange={handleChange} value={searchedPlace} name="searchedPlace" type="search" className="rounded-xl border-2 border-gray-400 w-full p-2 outline-none my-2 focus:border-primary transition-colors text-secondary" placeholder="Search place name" />

                {/*  */}
                {(isLoading || suggestedPlaces) &&
                    (<div className="w-full max-h-50 bg-background absolute top-14 rounded-lg overflow-y-scroll flex flex-col gap-y-2 p-2">
                        {isLoading && (
                            <div className="w-full py-4 ">
                                <Loader dotSize="3" />
                            </div>
                        )}

                        {/*  */}
                        {suggestedPlaces?.map((place, idx) => {
                            const placeContent = place.description.split(',');
                            const mainLocation = placeContent[0]?.trim();
                            const subLocation = placeContent.slice(1).join(',').trim();

                            return (
                                <button onClick={() => handlePlaceSelect(place.place_id)} key={idx} className="space-y-2 text-gray-400 p-2 cursor-pointer text-left border rounded-lg hover:bg-gray-200 transition-colors">
                                    <div className="flex flex-col items-start px-2">
                                        <span className="font-medium text-secondary text-sm sm:text-base group-hover:text-primary transition-colors text-left">
                                            {mainLocation}
                                        </span>

                                        {subLocation && (
                                            <span className="text-xs sm:text-sm text-gray-500 mt-1">
                                                {subLocation}
                                            </span>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>)
                }
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