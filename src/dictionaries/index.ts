import type { Dictionary } from "./bg";

export const locales = ["en", "es", "de", "fr", "ru", "bg"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { name: string; flag: string }> = {
  en: { name: "English", flag: "🇬🇧" },
  es: { name: "Español", flag: "🇪🇸" },
  de: { name: "Deutsch", flag: "🇩🇪" },
  fr: { name: "Français", flag: "🇫🇷" },
  ru: { name: "Русский", flag: "🇷🇺" },
  bg: { name: "Български", flag: "🇧🇬" },
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
  de: () => import("./de").then((m) => m.default),
  fr: () => import("./fr").then((m) => m.default),
  ru: () => import("./ru").then((m) => m.default),
  bg: () => import("./bg").then((m) => m.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  (dictionaries[locale] ?? dictionaries[defaultLocale])();

export type { Dictionary };
