import React from "react";
import Image from "next/image";

type FeatureCardProps = {
    title: string;
    subtitle: string;
    icon: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    subtitle,
    icon
}) => {
    return (
        <div className="p-6 rounded-lg bg-zinc-900 border border-white/10">
            <div className="flex items-center justify-center rounded-lg bg-zinc-800 w-16 h-16 mb-4">
                <Image src={icon} alt="icon" className="w-8 h-8" width={8} height={8} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-gray-300">
                {subtitle}
            </p>
        </div>
    );
};