import { CONTACTS } from "@/lib/site";

type Label = (typeof CONTACTS)[number]["label"];

function ContactIcon({ label }: { label: Label }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (label) {
    case "Email":
      return (
        <svg
          {...common}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "Telegram":
      return (
        <svg {...common} fill="currentColor">
          <path d="M21.4 4.2 2.9 11.5c-1.2.5-1.2 1.6-.2 2l4.8 1.5 1.9 5.6c.2.7.7.8 1.2.4l2.6-2.1 4.4 3.2c.8.5 1.4.2 1.6-.8L22.8 5.4c.3-1.2-.4-1.7-1.4-1.2Z" />
        </svg>
      );
    case "Signal":
      return (
        <svg
          {...common}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5.5 7A3.5 3.5 0 0 1 9 3.5h6A3.5 3.5 0 0 1 18.5 7v5A3.5 3.5 0 0 1 15 15.5h-3.2L7 19v-3.5H9A3.5 3.5 0 0 1 5.5 12V7Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common} fill="currentColor">
          <path d="M6.5 9.5H4V20h2.5V9.5ZM5.25 4A1.5 1.5 0 1 0 5.26 7 1.5 1.5 0 0 0 5.25 4ZM20 20h-2.5v-5.4c0-1.3 0-3-1.85-3s-2.15 1.4-2.15 2.9V20H11V9.5h2.4v1.4h.03c.33-.63 1.15-1.3 2.37-1.3 2.54 0 3.2 1.67 3.2 3.84V20Z" />
        </svg>
      );
    case "X":
      return (
        <svg {...common} fill="currentColor">
          <path d="M17.3 3h3.1l-6.8 7.8L21.8 21h-5.6l-4.4-5.8L6.4 21H3.3l7.3-8.3L2.4 3h5.7l4 5.3L17.3 3Zm-1 16.2h1.7L7.8 4.7H6L16.3 19.2Z" />
        </svg>
      );
    case "Substack":
      return (
        <svg {...common} fill="currentColor">
          <path d="M22.54 8.24H1.46V5.41h21.08v2.83ZM1.46 10.81V24L12 18.11 22.54 24V10.81H1.46ZM22.54 0H1.46v2.84h21.08V0Z" />
        </svg>
      );
  }
}

export function FooterContacts() {
  return (
    <ul className="flex flex-wrap items-center justify-end gap-1">
      {CONTACTS.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            aria-label={item.label}
            title={item.text}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
          >
            <ContactIcon label={item.label} />
          </a>
        </li>
      ))}
    </ul>
  );
}
