import React from "react";

export default function Page(): any {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto font-sans text-zinc-900 bg-zinc-50">
      <header className="mb-12 border-b border-zinc-200 pb-8">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">AnyCarousel Docs</h1>
        <p className="text-xl text-zinc-700">
          A lightweight, powerful, and highly adaptable carousel component for React.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-zinc-900">Installation</h2>
        <div className="bg-zinc-100 border border-zinc-200 p-4 rounded-lg font-mono text-sm text-zinc-800">
          npm install react-any-carousel
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-zinc-900">Basic Usage</h2>
        <pre className="bg-zinc-950 text-zinc-50 p-4 rounded-lg overflow-x-auto font-mono text-sm border border-zinc-800">
          {`import { Carousel } from 'react-any-carousel';

function App() {
  return (
    <Carousel
      scrollSnapType="center"
      scrollOffset={300}
      duration={600}
    >
      <div className="card">Item 1</div>
      <div className="card">Item 2</div>
      <div className="card">Item 3</div>
    </Carousel>
  );
}`}
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-zinc-900">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-zinc-700">
          <li>🚀 <strong className="text-zinc-900">Lightweight & Minimalistic</strong>: Zero bloat, just the essentials.</li>
          <li>📱 <strong className="text-zinc-900">Mobile & Tablet Friendly</strong>: Smooth swipe gestures.</li>
          <li>🧩 <strong className="text-zinc-900">Content Agnostic</strong>: Works with Images, Videos, and Custom Components.</li>
          <li>🎯 <strong className="text-zinc-900">Custom Snapping</strong>: Control snap behavior (`start`, `center`, `end`).</li>
          <li>⏳ <strong className="text-zinc-900">Auto Scroll</strong>: Customizable auto-slide interval.</li>
          <li>🎨 <strong className="text-zinc-900">Theming</strong>: Built-in light and dark themes.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-zinc-900">Props API</h2>
        <div className="overflow-x-auto border border-zinc-200 rounded-lg">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-zinc-50 border-b border-zinc-200">
              <tr>
                <th className="p-3 font-semibold text-zinc-900">Prop</th>
                <th className="p-3 font-semibold text-zinc-900">Type</th>
                <th className="p-3 font-semibold text-zinc-900">Default</th>
                <th className="p-3 font-semibold text-zinc-900">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white">
              <tr>
                <td className="p-3 font-mono text-blue-700 font-medium">children</td>
                <td className="p-3 font-mono text-zinc-600">ReactNode</td>
                <td className="p-3 text-zinc-500 italic">Required</td>
                <td className="p-3 text-zinc-700">The content to display.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-blue-700 font-medium">theme</td>
                <td className="p-3 font-mono text-zinc-600">"light" | "dark"</td>
                <td className="p-3 font-mono text-zinc-600">"light"</td>
                <td className="p-3 text-zinc-700">Sets the theme (icon colors).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-blue-700 font-medium">scrollSnapType</td>
                <td className="p-3 font-mono text-zinc-600">"start" | "center" | "end" | "none"</td>
                <td className="p-3 text-zinc-500">-</td>
                <td className="p-3 text-zinc-700">CSS scroll-snap behavior.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-blue-700 font-medium">scrollOffset</td>
                <td className="p-3 font-mono text-zinc-600">number</td>
                <td className="p-3 text-zinc-500">-</td>
                <td className="p-3 text-zinc-700">Scroll amount per navigation.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-blue-700 font-medium">autoSlideInterval</td>
                <td className="p-3 font-mono text-zinc-600">number</td>
                <td className="p-3 text-zinc-500">-</td>
                <td className="p-3 text-zinc-700">Auto-scroll interval in ms.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-blue-700 font-medium">duration</td>
                <td className="p-3 font-mono text-zinc-600">number</td>
                <td className="p-3 font-mono text-zinc-600">600</td>
                <td className="p-3 text-zinc-700">Transition duration in ms.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}