"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DIAGRAMS } from "./diagrams";

export type WorkItem = {
  title: string;
  body: string;
  media: string;
  shows?: string;
};

function CardMedia({ media }: { media: string }) {
  const Diagram = DIAGRAMS[media];
  return Diagram ? <Diagram /> : null;
}

function Card({ item }: { item: WorkItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-(--mgf-border) bg-(--mgf-card) pt-4">
      <CardMedia media={item.media} />
      <div className="flex flex-1 flex-col px-7 pt-6 pb-7">
        <h3 className="mb-3.5 text-[18px] font-semibold text-(--mgf-text)">
          {item.title}
        </h3>
        <p className="text-[13px] leading-[1.6] text-(--mgf-muted)">{item.body}</p>
        {item.shows ? (
          <p className="mt-auto flex gap-2 pt-4 text-[12px] leading-[1.55]">
            <span aria-hidden="true" className="text-(--mgf-accent)">
              ➣
            </span>
            <span className="text-(--mgf-muted)">
              <span className="font-medium text-(--mgf-text)">Shows:</span>{" "}
              {item.shows}
            </span>
          </p>
        ) : null}
      </div>
    </article>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

/**
 * Horizontal scroll-snap slider for the Work examples. One "page" is the track
 * width (three cards on desktop, one on mobile); the arrows scroll by that
 * width and CSS scroll-snap settles on a card. Reduced-motion users get an
 * instant jump (globals.css neutralizes scroll-behavior).
 */
const AUTOPLAY_MS = 3800;
const GAP = 20; // matches gap-5 on the track

export function WorkCarousel({ items }: { items: readonly WorkItem[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [paused, setPaused] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  // Auto-advance to the left. Pauses on hover/focus/touch and when the tab is
  // hidden; disabled entirely for reduced-motion users.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el || document.hidden) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const card = el.querySelector("li");
        const step = card ? card.getBoundingClientRect().width + GAP : el.clientWidth;
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const ctrl =
    "inline-flex size-9 items-center justify-center rounded-full border border-(--mgf-border) text-(--mgf-text) transition-opacity hover:opacity-70 disabled:pointer-events-none disabled:opacity-25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--mgf-accent)";

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onPointerDown={() => setPaused(true)}
      onPointerUp={() => setPaused(false)}
      onPointerCancel={() => setPaused(false)}
    >
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => page(-1)}
          disabled={atStart}
          aria-label="Previous examples"
          className={ctrl}
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          onClick={() => page(1)}
          disabled={atEnd}
          aria-label="Next examples"
          className={ctrl}
        >
          <Chevron dir="right" />
        </button>
      </div>

      <ul
        ref={trackRef}
        className="mgf-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <li
            key={item.title}
            className="w-[calc((100%-40px)/3)] shrink-0 snap-start max-[900px]:w-[82%] max-[600px]:w-full"
          >
            <Card item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
