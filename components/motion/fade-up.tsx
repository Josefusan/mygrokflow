"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Tag = "div" | "section" | "span" | "h1" | "h2" | "h3" | "p" | "nav";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: Tag;
  once?: boolean;
};

/**
 * FadeUp — reveal-on-scroll primitive (premium-motion-landing skill).
 * Exact values: opacity 0→1, y→0, viewport once amount 0.2, ease [0.22,1,0.36,1].
 * Respects prefers-reduced-motion: content appears with no transform.
 */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  y = 24,
  className,
  style,
  as = "div",
  once = true,
}: FadeUpProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as React.ComponentType<HTMLMotionProps<typeof as>>;

  if (reduce) {
    return (
      <Comp className={className} style={style}>
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

/**
 * BlurIn — opacity 0→1, blur 10px→0, y 20→0. Alternate entrance (dark hero variant).
 */
export function BlurIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * SplitText — splits a string by words and staggers each word up into place.
 * Use for headings that should assemble word by word.
 */
export function SplitText({
  text,
  className,
  style,
  wordClassName,
  baseDelay = 0,
  stagger = 0.08,
  duration = 0.6,
  y = 40,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  wordClassName?: string;
  baseDelay?: number;
  stagger?: number;
  duration?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span
      className={className}
      style={{ display: "flex", flexWrap: "wrap", gap: "0.25em", ...style }}
    >
      {words.map((word, i) =>
        reduce ? (
          <span key={`${word}-${i}`} className={wordClassName}>
            {word}
          </span>
        ) : (
          <motion.span
            key={`${word}-${i}`}
            className={wordClassName}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration, delay: baseDelay + i * stagger, ease: EASE }}
          >
            {word}
          </motion.span>
        )
      )}
    </span>
  );
}
