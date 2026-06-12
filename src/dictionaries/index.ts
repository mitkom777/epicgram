import type { Dictionary } from "./bg";

export const locales = ["bg", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "bg";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  bg: () => import("./bg").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();

export type { Dictionary };
