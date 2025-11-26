import { PredefinedCurve } from "../data/curves";

type CurveShowcaseTileProps = {
    curve: PredefinedCurve;
    isSelected?: boolean;
    onSelect?: (curve: PredefinedCurve) => void;
};

export const CurveShowcaseTile: React.FC<CurveShowcaseTileProps> = ({
    curve,
    isSelected = false,
    onSelect,
}) => {
    const handleClick = () => {
        onSelect?.(curve); // notify parent
    };

    const { x1, y1, x2, y2 } = curve.points;

    // Scale normalized curve to fit your display area (20→80 for x, 80→20 for y)
    const pathD = `M 20,80 C ${20 + 60 * x1},${80 - 60 * y1} ${20 + 60 * x2},${80 - 60 * y2} 80,20`;

    return (
        <button
            onClick={handleClick}
            className={`bg-[#2b2a2a] max-w-[150px] md:max-w-full cursor-pointer rounded-xl flex items-center justify-center border-2 transition-all duration-200`}
            style={{
                borderColor: isSelected ? "var(--primary)" : "#999"
            }}
        >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d={pathD}
                    stroke={isSelected ? "var(--primary)" : "#fff"}
                    strokeWidth="2"
                    strokeLinecap="round">
                </path>
            </svg>
        </button>
    );
};