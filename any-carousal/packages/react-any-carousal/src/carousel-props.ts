import type { CSSProperties, ReactNode, Ref } from "react";

/**
 * Imperative API exposed via the `ref` prop (React 19+).
 * Use with `useRef<CarouselHandle>(null)` and optional `hideDefaultNavigation` for custom controls.
 */
export type CarouselHandle = {
  scrollPrev: () => void;
  scrollNext: () => void;
};

/**
 * Learn more about snapping here: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
 */
export type ScrollSnapOptions = "start" | "center" | "end" | "none";

/**
 * Accepts either `"light"` or `"dark"`
 * Default value is `"light"`
 */
export type Theme = "light" | "dark";

/**
 * Options used for customising navigation icons used in carousel
 * `icon`: A `ReactNode` that is going to be used as the icon element.
 * `iconStyles`: A style object that will be passed as styles to the Icon Node
 */
export type IconOptions = {
  icon?: ReactNode;
  iconStyles?: CSSProperties;
};

export type CarouselProps = {
  /**
   * Ref to imperative navigation (`scrollPrev` / `scrollNext`).
   * In React 19+, pass as a normal prop; same ergonomics as the historic `ref` attribute.
   */
  ref?: Ref<CarouselHandle | null>;

  /**
   * When true, the built-in previous/next circular buttons are not rendered.
   * Use with `ref` to provide your own controls.
   */
  hideDefaultNavigation?: boolean;

  /**
   * Any iterable `ReactNode` element that the Carousel will display
   */
  children: ReactNode;

  /**
   * Specifies the theme of the carousel.
   * This includes icon colors
   */
  theme?: Theme;

  /**
   * Options used for customising the navigation icons used in Carousel
   */
  iconOptions?: IconOptions;

  /**
   * Determines the snapping type for the carousel
   *
   * Accepted values are `"start" | "center" | "end" | "none"`
   * Learn more about snapping here: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: ScrollSnapOptions;

  /**
   * An offset of how much the Carousel will scroll its children,
   *
   * To scroll each child one at a time, set this to a value closer to the child's width
   * To scroll the entire container, set this value to the container's width
   *
   * If `scrollSnapType` is enabled and `scrollOffset` is less than the child's width,
   * the carousel will still show the next child
   * according to the `scrollSnapType` value
   */
  scrollOffset?: number;

  /**
   * If set, then the carousel will scroll after a fixed duration defined by this variable.
   * The duration is taken in milliseconds
   */
  autoSlideInterval?: number;

  /**
   * Easing function used for scrolling the carousel.
   * Example Input: 'cubic-bezier(0.25, 1, 0.5, 1)'
   * Note that the above easing function is used as the fallback value.
   */
  scrollEasing?: string;

  // TODO: see if we can prevent the user from entering a humongous number
  /**
   * Defines how much time each transition between children will take in milliseconds.
   * Defaults to `600`
   */
  duration?: number;

  /**
   * Callback fired when the most visible slide changes during scrolling.
   * Receives the zero-based index of the slide that is most visible in the viewport.
   *
   * @example
   * <Carousel onSlideChange={(index) => console.log('Active slide:', index)}>
   *   <div>Slide 0</div>
   *   <div>Slide 1</div>
   * </Carousel>
   */
  onSlideChange?: (index: number) => void;
};
