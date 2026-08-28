import { CONTACTS } from "@/lib/site";

const iconClass = "size-4";

function ContactIcon({ label }: { label: string }) {
  switch (label) {
    case "Email":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "Telegram":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
          <path d="M21.8 4.2 3.7 11.2c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.8 5.5c.2.7.6.8 1.2.5l2.6-2.1 4.9 3.6c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.2-.5-1.7-1.4-1.3ZM9.7 14.1l8.9-5.6c.4-.3.8 0 .5.3l-7.3 6.6-.3 3.1-1.8-4.4Z" />
        </svg>
      );
    case "Signal":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M7 18.5 4.5 21V8.5A4.5 4.5 0 0 1 9 4h6a4.5 4.5 0 0 1 4.5 4.5v5A4.5 4.5 0 0 1 15 18H7.5" />
          <path d="M9 10.5h6M9 13.5h4" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
          <path d="M6.5 9H4v11h2.5V9ZM5.25 4A1.75 1.75 0 1 0 5.26 7.5 1.75 1.75 0 0 0 5.25 4ZM20 13.25c0-2.7-1.45-4-3.4-4a2.9 2.9 0 0 0-2.6 1.45V9.1H11.5V20H14v-5.4c0-1.43.27-2.8 2.03-2.8 1.73 0 1.77 1.62 1.77 2.9V20H20v-6.75Z" />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
          <path d="M17.5 3h3l-6.6 7.55L21.5 21h-5.8l-4.55-5.95L6 21H3l7.05-8.05L2.7 3h5.95l4.1 5.45L17.5 3Zm-1 16.2h1.65L7.6 4.7H5.85l10.65 14.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

export function FooterContacts() {
  return (
    <ul className="flex flex-wrap items-center justify-end gap-2">
      {CONTACTS.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={item.label}
            title={item.text}
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-border text-muted-foreground transition-[color,background-color,border-color] duration-180 hover:border-foreground/20 hover:text-foreground"
          >
            <ContactIcon label={item.label} />
          </a>
        </li>
      ))}
    </ul>
  );
}
