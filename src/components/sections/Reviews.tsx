import { restaurant } from "@/lib/restaurant";

export function Reviews() {
  return (
    <section className="bg-cream-soft py-24 md:py-32">
      <div className="container-shaluc">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">Avis</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Ce qu&apos;on en dit vraiment.</h2>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-4xl text-ember">{restaurant.rating}</span>
            <span className="text-sm text-ink/60">/ 5 · {restaurant.reviewCount} avis Google</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {restaurant.reviews.map((review) => (
            <figure
              key={review.author}
              className="flex flex-col rounded-2xl bg-cream p-7 shadow-[0_1px_0_0_rgba(28,20,16,0.06)]"
            >
              <blockquote className="flex-1 text-[15px] leading-relaxed text-ink/80">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-ink">{review.author}</p>
                <p className="text-xs text-ink/50">
                  {review.meta} · {review.when}
                </p>
              </figcaption>
              {review.ownerReply && (
                <p className="mt-4 border-l-2 border-ember/40 pl-3 text-xs italic text-ink/50">
                  Réponse de SHALUC : {review.ownerReply}
                </p>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
