# react-any-carousel

A lightweight, powerful, and highly adaptable carousel component for React. It supports custom content, snapping, auto-scroll, responsive layouts, and touch gestures.

## Features

- 🚀 **Lightweight & Minimalistic**: Zero bloat, just the essentials.
- 📱 **Mobile & Tablet Friendly**: Smooth swipe gestures for horizontal scrolling.
- 🧩 **Content Agnostic**: Works with Images, Videos, and any Custom React Components.
- 🎯 **Custom Snapping**: Control how items snap into place (`start`, `center`, `end`).
- ⏳ **Auto Scroll**: Customizable auto-slide interval.
- 🎨 **Theming**: Built-in light and dark themes.
- 🖱️ **Desktop Support**: Shift + Scroll for horizontal navigation.
- 👆 **Touchpad Support**: Two-finger scroll gesture supported.

## Installation

```bash
npm install react-any-carousel
# or
yarn add react-any-carousel
# or
pnpm add react-any-carousel
```

## Basic Usage

```tsx
import { Carousel } from "react-any-carousel";

function App() {
  return (
    <Carousel scrollSnapType="center" scrollOffset={300} duration={600}>
      <div className="card">Item 1</div>
      <div className="card">Item 2</div>
      <div className="card">Item 3</div>
    </Carousel>
  );
}
```

## Props

| Prop                | Type                                     | Default      | Description                                                                                                |
| ------------------- | ---------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| `children`          | `ReactNode`                              | **Required** | The content to display in the carousel.                                                                    |
| `theme`             | `"light" \| "dark"`                      | `"light"`    | Sets the theme of the carousel (e.g., icon colors).                                                        |
| `scrollSnapType`    | `"start" \| "center" \| "end" \| "none"` | `undefined`  | Determines the CSS scroll-snap behavior.                                                                   |
| `scrollOffset`      | `number`                                 | `undefined`  | The amount to scroll when navigating. Set to child width for single item or container width for full page. |
| `autoSlideInterval` | `number`                                 | `undefined`  | Interval in milliseconds for auto-scrolling.                                                               |
| `duration`          | `number`                                 | `600`        | Duration of the scroll transition in milliseconds.                                                         |
| `scrollEasing`      | `string`                                 | `undefined`  | CSS easing function for the scroll transition (e.g., `cubic-bezier(...)`).                                 |
| `iconOptions`       | `IconOptions`                            | `undefined`  | Custom options for navigation icons.                                                                       |

### IconOptions

```ts
type IconOptions = {
  icon?: ReactNode; // Custom icon component
  iconStyles?: any; // Styles applied to the icon
};
```

## Advanced Usage

### Custom Navigation Icons

```tsx
import { Carousel } from "react-any-carousel";
import { MyCustomIcon } from "./icons";

<Carousel
  iconOptions={{
    icon: <MyCustomIcon />,
    iconStyles: { color: "red", fontSize: "24px" },
  }}
>
  {/* items */}
</Carousel>;
```

### Auto Scroll

```tsx
<Carousel autoSlideInterval={3000}>
  {/* items will slide every 3 seconds */}
</Carousel>
```
