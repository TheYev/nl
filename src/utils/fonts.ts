import { Outfit, Mulish, Syne, Poppins } from "next/font/google";

export const OutfitFont = Outfit({
    subsets: ['latin'],
    variable: "--font-outfit"
})

export const MulishFont = Mulish({
    subsets: ['latin'],
    variable: "--font-mulish"
})

export const SyneFont = Syne({
    subsets: ['latin'],
    variable: "--font-syne"
}) 

export const PoppinsFont = Poppins({
    subsets: ['latin'],
    variable: "--font-poppins",
    weight: ['400']
})