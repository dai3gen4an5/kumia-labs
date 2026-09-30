import { Fraunces, Manrope } from "next/font/google";

// Kumia Research type system (scoped to /research pages; Kumia Labs keeps Geist).
export const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["SOFT", "opsz"], display: "swap" });
export const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
