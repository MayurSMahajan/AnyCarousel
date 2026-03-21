"use client";

import { useState, type ReactNode } from "react";
import { Carousel } from "react-any-carousel";

const chevronIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M15 18l-6-6 6-6" />
    </svg>
);

const testimonials = [
    { quote: "Shipped our marketing carousel in an afternoon. The easing hooks are exactly what we needed.", author: "Engineering lead", org: "B2B SaaS" },
    { quote: "Native scroll means mobile feels right—no fighting fake swipe physics.", author: "Product designer", org: "Commerce" },
    { quote: "We wired onSlideChange to analytics in minutes.", author: "Growth engineer", org: "Marketplace" },
    { quote: "Auto-advance for hero promos, arrows for users who want control.", author: "Frontend dev", org: "Media" },
];

const productGradients = [
    "from-violet-600 to-indigo-800",
    "from-emerald-600 to-teal-900",
    "from-amber-600 to-orange-800",
    "from-sky-600 to-blue-900",
    "from-rose-600 to-pink-900",
];

const productNames = ["Atlas", "Nova", "Pulse", "Vertex", "Aurora"];

function ExampleBlock({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children: ReactNode;
}) {
    return (
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-8">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">{description}</p>
            <div className="mt-6">{children}</div>
        </article>
    );
}

export const CarouselExamplesSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <section id="examples-section" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white md:text-4xl">Carousel in action</h2>
                <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
                    Live patterns you can copy—auto-play, callbacks, navigation styling, scroll distance, and motion tuning.
                </p>
            </div>

            <div className="mt-12 flex flex-col gap-10 md:gap-14">
                <ExampleBlock
                    title="Testimonials with auto-advance"
                    description="Uses autoSlideInterval with a relaxed duration. Clicking the previous or next control stops auto-play so visitors can read at their own pace."
                >
                    <Carousel
                        theme="dark"
                        scrollSnapType="center"
                        scrollOffset={340}
                        duration={750}
                        autoSlideInterval={4500}
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="flex h-52 w-[min(100%,min(90vw,380px))] shrink-0 flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/90 p-6 text-left shadow-inner"
                            >
                                <p className="text-base leading-relaxed text-zinc-100">&ldquo;{t.quote}&rdquo;</p>
                                <div>
                                    <p className="text-sm font-medium text-white">{t.author}</p>
                                    <p className="text-xs text-zinc-500">{t.org}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </ExampleBlock>

                <ExampleBlock
                    title="Active slide with onSlideChange"
                    description="Track the most visible slide and mirror it in UI—here, simple dots. Useful for progress, analytics, or synced captions."
                >
                    <Carousel
                        theme="dark"
                        scrollSnapType="center"
                        scrollOffset={300}
                        duration={550}
                        onSlideChange={setActiveSlide}
                    >
                        {productNames.map((name, i) => (
                            <div
                                key={name}
                                className={`flex h-44 w-[min(100%,260px)] shrink-0 flex-col justify-end rounded-xl bg-gradient-to-br ${productGradients[i]!} p-5 text-white shadow-lg`}
                            >
                                <p className="text-xs font-medium uppercase tracking-wider opacity-80">Product</p>
                                <p className="text-xl font-semibold">{name}</p>
                            </div>
                        ))}
                    </Carousel>
                    <div className="mt-4 flex justify-center gap-2" role="status" aria-live="polite" aria-label="Active slide">
                        {productNames.map((_, i) => (
                            <span
                                key={i}
                                className={`h-2 w-2 rounded-full transition-colors ${i === activeSlide ? "bg-amber-400" : "bg-zinc-600"}`}
                            />
                        ))}
                    </div>
                </ExampleBlock>

                <ExampleBlock
                    title="Custom navigation icons"
                    description="iconOptions accepts your own icon node and styles so the controls match your brand."
                >
                    <Carousel
                        theme="dark"
                        scrollSnapType="center"
                        scrollOffset={280}
                        duration={500}
                        iconOptions={{
                            icon: chevronIcon,
                            iconStyles: {
                                backgroundColor: "#facc15",
                                color: "#18181b",
                                boxShadow: "0 4px 14px rgba(250, 204, 21, 0.35)",
                            },
                        }}
                    >
                        {[1, 2, 3, 4, 5].map((n) => (
                            <div
                                key={n}
                                className="flex h-40 w-[min(100%,220px)] shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-zinc-900/80 text-2xl font-bold text-amber-400/90"
                            >
                                {n}
                            </div>
                        ))}
                    </Carousel>
                </ExampleBlock>

                <ExampleBlock
                    title="Scroll distance: card-sized steps vs wide jumps"
                    description="scrollOffset controls how far programmatic moves go (arrows and auto-slide). Match it to your slide width for one-card steps, or use a larger value to cross multiple items."
                >
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">scrollOffset ≈ slide + gap</p>
                            <Carousel theme="dark" scrollSnapType="center" scrollOffset={304} duration={450}>
                                {[1, 2, 3, 4, 5, 6].map((n) => (
                                    <div
                                        key={n}
                                        className="flex h-36 w-[min(100%,260px)] shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-lg font-medium text-zinc-200"
                                    >
                                        Card {n}
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div>
                            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">Larger scrollOffset</p>
                            <Carousel theme="dark" scrollSnapType="center" scrollOffset={720} duration={450}>
                                {[1, 2, 3, 4, 5, 6].map((n) => (
                                    <div
                                        key={n}
                                        className="flex h-36 w-[min(100%,260px)] shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-lg font-medium text-zinc-200"
                                    >
                                        Card {n}
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </ExampleBlock>

                <ExampleBlock
                    title="Long, eased transitions"
                    description="Combine duration with scrollEasing for editorial, slow-gliding motion—handy for hero rows and large imagery."
                >
                    <Carousel
                        theme="dark"
                        scrollSnapType="center"
                        scrollOffset={320}
                        duration={1400}
                        scrollEasing="cubic-bezier(0.22, 1, 0.36, 1)"
                    >
                        {["Custom easing curves", "Configurable duration", "Optional auto-slide", "onSlideChange callback"].map((label, i) => (
                            <div
                                key={label}
                                className="flex h-48 w-[min(100%,300px)] shrink-0 flex-col justify-center rounded-xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 p-6 text-left"
                            >
                                <span className="text-xs text-zinc-500">Slide {i + 1}</span>
                                <p className="mt-2 text-lg font-medium text-white">{label}</p>
                            </div>
                        ))}
                    </Carousel>
                </ExampleBlock>

                <ExampleBlock
                    title="Light theme on a light surface"
                    description="theme=&quot;light&quot; is meant for bright backdrops. Slides use dark text so contrast stays readable."
                >
                    <div className="rounded-xl bg-zinc-100 p-6 md:p-8">
                        <Carousel theme="light" scrollSnapType="center" scrollOffset={296} duration={500}>
                            {["Docs", "API", "Examples", "GitHub"].map((label) => (
                                <div
                                    key={label}
                                    className="flex h-32 w-[min(100%,200px)] shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-lg font-semibold text-zinc-800 shadow-sm"
                                >
                                    {label}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </ExampleBlock>
            </div>
        </section>
    );
};
