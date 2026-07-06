// Keyboard/screen-reader skip link. Hidden until focused, then jumps to #main.
export default function SkipToContent() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-terra focus:px-4 focus:py-2 focus:font-mono focus:text-[12px] focus:uppercase focus:tracking-[0.12em] focus:text-terra-ink"
    >
      Skip to content
    </a>
  );
}
