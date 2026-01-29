"use client";

import React, { Suspense } from "react";
import { CarouselPlayground, PlaygroundTab } from "@repo/playground";
import { useSearchParams } from "next/navigation";

function PlaygroundPageContent() {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");

    const validTabs: PlaygroundTab[] = ["easings", "duration", "icons"];
    const defaultTab: PlaygroundTab = validTabs.includes(tabParam as PlaygroundTab)
        ? (tabParam as PlaygroundTab)
        : "easings";

    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Full Carousel Playground</h1>
            <div className="max-w-7xl mx-auto border border-zinc-800 rounded-2xl p-4 md:p-8 bg-zinc-900/50">
                <CarouselPlayground
                    mode="full"
                    enabledTabs={["easings", "duration", "icons"]}
                    defaultTab={defaultTab}
                />
            </div>
        </main>
    );
}

export default function PlaygroundPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
            <PlaygroundPageContent />
        </Suspense>
    );
}
