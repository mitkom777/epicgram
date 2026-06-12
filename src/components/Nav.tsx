"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Dictionary, Locale } from "@/dictionaries";

export default function Nav({
  dict,
  lang,
}: {
  dict: Dictionary["nav"];
  lang: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#how", label: dict.how },
    { href: "#categories", label: dict.categories },
    { href: "#films", label: dict.films },
    { href: "#pricing", label: dict.pricing },
    { href: "#testimonials", label: dict.testimonials },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Epicgram">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-cream/70 transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher current={lang} />
          <a
            href="#cta"
            className="rounded-full bg-gradient-to-r from-gold-300 to-gold-600 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_0_24px_rgba(245,185,69,0.3)] transition-transform hover:scale-105"
          >
            {dict.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher current={lang} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-cream"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-cream" />
              <span className="block h-0.5 w-6 bg-cream" />
              <span className="block h-0.5 w-4 bg-cream" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-ink-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-cream/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-gold-300 to-gold-600 px-5 py-2.5 text-center text-sm font-semibold text-ink-950"
            >
              {dict.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
