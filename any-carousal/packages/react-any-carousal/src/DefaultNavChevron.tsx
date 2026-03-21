"use client";

/** Left chevron for “previous”; `.nav-button.right` rotates the button 180° for “next”. */
export function DefaultNavChevron() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
      className="carousel-default-chevron"
    >
      <path
        d="M15 7L9 12l6 5"
        stroke="currentColor"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
