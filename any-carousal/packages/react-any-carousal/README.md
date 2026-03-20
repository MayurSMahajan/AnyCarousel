# react-any-carousel

[![npm version](https://img.shields.io/npm/v/react-any-carousel)](https://www.npmjs.com/package/react-any-carousel)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/react-any-carousel)](https://bundlephobia.com/package/react-any-carousel)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A lightweight, zero-dependency\* carousel for React. Drop in any content — images, videos, cards, custom components — and get smooth scrolling, snap, auto-play, and touch/swipe out of the box.

> \*Only runtime dependency is `bezier-easing` (~0.4 KB).

## Installation

```bash
npm install react-any-carousel
# or
yarn add react-any-carousel
# or
pnpm add react-any-carousel
```

## Quick Start

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

---

## Props API

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | **Required** | Content to display in the carousel. |
| `theme` | `"light" \| "dark"` | `"light"` | Sets the theme (affects icon background/colors). |
| `scrollSnapType` | `"start" \| "center" \| "end" \| "none"` | `"start"` | CSS scroll-snap alignment for children. |
| `scrollOffset` | `number` | `1000` | Pixels to scroll per navigation click. |
| `autoSlideInterval` | `number` | `undefined` | Auto-scroll interval in ms. Disabled by default. |
| `duration` | `number` | `600` | Scroll animation duration in ms (100–5000). |
| `scrollEasing` | `string` | `"cubic-bezier(0.42, 0, 0.58, 1)"` | CSS timing function for scroll animation. |
| `iconOptions` | `IconOptions` | Built-in chevron | Custom navigation icon and styles. |
| `onSlideChange` | `(index: number) => void` | `undefined` | Callback fired when the most visible slide changes. |

### `IconOptions`

```ts
type IconOptions = {
  icon?: ReactNode;          // Custom icon element
  iconStyles?: CSSProperties; // Styles applied to the nav button
};
```

---

## Recipes

### Slide Change Tracking

```tsx
function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <p>Current slide: {activeSlide}</p>
      <Carousel onSlideChange={(index) => setActiveSlide(index)} scrollSnapType="center">
        <div>Slide 0</div>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    </>
  );
}
```

### Image Gallery

```tsx
<Carousel scrollSnapType="center" scrollOffset={400}>
  <img src="/photo-1.jpg" alt="Photo 1" style={{ width: 400, borderRadius: 12 }} />
  <img src="/photo-2.jpg" alt="Photo 2" style={{ width: 400, borderRadius: 12 }} />
  <img src="/photo-3.jpg" alt="Photo 3" style={{ width: 400, borderRadius: 12 }} />
</Carousel>
```

### Product Cards

```tsx
<Carousel scrollSnapType="start" scrollOffset={320} theme="dark">
  {products.map((p) => (
    <div key={p.id} style={{ width: 300, padding: 16 }}>
      <img src={p.image} alt={p.name} style={{ width: "100%" }} />
      <h3>{p.name}</h3>
      <p>${p.price}</p>
    </div>
  ))}
</Carousel>
```

### Auto-Play Hero Banner

```tsx
<Carousel autoSlideInterval={4000} duration={800} scrollSnapType="center">
  <div style={{ width: "100vw", height: 400, background: "#1a1a2e" }}>Slide 1</div>
  <div style={{ width: "100vw", height: 400, background: "#16213e" }}>Slide 2</div>
  <div style={{ width: "100vw", height: 400, background: "#0f3460" }}>Slide 3</div>
</Carousel>
```

### Testimonials

```tsx
<Carousel scrollSnapType="center" scrollOffset={500} duration={400}>
  {testimonials.map((t) => (
    <blockquote key={t.id} style={{ width: 480, padding: 24 }}>
      <p>"{t.quote}"</p>
      <cite>— {t.author}</cite>
    </blockquote>
  ))}
</Carousel>
```

### Video Carousel

```tsx
<Carousel scrollSnapType="start" scrollOffset={640}>
  <video width={640} controls src="/video-1.mp4" />
  <video width={640} controls src="/video-2.mp4" />
  <video width={640} controls src="/video-3.mp4" />
</Carousel>
```

### Custom Navigation Icons

```tsx
import { FaArrowRight } from "react-icons/fa";

<Carousel
  iconOptions={{
    icon: <FaArrowRight />,
    iconStyles: { color: "#FF5733", fontSize: "1.5rem", backgroundColor: "white" },
  }}
>
  {/* items */}
</Carousel>
```

### Custom Scroll Easing

```tsx
<Carousel
  duration={800}
  scrollEasing="cubic-bezier(0.25, 1, 0.5, 1)"
>
  {/* items with ease-out-quart animation */}
</Carousel>
```

Common curves:
- **Linear**: `cubic-bezier(0, 0, 1, 1)`
- **Ease In**: `cubic-bezier(0.4, 0, 1, 1)`
- **Ease Out**: `cubic-bezier(0, 0, 0.2, 1)`
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Dark Mode

```tsx
<Carousel theme="dark" scrollSnapType="center" scrollOffset={300}>
  <div className="card">Dark Item 1</div>
  <div className="card">Dark Item 2</div>
  <div className="card">Dark Item 3</div>
</Carousel>
```

---

## Features

- 🚀 **Lightweight** — Tiny bundle, single dependency (`bezier-easing`)
- 📱 **Touch & Swipe** — Native horizontal scroll on mobile and tablet
- 🧩 **Content Agnostic** — Images, videos, cards, any React component
- 🎯 **Scroll Snap** — `start`, `center`, `end`, or `none`
- ⏳ **Auto-Play** — Configurable interval, stops on user interaction
- 🎨 **Theming** — Light and dark themes out of the box
- 🖱️ **Desktop** — Shift+Scroll for horizontal navigation
- 👆 **Touchpad** — Two-finger scroll gesture supported
- 🎬 **Custom Easing** — Any `cubic-bezier()` for scroll animation
- ♿ **Accessible** — `role="region"`, `aria-label`, button semantics

---

## Why react-any-carousel?

| Feature | react-any-carousel | react-slick | embla-carousel | swiper |
|---|:---:|:---:|:---:|:---:|
| Bundle size | ~3 KB | ~45 KB | ~25 KB | ~140 KB |
| Zero config | ✅ | ❌ | ❌ | ❌ |
| Any content type | ✅ | ⚠️ | ✅ | ✅ |
| Native scroll | ✅ | ❌ | ❌ | ❌ |
| Auto-play | ✅ | ✅ | Plugin | ✅ |
| Scroll snap | ✅ | ❌ | ❌ | ✅ |
| Custom easing | ✅ | ❌ | ❌ | ❌ |
| Touch/swipe | ✅ | ✅ | ✅ | ✅ |
| TypeScript | ✅ | 🟡 (DefinitelyTyped) | ✅ | ✅ |
| Dependencies | 1 | 5+ | 0 | 0 |

---

## Development

This project is a monorepo managed by [Turborepo](https://turbo.build/).

```bash
# Install
npm install

# Dev
npm run dev

# Build
npm run build

# Test
npm test
```

## License

[MIT](./LICENSE)
