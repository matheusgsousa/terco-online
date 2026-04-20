import { Almendra, Lora, Cormorant_Garamond } from "next/font/google";

export const type_second = Almendra({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--type-second-almendra",
  display: "swap",
});

export const type_primary = Lora({
  variable: "--type-primary-lora",
  subsets: ["latin"],
});

export const type_mono = Cormorant_Garamond({
  variable: "--type-mono-cormorant-garamond",
  subsets: ["latin"],
});
