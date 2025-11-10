"use client";

// Imports
import { motion, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from 'react';
// Types
import { ApiResponse, cityFetchTagsResponse, countryFetchsTagResponse, worldFetchTagsResponse } from '@/types';
// Providers
import { useGlobalProvider } from '@/providers/GlobalProvider';
import { useLocationProvider } from '@/providers/LocationProvider';

//  Loader
const TagSkeletonLoader = () => {
    return (
        <>
            {[...Array(15)].map((_, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:min-w-32 xxs:min-w-18 flex flex-row items-center gap-x-1 xxs:gap-x-2 border border-gray-300 bg-gray-300 rounded-lg px-3 py-5.5 text-nowrap group animate-pulse"
                />
            ))}
        </>
    );
};

// 
function TagCarousel() {
    // Proivder's
    // Location
    const { urlParams, setParams } = useLocationProvider();
    // Global
    const { pathname } = useGlobalProvider();
    // Refs
    const sliderRef = useRef(null);
    // States
    // Tags
    const [tags, setTags] = useState<worldFetchTagsResponse[] | countryFetchsTagResponse[] | cityFetchTagsResponse[] | null>(null);
    // Loader
    const [isFetching, setIsFetching] = useState<boolean>(false);

    // handleScroll
    const handleScroll = (direction: string) => {
        const slider = sliderRef.current as HTMLElement | null;
        if (!slider) return;

        const scrollAmount = 500;

        if (direction === "next") {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
                (slider.scrollLeft, 0, {
                    duration: 0.5,
                    onUpdate: (latest: number) => {
                        slider.scrollLeft = latest;
                    }
                });
            } else {
                const targetScroll = Math.min(
                    slider.scrollLeft + scrollAmount,
                    slider.scrollWidth - slider.clientWidth
                );
                animate(slider.scrollLeft, targetScroll, {
                    duration: 0.5,
                    onUpdate: (latest) => {
                        slider.scrollLeft = latest;
                    }
                });
            }
        } else {
            if (slider.scrollLeft <= 0) {
                animate(slider.scrollLeft, slider.scrollWidth - slider.clientWidth, {
                    duration: 0.5,
                    onUpdate: (latest) => {
                        slider.scrollLeft = latest;
                    }
                });
            } else {
                const targetScroll = Math.max(slider.scrollLeft - scrollAmount, 0);
                animate(slider.scrollLeft, targetScroll, {
                    duration: 0.5,
                    onUpdate: (latest) => {
                        slider.scrollLeft = latest;
                    }
                });
            }
        }
    };
    const handleTagChange = (value: string) => {
        setParams(['tag'], [value]);
    };

    // Effects
    // load fetchTopTags if there is no tags loaded
    useEffect(() => {
        // Fetch all the top tags
        const fetchTopTags = async () => {
            setIsFetching(true);

            // 
            let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch/tags`;
            switch (pathname) {
                case "/":
                    url = url + "/?fetch-by=world";
                    break;
                case "/top-country-places":
                    url = url + `/?fetch-by=country&country-code=${urlParams.country}`;
                    break;
                case "/top-city-places":
                    url = url + `/?fetch-by=city&country-code=${urlParams.country}&lat=${urlParams.lat}&lng=${urlParams.lng}`;
                    break;
                default:
                    break;
            }

            try {
                const res = await fetch(`${url}`);
                const data = (await res.json()) as ApiResponse<worldFetchTagsResponse[] | countryFetchsTagResponse[] | cityFetchTagsResponse[] | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                setTags(data.data);

            } catch (err) {
                // Message
                const msg =
                    err instanceof Error ? err.message : "Unexpected error.";
                // 
                console.error("Error in fetchTopTags in TagCarousel.", "Message : ", msg, "Error : ", err);
                // 
                setTags(null);
            } finally {
                setIsFetching(false);
            }
        }

        fetchTopTags();
    }, [urlParams, pathname]);

    return (
        <section className="min-w-full py-2 flex flex-row items-center overflow-x-hidden px-2">
            <button
                onClick={() => handleScroll("prev")}
                className="xs:block hidden bg-primary rounded-full p-2 border-2 border-primary transition-colors hover:bg-transparent cursor-pointer"
            >
                <ChevronLeft className="w-6 h-6 xxs:w-8 xxs:h-8 text-secondary" />
            </button>

            <div
                ref={sliderRef}
                className="w-full px-2 flex flex-row items-center gap-x-2 overflow-y-hidden rounded-lg scrollbar-hidden"
                style={{ minHeight: '48px', minWidth: '120px', position: 'relative' }}
            >
                {/* Loader */}
                {isFetching && <TagSkeletonLoader />}

                {/*  */}
                <button onClick={() => handleTagChange('All')} className={`rounded-full px-4 py-2  border-2 border-secondary  ${urlParams.tag === 'All' ? 'bg-transparent text-secondary' : 'bg-secondary text-white hover:bg-transparent hover:text-secondary transition-colors cursor-pointer'}`}>
                    <p className='font-semibold'>
                        All
                    </p>
                </button>
                {tags && tags.map((tag, idx) => (
                    <button onClick={() => handleTagChange(tag.name)} key={idx} className={`rounded-full px-4 py-2  border-2 border-secondary  ${urlParams.tag === tag.name ? 'bg-transparent text-secondary' : 'bg-secondary text-white hover:bg-transparent hover:text-secondary transition-colors cursor-pointer'}`}>
                        <p className='font-semibold text-nowrap'>
                            {tag.name}
                        </p>
                    </button>
                ))}
            </div>

            <button
                onClick={() => handleScroll("next")}
                className="xs:block hidden bg-primary rounded-full p-2 border-2 border-primary transition-colors hover:bg-transparent cursor-pointer"
            >
                <ChevronRight className="w-6 h-6 xxs:w-8 xxs:h-8 text-secondary" />
            </button>
        </section>
    )
}

export default TagCarousel;