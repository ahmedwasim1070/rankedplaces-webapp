'use client';

// Imports
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
// Provider
import { useLocationProvider } from "./LocationProvider";
// Components
import Loader from "@/components/Loader";
import SigninPopup from "@/components/SigninPopup";
import AddPlacePop from "@/components/AddPlacePop";
import AddTagPopup from "@/components/AddTagPop";
import { ApiResponse, FetchUserData } from "@/types";

// Interfaces
interface ProviderProps {
    userData: FetchUserData | null;
    status: 'authenticated' | 'loading' | 'unauthenticated';
    pathname: string;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSigninPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAddTagPop: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAddPlacePop: React.Dispatch<React.SetStateAction<boolean>>;
    mainNav: any[];
}
interface Props {
    children: ReactNode;
}

// Context
const GlobalContext = createContext<ProviderProps | undefined>(undefined);

// 
export const GlobalProvider = ({ children }: Props) => {
    // Provider
    // Session
    const { data: session, status } = useSession();
    // Location
    const { urlParams, isLocationProviderLoading } = useLocationProvider();
    // Path
    const pathname = usePathname();
    // User data
    const [userData, setUserData] = useState<FetchUserData | null>(null);
    // Login
    // Loader state to triger main loader
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // Popup screen state for signin
    const [isSigninPop, setIsSigninPopup] = useState(false);
    // Popup screen state for tag-creation
    const [isAddTagPop, setIsAddTagPop] = useState(false);
    // Popup screen state for tag-creation
    const [isAddPlacePop, setIsAddPlacePop] = useState(false);

    // Constants
    // Nav Contents
    const mainNav = [
        {
            href: '/top-country-places',
            label: 'Top Country Places',
            isActive: pathname === '/top-country-places',
        },
        {
            href: '/top-city-places',
            label: 'Top City Places',
            isActive: pathname === '/top-city-places',
        }
    ]

    // Effects
    useEffect(() => {
        const fetchUserData = async () => {
            if (status !== 'authenticated') return;

            try {
                const res = await fetch('/api/fetch/user-data');
                const data = (await res.json()) as ApiResponse<FetchUserData | never>;

                if (!data.success) {
                    throw new Error(data.message);
                }

                setUserData(data.data);
            } catch (err) {
                // Message
                const msg = err instanceof Error ? err.message : "Unexpected error.";
                // Console
                console.error("Error in fetchUserData in GlobalProvider.", "Message : ", msg, "Error : ", err);
                // 
                setUserData(null);
            }
        }

        fetchUserData();
    }, [status, urlParams.tag])

    // Values
    const values = useMemo(() => ({
        userData, status, pathname, isLoading, setIsLoading, mainNav, setIsSigninPopup, setIsAddTagPop, setIsAddPlacePop,
    }), [userData, status, pathname, isLoading])

    return (
        <GlobalContext.Provider value={values}>
            {/* Toast Notify */}
            <Toaster />

            {/* Global Loader */}
            {isLoading &&
                <Loader fullscreen={true} />
            }
            {isLocationProviderLoading &&
                <Loader fullscreen={true} />
            }

            {/* Signin Screen Popup */}
            {isSigninPop &&
                <SigninPopup />
            }

            {/* Create-tag Screen Popup */}
            {isAddTagPop &&
                <AddTagPopup />
            }

            {/* Add-place Screen Popup */}
            {isAddPlacePop &&
                <AddPlacePop />
            }

            {pathname !== '/' ? !isLocationProviderLoading && children : children}
        </GlobalContext.Provider >
    );
}

// Hook to fetch provider data
export const useGlobalProvider = (): ProviderProps => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalProvider must be used within a GlobalProvider');
    }
    return context;
}
