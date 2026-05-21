export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden>
        <defs>
          <linearGradient id="atlasG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.98 0 0)" />
            <stop offset="50%" stopColor="oklch(0.72 0 0)" />
            <stop offset="100%" stopColor="oklch(0.95 0 0)" />
          </linearGradient>
        </defs>
        <path d="M16 3 L29 28 H21.5 L18.5 22 H13.5 L10.5 28 H3 Z M14.8 17 H17.2 L16 14 Z"
          stroke="url(#atlasG)" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
        <path d="M11 19 L21 19" stroke="url(#atlasG)" strokeWidth="1" opacity="0.6" />
      </svg>
      <div className="flex items-baseline gap-1.5">
        <span className="text-[15px] font-semibold tracking-[0.32em] text-silver">ATLAS</span>
        <span className="text-[10px] tracking-[0.4em] text-muted-foreground">STUDIO</span>
      </div>
    </div>
  );
}
