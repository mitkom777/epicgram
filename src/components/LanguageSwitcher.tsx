"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/dictionaries";

const labels: Record<Locale, string> = {
  bg: "BG",
  en: "EN",
};

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (locale: Locale) => {
    if (locale === current) return;
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || `/${locale}`);
  };

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs font-semibold">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchTo(locale)}
          aria-label={`Switch to ${labels[locale]}`}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === current
              ? "bg-gold-500 text-ink-950"
              : "text-cream/60 hover:text-cream"
          }`}
        >
          {labels[locale]}
        </button>
      ))}
    </div>
  );
}
