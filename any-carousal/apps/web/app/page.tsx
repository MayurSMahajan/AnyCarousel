"use client";
import { Playground } from "./components/Playground";

export default function Home() {

  const scrollToPlayground = () => {
    const section = document.getElementById("playground-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ 'padding': 'clamp(1rem, 2vw, 4rem', 'border': '2px solid white', 'borderRadius': '1rem' }}>
      <section className="text-center pd-16 grid place-items-center gap-6 min-h-screen">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
          AnyCarousel — The Most Flexible Carousel for React
        </h1>
        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          A highly customizable, smooth, and responsive carousel library designed to fit any use-case —
          from simple sliders to advanced UX animations.
        </p>
        {/* CTA Button */}
        <button
          onClick={scrollToPlayground}
          className="mt-8 pd-8 text-lg font-semibold bg-yellow-400 hover:bg-yellow-400/80 
        rounded-xl transition-all shadow-lg cursor-pointer"
        >
          Try in Playground
        </button>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16">

          <div className="pd-16 rounded-2xl bg-white/5 backdrop-blur border border-white/10">

            <h3 className="mt-4 text-xl font-semibold text-white">Easy to Integrate</h3>
            <p className="mt-2 text-gray-300">
              Install, configure, and drop into your app with minimal setup.
            </p>
          </div>

          <div className="pd-16 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <h3 className="mt-4 text-xl font-semibold text-white">Fast & Lightweight</h3>
            <p className="mt-2 text-gray-300">
              Built for performance — optimized rendering and motion.
            </p>
          </div>

          <div className="pd-16 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <h3 className="mt-4 text-xl font-semibold text-white">Highly Customizable</h3>
            <p className="mt-2 text-gray-300">
              Control animations, curves, layouts, transitions, and more.
            </p>
          </div>

        </div>
      </section>
      <section id="playground-section">
        <Playground></Playground>
      </section>
    </div>

  );
}