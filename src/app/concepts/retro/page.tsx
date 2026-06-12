import Link from "next/link";

const anton = "font-[family-name:var(--font-anton)] font-bold";

const posters = [
  { t: "Епични битки", img: "/categories/battles.jpg", color: "#e23b2e" },
  { t: "Криминални загадки", img: "/categories/crime.jpg", color: "#138a72" },
  { t: "Обири на века", img: "/categories/heists.jpg", color: "#f2a30f" },
  { t: "Възходът на компании", img: "/categories/companies.jpg", color: "#138a72" },
  { t: "Изгубени цивилизации", img: "/categories/civilizations.jpg", color: "#e23b2e" },
  { t: "Легендарни личности", img: "/categories/figures.jpg", color: "#f2a30f" },
];

export default function Retro() {
  return (
    <main className="min-h-screen bg-[#f5ecd7] font-[family-name:var(--font-inter)] text-[#211a17]">
      {/* concept switcher */}
      <div className="bg-[#211a17] py-2 text-center text-xs text-[#f5ecd7]">
        Концепция В · Ретро —{" "}
        <Link href="/concepts" className="underline">
          върни се към всички
        </Link>
      </div>

      {/* HEADER */}
      <header className="border-b-4 border-[#211a17]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className={`${anton} text-3xl uppercase tracking-tight text-[#e23b2e]`}>
            Epicgram
          </span>
          <nav className="hidden gap-6 text-sm font-bold uppercase md:flex">
            <a href="#now" className="hover:text-[#e23b2e]">
              На екран
            </a>
            <a href="#cats" className="hover:text-[#e23b2e]">
              Жанрове
            </a>
            <a href="#tickets" className="hover:text-[#e23b2e]">
              Билети
            </a>
          </nav>
          <a
            href="#tickets"
            className="bg-[#e23b2e] px-5 py-2 text-sm font-bold uppercase text-[#f5ecd7] shadow-[3px_3px_0_#211a17] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#211a17]"
          >
            Свали
          </a>
        </div>
      </header>

      {/* HERO — marquee */}
      <section className="relative overflow-hidden border-b-4 border-[#211a17]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-block -rotate-2 bg-[#138a72] px-3 py-1 text-sm font-bold uppercase text-[#f5ecd7] shadow-[3px_3px_0_#211a17]">
              Сега на екран
            </span>
            <h1 className={`${anton} mt-5 text-6xl uppercase leading-[0.9] md:text-8xl`}>
              Историята
              <br />
              <span className="text-[#e23b2e]">оживява</span>
            </h1>
            <p className="mt-6 max-w-md text-lg font-medium text-[#211a17]/75">
              Епични битки. Криминални загадки. Възходът на империи. Всичко в
              кратки филми — в джоба ти.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#tickets" className="bg-[#211a17] px-7 py-3.5 font-bold uppercase text-[#f5ecd7] shadow-[4px_4px_0_#e23b2e] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_#e23b2e]">
                Гледай безплатно
              </a>
              <a href="#cats" className="border-2 border-[#211a17] px-7 py-3.5 font-bold uppercase">
                Виж жанровете
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rotate-2 border-4 border-[#211a17] shadow-[8px_8px_0_#f2a30f]">
              <div className="aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero.jpg"
                  alt="Падането на Константинопол"
                  className="h-full w-full object-cover saturate-[1.2] contrast-[1.05]"
                />
              </div>
            </div>
            <span className="absolute -left-4 top-6 -rotate-6 bg-[#f2a30f] px-3 py-1 text-sm font-bold uppercase shadow-[2px_2px_0_#211a17]">
              9 мин
            </span>
          </div>
        </div>
      </section>

      {/* CATEGORIES — poster grid */}
      <section id="cats" className="border-b-4 border-[#211a17] bg-[#211a17] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className={`${anton} text-4xl uppercase text-[#f5ecd7] md:text-5xl`}>
            Избери си <span className="text-[#f2a30f]">жанр</span>
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
            {posters.map((p, i) => (
              <div
                key={p.t}
                className={`group border-4 border-[#f5ecd7] ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}
                style={{ boxShadow: `6px 6px 0 ${p.color}` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.t}
                    className="h-full w-full object-cover saturate-[1.15] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3" style={{ backgroundColor: p.color }}>
                    <h3 className={`${anton} text-lg uppercase leading-tight text-[#f5ecd7]`}>
                      {p.t}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKETS / PRICING — stubs */}
      <section id="tickets" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className={`${anton} text-center text-4xl uppercase md:text-5xl`}>
            Вземи си <span className="text-[#e23b2e]">билет</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: "Безплатно", price: "$0", note: "с реклами", color: "#138a72", cta: "Свали" },
              { name: "Месечно", price: "$9.99", note: "без реклами", color: "#e23b2e", cta: "Започни", best: true },
              { name: "Годишно", price: "$59.99", note: "спести 50%", color: "#f2a30f", cta: "Вземи" },
            ].map((pl) => (
              <div
                key={pl.name}
                className="relative border-4 border-[#211a17] bg-[#f5ecd7] p-7"
                style={{ boxShadow: `8px 8px 0 ${pl.color}` }}
              >
                {pl.best && (
                  <span className="absolute -top-4 left-7 bg-[#e23b2e] px-3 py-1 text-xs font-bold uppercase text-[#f5ecd7] shadow-[2px_2px_0_#211a17]">
                    Най-популярно
                  </span>
                )}
                <p className={`${anton} text-2xl uppercase`}>{pl.name}</p>
                <p className={`${anton} mt-3 text-5xl`} style={{ color: pl.color }}>
                  {pl.price}
                </p>
                <p className="mt-1 text-sm font-bold uppercase text-[#211a17]/60">
                  {pl.note}
                </p>
                <a
                  href="#"
                  className="mt-6 block bg-[#211a17] py-3 text-center font-bold uppercase text-[#f5ecd7]"
                >
                  {pl.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="now" className="border-t-4 border-[#211a17] bg-[#e23b2e] py-10 text-center">
        <p className={`${anton} text-3xl uppercase text-[#f5ecd7]`}>
          Epicgram
        </p>
        <p className="mt-1 text-sm font-bold uppercase text-[#f5ecd7]/80">
          Концепция В · история на ярко
        </p>
      </footer>
    </main>
  );
}
