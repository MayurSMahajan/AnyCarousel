import React, { useState } from "react";

interface CurvePointInputProps {
    value: number;
    onChange: (value: number) => void;
    width?: string;
    step?: number;
}

const CurvePointInput: React.FC<CurvePointInputProps> = ({
    value,
    onChange,
    width = "w-16",
    step = 0.01,
}) => {
    const [isInvalid, setIsInvalid] = useState(false);
    const [isShowErrorTooltip, setIsShowErrorTooltip] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;

        if (raw === "") {
            onChange(NaN);
            return;
        }

        const val = parseFloat(raw);

        // Check validity
        if (val < 0 || val > 1) {
            // Flash red border + tooltip
            setIsInvalid(true);

            // Set show tooltip to false first to reset timer if already shown
            setIsShowErrorTooltip(false);
            setTimeout(() => setIsShowErrorTooltip(true), 1000);

            return;
        }

        onChange(val);
    };

    return (
        <div className="relative group">
            <input
                type="number"
                value={isNaN(value) ? "" : value}
                onChange={handleChange}
                step={step}
                min={0}
                max={1}
                className={`bg-zinc-900 text-white p-2 rounded ${width} text-center outline-none transition-all duration-300 ${isInvalid ? "border border-red-500" : "border border-transparent"}`}
            />
            {/* Tooltip (shown only when invalid) */}
            {isShowErrorTooltip && (
                <div className="absolute bottom-full mb-1 w-48 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-2 py-1 rounded shadow">
                    Value must be between 0 and 1
                </div>
            )}
        </div>
    );
};


export default CurvePointInput;