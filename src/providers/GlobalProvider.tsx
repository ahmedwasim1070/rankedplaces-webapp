'use client';

// Imports
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// Provider
import { SessionProvider } from "next-auth/react";
// Components
import Loader from "@/components/Loader";
import SigninPopup from "@/components/SigninPopup";
import CreateTagPopup from "@/components/CreateTagPopup";
import { usePathname } from "next/navigation";

// Interfaces
interface GloabalProvider {
    pathname: string;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSigninPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCreateTagPop: React.Dispatch<React.SetStateAction<boolean>>;
}
interface GlobalProviderProps {
    children: ReactNode;
}

// Types
type UrlParams = {
    tag: string;
    page: number;
    countryCode?: string;
    city?: string;
}

// Context
const GlobalContext = createContext<GloabalProvider | undefined>(undefined);

// 
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    // Path
    const pathname = usePathname();
    // Location
    const location = useLocation();
    // Navigate
    const navigate = useNavigate();
    // States
    // Url Params
    const [urlParams, setUrlParams] = useState<UrlParams | null>(null);
    // Loader state to triger main loader
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // Popup screen state for signin
    const [isSigninPop, setIsSigninPopup] = useState(false);
    // Popup screen state for tag-creation
    const [isCreateTagPop, setIsCreateTagPop] = useState(false);

    // Effect 
    // On url params set

    // Value
    const value = useMemo(() => ({
        pathname, isLoading, setIsLoading, setIsSigninPopup, setIsCreateTagPop
    }), [pathname, isLoading, setIsLoading, setIsSigninPopup, setIsCreateTagPop])

    return (
        <GlobalContext.Provider value={value}>
            {/* Toast Notify */}
            <Toaster />

            {/* Global Loader */}
            {isLoading &&
                <Loader fullscreen={true} />
            }

            {/* Signin Screen Popup */}
            {isSigninPop &&
                <SigninPopup />
            }

            {/* Create-tag Screen Popup */}
            {isCreateTagPop &&
                <CreateTagPopup />
            }

            {/* Session Provider */}
            <SessionProvider>
                {/* Children Components */}
                {children}
            </SessionProvider>
        </GlobalContext.Provider >
    );
}

// Hook to fetch provider data
export const useGlobalProvider = (): GloabalProvider => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalProvider must be used within a GlobalProvider');
    }
    return context;
}
