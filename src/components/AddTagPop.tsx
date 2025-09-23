"use client";

// Imports
import { X } from "lucide-react"
import { useEffect, useState } from "react";
import { rankingPhrases } from "@/lib/constants/rankingPhrases";
import toast from "react-hot-toast";
// Types
import { ApiResponse, TagFormData, TagFormError } from "@/types";
import { Tags } from "@/generated/prisma";
// Provider
import { useGlobalProvider } from "@/providers/GlobalProvider"
import { useLocationProvider } from "@/providers/LocationProvider";
// Components
import Loader from "./Loader";

// 
function AddTagPopup() {
    // Providers
    // Location
    const { urlParams, setParams } = useLocationProvider();
    // Global
    const { pathname, setIsAddTagPop } = useGlobalProvider();
    // States
    // Disable button
    const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
    // Form Data
    const [formData, setFormData] = useState<TagFormData>({
        phrase: "",
        keyword: "",
    });
    // Form Error
    const [formError, setFormError] = useState<TagFormError>({
        phrase: null,
        keyword: null,
    })
    // Loader for submission
    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
    // Handle Change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormError({ ...formError, [name]: null });
        setFormData({ ...formData, [name]: value });
        setDisableSubmit(false);
    }
    // Handle Submit 
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmiting(true);
        try {
            const res = await fetch(`/api/add/tag`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            const data = (await res.json()) as ApiResponse<Tags | never>;

            if (!data.success) {
                throw new Error(data.message);
            }

            toast.success(data.message);
            setFormData({
                phrase: "",
                keyword: "",
            })
            if (pathname === "/") {
                setParams(['tag', 'page'], [data.data.name, '1'])
            } else if (pathname === '/top-country-places') {
                if (urlParams.country) {
                    setParams(['tag', 'page', 'country'], [data.data.name, '1', urlParams.country])
                }
            } else if (pathname === "/top-city-places") {
                if (urlParams.country && urlParams.city && urlParams.lat && urlParams.lng) {
                    setParams(['tag', 'page', 'country', 'city'], [data.data.name, '1', urlParams.country, urlParams.city, urlParams.lat, urlParams.lng])
                }
            }
            setIsAddTagPop(false);
        } catch (err) {
            // Message
            const msg =
                err instanceof Error ? err.message : "Unexpected error.";
            // 
            toast.error(msg);
            // 
            console.error("Error in fetchCountries in CountrySelector.", "Message : ", msg, "Error : ", err);
        } finally {
            setIsSubmiting(false);
        }
    };

    // Effect
    useEffect(() => {
        // 
        if (!rankingPhrases.includes(formData.phrase)) {
            setFormError({ ...formError, phrase: "Invalid Phrase" })
            setDisableSubmit(true);
        }

        // 
        if (formData.keyword === "" || formData.keyword.length < 3 || formData.keyword.length > 20) {
            setFormError({ ...formError, keyword: "Invalid Keyword" })
            setDisableSubmit(true);
        }
    }, [formData])

    return (
        <section className="fixed min-w-screen min-h-screen bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center px-2">
            <div className="w-1/3 min-w-xxs bg-background rounded-lg shadow-sm px-2 py-4 border border-secondary/20 relative text-center space-y-5">

                {/*  */}
                <button onClick={() => setIsAddTagPop(false)} type="button" className="p-2 bg-white shadow-sm absolute top-2 right-2 rounded-full cursor-pointer hover:bg-secondary/20 transition-colors">
                    <X className="w-5 h-5 text-secondary" />
                </button>

                {/*  */}
                <h3 className="text-2xl text-secondary font-semibold">
                    Create Tag
                </h3>

                {/*  */}
                <form className="space-y-2" onSubmit={handleSubmit}>
                    <div className="w-full flex flex-row gap-x-2 items-center">
                        {/*  */}
                        <select required value={formData.phrase} onChange={handleChange} name="phrase" className="w-1/2 border-2 border-primary bg-background rounded-lg px-2 py-2 outline-none focus:border-secondary cursor-pointer text-secondary font-semibold ">
                            {/*  */}
                            <option className="text-gray-400" hidden>Phrase</option>

                            {/*  */}
                            {rankingPhrases.map((phrase, idx) => (
                                <option value={phrase} key={idx}>
                                    {phrase}
                                </option>
                            ))}
                        </select>

                        {/*  */}
                        <p className="font-semibold text-secondary">+</p>

                        {/*  */}
                        <input value={formData.keyword} required onChange={handleChange} type="text" name="keyword" className="w-1/2 border-2 border-primary text-secondary rounded-lg px-2 py-2 placeholder:text-gray-400 outline-none focus:border-secondary font-semibold" placeholder="Keyword" />
                    </div>

                    <p className="text-sm text-secondary">
                        <span className={`${formError.phrase || formData.phrase === "" ? 'text-red-500' : 'text-secondary'}`}>
                            {formError.phrase || formData.phrase || "required"}
                        </span>

                        <span> + </span>

                        <span className={`${formError.keyword ? 'text-red-500' : 'text-secondary'}`}>
                            {formError.keyword || (formError.keyword || formData.keyword === "" ? "required" : formData.keyword)}
                        </span>
                    </p>

                    {/*  */}
                    <button disabled={disableSubmit || isSubmiting} type="submit" className="bg-primary border-2 border-primary text-center rounded-lg w-full py-2 text-white font-semibold enabled:hover:bg-transparent transition-colors enabled:cursor-pointer enabled:hover:text-primary disabled:bg-primary/10">
                        {isSubmiting ? <Loader className="py-1" dotSize="3" /> : 'Add Tag'}
                    </button>
                </form>

            </div>
        </section>
    )
}

export default AddTagPopup;