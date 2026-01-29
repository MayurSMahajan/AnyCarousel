"use client";
import React from "react";

type BaseImageContainerProps = {
    imageUrl: string;
    credit?: string;
    /** Tailwind width class (e.g., w-[clamp(270px,45vw,600px)]) */
    widthClass?: string;
};

export const BaseImageContainer = ({
    imageUrl,
    credit,
    widthClass = "w-[clamp(270px,45vw,600px)]",
}: BaseImageContainerProps) => {
    return (
        <div
            className={`${widthClass} aspect-[16/9] bg-[#444] rounded-xl flex items-center justify-center relative overflow-hidden`}
        >
            <img className="h-full w-full object-cover" src={imageUrl} alt="image" />
            {credit && (
                <p
                    className=" absolute bottom-[5%] bg-[rgba(0,0,0,0.6)] text-white px-2 py-1 rounded-md text-[0.85rem]"
                    dangerouslySetInnerHTML={{ __html: credit }}
                ></p>
            )}
        </div>
    );
};
