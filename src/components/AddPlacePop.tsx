// Imports
import { MapPin, Search, Star, X } from "lucide-react"
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
// Types
import { ApiResponse, PlaceDetailsResponse, PlaceSuggestionResponse } from "@/types";
// Components
import Loader from "./Loader";
// Provider
import { useGlobalProvider } from "@/providers/GlobalProvider"

// Props
interface AddPlaceSelectorProps {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedPlaceDetails: React.Dispatch<React.SetStateAction<PlaceDetailsResponse | null>>;
};
interface AddPlaceConfirmationProps {
    selectedPlaceDetails: PlaceDetailsResponse;
}

// 
const AddPlaceSelector = ({ setIsLoading, setSelectedPlaceDetails }: AddPlaceSelectorProps) => {
    // Refs
    // Timer
    const debouncerTimerRef = useRef<NodeJS.Timeout | null>(null);
    // Last typed time
    const lastTypedAtRef = useRef<number>(0);
    // States
    // loader for suggestion 
    const [isFetchingSuggestion, setIsFetchingSuggestion] = useState<boolean>(false);
    // user searched place
    const [searchedPlace, setSearchedPlace] = useState<string>("");
    // Suggested place's
    const [suggestedPlaces, setSuggestedPlaces] = useState<PlaceSuggestionResponse[] | null>(null);
    // selected place
    const [selectedPlace, setSelectedPlace] = useState<PlaceSuggestionResponse | null>(null);

    // fetchPlaceSuggestion
    const fetchPlaceSuggestion = async (value: string) => {
        if (value.length > 3) {

            setIsFetchingSuggestion(true);

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
                setIsFetchingSuggestion(false);
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
            setIsFetchingSuggestion(true);
            debouncerTimerRef.current = setTimeout(() => {
                if (Date.now() - lastTypedAtRef.current >= 500) {
                    fetchPlaceSuggestion(value);
                } else {
                    setIsFetchingSuggestion(false);
                }
            }, 500);
        } else {
            setSuggestedPlaces(null);
            setIsFetchingSuggestion(false);
        }
    };
    // 
    const handlePlaceSelect = (place: PlaceSuggestionResponse) => {
        setSelectedPlace(place);
        setSuggestedPlaces(null);
        setIsFetchingSuggestion(false);
    }
    // Handle Countinue click
    const handleConfirmation = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedPlace) return;

        setIsLoading(true);

        try {
            const res = await fetch(`/api/fetch/place-details/?place-id=${selectedPlace.place_id}`);
            const data = (await res.json()) as ApiResponse<PlaceDetailsResponse | never>;

            if (!data.success) {
                throw new Error(data.message);
            }

            setSearchedPlace('');
            setSuggestedPlaces(null);
            setSelectedPlace(null);
            setSelectedPlaceDetails(data.data);
        } catch (err) {
            // Message
            const msg =
                err instanceof Error ? err.message : "Unexpected error.";
            // 
            toast.error(msg);
            // 
            console.error("Error in AddPlacePop in handleConfirmation.", "Message : ", msg, "Error : ", err);
        } finally {
            setIsLoading(false);
        };
    };

    return (
        <div>
            {/*  */}
            <h3 className="text-2xl text-secondary font-semibold">
                Add Place
            </h3>

            {/*  */}
            <p className="text-primary pb-2">Search the place to add</p>

            {/*  */}
            <div className="relative w-full">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-primary bg-background" />

                {/*  */}
                <input
                    onChange={handleChange}
                    value={searchedPlace}
                    name="searchedPlace"
                    type="search"
                    autoComplete="off"
                    className="rounded-xl border-2 border-gray-400 w-full p-2 outline-none my-2 focus:border-primary transition-colors text-secondary" placeholder="Search place name"
                />

                {/*  */}
                {(isFetchingSuggestion || suggestedPlaces) &&
                    (<div className="w-full max-h-50 bg-background absolute top-14 rounded-lg overflow-y-scroll flex flex-col gap-y-2 p-2">
                        {isFetchingSuggestion && (
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
                                <button onClick={() => handlePlaceSelect(place)} key={idx} className="space-y-2 text-gray-400 p-2 cursor-pointer text-left border rounded-lg hover:bg-gray-200 transition-colors">
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

            <form onSubmit={handleConfirmation}>
                <div className="my-2 border-2 border-primary rounded-lg text-center overflow-hidden">
                    {!selectedPlace ? (
                        <div className="m-4">
                            <p className="text-gray-500">No Place Selected</p>
                            <p className="text-[10px] text-gray-500">Click the suggested place to add.</p>
                        </div>
                    ) :
                        (
                            <div className="relative bg-gray-100 text-left p-2 space-y-1">
                                {/* Delete button */}
                                <button onClick={() => { setSelectedPlace(null); setSearchedPlace("") }} type="button" className="bg-gray-300 p-1.5 shadow-sm absolute top-2 right-2 rounded-full cursor-pointer hover:bg-secondary/20  transition-colors">
                                    <X className="w-3 h-3 text-secondary" />
                                </button>

                                <p className="text-lg font-semibold text-primary">{selectedPlace.description.split(',')[0]?.trim()}</p>
                                <p className="text-sm text-secondary">{selectedPlace.description.split(',').slice(1).join(',').trim()}</p>
                            </div>
                        )
                    }
                </div>

                <button
                    disabled={selectedPlace === null}
                    type="submit"
                    className="border-2 enabled:border-secondary disabled:border-secondary/40 w-full p-2 text-white font-semibold bg-secondary rounded-lg enabled:cursor-pointer enabled:hover:bg-transparent enabled:hover:text-secondary disabled:bg-secondary/40 transition-colors mt-1"
                >
                    Countinue
                </button>
            </form>
        </div>
    );
}

// 
const AddPlaceConfirmation = ({ selectedPlaceDetails }: AddPlaceConfirmationProps) => {
    // Address
    const addressArray = selectedPlaceDetails.formatted_address.split(',');
    const city = addressArray[addressArray.length - 2];
    const country = addressArray[addressArray.length - 1];

    return (
        <div>
            {/*  */}
            <h3 className="text-2xl text-secondary font-semibold">
                Add Place
            </h3>

            {/*  */}
            <p className="text-primary pb-2">Proceed to add this place.</p>

            {/*  */}
            <div className="bg-gray-100 border-2 border-gray-400 p-4 rounded-lg text-left space-y-1">
                <h4 className="font-semibold text-lg text-secondary">{selectedPlaceDetails.name}</h4>

                <p className="text-sm text-gray-500">{selectedPlaceDetails.formatted_address}</p>

                {/*  */}
                <div className="flex flex-row items-center flex-wrap gap-1 my-2">
                    {selectedPlaceDetails.types.map((type, idx) => (
                        <div key={idx} className="rounded-full bg-gray-300 px-2.5 py-.5">
                            <p className="text-[13px] text-gray-500">{type}</p>
                        </div>
                    ))}
                </div>

                {/*  */}
                <div className="flex flex-row items-center gap-x-1">
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    <p className="text-primary">{selectedPlaceDetails.rating}</p>
                    <p className="text-gray-500 text-sm">({selectedPlaceDetails.user_ratings_total})</p>
                </div>

                {/*  */}
                <div className="flex flex-row items-center gap-x-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <p className="text-primary font-semibold">{city}</p>
                    <p>,</p>
                    <p className="text-secondary font-semibold">{country}</p>
                </div>

                {/*  */}
                <div className="mt-2">
                    {/*  */}
                    <div className="w-full flex flex-col gap-y-1 my-2">
                        <label className="text-sm text-secondary" htmlFor="">Add Custom Tag :</label>
                        <input
                            type="search"
                            autoComplete="off"
                            className="border-2 border-primary rounded-lg px-2 py-1.5 outline-none text-secondary"
                            placeholder="Search exsistance tag's."
                        />
                    </div>

                    {/*  */}
                    <div className="border-2 border-secondary rounded-lg p-2 space-y-1">
                        <p className="text-sm text-secondary">Added Tag's : </p>

                        {/*  */}
                        <div className="flex flex-row">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 
function AddPlacePop() {
    // Providers
    // Global
    const { setIsAddPlacePop } = useGlobalProvider();
    // States
    // Loader
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // Place details 
    const [selectedPlaceDetails, setSelectedPlaceDetails] = useState<PlaceDetailsResponse | null>(null);

    return (
        <section className="fixed min-w-screen min-h-screen bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center px-2">
            <div className="w-1/3 bg-background rounded-lg shadow-sm px-2 py-4 border border-secondary/20 relative text-center overflow-hidden">

                {/*  */}
                <button onClick={() => setIsAddPlacePop(false)} type="button" className="p-2 bg-white shadow-sm absolute top-2 right-2 rounded-full cursor-pointer hover:bg-secondary/20 transition-colors">
                    <X className="w-5 h-5 text-secondary" />
                </button>

                {isLoading && (
                    <div className="absolute inset-0 backdrop-blur-sm z-20 flex items-center justify-center ">
                        <Loader />
                    </div>

                )}

                {/*  */}
                {!selectedPlaceDetails ? (< AddPlaceSelector setIsLoading={setIsLoading} setSelectedPlaceDetails={setSelectedPlaceDetails} />) : (<AddPlaceConfirmation selectedPlaceDetails={selectedPlaceDetails} />)}

            </div>
        </section>
    )
}

export default AddPlacePop;