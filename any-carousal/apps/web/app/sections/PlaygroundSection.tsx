"use client";
import React from "react";
import { CarouselPlayground, PlaygroundTab } from "@repo/playground";


export const PlaygroundSection = () => {

    const handleLockedTabClick = (tab: PlaygroundTab) => {
        if (tab === "icons") {
            window.location.href = "/docs/playground?tab=icons";
        }
    };

    return (
        <section id="playground-section" >
            <div className="h-24"></div>
            { /* Make padding 2 in mobile */}
            <div className="p-2 md:p-8 w-full max-w-9/10 rounded-2xl bg-white/5 backdrop-blur border border-white/10 mx-auto">
                <CarouselPlayground
                    mode="limited"
                    enabledTabs={["easings", "duration"]}
                    onLockedTabClick={handleLockedTabClick}
                />
            </div>
        </section>
    );
};