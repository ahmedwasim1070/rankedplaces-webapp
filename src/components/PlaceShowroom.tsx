"use client";

// Imports
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
// Providers
import { useLocationProvider } from '@/providers/LocationProvider';
import { useGlobalProvider } from '@/providers/GlobalProvider';
// Types
import { ApiResponse, PlacesResponse } from '@/types';
import { ArrowBigDown, ArrowBigUp, Globe, MapPin, Phone, Star } from 'lucide-react';

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
        <section className='min-w-full px-4 py-2 grid grid-cols-3 md:grid-cols-3 xxs:grid-cols-1 gap-y-4 gap-x-2'>

            {/* Loader */}
            {isLoading && <PlaceSkeletonLoader />}

            {/* Place Card */}
            {places && places.length > 0 && (
                places.map((place, idx) => (
                    <div key={idx} className='border-2 border-primary bg-primary/10 rounded-lg p-2 flex flex-col items-center justify-center gap-y-4 '>

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

                        {/* Location */}
                        <div className='flex flex-row gap-x-1'>
                            <MapPin className='w-4 h-4 text-secondary' />
                            <p className='font-semibold text-primary text-sm'>{place.city}</p>
                            <p className='font-semibold text-primary text-sm'>,</p>
                            <p className='font-semibold text-secondary text-sm'>{place.country}</p>
                        </div>

                        {/* Contact Info */}
                        <div className='min-w-full flex flex-row items-center justify-between px-4'>
                            <div className='flex flex-row items-center gap-x-1'>
                                <Phone className='w-4 h-4 text-secondary' />
                                <a href={`tel:${place.phone}`} className='font-semibold text-sm text-secondary hover:text-primary underline cursor-pointer transition-colors'>{place.phone}</a>
                            </div>

                            <div className='flex flex-row items-center gap-x-1'>
                                <Globe className='w-4 h-4 text-secondary' />
                                <a href={place?.website || ''} className='font-semibold text-sm text-secondary hover:text-primary underline cursor-pointer transition-colors'>{place.website ? place.website : 'Website'}</a>
                            </div>
                        </div>

                        {/* Votes */}
                        <div className='flex flex-row items-center'>
                            <button className='bg-secondary rounded-full rounded-r-lg p-2.5 cursor-pointer flex items-center gap-x-2'>
                                <ArrowBigUp className='w-4 h-4 fill-white text-white' />
                                <p className='text-sm text-white'>{place.total_up_votes}</p>
                            </button>

                            <button className='bg-primary rounded-full rounded-l-lg p-2.5 cursor-pointer flex items-center gap-x-2'>
                                <ArrowBigDown className='w-4 h-4 fill-white text-white' />
                                <p className='text-sm text-white'>{place.total_down_votes}</p>
                            </button>
                        </div>

                        {/* Review Info */}
                        <div className='flex flex-row items-center gap-x-1'>
                            <Star className='w-4 h-4 fill-yellow-300 text-gray-500' />
                            <p className='font-semibold text-gray-500 cursor-pointer'>{place.review_value}</p>
                            <p className='text-sm font-semibold text-gray-500 cursor-pointer'>({place.review_amount})</p>
                        </div>


                        {/*  */}
                        <a className='underline text-primary hover:text-secondary cursor-pointer text-sm' href={place.maps_url || 'https://mapgs.google.com'}>Google Map</a>

                    </div>
                ))
            )}
        </section>
    )
}

export default PlaceShowroom;