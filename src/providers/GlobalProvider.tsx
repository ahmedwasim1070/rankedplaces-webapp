'use client';

// Imports
import React, { createContext, ReactNode, useContext, useMemo, useState } from "react"
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
// Provider
import { SessionProvider } from "next-auth/react";
import { useLocationProvider } from "./LocationProvider";
// Components
import Loader from "@/components/Loader";
import SigninPopup from "@/components/SigninPopup";
import AddPlacePop from "@/components/AddPlacePop";
import AddTagPopup from "@/components/AddTagPop";

// Interfaces
interface ProviderProps {
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
    const { isLocationProviderLoading } = useLocationProvider();
    // Path
    const pathname = usePathname();
    // States
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

    // Values
    const values = useMemo(() => ({
        pathname, isLoading, setIsLoading, mainNav, setIsSigninPopup, setIsAddTagPop, setIsAddPlacePop,
    }), [pathname, isLoading, setIsAddPlacePop])

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

            {/* Session Provider */}
            <SessionProvider>
                {pathname !== '/' ? !isLocationProviderLoading && children : children}
            </SessionProvider>
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
