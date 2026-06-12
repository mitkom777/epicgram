export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/logo-laurel.png"
        alt="Epicgram"
        className="h-9 w-9 rounded-xl object-cover shadow-[0_0_20px_rgba(245,185,69,0.25)]"
      />
      <span className="font-display text-xl font-extrabold tracking-tight text-cream">
        Epic<span className="text-gradient-gold">gram</span>
      </span>
    </div>
  );
}
