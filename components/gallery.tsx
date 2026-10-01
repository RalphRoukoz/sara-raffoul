"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { Shot } from "@/lib/content";

export function Gallery({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const shot = active === null ? null : shots[active];

  useEffect(() => {
    if (active === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) => (index === null ? index : (index + 1) % shots.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index === null ? index : (index - 1 + shots.length) % shots.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [active, shots.length]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
        {shots.map((item, index) => (
          <li key={item.src} className={item.span === "full" ? "md:col-span-2" : undefined}>
            <button
              type="button"
              className="group block w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActive(index);
              }}
            >
              <span className="block overflow-hidden bg-plaster">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes={item.span === "full" ? "(min-width: 1440px) 1200px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                />
              </span>
              <span className="mt-3 flex items-baseline justify-between gap-6">
                <span className="kicker text-muted">{item.caption}</span>
                <span className="kicker text-accent">Open</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {shot ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[80] flex flex-col bg-ink/92 p-4 text-paper sm:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <p id={titleId} className="kicker">
              {shot.caption}
            </p>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex h-11 cursor-pointer items-center border border-white/30 px-4 kicker focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
              onClick={() => setActive(null)}
            >
              Close
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center py-4">
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              className="max-h-[72vh] w-auto max-w-full object-contain"
              priority
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              className="inline-flex h-11 cursor-pointer items-center px-2 kicker focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper disabled:opacity-40"
              onClick={() => setActive((index) => (index === null ? index : (index - 1 + shots.length) % shots.length))}
              disabled={shots.length < 2}
            >
              Previous
            </button>
            <p className="kicker text-white/70">
              {active! + 1} / {shots.length}
            </p>
            <button
              type="button"
              className="inline-flex h-11 cursor-pointer items-center px-2 kicker focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper disabled:opacity-40"
              onClick={() => setActive((index) => (index === null ? index : (index + 1) % shots.length))}
              disabled={shots.length < 2}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
