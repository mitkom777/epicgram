import type { Dictionary } from "@/dictionaries";

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.23 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.03 2.29-1.27 3.14-2.53.99-1.45 1.4-2.85 1.42-2.93-.03-.01-2.73-1.05-2.76-4.16zM14.6 4.6c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.08 3.18 1.15.09 2.32-.58 3.03-1.45z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3.6 2.4 13.4 12 3.6 21.6c-.36-.2-.6-.6-.6-1.1V3.5c0-.5.24-.9.6-1.1z" fill="#34D399" />
      <path d="M16.6 8.8 13.4 12l3.2 3.2 3.6-2c.7-.4.7-1.4 0-1.8l-3.6-2.6z" fill="#FBBF24" />
      <path d="M3.6 2.4 13.4 12l3.2-3.2-10-5.8c-.36-.2-.76-.18-1 .4z" fill="#60A5FA" />
      <path d="M3.6 21.6 13.4 12l3.2 3.2-10 5.8c-.36.2-.76.18-1-.4z" fill="#F87171" />
    </svg>
  );
}

export default function StoreBadges({
  dict,
  appStoreUrl = "#",
  googlePlayUrl = "#",
  className = "",
}: {
  dict: Dictionary["stores"];
  appStoreUrl?: string;
  googlePlayUrl?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-3 sm:flex-row ${className}`}>
      <a
        href={appStoreUrl}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-cream backdrop-blur transition-all hover:scale-105 hover:bg-white/10 sm:w-auto"
      >
        <AppleIcon />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide text-cream/60">
            {dict.appStore.line1}
          </span>
          <span className="block text-base font-semibold">
            {dict.appStore.line2}
          </span>
        </span>
      </a>

      <a
        href={googlePlayUrl}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-cream backdrop-blur transition-all hover:scale-105 hover:bg-white/10 sm:w-auto"
      >
        <PlayIcon />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide text-cream/60">
            {dict.googlePlay.line1}
          </span>
          <span className="block text-base font-semibold">
            {dict.googlePlay.line2}
          </span>
        </span>
      </a>
    </div>
  );
}
