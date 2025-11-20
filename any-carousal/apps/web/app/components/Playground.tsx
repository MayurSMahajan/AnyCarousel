"use client";
import { Carousel } from "react-any-carousel";
import React, { useState } from "react";
import { easeInCurves, easeOutCurves, easeInOutCurves, PredefinedCurve } from "../data/curves";
import { largeImageList } from "../data/largeImageList";
import { PlaygroundImageComponent } from "./PlaygroundImage";
import { ChevronIcon } from "./ChevronIcon";
import { CurveShowcaseTile } from "./CurveShowcaseTile";
import CurvePointInput from "./CurvePointInput";


export const Playground: React.FC = () => {
    const [x1, setX1] = useState(0.79);
    const [y1, setY1] = useState(0.25);
    const [x2, setX2] = useState(0.5);
    const [y2, setY2] = useState(1);
    //TODO: add tabs to switch between easeIn, easeOut, easeInOut
    const [selectedCurvesList, setSelectedCurvesList] = useState(easeInOutCurves); // default to easeInOut
    const [isCopied, setIsCopied] = useState(false);
    const [selectedCurve, setSelectedCurve] = useState<PredefinedCurve>(easeInOutCurves[0] as PredefinedCurve);

    const setCubicBezierFromOptions = (curve: PredefinedCurve) => {
        setSelectedCurve(curve);
        setX1(curve.points.x1);
        setY1(curve.points.y1);
        setX2(curve.points.x2);
        setY2(curve.points.y2);
    }

    const handleCopyToClipboard = () => {
        const cubicBezierString = `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
        navigator.clipboard.writeText(cubicBezierString).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // reset after 2 seconds
        });
    }

    const changeCurveType = (type: "easeIn" | "easeOut" | "easeInOut") => {
        if (type === "easeIn") {
            setSelectedCurvesList(easeInCurves);
            setCubicBezierFromOptions(easeInCurves[0] as PredefinedCurve);
        } else if (type === "easeOut") {
            setSelectedCurvesList(easeOutCurves);
            setCubicBezierFromOptions(easeOutCurves[0] as PredefinedCurve);
        } else {
            setSelectedCurvesList(easeInOutCurves);
            setCubicBezierFromOptions(easeInOutCurves[0] as PredefinedCurve);
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 p-1">
            <div className="flex-1 bg-zinc-800 rounded-lg shadow overflow-scroll p-4">
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
            <div className="flex-1 bg-zinc-800 rounded-lg shadow flex flex-col gap-4 p-4">
                {/* Tabs */}
                <div className="flex gap-6 border-b border-zinc-700">
                    <button className="text-white font-medium border-b-2 border-green-500 pb-2">Easings</button>
                    <button className="text-zinc-400 hover:text-white pb-2">Icons</button>
                </div>

                {/* Easing type selector */}
                <div className="flex justify-end">
                    <div className="flex justify-center p-2 bg-zinc-900 rounded outline-none">
                        <select id="curve-select" className="text-white outline-none" onChange={(e) => changeCurveType(e.target.value as "easeIn" | "easeOut" | "easeInOut")} >
                            <option value="easeIn">Ease In</option>
                            <option value="easeOut">Ease Out</option>
                            <option value="easeInOut">Ease In Out</option>
                        </select>
                    </div>
                </div>

                {/* Easing grid placeholder */}
                <div className="grid grid-cols-4 gap-4">
                    {selectedCurvesList.map((cur, i) => (
                        <CurveShowcaseTile
                            key={i}
                            curve={cur}
                            isSelected={selectedCurve.name === cur.name} // highlight only the selected one
                            onSelect={setCubicBezierFromOptions}        // notify parent
                        />
                    ))}
                </div>

                {/* Inputs */}
                <div className="flex gap-4">
                    <CurvePointInput label="x1" value={x1} onChange={setX1} min={0} max={1} />
                    <CurvePointInput label="y1" value={y1} onChange={setY1} min={-2} max={2} />
                    <CurvePointInput label="x2" value={x2} onChange={setX2} min={0} max={1} />
                    <CurvePointInput label="y2" value={y2} onChange={setY2} min={-2} max={2} />
                </div>

                {/* Preview + copy */}
                <div className="flex items-center justify-between bg-zinc-900 rounded ">
                    <span className="text-sm p-4 text-zinc-400">{`cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`}</span>
                    <button onClick={handleCopyToClipboard} className="text-green-500 p-4 hover:text-green-400 cursor-pointer text-sm">{isCopied ? "Copied!" : "Copy"}</button>
                </div>
            </div>
        </div >
    );
};
