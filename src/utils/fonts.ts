/**
 * Налаштування шрифтів для проекту
 * Використовує Next.js font optimization
 */

import {
  Outfit,
  Mulish,
  Syne,
  Poppins,
  Roboto,
  Montserrat,
} from "next/font/google";

/**
 * Outfit шрифт - основний для UI елементів
 */
export const OutfitFont = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

/**
 * Mulish шрифт - для основних текстів
 */
export const MulishFont = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

/**
 * Syne шрифт - для заголовків
 */
export const SyneFont = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400"],
});

/**
 * Poppins шрифт - для UI елементів
 */
export const PoppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400"],
});

/**
 * Roboto шрифт - для додаткових текстів
 */
export const RobotoFont = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400"],
});

/**
 * Montserrat шрифт - для акцентних елементів
 */
export const MontserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
});
