export default function HomeAppSvg() {
  return (
    <svg
      viewBox="0 0 390 844"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-sm"
    >
      <rect width="390" height="844" rx="40" fill="#F8FAFC" />

      {/* Header */}
      <rect x="0" y="0" width="390" height="110" rx="40" fill="#FFFFFF" />
      <text
        x="24"
        y="80"
        fontFamily="Outfit, sans-serif"
        fontSize="32"
        fontWeight="800"
        fill="#2563EB"
        fontStyle="italic"
      >
        Finzz
      </text>

      {/* Search Bar */}
      <rect
        x="24"
        y="125"
        width="342"
        height="48"
        rx="12"
        fill="#FFFFFF"
        stroke="#E2E8F0"
      />
      <circle cx="44" cy="149" r="8" stroke="#94A3B8" strokeWidth="2" />
      <line
        x1="50"
        y1="155"
        x2="56"
        y2="161"
        stroke="#94A3B8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="68"
        y="154"
        fontFamily="Inter, sans-serif"
        fontSize="15"
        fill="#94A3B8"
      >
        Search chats...
      </text>

      {/* List Items */}
      {/* Item 1 */}
      <g transform="translate(0, 190)">
        <rect x="24" y="0" width="342" height="80" rx="16" fill="#FFFFFF" />
        <circle cx="56" cy="40" r="24" fill="#DBEAFE" />
        <text
          x="56"
          y="46"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fontWeight="600"
          fill="#2563EB"
          textAnchor="middle"
        >R</text>
        <text
          x="96"
          y="34"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="#0F172A"
        >
          Rahul Sharma
        </text>
        <text
          x="96"
          y="56"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fill="#64748B"
        >
          Paid for dinner
        </text>
        <text
          x="350"
          y="34"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#10B981"
          textAnchor="end"
        >
          +₹3,500
        </text>
        <rect x="270" y="44" width="80" height="24" rx="12" fill="#ECFDF5" />
        <text
          x="310"
          y="60"
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fontWeight="600"
          fill="#059669"
          textAnchor="middle"
        >
          To Pay
        </text>
      </g>

      {/* Item 2 */}
      <g transform="translate(0, 280)">
        <rect x="24" y="0" width="342" height="80" rx="16" fill="#FFFFFF" />
        <circle cx="56" cy="40" r="24" fill="#FCE7F3" />
        <text
          x="56"
          y="46"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fontWeight="600"
          fill="#DB2777"
          textAnchor="middle"
        >G</text>
        <text
          x="96"
          y="34"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="#0F172A"
        >
          Goa Trip Pool
        </text>
        <text
          x="96"
          y="56"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fill="#64748B"
        >
          Hotel booking
        </text>
        <text
          x="350"
          y="34"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#EF4444"
          textAnchor="end"
        >
          -₹8,500
        </text>
      </g>

      {/* Item 3 */}
      <g transform="translate(0, 370)">
        <rect x="24" y="0" width="342" height="80" rx="16" fill="#FFFFFF" />
        <circle cx="56" cy="40" r="24" fill="#FEF3C7" />
        <text
          x="56"
          y="46"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fontWeight="600"
          fill="#D97706"
          textAnchor="middle"
        >P</text>
        <text
          x="96"
          y="34"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="#0F172A"
        >
          Priya Patel
        </text>
        <text
          x="96"
          y="56"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fill="#64748B"
        >
          Coffee run
        </text>
        <text
          x="350"
          y="34"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#10B981"
          textAnchor="end"
        >
          +₹650
        </text>
      </g>

      {/* Item 4 */}
      <g transform="translate(0, 460)">
        <rect x="24" y="0" width="342" height="80" rx="16" fill="#FFFFFF" />
        <circle cx="56" cy="40" r="24" fill="#E0E7FF" />
        <text
          x="56"
          y="46"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fontWeight="600"
          fill="#4F46E5"
          textAnchor="middle"
        >
          A
        </text>
        <text
          x="96"
          y="34"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="#0F172A"
        >
          Apartment Rent
        </text>
        <text
          x="96"
          y="56"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fill="#64748B"
        >
          Monthly utilities
        </text>
        <text
          x="350"
          y="34"
          fontFamily="Inter, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#EF4444"
          textAnchor="end"
        >
          -₹25,000
        </text>
      </g>

      {/* Floating Action Button */}
      <circle cx="330" cy="740" r="28" fill="#2563EB" />
      <line
        x1="330"
        y1="728"
        x2="330"
        y2="752"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="318"
        y1="740"
        x2="342"
        y2="740"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
