import React from "react";
import { packageHeroFeatures } from "../data/features";
import { FeatureCard } from "../components/FeatureCard";

export const FeaturesSection = () => {
    const features = packageHeroFeatures;

    return (
        <section className="mt-20 mb-20">
            <h2 className="text-4xl font-bold text-white text-center">Features</h2>
            <p className="text-white mt-2 text-center">Here are some of the features that make AnyCarousel the best carousel library for React.</p>
            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-8 mx-auto p-17">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        subtitle={feature.subtitle}
                        icon={feature.icon}
                    />
                ))}
            </div>
        </section>
    );
};