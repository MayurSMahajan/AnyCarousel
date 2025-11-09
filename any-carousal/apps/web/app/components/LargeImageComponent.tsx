"use client";
import React from "react";
import { BaseImageContainer } from "./BaseImageContainer";

type LargeImageComponentProps = {
  imageUrl: string;
  credit?: string;
};

export const LargeImageComponent = ({
  imageUrl,
  credit,
}: LargeImageComponentProps) => {
  return (
    <BaseImageContainer
      imageUrl={imageUrl}
      credit={credit}
      widthClass="w-[clamp(270px,80vw,1150px)]"
    />
  );
};