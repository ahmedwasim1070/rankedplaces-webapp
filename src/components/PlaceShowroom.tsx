"use client";

// Imports
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
// Providers
import { useLocationProvider } from '@/providers/LocationProvider';
import { useGlobalProvider } from '@/providers/GlobalProvider';
// Types
import { AddVoteForm, AddVoteResponse, ApiResponse, PlacesResponse } from '@/types';
import { ArrowBigDown, ArrowBigUp, Globe, MapPin, Phone, Star } from 'lucide-react';

// Interface
interface PlaceCardProps {
    place: PlacesResponse;
};

// Skeleton Profile Loader 
const PlaceSkeletonLoader = () => {
    return (
        <>
            {
                [...Array(6)].map((_, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-background border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center pb-4 gap-y-2 animate-pulse"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-full h-48 bg-gray-300 rounded-t-lg"></div>
                        <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
                        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                        <div className="w-full flex flex-row items-center justify-around px-4">
                            <div className="flex flex-row items-center gap-x-2">
                                <div className="w-5 h-4 bg-gray-300 rounded"></div>
                                <div className="w-20 h-3 bg-gray-300 rounded"></div>
                            </div>
                            <div className="flex flex-row items-center gap-x-2">
                                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                                <div className="w-16 h-3 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center gap-x-4 px-4">
                            <div className="w-12 h-8 bg-gray-300 rounded"></div>
                            <div className="w-12 h-8 bg-gray-300 rounded"></div>
                        </div>
                        <div className="w-24 h-4 bg-gray-300 rounded"></div>
                        <div className="w-1/3 h-3 bg-gray-300 rounded"></div>
                    </motion.div>

                ))
            }
        </>
    )
}

