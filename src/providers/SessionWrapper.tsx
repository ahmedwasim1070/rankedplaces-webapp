'use client';

// Provider
import { SessionProvider } from "next-auth/react";
import { GlobalProvider } from "./GlobalProvider";

// 
export function SessionWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <GlobalProvider>
                {children}
            </GlobalProvider>
        </SessionProvider>
    );
}
