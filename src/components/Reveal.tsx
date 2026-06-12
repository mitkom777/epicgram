/**
 * Entrance-animation wrapper. The animation is pure CSS (see globals.css
 * `.reveal`) using `animation-fill-mode: both`, so the element always ends
 * up visible — no JavaScript or IntersectionObserver required. `delay`
 * staggers items via animation-delay.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
