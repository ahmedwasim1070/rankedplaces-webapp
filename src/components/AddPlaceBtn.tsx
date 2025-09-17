// Imports
import { PlusSquare } from "lucide-react";
import { useSession } from "next-auth/react";
// Providers
import { useGlobalProvider } from "@/providers/GlobalProvider";

// 
function AddPlaceBtn() {
    // Provider
    // Session
    const { data: session, status } = useSession();
    // Global
    const { setIsAddPlacePop, setIsSigninPopup } = useGlobalProvider();

    return (
        <button disabled={status !== 'authenticated'} onClick={() => { { status === "authenticated" ? setIsAddPlacePop(true) : setIsSigninPopup(true) } }} type="button" className={`flex flex-row items-center group sm:gap-x-3 xxs:gap-x-2 sm:px-5 xxs:px-3 py-2 mx-2 text-center rounded-full ${status !== 'authenticated' ? 'bg-secondary/40' : 'border-2 border-secondary bg-secondary cursor-pointer hover:bg-transparent transition-colors group'}`}>
            <PlusSquare className={`w-6 h-6 text-white ${status === 'authenticated' && ' group-hover:text-secondary'}`} />
            <p className={`text-white sm:text-lg xxs:text-sm font-semibold  ${status === 'authenticated' && 'group-hover:text-secondary'}`}>Add Place</p>
        </button>
    )
}

export default AddPlaceBtn;