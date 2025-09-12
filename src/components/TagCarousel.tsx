"use client";

// Imports
import { motion, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from 'react';
// Types
import { ApiResponse, cityFetchTagsResponse, countryFetchsTagResponse, worldFetchTagsResponse } from '@/types';

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
    // Refs
    const sliderRef = useRef(null);
    // States
    // Tags
    const [tags, setTags] = useState<worldFetchTagsResponse | countryFetchsTagResponse | cityFetchTagsResponse | null>(null);
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

    // Effects
    // load fetchTopTags if there is no tags loaded
    useEffect(() => {
        // Fetch all the top tags
        const fetchTopTags = async () => {

            setIsFetching(true);
            try {
                const res = await fetch(`/api/fetch/tags`);
                const data = (await res.json()) as ApiResponse<worldFetchTagsResponse | countryFetchsTagResponse | cityFetchTagsResponse | never>;
                if (!data.success) {
                    throw new Error(data.message);
                }

                if (data.success) {
                }
            } catch (err) {
                // Message
                const msg =
                    err instanceof Error ? err.message : "Unexpected error.";
                // 
                console.error("Error in fetchTopTags in TagCarousel.", "Message : ", msg, "Error : ", err);
            } finally {
                setIsFetching(false);
            }
        }
    }, []);

    return (
        <section className="min-w-full py-2 flex flex-row items-center overflow-x-hidden px-2">
            <button
                onClick={() => handleScroll("prev")}
                className="bg-primary rounded-full p-1 xxs:p-2 border border-primary transition-colors hover:bg-transparent cursor-pointer"
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
            </div>

            <button
                onClick={() => handleScroll("next")}
                className="bg-primary rounded-full p-1 xxs:p-2 border border-primary transition-colors hover:bg-transparent cursor-pointer"
            >
                <ChevronRight className="w-6 h-6 xxs:w-8 xxs:h-8 text-secondary" />
            </button>
        </section>
    )
}

export default TagCarousel;