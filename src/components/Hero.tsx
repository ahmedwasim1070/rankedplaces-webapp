"use client";

// Imports
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

// 
function Hero() {
    // Provider
    // Location
    const { urlParams } = useLocationProvider();
    // Global
    const { status, pathname } = useGlobalProvider();

    // handle Sigin out
    const handleSignOut = async () => {
        try {
            const res = await signOut();
        } catch (err) {
            // Message
            const msg =
                err instanceof Error ? err.message : "Unexpected error.";
            // 
            console.error("Error in handleSignOut in Hero.", "Message : ", msg, "Error : ", err);
        }
    }

    return (
        <main role="main" className="min-w-screen py-14 flex flex-col items-center bg-gradient-to-b from-background to-white gap-y-4">
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
                <div className="w-full flex flex-row justify-center items-center gap-x-1 flex-nowrap">
                    <input
                        type="search"
                        className="w-full 2xl:w-1/4 sm:w-2/4 md:w-1/2 lg:w-2/5 border-2 border-gray-400 rounded-full px-3 py-2 text-secondary placeholder:text-gray-400 outline-none focus:border-primary"
                        placeholder="Search tag or place."
                    />
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