"use client";

// Imports
import { ArrowRight, X } from "lucide-react"
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
// Providers
import { useGlobalProvider } from "@/providers/GlobalProvider";
import Loader from "./Loader";

// 
function SigninPopup() {
    // Provider
    // Global
    const { setIsSigninPopup } = useGlobalProvider();
    // States
    const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

    // Handle Zero auth google
    const handleAuth = async () => {
        setIsAuthenticating(true);
        try {
            const res = await signIn("google", { redirect: false, });
            if (res?.error) {
                throw new Error(res.error);
            }

            setIsSigninPopup(false);
        } catch (err) {
            // Message
            const msg =
                err instanceof Error ? err.message : "Unexpected error.";
            // Toast
            toast.error(msg);
            // 
            console.error("Error in handleSignin in SigninPopup.", "Message : ", msg, "Error : ", err);
        } finally {
            setIsAuthenticating(false);
        }
    };

    return (
        <section className="fixed min-w-screen min-h-screen bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center px-2">
            <div className="w-11/12 sm:w-96 md:w-[28rem] bg-background rounded-lg shadow-sm px-2 py-4 border border-secondary/20 relative text-center space-y-5">

                {/*  */}
                <button onClick={() => setIsSigninPopup(false)} type="button" className="p-2 bg-white shadow-sm absolute top-2 right-2 rounded-full hover:bg-secondary/20 transition-colors cursor-pointer">
                    <X className="w-5 h-5 text-secondary" />
                </button>

                {/*  */}
                <h3 className="text-xl text-secondary font-semibold">
                    Sign In or Up
                </h3>

                {/*  */}


                <button disabled={isAuthenticating} onClick={handleAuth} className="w-full bg-primary text-white border-2 border-primary rounded-lg hover:bg-transparent enabled:hover:text-primary py-2 font-semibold enabled:cursor-pointer transition-colors flex flex-row items-center justify-center gap-x-2 group disabled:bg-primary/40">
                    {isAuthenticating ?
                        (
                            <Loader dotSize="3" className="py-1" />
                        ) : (
                            <>
                                {/*  */}
                                <span>
                                    <svg
                                        className="w-5 h-5 "
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 50 50"
                                    >
                                        <path
                                            className="fill-white group-hover:fill-primary"
                                            d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"
                                        />
                                    </svg>
                                </span>

                                {/*  */}
                                <p>
                                    Continue With Google
                                </p>

                                {/*  */}
                                <span>
                                    <ArrowRight className="w-5 h-5 text-white group-hover:text-primary" />
                                </span>
                            </>

                        )
                    }
                </button>
            </div>
        </section >
    )
}

export default SigninPopup;