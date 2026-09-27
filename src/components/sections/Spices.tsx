const SPICES = ["Cardamome", "Safran", "Gingembre", "Cumin", "Curcuma"];

export function Spices() {
  return (
    <section className="relative bg-cream-soft py-20 md:py-28 overflow-hidden">
      <div className="container-shaluc">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember text-center">
          Les épices
        </p>
        <h2 className="mt-4 text-center font-display text-3xl md:text-4xl max-w-2xl mx-auto leading-snug">
          Le vocabulaire d&apos;une cuisine qui ne s&apos;excuse jamais d&apos;avoir du goût.
        </h2>

        <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-8 md:gap-x-16">
          {SPICES.map((spice, i) => (
            <div key={spice} className="flex flex-col items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: i % 2 === 0 ? "var(--color-saffron)" : "var(--color-ember)",
                }}
              />
              <span className="font-display text-lg italic text-ink/70">{spice}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
