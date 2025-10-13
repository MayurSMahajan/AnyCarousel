export type PredefinedCurve = {
  name: string;
  points: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
};

export const easeInOutCurves: PredefinedCurve[] = [
  {
    name: "easeInOutSine",
    points: {
      x1: 0.45,
      y1: 0.05,
      x2: 0.55,
      y2: 0.95,
    },
  },
  {
    name: "easeInOutQuad",
    points: {
      x1: 0.46,
      y1: 0.03,
      x2: 0.52,
      y2: 0.96,
    },
  },
  {
    name: "easeInOutCubic",
    points: {
      x1: 0.65,
      y1: 0.05,
      x2: 0.36,
      y2: 1,
    },
  },
  {
    name: "easeInOutQuart",
    points: {
      x1: 0.77,
      y1: 0.0,
      x2: 0.18,
      y2: 1,
    },
  },
  {
    name: "easeInOutCirc",
    points: {
      x1: 0.79,
      y1: 0.14,
      x2: 0.15,
      y2: 0.86,
    },
  },
  {
    name: "easeInOutQuint",
    points: {
      x1: 0.86,
      y1: 0.0,
      x2: 0.07,
      y2: 1,
    },
  },
  {
    name: "easeInOutExpo",
    points: {
      x1: 1,
      y1: 0,
      x2: 0,
      y2: 1,
    },
  },
  {
    name: "easeInOutBack",
    points: {
      x1: 0.68,
      y1: -0.55,
      x2: 0.27,
      y2: 1.55,
    },
  },
];

// ------- Ease In Curves -------

export const easeInCurves: PredefinedCurve[] = [
  {
    name: "easeInSine",
    points: {
      x1: 0.47,
      y1: 0.0,
      x2: 0.75,
      y2: 0.72,
    },
  },
  {
    name: "easeInQuad",
    points: {
      x1: 0.55,
      y1: 0.08,
      x2: 0.68,
      y2: 0.53,
    },
  },
  {
    name: "easeInCubic",
    points: {
      x1: 0.55,
      y1: 0.06,
      x2: 0.68,
      y2: 0.19,
    },
  },
  {
    name: "easeInQuart",
    points: {
      x1: 0.9,
      y1: 0.03,
      x2: 0.69,
      y2: 0.22,
    },
  },
  {
    name: "easeInQuint",
    points: {
      x1: 0.76,
      y1: 0.05,
      x2: 0.86,
      y2: 0.06,
    },
  },
  {
    name: "easeInCirc",
    points: {
      x1: 0.6,
      y1: 0.04,
      x2: 0.98,
      y2: 0.34,
    },
  },
  {
    name: "easeInExpo",
    points: {
      x1: 0.95,
      y1: 0.05,
      x2: 0.8,
      y2: 0.04,
    },
  },
  {
    name: "easeInBack",
    points: {
      x1: 0.6,
      y1: -0.28,
      x2: 0.74,
      y2: 0.05,
    },
  },
];

// ------- Ease Out Curves -------

export const easeOutCurves: PredefinedCurve[] = [
  {
    name: "easeInSine",
    points: {
      x1: 0.39,
      y1: 0.57,
      x2: 0.56,
      y2: 1,
    },
  },
  {
    name: "easeInQuad",
    points: {
      x1: 0.25,
      y1: 0.46,
      x2: 0.45,
      y2: 0.94,
    },
  },
  {
    name: "easeInCubic",
    points: {
      x1: 0.22,
      y1: 0.61,
      x2: 0.36,
      y2: 1,
    },
  },
  {
    name: "easeInQuart",
    points: {
      x1: 0.17,
      y1: 0.84,
      x2: 0.4,
      y2: 1,
    },
  },
  {
    name: "easeInQuint",
    points: {
      x1: 0.23,
      y1: 1,
      x2: 0.32,
      y2: 1,
    },
  },
  {
    name: "easeInCirc",
    points: {
      x1: 0.08,
      y1: 0.82,
      x2: 0.17,
      y2: 1,
    },
  },
  {
    name: "easeInExpo",
    points: {
      x1: 0.19,
      y1: 1,
      x2: 0.22,
      y2: 1,
    },
  },
  {
    name: "easeInBack",
    points: {
      x1: 0.18,
      y1: 0.89,
      x2: 0.32,
      y2: 1.27,
    },
  },
];
