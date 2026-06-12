import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import StoreBadges from "@/components/StoreBadges";
import { getDictionary, type Locale } from "@/dictionaries";

// Per-category visual style. `image` is the path for the future picture
// (drop files into /public/categories/). While empty, a styled placeholder
// is shown using the gradient below.
const categoryStyles = [
  { image: "/categories/battles.jpg", gradient: "from-red-900/60 to-ink-800", glow: "from-red-500/20" },
  { image: "/categories/crime.jpg", gradient: "from-violet-900/60 to-ink-800", glow: "from-violet-500/20" },
  { image: "/categories/heists.jpg", gradient: "from-amber-900/60 to-ink-800", glow: "from-amber-500/20" },
  { image: "/categories/companies.jpg", gradient: "from-emerald-900/60 to-ink-800", glow: "from-emerald-500/20" },
  { image: "/categories/failures.jpg", gradient: "from-orange-900/60 to-ink-800", glow: "from-orange-500/20" },
  { image: "/categories/civilizations.jpg", gradient: "from-yellow-900/60 to-ink-800", glow: "from-yellow-500/20" },
  { image: "/categories/figures.jpg", gradient: "from-gold-600/40 to-ink-800", glow: "from-gold-500/20" },
  { image: "/categories/spies.jpg", gradient: "from-sky-900/60 to-ink-800", glow: "from-sky-500/20" },
  { image: "/categories/expeditions.jpg", gradient: "from-teal-900/60 to-ink-800", glow: "from-teal-500/20" },
  { image: "/categories/disasters.jpg", gradient: "from-rose-900/60 to-ink-800", glow: "from-rose-500/20" },
];

