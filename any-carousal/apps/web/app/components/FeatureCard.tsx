import React from "react";

type FeatureCardProps = {
    title: string;
    subtitle: string;
    icon?: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    subtitle,
    icon
}) => {
    return (
        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-gray-300">
                {subtitle}
            </p>
        </div>
    );
};