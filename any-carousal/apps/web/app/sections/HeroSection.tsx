import React from "react";

export const HeroSection = () => {

    return (
        <section className="text-center flex flex-col items-center gap-6 mt-20 px-4">
            {/* Heading */}
            <h1 className="text-4xl max-w-3xl sm:text-6xl font-bold text-white leading-tight">
                AnyCarousel — The Most Flexible Carousel for React
            </h1>
            {/* Subtitle */}
            <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                A highly customizable, smooth, and responsive carousel library designed to fit any use-case —
                from simple sliders to advanced UX animations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                    href="#playground-section"
                    className="primary-btn !mt-0"
                >
                    <span className="text-lg font-semibold">Try In Playground</span>
                </a>
                <a
                    href="#installation-section"
                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-md transition-all flex items-center"
                >
                    <span className="text-lg font-semibold">Install</span>
                </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-4 items-center">
                <a
                    href="https://github.com/MayurSMahajan/AnyCarousel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                    <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    <span>GitHub</span>
                </a>
                <a
                    href="https://www.npmjs.com/package/react-any-carousel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                    <svg height="24" width="24" viewBox="0 0 256 256" fill="currentColor">
                        <path d="M0 0v256h256V0H0zm64 224H32V32h32v192zm128 0h-32V96h-32v128h-64V32h128v192z" />
                    </svg>
                    <span>NPM</span>
                </a>
            </div>

        </section>
    );
};