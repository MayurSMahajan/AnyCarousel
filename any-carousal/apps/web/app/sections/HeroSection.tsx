import React from "react";

export const HeroSection = () => {

    return (
        <section className="text-center grid place-items-center gap-2 mt-20">
            {/* Heading */}
            <h1 className="text-4xl max-w-3xl sm:text-6xl font-bold text-white leading-tight">
                AnyCarousel — The Most Flexible Carousel for React
            </h1>
            {/* Subtitle */}
            <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                A highly customizable, smooth, and responsive carousel library designed to fit any use-case —
                from simple sliders to advanced UX animations.
            </p>
            {/* CTA Button */}
            <a
                href="#playground-section"
                className="mt-8 primary-btn text-lg font-semibold rounded-xl"
            >
                Try in Playground
            </a>

        </section>
    );
};