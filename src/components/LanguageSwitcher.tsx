"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeMeta, type Locale } from "@/dictionaries";

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const switchTo = (locale: Locale) => {
    setOpen(false);
    if (locale === current) return;
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || `/${locale}`);
  };

  const cur = localeMeta[current];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2.5 pr-2 text-xs font-semibold text-cream/80 transition-colors hover:text-cream"
      >
        <span className="text-base leading-none">{cur.flag}</span>
        <span className="uppercase">{current}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-ink-900/95 p-1 shadow-2xl backdrop-blur-xl">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchTo(locale)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                locale === current
                  ? "bg-gold-500/15 text-gold-300"
                  : "text-cream/80 hover:bg-white/5 hover:text-cream"
              }`}
            >
              <span className="text-base leading-none">{localeMeta[locale].flag}</span>
              <span className="flex-1">{localeMeta[locale].name}</span>
              <span className="text-xs uppercase text-cream/40">{locale}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
