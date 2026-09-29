import React from "react";

const IconBase = ({ className = "", children }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    {children}
  </svg>
);

export const MiniPackageIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="6" y="26" width="28" height="24" rx="2" />
    <path d="M6 34h28M20 26v24" />
    <path d="M38 20h20l4 6v18a2 2 0 0 1-2 2H38V20Z" />
    <path d="M38 26h24M46 32l6 5 6-5" />
  </IconBase>
);

export const StandardPackageIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="8" y="22" width="20" height="20" rx="2" />
    <path d="M8 28h20M18 22v20" />
    <rect x="36" y="22" width="20" height="20" rx="2" />
    <path d="M36 28h20M46 22v20" />
    <path d="M44 30l3 3 5-6" />
  </IconBase>
);

export const BulkCargoIcon = ({ className }) => (
  <IconBase className={className}>
    <rect x="18" y="10" width="10" height="10" />
    <rect x="30" y="10" width="10" height="10" />
    <rect x="18" y="22" width="10" height="10" />
    <rect x="30" y="22" width="10" height="10" />
    <path d="M14 42h36M18 42v-6M40 42v-6" />
    <circle cx="20" cy="48" r="3" />
    <circle cx="38" cy="48" r="3" />
    <path d="M30 6v-4M28 4h4" />
  </IconBase>
);