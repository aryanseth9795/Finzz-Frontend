export default function PoolAppSvg() {
  return (
    <svg
      viewBox="0 0 390 844"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-sm"
    >
      <rect width="390" height="844" rx="40" fill="#F8FAFC" />

      {/* Header Area */}
      <rect x="0" y="0" width="390" height="240" rx="40" fill="#2563EB" />
      <path d="M0 0 H390 V180 Q195 280 0 180 Z" fill="#1D4ED8" />

      {/* Back Button */}
      <path
        d="M30 60 L20 70 L30 80"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="60"
        y="76"
        fontFamily="Inter, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#FFFFFF"
      >
        Goa Trip
      </text>

      {/* Pool Total */}
      <text
        x="195"
        y="140"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fill="#BFDBFE"
        textAnchor="middle"
      >
        Total Pool Expense
      </text>
      <text
        x="195"
        y="186"
        fontFamily="Inter, sans-serif"
        fontSize="48"
        fontWeight="800"
        fill="#FFFFFF"
        textAnchor="middle"
      >
        ₹90,000
      </text>

      {/* Action Buttons */}
      <rect
        x="24"
        y="210"
        width="163"
        height="56"
        rx="16"
        fill="#FFFFFF"
        stroke="#E2E8F0"
      />
      <text
        x="105"
        y="244"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="#2563EB"
        textAnchor="middle"
      >
        Add Expense
      </text>

      <rect x="203" y="210" width="163" height="56" rx="16" fill="#2563EB" />
      <text
        x="284"
        y="244"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="#FFFFFF"
        textAnchor="middle"
      >
        Settle Up
      </text>

      {/* Members Section */}
      <text
        x="24"
        y="310"
        fontFamily="Inter, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="#0F172A"
      >
        Top Members
      </text>

      {/* Member 1 (You) */}
      <g transform="translate(0, 330)">
        <rect x="24" y="0" width="342" height="72" rx="16" fill="#FFFFFF" />
        <circle cx="50" cy="36" r="20" fill="#DBEAFE" />
        <text
          x="50"
          y="41"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="#2563EB"
          textAnchor="middle"
        >
          U
        </text>
        <text
          x="86"
          y="32"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="#0F172A"
        >
          You
        </text>
        <text
          x="86"
          y="52"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fill="#64748B"
        >
          Paid ₹35,000
        </text>
        <text
          x="350"
          y="32"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#10B981"
          textAnchor="end"
        >
          +₹5,000
        </text>
      </g>

      {/* Member 2 */}
      <g transform="translate(0, 412)">
        <rect x="24" y="0" width="342" height="72" rx="16" fill="#FFFFFF" />
        <circle cx="50" cy="36" r="20" fill="#FCE7F3" />
        <text
          x="50"
          y="41"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="#DB2777"
          textAnchor="middle"
        >R</text>
        <text
          x="86"
          y="32"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="#0F172A"
        >
          Rahul S.
        </text>
        <text
          x="86"
          y="52"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fill="#64748B"
        >
          Paid ₹55,000
        </text>
        <text
          x="350"
          y="32"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#10B981"
          textAnchor="end"
        >
          +₹25,000
        </text>
      </g>

      {/* Member 3 */}
      <g transform="translate(0, 494)">
        <rect x="24" y="0" width="342" height="72" rx="16" fill="#FFFFFF" />
        <circle cx="50" cy="36" r="20" fill="#FEF3C7" />
        <text
          x="50"
          y="41"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="#D97706"
          textAnchor="middle"
        >P</text>
        <text
          x="86"
          y="32"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="#0F172A"
        >
          Priya P.
        </text>
        <text
          x="86"
          y="52"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fill="#64748B"
        >
          Paid ₹0
        </text>
        <text
          x="350"
          y="32"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#EF4444"
          textAnchor="end"
        >
          -₹30,000
        </text>
      </g>
    </svg>
  );
}
