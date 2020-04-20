import React from "react";

function HeartIcon(props) {
  const { width, height, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 26 25"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-1228 -28)">
          <g>
            <path fill="transparent" d="M0 0H1600V80H0z"></path>
            <path
              stroke={color}
              strokeWidth="2"
              d="M1241.026 31.537c1.026-1.246 2.314-2.044 3.884-2.389 3.75-.822 7.566 1.875 8.027 5.688.27 2.24-.342 4.265-1.547 6.131-1.09 1.686-2.526 3.049-4.047 4.328-.72.604-1.46 1.182-2.189 1.774-1.485 1.203-3.037 2.337-4.12 3.931-.435-.494-.819-1.04-1.305-1.467a142.747 142.747 0 00-3.88-3.261c-1.587-1.297-3.158-2.608-4.447-4.22-1.162-1.455-1.99-3.064-2.298-4.925-.608-3.67 1.494-7.06 5.005-7.905 2.644-.637 4.9.137 6.735 2.15.045.047.086.098.13.147.006.006.017.006.052.018"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default HeartIcon;
