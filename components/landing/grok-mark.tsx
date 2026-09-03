/**
 * Original MyGrokFlow bot mark — a minimal line-art bot head with accent eyes.
 * Not any third-party logo; drawn to match the site's thin-stroke aesthetic.
 */
export function GrokMark({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* antenna */}
      <circle cx="12" cy="2.4" r="1.1" fill="var(--mgf-accent)" />
      <path
        d="M12 3.5v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* head */}
      <rect
        x="4.5"
        y="5.5"
        width="15"
        height="12"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* eyes */}
      <circle cx="9.4" cy="11.4" r="1.5" fill="var(--mgf-accent)" />
      <circle cx="14.6" cy="11.4" r="1.5" fill="var(--mgf-accent)" />
      {/* base */}
      <path
        d="M9 20.5h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
