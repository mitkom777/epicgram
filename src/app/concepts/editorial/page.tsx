import Link from "next/link";

const serif = "font-[family-name:var(--font-playfair)]";

const stories = [
  {
    n: "01",
    kicker: "Епична битка",
    title: "Последните 300 при Термопилите",
    excerpt:
      "Триста спартанци срещу империя. История за чест, стратегия и саможертва, разказана кадър по кадър.",
    meta: "8 мин · 480 г. пр. Хр.",
    img: "/films/thermopylae.jpg",
  },
  {
    n: "02",
    kicker: "Криминална загадка",
    title: "Обирът на века в Антверпен",
    excerpt:
      "Как банда крадци изпразва един от най-сигурните трезори на света и изчезва без следа.",
    meta: "6 мин · 2003 г.",
    img: "/films/antwerp.jpg",
  },
  {
    n: "03",
    kicker: "Бизнес история",
    title: "Как Nokia изпусна бъдещето",
    excerpt:
      "Възходът и падението на компания, която държеше света в джоба си — и после го изпусна.",
    meta: "7 мин · 2007 г.",
    img: "/films/nokia.jpg",
  },
];

const categories = [
  { t: "Епични битки", img: "/categories/battles.jpg" },
  { t: "Криминални загадки", img: "/categories/crime.jpg" },
  { t: "Обири на века", img: "/categories/heists.jpg" },
  { t: "Възходът на компании", img: "/categories/companies.jpg" },
  { t: "Изгубени цивилизации", img: "/categories/civilizations.jpg" },
  { t: "Велики експедиции", img: "/categories/expeditions.jpg" },
];

export default function Editorial() {
  return (
    <main className="min-h-screen bg-[#f4ede1] font-[family-name:var(--font-inter)] text-[#1c1714]">
      {/* concept switcher */}
      <div className="bg-[#6b1d1d] py-2 text-center text-xs text-[#f4ede1]">
        Концепция Б · Редакционна —{" "}
        <Link href="/concepts" className="underline">
          върни се към всички
        </Link>
      </div>

      {/* HEADER */}
      <header className="border-b border-[#1c1714]/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className={`${serif} text-2xl font-extrabold tracking-tight`}>
            Epicgram
          </span>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#stories" className="hover:text-[#6b1d1d]">
              Истории
            </a>
            <a href="#categories" className="hover:text-[#6b1d1d]">
              Категории
            </a>
            <a href="#get" className="hover:text-[#6b1d1d]">
              Приложението
            </a>
          </nav>
          <a
            href="#get"
            className="rounded-none border border-[#1c1714] px-5 py-2 text-sm font-semibold transition-colors hover:bg-[#1c1714] hover:text-[#f4ede1]"
          >
            Свали
          </a>
        </div>
      </header>

      {/* HERO — editorial split */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b1d1d]">
              Историята, оживяла на екран
            </p>
            <h1 className={`${serif} mt-6 text-5xl font-extrabold leading-[1.05] md:text-6xl`}>
              Миналото не е за{" "}
              <span className="italic text-[#6b1d1d]">запомняне.</span> То е за
              гледане.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#1c1714]/70">
              Epicgram превръща най-завладяващите истории от историята в кратки
              филми — епични битки, криминални загадки и възходът на легендарни
              компании.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#get"
                className="bg-[#6b1d1d] px-7 py-3.5 font-semibold text-[#f4ede1] transition-colors hover:bg-[#1c1714]"
              >
                Започни да гледаш
              </a>
              <span className="text-sm text-[#1c1714]/60">
                4.8 ★ · 10 000+ читатели
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero.jpg"
                alt="Падането на Константинопол"
                className="h-full w-full object-cover grayscale-[15%] sepia-[20%]"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#f4ede1] px-5 py-3">
              <p className="text-xs uppercase tracking-widest text-[#6b1d1d]">
                Препоръчано
              </p>
              <p className={`${serif} text-lg font-bold`}>
                Падането на Константинопол
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES — numbered editorial list */}
      <section id="stories" className="border-y border-[#1c1714]/15 bg-[#efe6d8]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-baseline justify-between border-b border-[#1c1714]/20 pb-4">
            <h2 className={`${serif} text-3xl font-bold`}>Препоръчани истории</h2>
            <span className="text-sm uppercase tracking-widest text-[#6b1d1d]">
              Брой №1
            </span>
          </div>

          <div className="divide-y divide-[#1c1714]/15">
            {stories.map((s) => (
              <article
                key={s.n}
                className="grid gap-6 py-8 md:grid-cols-[80px_240px_1fr] md:items-center"
              >
                <span className={`${serif} text-5xl font-bold text-[#6b1d1d]/40`}>
                  {s.n}
                </span>
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover sepia-[15%]"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6b1d1d]">
                    {s.kicker}
                  </p>
                  <h3 className={`${serif} mt-1 text-2xl font-bold`}>
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[#1c1714]/70">{s.excerpt}</p>
                  <p className="mt-2 text-sm text-[#1c1714]/50">{s.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES — refined grid */}
      <section id="categories" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className={`${serif} text-3xl font-bold`}>Разгледай по тема</h2>
        <div className="mt-8 grid grid-cols-2 gap-px bg-[#1c1714]/15 md:grid-cols-3">
          {categories.map((c) => (
            <div key={c.t} className="group relative overflow-hidden bg-[#f4ede1]">
              <div className="aspect-[3/2] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.t}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <h3 className={`${serif} text-lg font-bold`}>{c.t}</h3>
                <span className="text-[#6b1d1d]">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GET / CTA */}
      <section id="get" className="bg-[#1c1714] text-[#f4ede1]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className={`${serif} text-4xl font-extrabold md:text-5xl`}>
            Чети историята. Гледай я как оживява.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#f4ede1]/70">
            Налично за iOS и Android. Безплатно с реклами, Premium без реклами.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#" className="border border-[#f4ede1] px-7 py-3.5 font-semibold transition-colors hover:bg-[#f4ede1] hover:text-[#1c1714]">
              App Store
            </a>
            <a href="#" className="border border-[#f4ede1] px-7 py-3.5 font-semibold transition-colors hover:bg-[#f4ede1] hover:text-[#1c1714]">
              Google Play
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#1c1714] py-8 text-center text-sm text-[#f4ede1]/50">
        © {new Date().getFullYear()} Epicgram · Концепция Б
      </footer>
    </main>
  );
}