// 
const PlaceCard = ({ place }: PlaceCardProps) => {
    // Provider
    // Location
    const { urlParams, setParams } = useLocationProvider();
    // Global
    const { userData } = useGlobalProvider();
    // States
    // Up Votes
    const [upVotes, setUpVotes] = useState<number | null>(null);
    // Down Votes
    const [downVotes, setDownVotes] = useState<number | null>(null);

    // Undo Vote
    const undoVote = (direction: 'UP' | 'DOWN') => {
        if (!upVotes || !downVotes) return;

        // 
        if (direction === 'UP') {
            setUpVotes(upVotes - 1);
        } else if (direction === 'DOWN') {
            setDownVotes(downVotes - 1);
        }
    }
    // registerVote
    const vote = (direction: 'UP' | 'DOWN'): boolean => {
        if (!upVotes || !downVotes) return false;

        let isElgibleToVote: boolean = true;
        if (urlParams.tag === 'all') isElgibleToVote = false;

        const userVotesData = userData?.votes;
        const placeTagId = place.tags[0].place_tag_id;
        userVotesData?.forEach((vote) => {
            if (vote.place_tag_id === placeTagId) {
                isElgibleToVote = false;
            }
        })

        if (isElgibleToVote) {
            if (direction === 'UP') setUpVotes(upVotes + 1);
            else setUpVotes(upVotes + 1);
        }

        return isElgibleToVote;
    }
    // Handle Votes
    const handleVote = async (direction: 'UP' | 'DOWN') => {
        // Dose vote after check's on client side 
        const isVoted = vote(direction);
        if (!isVoted) return;

        try {
            const formData: AddVoteForm = {
                placeId: place.place_id,
                tag: urlParams.tag,
                voteType: direction,
            }
            const res = await fetch('/api/add/vote', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            const data = (await res.json()) as ApiResponse<AddVoteResponse | never>;

            if (!data.success) {
                throw new Error(data.message);
            }
        } catch (err) {
            // Message
            const msg = err instanceof Error ? err.message : "Unexpected error.";
            // 
            console.error("Error in handleVote in PlaceCard in PlacesShowroom.", "Message : ", msg, "Error : ", err);
            // 
            undoVote(direction);
        }

    }

    // Effects
    useEffect(() => {
        const fetchVotes = () => {
            if (upVotes && downVotes) return;

            if (urlParams.tag === 'All') {
                setUpVotes(place.total_up_votes);
                setDownVotes(place.total_down_votes);
            } else {
                setUpVotes(place.tags[0].up_votes);
                setDownVotes(place.tags[0].down_votes);
            }
        };

        fetchVotes();
    }, [place])

    return (
        <div className='border-2 border-primary bg-primary/10 rounded-lg p-2 flex flex-col items-center justify-center gap-y-2 overflow-x-hidden'>

            {/* Pfp */}
            {place.pfp && (
                <CldImage
                    className="w-full rounded-t-lg font-semibold object-cover"
                    src={place.pfp}
                    width={100}
                    height={48}
                    alt={place.name}
                    crop="fill"
                    gravity="auto"
                />
            )}

            {/* Name */}
            <p className='font-semibold text-secondary text-xl'>{place.name}</p>

            {/*  */}
            <p className='text-primary text-sm font-semibold'>{place.category}</p>

            {/* Location */}
            <div className='flex flex-row gap-x-1'>
                <MapPin className='w-4 h-4 text-secondary' />
                <p className='font-semibold text-primary text-sm'>{place.city}</p>
                <p className='font-semibold text-primary text-sm'>,</p>
                <p className='font-semibold text-secondary text-sm'>{place.country}</p>
            </div>

            {/* Contact Info */}
            <div className='min-w-full flex flex-row items-center justify-between px-4 my-2'>
                <div className='flex flex-row items-center gap-x-1'>
                    <Phone className='w-4 h-4 text-secondary' />
                    <a href={`tel:${place.phone}`} className='font-semibold text-sm text-secondary hover:text-primary underline cursor-pointer transition-colors'>{place.phone}</a>
                </div>

                <div className='flex flex-row items-center gap-x-1'>
                    <Globe className='w-4 h-4 text-secondary' />
                    <a href={place?.website || ''} className='font-semibold text-sm text-secondary hover:text-primary underline cursor-pointer transition-colors'>{place.website ? place.website : 'Website'}</a>
                </div>
            </div>

            {/*  */}
            <div className='min-w-full flex flex-row items-center overflow-x-scroll scrollbar-hidden gap-x-1 '>
                {place.tags.map((tag, idx) => (
                    <button onClick={() => { setParams(['tag'], [tag.tag_name]) }} className='bg-primary border border-primary rounded-full py-1 px-2 text-[12px] font-semibold text-white hover:bg-transparent hover:text-primary cursor-pointer transition-colors text-nowrap' key={idx}>
                        {tag.tag_name}
                    </button>
                ))}
            </div>

            {/* Votes */}
            <div className='flex flex-row items-center'>
                <button onClick={() => handleVote('UP')} className='bg-secondary border border-secondary rounded-full rounded-r-lg p-2.5 cursor-pointer flex items-center gap-x-2 hover:bg-transparent transition-colors group'>
                    <ArrowBigUp className='w-4 h-4 fill-white text-white group-hover:fill-secondary group-hover:text-secondary' />
                    <p className='text-sm text-white group-hover:text-secondary'>{upVotes}</p>
                </button>

                <button onClick={() => handleVote('DOWN')} className='bg-primary border border-primary rounded-full rounded-l-lg p-2.5 cursor-pointer flex items-center gap-x-2 hover:bg-transparent transition-colors group'>
                    <ArrowBigDown className='w-4 h-4 fill-white text-white group-hover:fill-primary group-hover:text-primary' />
                    <p className='text-sm text-white group-hover:text-primary'>{downVotes}</p>
                </button>
            </div>

            {/* Review Info */}
            <div className='flex flex-row items-center gap-x-1'>
                <Star className='w-4 h-4 fill-yellow-300 text-gray-500' />
                <p className='font-semibold text-gray-500 '>{place.review_value}</p>
                <p className='text-sm font-semibold text-gray-500 '>({place.review_amount})</p>
            </div>


            {/*  */}
            <a className='underline text-primary hover:text-secondary cursor-pointer text-sm' href={place.maps_url || 'https://mapgs.google.com'}>Google Map</a>

        </div>
    );
}

// 
function PlaceShowroom() {
    // Provider
    // Location
    const { urlParams } = useLocationProvider();
    // Global
    const { pathname } = useGlobalProvider();
    // States
    // Loader
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // Places
    const [places, setPlaces] = useState<PlacesResponse[] | null>(null);

    // generate fetch tag url
    const getFetchPlaceUrl = (): string | null => {
        let url = "/api/fetch/places";
        switch (pathname) {
            case "/":
                return url + `/?fetch-by=world&tag=${urlParams.tag}&page=${urlParams.page}`;
            case "/top-country-places":
                return url + `/?fetch-by=country&tag=${urlParams.tag}&page=${urlParams.page}&country-code=${urlParams.country}`;
            case "/top-city-places":
                return url + `/?fetch-by=city&tag=${urlParams.tag}&page=${urlParams.page}&country-code=${urlParams.country}&lat=${urlParams.lat}&lng=${urlParams.lng}`;
            default:
                return null;
        }
    };

    // Effects
    // Fetch Places if not any
    useEffect(() => {
        const fetchPlaces = async () => {
            if (places) return;

            setIsLoading(true);
            const url = getFetchPlaceUrl();
            if (!url) {
                setIsLoading(false);
                return;
            };

            try {
                const res = await fetch(`${url}`);
                const data = (await res.json()) as ApiResponse<PlacesResponse[] | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                setPlaces(data.data);
            } catch (err) {
                // Message
                const msg = err instanceof Error ? err.message : "Unexpected error.";
                // 
                console.error("Error in fetchPlaces in PlacesShowroom.", "Message : ", msg, "Error : ", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPlaces();
    }, [])

    return (
        <section className='min-w-full px-4 py-2 grid grid-cols-3 md:grid-cols-3 xxs:grid-cols-1 gap-y-4 gap-x-2 '>

            {/* Loader */}
            {isLoading && <PlaceSkeletonLoader />}

            {/*  */}
            {places && places.length > 0 &&
                (
                    places.map((place, idx) => (
                        <PlaceCard place={place} key={idx} />
                    ))
                )
            }

        </section>
    )
}

export default PlaceShowroom;