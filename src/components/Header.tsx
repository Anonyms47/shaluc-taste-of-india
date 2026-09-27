"use client";

import { useEffect, useState } from "react";
import { restaurant, telUrl } from "@/lib/restaurant";

const NAV = [
  { href: "#accueil", label: "Accueil" },
  { href: "#histoire", label: "Notre histoire" },
  { href: "#menu", label: "Menu" },
  { href: "#lieu", label: "Le lieu" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,20,16,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container-shaluc flex h-18 items-center justify-between py-4">
        <a
          href="#accueil"
          className={`font-display text-xl tracking-wide transition-colors ${
            scrolled || open ? "text-ink" : "text-cream"
          }`}
        >
          SHALUC
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-ember ${
                scrolled ? "text-ink" : "text-cream"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={telUrl}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              scrolled
                ? "border-ink text-ink hover:bg-ink hover:text-cream"
                : "border-cream text-cream hover:bg-cream hover:text-ink"
            }`}
          >
            Appeler
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-[1.5px] w-6 transition-all duration-300 ${
              open ? "translate-y-[3.5px] rotate-45 bg-ink" : scrolled ? "bg-ink" : "bg-cream"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-all duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45 bg-ink" : scrolled ? "bg-ink" : "bg-cream"
            }`}
          />
        </button>
      </div>
    </header>

    <div
      className={`md:hidden fixed inset-0 z-40 flex flex-col justify-center bg-ink text-cream transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="container-shaluc flex flex-col gap-6">
        {NAV.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            className={`font-display text-3xl transition-all duration-300 ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            {item.label}
          </a>
        ))}
        <a
          href={telUrl}
          className="mt-4 inline-flex w-fit rounded-full bg-ember px-6 py-3 text-sm font-semibold"
        >
          Appeler · {restaurant.phoneDisplay}
        </a>
      </nav>
    </div>
    </>
  );
}
