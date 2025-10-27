"use client";

// Imports
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import toast from 'react-hot-toast';
// Components
import AddPlaceBtn from './AddPlaceBtn';
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
    const { status, userData } = useGlobalProvider();
    // States
    // Up Votes
    const [upVotes, setUpVotes] = useState<number>(0);
    // Down Votes
    const [downVotes, setDownVotes] = useState<number>(0);
    // Vote commited by user
    const [voteCommited, setVoteCommited] = useState<'UP' | 'DOWN' | null>(null);
    // debounce if voting is in progress 
    const [isVoting, setIsVoting] = useState<boolean>(false);

    // registerVote
    const applyVote = (direction: 'UP' | 'DOWN', revert: boolean) => {
        if (isVoting) return;
        if (status !== 'authenticated') return;

        if (!voteCommited) {
            if (direction === 'UP') !revert ? setUpVotes((v) => v + 1) : setUpVotes((v) => v - 1);
            if (direction === 'DOWN') !revert ? setDownVotes((v) => v + 1) : setDownVotes((v) => v - 1);
            setVoteCommited(direction);
            return;
        }

        if (voteCommited === direction) {
            if (direction === 'UP') !revert ? setUpVotes((v) => v - 1) : setUpVotes((v) => v + 1);
            if (direction === 'DOWN') !revert ? setDownVotes((v) => v - 1) : setDownVotes((v) => v + 1);
            setVoteCommited(null);
            return;
        }

        if (direction === 'UP') {
            if (!revert) {
                setUpVotes((v) => v + 1);
                setDownVotes((v) => v - 1);
            } else {
                setUpVotes((v) => v - 1);
                setDownVotes((v) => v + 1);
            }
        }
        if (direction === 'DOWN') {
            if (!revert) {
                setUpVotes((v) => v - 1);
                setDownVotes((v) => v + 1);
            } else {
                setUpVotes((v) => v + 1);
                setDownVotes((v) => v - 1);
            }
        }
        setVoteCommited(direction);
        return;
    }
    // Handle Votes
    const handleVote = async (direction: 'UP' | 'DOWN') => {
        if (isVoting) return;

        try {
            setIsVoting(true);

            // Dose vote after check's on client side 
            applyVote(direction, false);

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
            toast.error(msg);
            // 
            console.error("Error in handleVote in PlaceCard in PlacesShowroom.", "Message : ", msg, "Error : ", err);
            // 
            applyVote(direction, true);
        } finally {
            setIsVoting(false);
        }
    }

    // Effects
    useEffect(() => {
        setUpVotes(0);
        setDownVotes(0);
        setVoteCommited(null);

        if (urlParams.tag === 'All') {
            setUpVotes(place.total_up_votes ?? 0);
            setDownVotes(place.total_down_votes ?? 0);
        } else {
            const tagEntry = place.tags && place.tags.length > 0 ? place.tags[0] : null;
            setUpVotes(tagEntry?.up_votes ?? 0);
            setDownVotes(tagEntry?.down_votes ?? 0);
        }

        if (status === 'authenticated' && userData && urlParams.tag !== 'All') {
            const placeTagId = place.tags && place.tags.length > 0 ? place.tags[0].place_tag_id : undefined;
            if (placeTagId) {
                const existingVote = userData.votes.find(v => v.place_tag_id === placeTagId);
                if (existingVote) {
                    setVoteCommited(existingVote.vote_type);
                } else {
                    setVoteCommited(null);
                }
            } else {
                setVoteCommited(null);
            }
        } else {
            setVoteCommited(null);
        }
    }, [place.place_id, place.total_up_votes, place.total_down_votes, place.tags, userData, status, urlParams.tag]);

    return (
        <div className='border-2 border-primary bg-primary/10 rounded-lg p-2 flex flex-col items-center justify-center gap-y-2 overflow-x-hidden'>

            {/* Pfp */}
            {place.pfp && (
                <CldImage
                    className="w-full rounded-lg font-semibold object-cover"
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
                    <a href={`tel:${place.phone}`} className='font-semibold text-sm text-secondary hover:text-primary underline cursor-pointer transition-colors'>phone</a>
                </div>

                <div className='flex flex-row items-center gap-x-1'>
                    <Globe className='w-4 h-4 text-secondary' />
                    <a href={place?.website || ''} className='font-semibold text-sm text-secondary hover:text-primary underline cursor-pointer transition-colors'>Website</a>
                </div>
            </div>

            {/*  */}
            <div className={`min-w-full flex flex-row justify-around items-center overflow-x-scroll scrollbar-hidden gap-x-1`}>
                {place.tags.map((tag) => (
                    <button onClick={() => { setParams(['tag'], [tag.tag_name]) }} disabled={tag.tag_name === urlParams.tag} className='bg-primary border border-primary rounded-full py-1 px-2 text-[12px] font-semibold text-white enabled:hover:bg-transparent enabled:hover:text-primary enabled:cursor-pointer transition-colors text-nowrap' key={tag.tag_name}>
                        {tag.tag_name}
                    </button>
                ))}
            </div>

            {/* Votes */}
            <div className='flex flex-row items-center'>
                <button
                    onClick={() => handleVote('UP')}
                    disabled={status !== 'authenticated' || urlParams.tag === 'All'}
                    className={` bg-secondary border border-secondary rounded-full rounded-r-lg p-2.5 flex items-center gap-x-2 transition-colors enabled:cursor-pointer enabled:hover:bg-transparent group enabled:group-hover:text-secondary disabled:bg-secondary/40 disabled:border-none ${voteCommited === 'UP' && 'bg-transparent'}`}
                >
                    <ArrowBigUp
                        className={`w-4 h-4 group-hover:fill-secondary group-hover:text-secondary ${voteCommited === 'UP' ? 'fill-secondary text-secondary' : 'text-white fill-white'}`}
                    />
                    <p className={`text-sm  group-hover:text-secondary ${voteCommited === 'UP' ? 'text-secondary' : 'text-white'}`}>{upVotes}</p>
                </button>

                <button
                    onClick={() => handleVote('DOWN')}
                    disabled={status !== 'authenticated' || urlParams.tag === 'All'}
                    className={`bg-primary border border-primary rounded-full rounded-l-lg p-2.5 flex items-center gap-x-2 transition-colors enabled:cursor-pointer enabled:hover:bg-transparent group enabled:group-hover:text-primary disabled:bg-primary/40 disabled:border-none ${voteCommited === 'DOWN' && 'bg-transparent'}`}
                >
                    <ArrowBigDown
                        className={`w-4 h-4 group-hover:fill-primary group-hover:text-primary ${voteCommited === 'DOWN' ? 'fill-primary text-primary' : 'text-white fill-white'}`}
                    />
                    <p className={`text-sm group-hover:text-primary ${voteCommited === 'DOWN' ? 'text-primary' : 'text-white'}`}>{downVotes}</p>
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
            setPlaces(null);
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
                setPlaces(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPlaces();
    }, [urlParams.tag])

    return (
        <section className={`${places !== null || isLoading ? 'min-w-full px-4 py-2 grid grid-cols-3 md:grid-cols-3 xxs:grid-cols-1 gap-y-4 gap-x-2 ' : 'flex items-center justify-center p-10'}`}>

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

            {/*  */}
            {places === null && (
                <div className='flex flex-col items-center justify-center gap-y-2'>
                    <p className='text-center text-xl font-semibold text-secondary'>No Places yet with this tag</p>
                    <p className='text-center  font-semibold text-primary'>Start Adding</p>
                    <AddPlaceBtn />
                </div>
            )}

        </section>
    )
}

export default PlaceShowroom;