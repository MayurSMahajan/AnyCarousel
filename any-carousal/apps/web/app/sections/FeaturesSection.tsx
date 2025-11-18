import React from "react";
import { packageHeroFeatures } from "../data/features";
import { FeatureCard } from "../components/FeatureCard";

export const FeaturesSection = () => {
    const features = packageHeroFeatures;

    return (
        <section>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-8 mt-16 mb-16 mx-auto p-16">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        subtitle={feature.subtitle}
                    />
                ))}
            </div>
        </section>
    );
};