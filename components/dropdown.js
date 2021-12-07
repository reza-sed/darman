import React from "react";

export default function Dropdown({ name }) {
  return (
    <span className="mr-2">
      <button
        type="button"
        className="dropdown"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <span className="text-xs">{name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      </button>
    </span>
  );
}
