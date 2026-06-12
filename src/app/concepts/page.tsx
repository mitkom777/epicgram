import Link from "next/link";

export default function ConceptsIndex() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] px-6 py-20 font-[family-name:var(--font-inter)] text-[#f3efe6]">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
          Epicgram
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl font-extrabold">
          Дизайн концепции
        </h1>
        <p className="mt-3 text-white/60">
          Три различни посоки за един и същ продукт. Сравни и избери.
        </p>

        <div className="mt-12 space-y-4">
          <a
            href="/bg"
            className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-amber-400/40"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Концепция А · текущата
            </span>
            <h2 className="mt-2 text-2xl font-bold">Кинематично злато</h2>
            <p className="mt-1 text-white/55">
              Тъмен charcoal фон, златни акценти, центрирана драматична подредба.
            </p>
          </a>

          <Link
            href="/concepts/editorial"
            className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-amber-400/40"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-rose-300">
              Концепция Б
            </span>
            <h2 className="mt-2 text-2xl font-bold">Редакционна / Музейна</h2>
            <p className="mt-1 text-white/55">
              Светъл пергаментов фон, едра serif типография, бордо акцент. Като
              луксозно историческо списание.
            </p>
          </Link>

          <Link
            href="/concepts/retro"
            className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-amber-400/40"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-300">
              Концепция В
            </span>
            <h2 className="mt-2 text-2xl font-bold">Ретро кино постер</h2>
            <p className="mt-1 text-white/55">
              Ярки цветове (крем/червено/тийл), удебелен ретро шрифт, колажна
              енергична подредба.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
