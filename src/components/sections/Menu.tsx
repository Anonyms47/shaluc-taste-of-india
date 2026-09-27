"use client";

import { useState } from "react";
import { restaurant } from "@/lib/restaurant";
import { menu } from "@/lib/menu";

function formatPrice(price: number) {
  return price.toLocaleString("fr-FR");
}

export function Menu() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <section id="menu" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div
        className="elephant-watermark elephant-watermark-dark -right-16 top-10 h-72 w-96"
        aria-hidden="true"
      />
      <div className="container-shaluc relative">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">Le menu</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">La carte complète.</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink/70">
            79 plats, du bar aux desserts — la carte telle qu&apos;elle est servie chez SHALUC,
            entre {formatPrice(restaurant.priceRange.min)} et {formatPrice(restaurant.priceRange.max)}{" "}
            {restaurant.priceRange.currency}.
          </p>
        </div>

        <div className="mt-10 -mx-1 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeId === cat.id
                  ? "bg-ink text-cream"
                  : "bg-ink/5 text-ink/70 hover:bg-ink/10"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-ember">
            {active.subtitle}
          </p>
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {active.items.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3"
              >
                <span className="min-w-0">
                  <span className="text-[16px] font-medium">
                    {item.no !== undefined && (
                      <span className="mr-2 text-ink/35 tabular-nums">{item.no}.</span>
                    )}
                    {item.name}
                    {item.vegan && (
                      <span className="ml-2 rounded-full bg-emerald-700/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                        Vegan
                      </span>
                    )}
                  </span>
                  {item.desc && (
                    <span className="mt-0.5 block text-sm text-ink/55">{item.desc}</span>
                  )}
                </span>
                <span className="shrink-0 font-display text-[15px] text-ember">
                  {formatPrice(item.price)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
