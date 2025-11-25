"use client";

import React from "react";

type CubInfoCardProps = {
  imageUrl: string;
  species: string;
  weightAtBirth: string;
  heightAtBirth: string;
  funFact: string;
};

export const CubInfoCard = ({
  imageUrl,
  species,
  weightAtBirth,
  heightAtBirth,
  funFact,
}: CubInfoCardProps) => {
  return (
    <div
      className="relative min-h-[300px] aspect-[3/4] rounded-2xl overflow-hidden bg-cover bg-center text-white shadow-lg flex items-end border border-zinc-600"
      style={{
        width: "clamp(250px, 30vw, 400px)",
        backgroundImage: `url(${imageUrl})`,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-b from-transparent via-black/50 via-75% to-black/90">
        <h2 className="m-0 text-2xl">{species} Cub</h2>
        <div className="mb-4" style={{ fontSize: "clamp(0.75rem, 1.05vw, 1.4rem)" }}>
          <p className="my-1">Weight: {weightAtBirth}</p>
          <p className="my-1">Height: {heightAtBirth}</p>
          <p className="mt-2 italic">{funFact}</p>
        </div>
      </div>
    </div>
  );
};