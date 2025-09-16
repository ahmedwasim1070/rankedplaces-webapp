"use client";

// Imports
import { PlusSquare } from "lucide-react";
import { useSession } from "next-auth/react";
// Providers
import { useGlobalProvider } from "@/providers/GlobalProvider";

// 
function AddtagBtn() {
    // Provider
    // Session
    const { data: session, status } = useSession();
    // Global
    const { setIsCreateTagPop, setIsSigninPopup } = useGlobalProvider();

    return (
        <>
            <button disabled={status !== 'authenticated'} onClick={() => { { status === "authenticated" ? setIsCreateTagPop(true) : setIsSigninPopup(true) } }} type="button" className={`flex flex-row items-center group sm:gap-x-3 xxs:gap-x-2 sm:px-5 xxs:px-3 py-2 mx-2 text-center rounded-full ${status !== 'authenticated' ? 'bg-primary/40' : 'border-2 border-primary bg-primary cursor-pointer hover:bg-transparent transition-colors group'}`}>
                <PlusSquare className={`w-6 h-6 text-white ${status === 'authenticated' && ' group-hover:text-secondary'}`} />
                <p className={`text-white sm:text-lg xxs:text-sm font-semibold  ${status === 'authenticated' && 'group-hover:text-secondary'}`}>Create Your Tag</p>
            </button>
        </>
    )
}

export default AddtagBtn;
