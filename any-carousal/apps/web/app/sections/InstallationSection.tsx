"use client";
import React, { useState } from "react";

const InstallCommand = ({ label, command }: { label: string; command: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div>
            <p className="text-gray-500 text-sm mb-2 font-mono">{label}</p>
            <div className="bg-black p-3 rounded border border-zinc-700 font-mono text-gray-300 text-sm flex justify-between items-center group">
                <span>{command}</span>
                <button
                    onClick={handleCopy}
                    className="ml-4 p-1.5 rounded-md hover:bg-zinc-800 text-gray-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    aria-label="Copy command"
                    title="Copy to clipboard"
                >
                    {copied ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export const InstallationSection = () => {
    return (
        <section id="installation-section" className="py-20 px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Installation</h2>
            <div className="bg-zinc-900 rounded-lg p-6 max-w-xl mx-auto text-left overflow-x-auto border border-zinc-800 shadow-lg">
                <div className="flex flex-col gap-4">
                    <InstallCommand label="npm" command="npm install react-any-carousel" />
                    <InstallCommand label="yarn" command="yarn add react-any-carousel" />
                    <InstallCommand label="pnpm" command="pnpm add react-any-carousel" />
                </div>
            </div>
        </section>
    );
};
