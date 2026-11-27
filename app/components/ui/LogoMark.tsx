import { useId } from "react";

export function LogoMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const uid = useId();
  const g = `${uid}-g`;
  const h = `${uid}-h`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Finzz"
    >
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4338CA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
        <radialGradient
          id={h}
          gradientUnits="userSpaceOnUse"
          cx="300"
          cy="260"
          r="520"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1024" height="1024" rx="230" fill={`url(#${g})`} />
      <rect width="1024" height="1024" rx="230" fill={`url(#${h})`} />
      <rect x="333" y="292" width="104" height="440" rx="52" fill="#fff" />
      <rect x="333" y="292" width="300" height="104" rx="52" fill="#fff" />
      <rect x="333" y="462" width="210" height="104" rx="52" fill="#fff" />
      <circle cx="639" cy="514" r="52" fill="#34D399" />
      <circle
        cx="639"
        cy="514"
        r="31"
        fill="none"
        stroke="#059669"
        strokeWidth="10"
      />
    </svg>
  );
}
