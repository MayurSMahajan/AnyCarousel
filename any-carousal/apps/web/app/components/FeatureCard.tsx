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
        <div className="p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10">
            <Image src={icon} alt="icon" className="w-12 h-12 mb-4" width={24} height={24} />
            <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-gray-300">
                {subtitle}
            </p>
        </div>
    );
};