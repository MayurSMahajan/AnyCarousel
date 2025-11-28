"use client";
import React, { useState } from "react";

interface CodeSnippetProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    duration: number;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ x1, y1, x2, y2, duration }) => {
    const [isCopied, setIsCopied] = useState(false);

    const codeString = `<Carousel
    iconOptions={{
        icon: <ChevronIcon color="white" />,
        iconStyles: {
            backgroundColor: "black",
            color: "white",
        },
    }}
    scrollOffset={600}
    scrollEasing={\`cubic-bezier(\${${x1}}, \${${y1}}, \${${x2}}, \${${y2}})\`}
    scrollSnapType='center'
    duration={${duration}}
>
    {largeImageList.map((item, i) => (
        <PlaygroundImageComponent key={i} imageUrl={item.imageUrl} />
    ))}
</Carousel>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(codeString).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <div className="relative bg-[#1e1e1e] rounded-lg overflow-hidden border border-zinc-700 font-mono text-sm shadow-lg mt-4">
            <div className="flex justify-between items-center px-4 py-2 bg-[#2d2d2d] border-b border-zinc-700">
                <span className="text-zinc-400 text-xs">tsx</span>
                <button
                    onClick={handleCopy}
                    className="text-zinc-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                >
                    {isCopied ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span className="text-green-500">Copied!</span>
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                            Copy
                        </>
                    )}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="text-zinc-300 leading-relaxed">
                    <code>
                        <span className="text-blue-400">&lt;Carousel</span>
                        {'\n    '}
                        <span className="text-sky-300">iconOptions</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-300">&#123;&#123;</span>
                        {'\n        '}
                        <span className="text-sky-300">icon</span>
                        <span className="text-white">: </span>
                        <span className="text-blue-400">&lt;ChevronIcon</span> <span className="text-sky-300">color</span><span className="text-white">=</span><span className="text-orange-300">"white"</span> <span className="text-blue-400">/&gt;</span>,
                        {'\n        '}
                        <span className="text-sky-300">iconStyles</span>
                        <span className="text-white">: </span>
                        <span className="text-yellow-300">&#123;</span>
                        {'\n            '}
                        <span className="text-sky-300">backgroundColor</span>
                        <span className="text-white">: </span>
                        <span className="text-orange-300">"black"</span>,
                        {'\n            '}
                        <span className="text-sky-300">color</span>
                        <span className="text-white">: </span>
                        <span className="text-orange-300">"white"</span>,
                        {'\n        '}
                        <span className="text-yellow-300">&#125;</span>,
                        {'\n    '}
                        <span className="text-yellow-300">&#125;&#125;</span>
                        {'\n    '}
                        <span className="text-sky-300">scrollOffset</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-300">&#123;</span>
                        <span className="text-purple-400">600</span>
                        <span className="text-yellow-300">&#125;</span>
                        {'\n    '}
                        <span className="text-sky-300">scrollEasing</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-300">&#123;</span>
                        <span className="text-orange-300">`cubic-bezier({x1}, {y1}, {x2}, {y2})`</span>
                        <span className="text-yellow-300">&#125;</span>
                        {'\n    '}
                        <span className="text-sky-300">scrollSnapType</span>
                        <span className="text-white">=</span>
                        <span className="text-orange-300">'center'</span>
                        {'\n    '}
                        <span className="text-sky-300">duration</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-300">&#123;</span>
                        <span className="text-purple-400">{duration}</span>
                        <span className="text-yellow-300">&#125;</span>
                        {'\n'}
                        <span className="text-blue-400">&gt;</span>
                        {'\n    '}
                        <span className="text-yellow-300">&#123;</span>
                        <span className="text-white">largeImageList.</span>
                        <span className="text-yellow-200">map</span>
                        <span className="text-purple-300">((</span>
                        <span className="text-orange-300">item</span>, <span className="text-orange-300">i</span>
                        <span className="text-purple-300">)</span> <span className="text-blue-400">=&gt;</span> <span className="text-purple-300">(</span>
                        {'\n        '}
                        <span className="text-blue-400">&lt;PlaygroundImageComponent</span> <span className="text-sky-300">key</span><span className="text-white">=</span><span className="text-yellow-300">&#123;</span><span className="text-orange-300">i</span><span className="text-yellow-300">&#125;</span> <span className="text-sky-300">imageUrl</span><span className="text-white">=</span><span className="text-yellow-300">&#123;</span><span className="text-orange-300">item.imageUrl</span><span className="text-yellow-300">&#125;</span> <span className="text-blue-400">/&gt;</span>
                        {'\n    '}
                        <span className="text-purple-300">))</span>
                        <span className="text-yellow-300">&#125;</span>
                        {'\n'}
                        <span className="text-blue-400">&lt;/Carousel&gt;</span>
                    </code>
                </pre>
            </div>
        </div>
    );
};
