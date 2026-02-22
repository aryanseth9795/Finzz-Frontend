export default function ChatAppSvg() {
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
      <path
        d="M25 65 L15 75 L25 85"
        stroke="#0F172A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="64" cy="75" r="20" fill="#DBEAFE" />
      <text
        x="64"
        y="81"
        fontFamily="Inter, sans-serif"
        fontSize="18"
        fontWeight="600"
        fill="#2563EB"
        textAnchor="middle"
      >P</text>
      <text
        x="96"
        y="70"
        fontFamily="Inter, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="#0F172A"
      >
        Priya Patel
      </text>
      <text
        x="96"
        y="88"
        fontFamily="Inter, sans-serif"
        fontSize="14"
        fill="#10B981"
      >
        Settled up
      </text>

      {/* Date Divider */}
      <rect x="145" y="130" width="100" height="28" rx="14" fill="#E2E8F0" />
      <text
        x="195"
        y="148"
        fontFamily="Inter, sans-serif"
        fontSize="12"
        fontWeight="600"
        fill="#64748B"
        textAnchor="middle"
      >
        Today
      </text>

      {/* Chat Bubble Left (Expense Added) */}
      <g transform="translate(24, 180)">
        <rect x="0" y="0" width="280" height="110" rx="20" fill="#FFFFFF" />
        <path d="M0 80 L0 100 L20 100 Z" fill="#FFFFFF" />
        <rect x="16" y="16" width="248" height="78" rx="12" fill="#F1F5F9" />
        <text
          x="32"
          y="44"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fontWeight="600"
          fill="#0F172A"
        >
          ☕ Coffee run
        </text>
        <text
          x="32"
          y="76"
          fontFamily="Inter, sans-serif"
          fontSize="24"
          fontWeight="800"
          fill="#0F172A"
        >
          ₹650
        </text>
        <text
          x="250"
          y="44"
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fill="#64748B"
          textAnchor="end"
        >
          2:30 PM
        </text>
        <rect x="180" y="60" width="70" height="24" rx="12" fill="#ECFDF5" />
        <text
          x="215"
          y="76"
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fontWeight="600"
          fill="#059669"
          textAnchor="middle"
        >
          Verified
        </text>
      </g>

      {/* Chat Bubble Right (Payment Received) */}
      <g transform="translate(86, 310)">
        <rect x="0" y="0" width="280" height="110" rx="20" fill="#2563EB" />
        <path d="M280 80 L280 100 L260 100 Z" fill="#2563EB" />
        <rect x="16" y="16" width="248" height="78" rx="12" fill="#1D4ED8" />
        <text
          x="32"
          y="44"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fontWeight="600"
          fill="#FFFFFF"
        >
          💸 Payment Sent
        </text>
        <text
          x="32"
          y="76"
          fontFamily="Inter, sans-serif"
          fontSize="24"
          fontWeight="800"
          fill="#FFFFFF"
        >
          ₹650
        </text>
        <text
          x="250"
          y="44"
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fill="#BFDBFE"
          textAnchor="end"
        >
          3:15 PM
        </text>
        <rect x="180" y="60" width="70" height="24" rx="12" fill="#3B82F6" />
        <text
          x="215"
          y="76"
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fontWeight="600"
          fill="#EFF6FF"
          textAnchor="middle"
        >
          Verified
        </text>
      </g>

      {/* Input Area */}
      <rect x="0" y="750" width="390" height="94" fill="#FFFFFF" />
      <rect x="24" y="766" width="280" height="48" rx="24" fill="#F1F5F9" />
      <text
        x="48"
        y="794"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fill="#94A3B8"
      >
        Type a message...
      </text>

      <circle cx="342" cy="790" r="24" fill="#2563EB" />
      <path d="M336 786 L348 790 L336 794 Z" fill="#FFFFFF" />
    </svg>
  );
}
