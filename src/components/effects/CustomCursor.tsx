'use client';

const CURSOR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 3 L4 19 L8.5 15.5 L11.5 21.5 L14.5 20 L11.5 14 L18 14 Z" fill="#000000" stroke="#64FFDA" stroke-width="1.2" stroke-linejoin="round"/></svg>`;
const CURSOR_URL = `url("data:image/svg+xml,${encodeURIComponent(CURSOR_SVG)}") 4 3, auto`;

export const CustomCursor = () => {
  return (
    <style>{`
      @media (hover: hover) {
        html { cursor: ${CURSOR_URL}; }
        *, *::before, *::after { cursor: inherit; }
        a, button, [data-cursor="pointer"], input, select, textarea, [role="button"] {
          cursor: pointer !important;
        }
      }
    `}</style>
  );
};
