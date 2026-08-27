import { CONTACTS } from "@/lib/site";

export function FooterContacts() {
  return (
    <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
      {CONTACTS.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
