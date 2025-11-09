"use client";
import React from "react";
import { BaseImageContainer } from "./BaseImageContainer";

type PlaygroundImageComponentProps = {
    imageUrl: string;
    credit?: string;
};

export const PlaygroundImageComponent = ({
    imageUrl,
    credit,
}: PlaygroundImageComponentProps) => {
    return (
        <BaseImageContainer
            imageUrl={imageUrl}
            credit={credit}
            widthClass="w-[clamp(270px,45vw,600px)]"
        />
    );
};