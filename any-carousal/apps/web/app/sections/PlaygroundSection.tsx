// components/ChevronIcon.tsx
import React from "react";
import { VSpace } from "../components/VSpace";
import { Playground } from "../components/Playground";


export const PlaygroundSection = () => {

    return (
        <section id="playground-section" >
            <VSpace />
            <div className="p-8 w-full max-w-9/10 rounded-2xl bg-white/5 backdrop-blur border border-white/10 mx-auto">
                <Playground />
            </div>
        </section>
    );
};