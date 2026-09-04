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
