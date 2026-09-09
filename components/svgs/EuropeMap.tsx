"use client";

import React, { useState } from "react";

type EuropeMapProps = {
  labels: {
    romania: string;
    hungary: string;
    moldova: string;
  };
};

const EuropeMap = ({ labels }: EuropeMapProps) => {
  const [countryHovered, setCountryHovered] = useState<string>("");

  const pathClasses =
    "fill-[#e2e8f0] stroke-[#e2e8f0] hover:fill-brand hover:stroke-brand cursor-pointer transition-colors duration-300";

  return (
    <div className="flex flex-col items-center w-full">
      <svg
        viewBox="0 0 75 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-lg drop-shadow-sm"
      >
        <g id="Group 12">
          <path
            className={pathClasses}
            d="M29.3999 2.29999L32.3999 4L32.8999 5.7L30 7L28.1 11.2L25.5 15.5L21.6 16.7L18.3999 16.4L14.7 18L12.8999 19L8.59998 17.8L4.59998 15.1L3 14.3L1.79993 12.2L1 12.1L2.29993 8.09999L1.19995 6.7H4L4.19995 4.09999L6.8999 5.79999L8.79993 6.39999L12.8999 5.7L13.2 4.39999L15.1 4.2L17.3999 3.29999L18 3.7L20.2999 2.89999L21.2999 1.39999L22.8999 1L28.3999 2.89999L29.3999 2.29999Z"
            strokeWidth="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onMouseEnter={() => setCountryHovered(labels.hungary)}
            onMouseLeave={() => setCountryHovered("")}
          />
          <path
            className={pathClasses}
            id="MD"
            d="M66.6001 20.7L65.3 17.8L65.5001 15.1L64.9 12.4L61.5001 8.59999L59.5001 6L57.7001 4.2L56.1001 3.5L57.2001 2.59999L60.4 2L64.4 3.89999L66.4 4.2L69.0001 5.89999L68.9 8L70.9 9L72.0001 11.6L74.0001 13.2L73.8 14.2L74.8 14.8L73.5001 15.3L70.5001 15.1L69.9 14.2L68.9 14.7L69.5001 15.8L68.4 17.9L67.8 20L66.6001 20.7Z"
            strokeWidth="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onMouseEnter={() => setCountryHovered(labels.moldova)}
            onMouseLeave={() => setCountryHovered("")}
          />
          <path
            className={pathClasses}
            id="RO"
            d="M54.1001 4.5L55.7001 5.2L57.5001 7L59.5001 9.59999L62.9 13.4L63.5001 16.1L63.3 18.8L64.6001 21.7L67.0001 22.9L69.3 21.8L71.7001 22.9L72.1001 24.6L69.8 25.9L68.2001 25.3L67.8 33L64.7001 32.3L60.7001 30L54.8 31.5L52.5001 33.1L44.9 32.7L40.9 31.8L39.0001 32.2L37.2001 29.6L36.2001 28.5L37.2001 27.4L35.9 26.7L34.4 28.1L31.3 26.2L30.6001 23.6L27.4 22.2L26.6001 20.1L23.6001 17.7L27.5001 16.5L30.1001 12.2L32.0001 8L34.9 6.7L36.9 5.29999L40.1001 6H43.3L45.8 7.59999L47.4 6.59999L51.0001 6L52.0001 4.5H54.1001Z"
            strokeWidth="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onMouseEnter={() => setCountryHovered(labels.romania)}
            onMouseLeave={() => setCountryHovered("")}
          />
        </g>
      </svg>
      <div className="h-6 mt-4 text-center">
        {countryHovered && (
          <p className="text-sm font-semibold text-brand tracking-wide">
            {countryHovered}
          </p>
        )}
      </div>
    </div>
  );
};

export default EuropeMap;
