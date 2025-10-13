"use client";
import { Carousel } from "@any-carousal/react-any-carousel/carousel";
import React, { useState } from "react";
import { easeInCurves, easeOutCurves, easeInOutCurves, PredefinedCurve } from "../data/curves";
import { largeImageList } from "../data/largeImageList";
import { PlaygroundImageComponent } from "./PlaygroundImage";
import { ChevronIcon } from "./ChevronIcon";


export const Playground: React.FC = () => {
    const [x1, setX1] = useState(0.79);
    const [y1, setY1] = useState(0.25);
    const [x2, setX2] = useState(0.5);
    const [y2, setY2] = useState(1);
    const [selectedCurvesList, setSelectedCurvesList] = useState(easeInOutCurves);

    function setCubicBezierFromOptions(curve: PredefinedCurve) {
        console.log(`updating curve to ${curve.name}`);
        console.log(`Before: x1: ${x1}, y1: ${y1}, x2: ${x2}, y2: ${y2}`);
        setX1(curve.points.x1);
        setY1(curve.points.y1);
        setX2(curve.points.x2);
        setY2(curve.points.y2);
        console.log(`After: x1: ${x1}, y1: ${y1}, x2: ${x2}, y2: ${y2}`);
    }

    return (
        <div style={{ 'padding': '8px' }} className="flex flex-col md:flex-row gap-6">
            <div style={{ 'padding': '8px' }} className="flex-1 bg-zinc-800 rounded shadow overflow-scroll">
                <Carousel
                    iconOptions={{
                        icon: <ChevronIcon color="white" />,
                        iconStyles: {
                            backgroundColor: "black",
                            color: "white",
                        },
                    }}
                    scrollOffset={600}
                    scrollEasing={`cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`}
                    scrollSnapType='center'
                    duration={650}
                >
                    {largeImageList.map((item, i) => (
                        <PlaygroundImageComponent key={i} imageUrl={item.imageUrl} />
                    ))}
                </Carousel>
            </div>
            <div style={{ 'padding': '8px' }} className="flex-1 bg-zinc-800 rounded-2xl shadow flex flex-col gap-4">
                {/* Tabs */}
                <div className="flex gap-6 border-b border-zinc-700">
                    <button className="text-white font-medium border-b-2 border-green-500 pb-2">Easings</button>
                    <button className="text-zinc-400 hover:text-white pb-2">Icons</button>
                </div>

                {/* Easing grid placeholder */}
                <div className="grid grid-cols-3 gap-4">
                    {selectedCurvesList.map((cur, i) => (
                        <div key={i} className="bg-zinc-900 rounded p-4 h-16 flex items-center justify-center" onClick={() => setCubicBezierFromOptions(cur)}>
                            <span className="text-sm text-zinc-400">{cur.name}</span>
                        </div>
                    ))}
                </div>

                {/* Inputs */}
                <div className="flex gap-2">
                    <input className="bg-zinc-900 text-white p-2 rounded w-16" value={x1} onChange={(e) => setX1(Number(e.target.value))} />
                    <input className="bg-zinc-900 text-white p-2 rounded w-16" value={y1} onChange={(e) => setY1(Number(e.target.value))} />
                    <input className="bg-zinc-900 text-white p-2 rounded w-16" value={x2} onChange={(e) => setX2(Number(e.target.value))} />
                    <input className="bg-zinc-900 text-white p-2 rounded w-16" value={y2} onChange={(e) => setY2(Number(e.target.value))} />
                </div>

                {/* Preview + copy */}
                <div className="flex items-center justify-between bg-zinc-900 rounded p-2">
                    <span className="text-sm text-zinc-400">{`cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`}</span>
                    <button className="text-green-500 hover:text-green-400 text-sm">Copy</button>
                </div>
            </div>
        </div >
    );
};
