import React from "react";

export default function Page(): any {
    return (
        <div className="p-8 max-w-4xl mx-auto font-sans text-foreground">
            <header className="mb-12 border-b border-border pb-8">
                <h1 className="text-4xl font-bold mb-4 tracking-tight">AnyCarousel Docs</h1>
                <p className="text-xl text-muted-foreground">
                    A lightweight, powerful, and highly adaptable carousel component for React.
                </p>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Installation</h2>
                <div className="bg-muted border border-border p-4 rounded-lg font-mono text-sm text-foreground">
                    npm install react-any-carousel
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Basic Usage</h2>
                <pre className="bg-muted text-foreground p-4 rounded-lg overflow-x-auto font-mono text-sm border border-border">
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
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>🚀 <strong className="text-foreground">Lightweight & Minimalistic</strong>: Zero bloat, just the essentials.</li>
                    <li>📱 <strong className="text-foreground">Mobile & Tablet Friendly</strong>: Smooth swipe gestures.</li>
                    <li>🧩 <strong className="text-foreground">Content Agnostic</strong>: Works with Images, Videos, and Custom Components.</li>
                    <li>🎯 <strong className="text-foreground">Custom Snapping</strong>: Control snap behavior (`start`, `center`, `end`).</li>
                    <li>⏳ <strong className="text-foreground">Auto Scroll</strong>: Customizable auto-slide interval.</li>
                    <li>🎨 <strong className="text-foreground">Theming</strong>: Built-in light and dark themes.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Props API</h2>
                <div className="overflow-x-auto border border-border rounded-lg">
                    <table className="min-w-full text-left text-sm">
                        <thead className="bg-muted border-b border-border">
                            <tr>
                                <th className="p-3 font-semibold text-foreground">Prop</th>
                                <th className="p-3 font-semibold text-foreground">Type</th>
                                <th className="p-3 font-semibold text-foreground">Default</th>
                                <th className="p-3 font-semibold text-foreground">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                            <tr>
                                <td className="p-3 font-mono text-primary font-medium">children</td>
                                <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                                <td className="p-3 text-muted-foreground italic">Required</td>
                                <td className="p-3 text-foreground">The content to display.</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-primary font-medium">theme</td>
                                <td className="p-3 font-mono text-muted-foreground">"light" | "dark"</td>
                                <td className="p-3 font-mono text-muted-foreground">"light"</td>
                                <td className="p-3 text-foreground">Sets the theme (icon colors).</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-primary font-medium">scrollSnapType</td>
                                <td className="p-3 font-mono text-muted-foreground">"start" | "center" | "end" | "none"</td>
                                <td className="p-3 text-muted-foreground">-</td>
                                <td className="p-3 text-foreground">CSS scroll-snap behavior.</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-primary font-medium">scrollOffset</td>
                                <td className="p-3 font-mono text-muted-foreground">number</td>
                                <td className="p-3 text-muted-foreground">-</td>
                                <td className="p-3 text-foreground">Scroll amount per navigation.</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-primary font-medium">autoSlideInterval</td>
                                <td className="p-3 font-mono text-muted-foreground">number</td>
                                <td className="p-3 text-muted-foreground">-</td>
                                <td className="p-3 text-foreground">Auto-scroll interval in ms.</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-primary font-medium">duration</td>
                                <td className="p-3 font-mono text-muted-foreground">number</td>
                                <td className="p-3 font-mono text-muted-foreground">600</td>
                                <td className="p-3 text-foreground">Transition duration in ms.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
