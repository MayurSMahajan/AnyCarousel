# AnyCarousel - Lightweight Carousel for your components.

AnyCarousel is a powerful, highly adaptable carousel component that covers real use cases like custom content, snapping, auto scroll, and responsive layout. It works for all kinds of content—images, videos, and custom components. 

## Quick Links

- **Package**: [react-any-carousel](./packages/react-any-carousal) - The core React component.
- **Documentation**: [apps/docs](./apps/docs) - Detailed documentation and examples.
- **Demo**: [apps/web](./apps/web) - A playground to test the carousel.

## Features

- [x] Auto scroll with customisable interval.
- [x] Mobile & Tablet friendly with swipe gesture to scroll horizontally.
- [x] Works for Custom Components, Images, Videos.
- [x] Customisable Navigation Icons, plus standard nav icons out of the box.
- [x] Lightweight & Minimalistic.
- [x] Custom snapping behaviour.
- [x] Shift + Scroll Mouse Wheel supported for desktop devices.
- [x] Two finger scroll gesture supported for devices with touchpads.

## Getting Started

To use the carousel in your project, install the package:

```bash
npm install react-any-carousel
```

See the [package README](./packages/react-any-carousal/README.md) for detailed usage instructions.

## Customization

### Custom Curves (Scroll Easing)

You can customize the scroll animation curve using the `scrollEasing` prop. It accepts a standard CSS `transition-timing-function` string, such as a `cubic-bezier` value.

```tsx
<Carousel
  duration={800}
  scrollEasing="cubic-bezier(0.25, 1, 0.5, 1)" // Custom ease-out-quart-ish curve
>
  {/* items */}
</Carousel>
```

Common curve values you might use:
- **Linear**: `linear`
- **Ease In**: `cubic-bezier(0.4, 0, 1, 1)`
- **Ease Out**: `cubic-bezier(0, 0, 0.2, 1)`
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Custom Icons

You can replace the default navigation icons with your own components using the `iconOptions` prop.

```tsx
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Example using react-icons

<Carousel
  iconOptions={{
    icon: <FaArrowRight />, // Your custom icon component
    iconStyles: {
      color: "#FF5733",
      fontSize: "2rem",
      backgroundColor: "white",
      borderRadius: "50%",
      padding: "8px"
    }
  }}
>
  {/* items */}
</Carousel>
```

## Development

This project is a monorepo managed by [Turborepo](https://turbo.build/).

### Build

To build all apps and packages:

```bash
pnpm build
```

### Develop

To develop all apps and packages:

```bash
pnpm dev
```