const filmImages = [
  "/films/thermopylae.jpg",
  "/films/antwerp.jpg",
  "/films/nokia.jpg",
];

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };
  const t = await getDictionary(lang);

  return (
    <main id="top">
      <Nav dict={t.nav} lang={lang} />

      {/* HERO */}
      <section className="relative overflow-hidden pb-24 pt-28 md:pt-48">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(245,185,69,0.08),transparent_60%)]" />
        </div>

        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
              {t.hero.badge}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-cream sm:text-5xl md:mt-8 md:text-7xl">
              {t.hero.titleLine1}
              <br />
              <span className="text-gradient-gold">{t.hero.titleLine2}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-7 max-w-2xl text-lg text-cream/70 md:text-xl">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <StoreBadges dict={t.stores} className="mt-10 justify-center" />
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-6 flex flex-col items-center gap-1.5">
              <p className="text-sm font-medium text-gold-300">
                {t.hero.rating}
              </p>
              <p className="text-sm text-cream/40">{t.hero.note}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={500} className="mx-auto mt-20 max-w-5xl px-6">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero.jpg"
              alt={t.hero.featuredTitle}
              className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.6))]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/90 shadow-[0_0_40px_rgba(245,185,69,0.6)] transition-transform hover:scale-110">
                <svg width="26" height="26" viewBox="0 0 16 16" fill="none">
                  <path d="M3 2.5L13 8L3 13.5V2.5Z" fill="#0a0a0b" />
                </svg>
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-gradient-to-t from-ink-950 to-transparent p-6">
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-widest text-gold-300">
                  {t.hero.featuredTag}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-cream">
                  {t.hero.featuredTitle}
                </p>
              </div>
              <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-cream/80 backdrop-blur">
                {t.hero.featuredDuration}
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
              {t.categories.titlePre}
              <span className="text-gradient-gold">
                {t.categories.titleAccent}
              </span>
            </h2>
            <p className="mt-4 text-lg text-cream/60">
              {t.categories.subtitle}
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {t.categories.items.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 transition-all hover:-translate-y-1 hover:border-gold-500/30">
                  {/* Image slot — replace placeholder with a real picture
                      by setting `image` in categoryStyles */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    {categoryStyles[i].image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={categoryStyles[i].image}
                        alt={c.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${categoryStyles[i].gradient}`}
                      >
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-cream/15"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <circle cx="8.5" cy="8.5" r="1.8" fill="currentColor" />
                          <path
                            d="M21 15l-5-5L5 21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-800/80 to-transparent" />
                  </div>

                  <div className="relative p-4 sm:p-6">
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${categoryStyles[i].glow} to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100`}
                    />
                    <h3 className="font-display text-base font-bold text-cream sm:text-xl">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-cream/60 sm:mt-2 sm:text-sm">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-12 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-gold-500/30 bg-gold-500/5 px-5 py-2.5 text-sm font-medium text-gold-300">
              <span className="flex gap-0.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400 [animation-delay:300ms]" />
              </span>
              {t.categories.comingSoon}
            </span>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(245,185,69,0.05),transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              {t.how.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-cream md:text-5xl">
              {t.how.title}
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {t.how.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="relative">
                  <span className="font-display text-6xl font-extrabold text-white/5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="-mt-6 font-display text-2xl font-bold text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-cream/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED FILMS */}
      <section id="films" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
                {t.films.title}
              </h2>
              <p className="mt-4 text-lg text-cream/60">{t.films.subtitle}</p>
            </div>
            <a
              href="#cta"
              className="text-sm font-semibold text-gold-400 hover:text-gold-300"
            >
              {t.films.viewAll}
            </a>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.films.items.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={filmImages[i]}
                    alt={f.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/90 shadow-[0_0_30px_rgba(245,185,69,0.6)]">
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                        <path d="M3 2.5L13 8L3 13.5V2.5Z" fill="#0a0a0b" />
                      </svg>
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-medium text-gold-300">
                      {f.tag}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold leading-tight text-cream">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-cream/50">{f.meta}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
              {t.testimonials.titlePre}
              <span className="text-gradient-gold">
                {t.testimonials.titleAccent}
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {t.testimonials.items.map((tm, i) => (
              <Reveal key={tm.name} delay={i * 100}>
                <figure className="h-full rounded-2xl border border-white/10 bg-ink-800/60 p-7">
                  <div className="flex gap-1 text-gold-400">
                    {"★★★★★".split("").map((s, idx) => (
                      <span key={idx}>{s}</span>
                    ))}
                  </div>
                  <blockquote className="mt-5 text-cream/80">
                    “{tm.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 font-display font-bold text-ink-950">
                      {tm.name[0]}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-cream">
                        {tm.name}
                      </p>
                      <p className="text-xs text-cream/50">{tm.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              {t.pricing.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-cream md:text-5xl">
              {t.pricing.title}
            </h2>
            <p className="mt-4 text-lg text-cream/60">{t.pricing.subtitle}</p>
          </Reveal>

          <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
            {t.pricing.plans.map((plan, i) => {
              const highlight = plan.badge !== "";
              return (
                <Reveal key={plan.name} delay={i * 120}>
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-8 ${
                      highlight
                        ? "border border-gold-500/40 bg-gradient-to-br from-ink-800 to-ink-900 shadow-[0_0_40px_rgba(245,185,69,0.12)]"
                        : "border border-white/10 bg-ink-800/60"
                    }`}
                  >
                    {highlight && (
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,185,69,0.12),transparent_60%)]" />
                    )}
                    <div className="relative flex items-center justify-between gap-2">
                      <h3 className="font-display text-2xl font-bold text-cream">
                        {plan.name}
                      </h3>
                      {plan.badge && (
                        <span className="shrink-0 rounded-full bg-gradient-to-r from-gold-300 to-gold-600 px-3 py-1 text-xs font-semibold text-ink-950">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className="relative mt-2 text-sm text-cream/60">
                      {plan.tagline}
                    </p>
                    <div className="relative mt-6 flex items-end gap-1">
                      <span className="font-display text-4xl font-extrabold text-cream">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="mb-1.5 text-sm text-cream/50">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <ul className="relative mt-7 flex-1 space-y-3">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className={`flex items-start gap-3 ${
                            highlight ? "text-cream/85" : "text-cream/75"
                          }`}
                        >
                          <Check muted={!highlight} />
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className={`relative mt-8 rounded-full py-3.5 text-center font-semibold transition-all ${
                        highlight
                          ? "bg-gradient-to-r from-gold-300 to-gold-600 text-ink-950 shadow-[0_0_24px_rgba(245,185,69,0.3)] hover:scale-105"
                          : "border border-white/15 bg-white/5 text-cream hover:bg-white/10"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <p className="mt-8 text-center text-sm text-cream/40">
              {t.pricing.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-br from-ink-800 to-ink-900 px-8 py-16 text-center md:px-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,185,69,0.15),transparent_60%)]" />
              <h2 className="relative font-display text-4xl font-extrabold text-cream md:text-5xl">
                {t.cta.titlePre}
                <span className="text-gradient-gold">{t.cta.titleAccent}</span>
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-lg text-cream/60">
                {t.cta.subtitle}
              </p>
              <StoreBadges
                dict={t.stores}
                className="relative mt-9 justify-center"
              />
              <p className="relative mt-5 text-sm text-cream/40">{t.cta.note}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <Logo />
          <div className="flex gap-8 text-sm text-cream/50">
            <a href="#how" className="hover:text-cream">
              {t.footer.how}
            </a>
            <a href="#films" className="hover:text-cream">
              {t.footer.films}
            </a>
            <a href="#cta" className="hover:text-cream">
              {t.footer.contact}
            </a>
          </div>
          <p className="text-sm text-cream/40">
            © {new Date().getFullYear()} Epicgram
          </p>
        </div>
      </footer>
    </main>
  );
}

function Check({ muted = false }: { muted?: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        muted ? "bg-white/10 text-cream/70" : "bg-gold-500/20 text-gold-300"
      }`}
    >
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.2 4.8 8.5 9.5 3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
