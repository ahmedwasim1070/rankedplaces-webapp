'use client';

// Imports
import React, { createContext, ReactNode, useContext, useMemo, useState } from "react"
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
// Provider
import { SessionProvider } from "next-auth/react";
// Components
import Loader from "@/components/Loader";
import SigninPopup from "@/components/SigninPopup";
import CreateTagPopup from "@/components/CreateTagPopup";

// Interfaces
interface GloabalProviderTypes {
    pathname: string;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSigninPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCreateTagPop: React.Dispatch<React.SetStateAction<boolean>>;
}
interface GlobalProviderProps {
    children: ReactNode;
}

// Context
const GlobalContext = createContext<GloabalProviderTypes | undefined>(undefined);

// 
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    // Path
    const pathname = usePathname();
    // States
    // Loader state to triger main loader
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // Popup screen state for signin
    const [isSigninPop, setIsSigninPopup] = useState(false);
    // Popup screen state for tag-creation
    const [isCreateTagPop, setIsCreateTagPop] = useState(false);

    // Values
    const values = useMemo(() => ({
        pathname, isLoading, setIsLoading, setIsSigninPopup, setIsCreateTagPop
    }), [pathname, isLoading, setIsLoading, setIsSigninPopup, setIsCreateTagPop])

    return (
        <GlobalContext.Provider value={values}>
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
export const useGlobalProvider = (): GloabalProviderTypes => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalProvider must be used within a GlobalProvider');
    }
    return context;
}
