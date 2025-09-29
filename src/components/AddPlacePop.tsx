// Imports
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { MapPin, Search, Star, X, ChevronLeft } from "lucide-react"
// Utils
import { getAddressComponent } from "@/utils";
// Types
import { Tags } from "@/generated/prisma";
import { AddPlaceForm, ApiResponse, PlaceDetailsResponse, PlaceSuggestionResponse } from "@/types";
// Components
import Loader from "./Loader";
// Provider
import { useGlobalProvider } from "@/providers/GlobalProvider"
import { useLocationProvider } from "@/providers/LocationProvider";

// Props
interface AddPlaceSelectorProps {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedPlaceDetails: React.Dispatch<React.SetStateAction<PlaceDetailsResponse | null>>;
};
interface AddPlaceConfirmationProps {
    selectedPlaceDetails: PlaceDetailsResponse;
    setSelectedPlaceDetails: React.Dispatch<React.SetStateAction<PlaceDetailsResponse | null>>;
    setIsAddPlacePop: React.Dispatch<React.SetStateAction<boolean>>;
}

// 
const AddPlaceSelector = ({ setIsLoading, setSelectedPlaceDetails }: AddPlaceSelectorProps) => {
    // Providers
    // Location
    const { urlParams } = useLocationProvider()
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
                if (Date.now() - lastTypedAtRef.current >= 1000) {
                    fetchPlaceSuggestion(value);
                } else {
                    setIsFetchingSuggestion(false);
                }
            }, 1000);
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

        let url: string = `/api/fetch/place-details/?place-id=${selectedPlace.place_id}`;

        if (urlParams.country && !urlParams.city) {
            url += `country-code=${urlParams.country}`;
        } else if (urlParams.country && urlParams.city && urlParams.lat && urlParams.lng) {
            url += `country-code=${urlParams.country}&lat=${urlParams.lat}&lng=${urlParams.lng}`;
        }

        try {
            const res = await fetch(url);
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
                    (<div className="w-full max-h-50 bg-background absolute z-20 top-14 rounded-lg overflow-y-scroll flex flex-col gap-y-2 p-2">
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
const AddPlaceConfirmation = ({ selectedPlaceDetails, setSelectedPlaceDetails, setIsAddPlacePop }: AddPlaceConfirmationProps) => {
    // Provider
    // Loaction
    const { urlParams } = useLocationProvider();
    // Refs
    // Timer
    const debouncerTimerRef = useRef<NodeJS.Timeout | null>(null);
    // Last typed time
    const lastTypedAtRef = useRef<number>(0);
    // States
    // City
    const [city, setCity] = useState<string | null>(null);
    // Country
    const [country, setCountry] = useState<string | null>(null);
    // is loading
    const [isFetchingSuggestion, setIsFetchingSuggestion] = useState<boolean>(false);
    // searched Tag
    const [searchedTag, setSearchedTag] = useState<string>("");
    // suggested tags
    const [suggestedTags, setSuggestedTags] = useState<Tags[] | null>(null);
    // selected tag's
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    // loader for adding Place
    const [isAddingPlace, setIsAddingPlace] = useState<boolean>(false);

    // fetch tags suggestion
    const fetchTagSuggestion = async (value: string) => {
        if (value.length > 2) {

            setIsFetchingSuggestion(true);

            try {
                const res = await fetch(`/api/fetch/tags-suggestion/?searched-tag=${value}`);
                const data = (await res.json()) as ApiResponse<Tags[] | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                setSuggestedTags(data.data);
            } catch (err) {
                // Message
                const msg =
                    err instanceof Error ? err.message : "Unexpected error.";
                // 
                toast.error(msg);
                // 
                console.error("Error in AddPlacePop in fetchTagSuggestion.", "Message : ", msg, "Error : ", err);
            } finally {
                setIsFetchingSuggestion(false);
            }
        }
    }
    // handle searched place input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSearchedTag(value);

        lastTypedAtRef.current = Date.now();

        if (debouncerTimerRef.current) {
            clearTimeout(debouncerTimerRef.current);
        }

        if (value.length > 2) {
            setIsFetchingSuggestion(true);
            debouncerTimerRef.current = setTimeout(() => {
                if (Date.now() - lastTypedAtRef.current >= 1000) {
                    fetchTagSuggestion(value);
                } else {
                    setIsFetchingSuggestion(false);
                }
            }, 1000);
        } else {
            setSuggestedTags(null);
            setIsFetchingSuggestion(false);
        }
    }
    // handle tag select
    const handleTagSelect = (tagName: string) => {
        setSelectedTags((prev) => {
            const isAlreadyExists: boolean = prev.some(tag => tag === tagName) || (selectedPlaceDetails.dbData ? selectedPlaceDetails.dbData.place_tag.some(placeTag => placeTag.tag.name === tagName) : false);
            if (isAlreadyExists) {
                toast.error("Tag already exsists");
                return [...prev];
            }
            return [...prev, tagName];
        })
        setSuggestedTags(null);
        setSearchedTag("");
    }
    // handle tag removal by name
    const handleTagRemove = (tagName: string) => {
        setSelectedTags(prev => prev.filter(tag => tag !== tagName));
    }
    // Add Place
    const handlePlaceAdd = async () => {
        if (selectedTags.length === 0) {
            toast.error("Atleast add one tag.");
            return;
        };

        if (selectedTags.length > 6) {
            toast.error("Only 6 can be added with one time.");
            return;
        }

        setIsAddingPlace(true);
        try {
            const formData: AddPlaceForm = {
                placeByGoogle: selectedPlaceDetails.googleData,
                userAddedTags: selectedTags,
            };

            const res = await fetch(`/api/add/place`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            const data = (await res.json()) as ApiResponse<null | never>;

            if (!data.success) {
                throw new Error(data.message);
            }

            toast.success(data.message);
            setSelectedPlaceDetails(null);
            setSuggestedTags(null);
            setSelectedTags([]);
            setCity(null);
            setCountry(null);
            setIsAddPlacePop(false);
        } catch (err) {
            // Message
            const msg =
                err instanceof Error ? err.message : "Unexpected error.";
            // 
            toast.error(msg);
            // 
            console.error("Error in AddPlacePop in handlePlaceAdd.", "Message : ", msg, "Error : ", err);
        } finally {
            setIsAddingPlace(false);
        }
    }
    // 
    const handleBack = () => {
        setSelectedPlaceDetails(null);
    };

    // Effects
    useEffect(() => {
        setCity(getAddressComponent(selectedPlaceDetails.googleData.address_components, 'locality')?.long_name || null);
        setCountry(getAddressComponent(selectedPlaceDetails.googleData.address_components, 'country')?.long_name || null);

        // Automatically adds the tag if urlParams selected is not in with the place
        if (urlParams.tag !== 'All') {
            const isTagAlreadyInPlace = selectedPlaceDetails.dbData?.place_tag.some((placeTag) => placeTag.tag.name === urlParams.tag);
            if (!isTagAlreadyInPlace) {
                handleTagSelect(urlParams.tag);
            }
        }
    }, [])

    return (
        <div>
            {/*  */}
            <button onClick={() => handleBack()} className="bg-white shadow-sm rounded-full p-2 absolute left-3 top-2.5 hover:bg-secondary/20 transition-colors cursor-pointer">
                <ChevronLeft className="w-5 h-5 text-secondary" />
            </button>

            {/*  */}
            <h3 className="text-2xl text-secondary font-semibold">
                Add Place
            </h3>

            {/*  */}
            <p className="text-primary pb-2">Proceed to add this place.</p>

            {/*  */}
            <div className="bg-gray-100 border-2 border-gray-400 p-4 rounded-lg text-left space-y-1">
                {/* Place name */}
                <h4 className="font-semibold text-lg text-secondary">{selectedPlaceDetails.googleData.name}</h4>

                {/* Place fullladdress */}
                <p className="text-sm text-gray-500">{selectedPlaceDetails.googleData.formatted_address}</p>

                {/* Google categories */}
                <div className="flex flex-row items-center flex-wrap gap-1 my-2">
                    {selectedPlaceDetails.googleData.types.map((type, idx) => (
                        <div key={idx} className="rounded-full bg-gray-300 px-2.5 py-0.5">
                            <p className="text-[13px] text-gray-500">{type}</p>
                        </div>
                    ))}
                </div>

                {/* Ratings Info  */}
                <div className="flex flex-row items-center gap-x-1">
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    <p className="text-primary">{selectedPlaceDetails.googleData.rating}</p>
                    <p className="text-gray-500 text-sm">({selectedPlaceDetails.googleData.user_ratings_total})</p>
                </div>

                {/* Country , City info */}
                {(city || country) && (
                    <div className="flex flex-row gap-x-1 items-center">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <p className="text-primary font-semibold">{city}</p>
                        <p>,</p>
                        <p className="text-secondary font-semibold">{country}</p>
                    </div>
                )}

                {/* Tags */}
                <div className="flex flex-row items-center flex-wrap gap-1 my-2">
                    {(selectedPlaceDetails.dbData && selectedPlaceDetails.dbData.place_tag) &&
                        selectedPlaceDetails.dbData.place_tag.map((placeTags, idx) => (
                            <div key={idx} className="rounded-full bg-primary px-2.5 py-0.5">
                                <p className="text-[13px] text-secondary">{placeTags.tag.name}</p>
                            </div>
                        ))
                    }
                </div>

                {/* Add tags */}
                <div className="mt-2">
                    {/*  */}
                    <div className="w-full flex flex-col gap-y-1 my-2 relative">
                        <label className="text-sm text-secondary" htmlFor="searchedTag">Add Custom Tag :</label>
                        <input
                            name="searchedTag"
                            value={searchedTag}
                            type="search"
                            autoComplete="off"
                            onChange={handleChange}
                            className="border-2 border-primary rounded-lg px-2 py-1.5 outline-none text-secondary"
                            placeholder="Search exsistance tag's."
                        />

                        {/*  */}
                        {(isFetchingSuggestion || suggestedTags) &&
                            (<div className="w-full max-h-50 bg-background absolute z-20 top-16 rounded-lg overflow-y-scroll flex flex-col gap-y-2 p-2 border-2 border-gray-500">
                                {isFetchingSuggestion && (
                                    <div className="w-full py-4 ">
                                        <Loader dotSize="3" />
                                    </div>
                                )}

                                {suggestedTags?.length === 0 && (<p className="m-2 text-gray-500 ">No tags found with this string.</p>)}

                                {/*  */}
                                {suggestedTags?.map((tag, idx) => (
                                    <button onClick={() => handleTagSelect(tag.name)} key={idx} className="space-y-2 text-gray-400 p-2 cursor-pointer text-left border rounded-lg hover:bg-gray-200 transition-colors">
                                        <div className="flex flex-col items-start px-2">
                                            <p className="font-medium text-secondary text-sm sm:text-base group-hover:text-primary transition-colors text-left">
                                                {tag.name}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>)
                        }
                    </div>

                    {/*  */}
                    <div className="border-2 border-secondary rounded-lg p-2 space-y-1">
                        <p className="text-sm text-secondary">Added Tag's : </p>

                        {/* Tags */}
                        <div className="flex flex-row items-center flex-wrap gap-1 my-2 ">
                            {(selectedTags.length !== 0) ?
                                selectedTags.map((tag, idx) => (
                                    <div key={idx} className="flex items-center rounded-full bg-secondary px-3 py-1 gap-x-2">
                                        <p className="text-[13px] text-primary">{tag}</p>

                                        <button onClick={() => handleTagRemove(tag)} className="rounded-full p-0.5 bg-primary">
                                            <X className="w-3 h-3 text-secondary " />
                                        </button>
                                    </div>
                                )
                                ) : (
                                    <p className="text-sm text-red-500 font-semibold">
                                        Atleast add one tag.
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <button onClick={handlePlaceAdd} disabled={isAddingPlace || selectedTags.length === 0} className="w-full bg-primary text-white mt-2 rounded-lg py-2 font-semibold border-2 border-primary enabled:hover:bg-transparent enabled:hover:text-primary transition-colors enabled:cursor-pointer disabled:bg-primary/60">
                {isAddingPlace ? (<Loader dotSize="3" className="my-2" />) : (<p>Countinue</p>)}
            </button>
        </div >
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
                {!selectedPlaceDetails ? (< AddPlaceSelector setIsLoading={setIsLoading} setSelectedPlaceDetails={setSelectedPlaceDetails} />) : (<AddPlaceConfirmation selectedPlaceDetails={selectedPlaceDetails} setSelectedPlaceDetails={setSelectedPlaceDetails} setIsAddPlacePop={setIsAddPlacePop} />)}

            </div>
        </section>
    )
}

export default AddPlacePop;