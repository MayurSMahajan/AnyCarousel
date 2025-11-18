// components/ChevronIcon.tsx
import React from "react";
import { VSpace } from "../components/VSpace";


export const FeaturesSection = () => {

    return (
        <section>
            <VSpace />
            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-8 mt-16 mx-auto p-16">

                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">

                    <h3 className="mt-4 text-xl font-semibold text-white">Easy to Integrate</h3>
                    <p className="mt-2 text-gray-300">
                        Install, configure, and drop into your app with minimal setup.
                    </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                    <h3 className="mt-4 text-xl font-semibold text-white">Fast & Lightweight</h3>
                    <p className="mt-2 text-gray-300">
                        Built for performance — optimized rendering and motion.
                    </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                    <h3 className="mt-4 text-xl font-semibold text-white">Highly Customizable</h3>
                    <p className="mt-2 text-gray-300">
                        Control animations, curves, layouts, transitions, and more.
                    </p>
                </div>
            </div>
            <VSpace />
        </section >
    );
};