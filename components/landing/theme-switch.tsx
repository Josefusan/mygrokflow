"use client";

import { useContent } from "@/components/i18n-provider";
import { MoonIcon, SunIcon } from "@/components/theme-toggle";
import { applyTheme, useTheme } from "@/lib/theme";
import { focusRing } from "./cta-buttons";

/** Round light/dark toggle for the landing nav, styled like the language select. */
export function ThemeSwitch({ className = "" }: { className?: string }) {
  const theme = useTheme();
  const { THEME_TO_LIGHT, THEME_TO_DARK } = useContent();
  const label = theme === "dark" ? THEME_TO_LIGHT : THEME_TO_DARK;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
      className={`inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--mgf-border) text-(--mgf-text) hover:border-(--mgf-text) ${focusRing} ${className}`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
