import React, { useEffect, useState } from "react";

interface CurvePointInputProps {
    value: number;
    onChange: (value: number) => void;
    width?: string;
    step?: number;
    min?: number;
    max?: number;
    label?: string;
}

const CurvePointInput: React.FC<CurvePointInputProps> = ({
    value,
    onChange,
    width = "w-16",
    step = 0.01,
    min = 0,
    max = 1,
    label,
}) => {
    // Local state to handle intermediate inputs (e.g., empty string, decimal point)
    const [localValue, setLocalValue] = useState(String(value));
    const [isInvalid, setIsInvalid] = useState(false);
    const [isShowErrorTooltip, setIsShowErrorTooltip] = useState(false);

    // Sync local state with prop value when it changes externally
    useEffect(() => {
        // Only update if the parsed local value is different from the new prop value
        // This prevents overwriting "0." with "0" while typing
        const parsedLocal = parseFloat(localValue);
        if (parsedLocal !== value && !isNaN(value)) {
            setLocalValue(String(value));
        }
    }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        setLocalValue(raw); // Always update display immediately

        if (raw === "") {
            // Don't propagate empty string as NaN, just keep it empty locally
            return;
        }

        const val = parseFloat(raw);

        // Check validity
        if (isNaN(val) || val < min || val > max) {
            // Flash red border + tooltip
            setIsInvalid(true);

            // Set show tooltip to false first to reset timer if already shown
            setIsShowErrorTooltip(false);
            setTimeout(() => setIsShowErrorTooltip(true), 100); // Short delay to ensure state update triggers re-render if needed or just debounce

            // Do NOT call onChange for invalid values
            return;
        }

        // Valid value
        setIsInvalid(false);
        setIsShowErrorTooltip(false);
        onChange(val);
    };

    return (
        <div className="flex items-center gap-4">
            {label && <span className="text-zinc-400 text-md font-medium ">{label}</span>}
            <div className="relative group">
                <input
                    type="number"
                    value={localValue}
                    onChange={handleChange}
                    step={step}
                    min={min}
                    max={max}
                    className={`bg-zinc-900 text-white p-2 rounded ${width} text-center outline-none transition-all duration-300 ${isInvalid ? "border border-red-500" : "border border-transparent"}`}
                />
                {/* Tooltip (shown only when invalid) */}
                {isShowErrorTooltip && (
                    <div className="absolute bottom-full mb-1 w-48 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-2 py-1 rounded shadow text-center z-10">
                        Value must be between {min} and {max}
                    </div>
                )}
            </div>
        </div>
    );
};


export default CurvePointInput;