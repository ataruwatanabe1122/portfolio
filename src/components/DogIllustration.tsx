export default function DogIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="犬のイラスト"
    >
      {/* 尻尾 */}
      <path
        d="M148 148 Q175 130 178 108 Q181 90 168 88 Q158 87 155 100 Q152 118 148 148Z"
        fill="#c4956a"
      />
      <path
        d="M152 148 Q174 132 176 112 Q178 97 168 95 Q161 94 158 106 Q155 122 152 148Z"
        fill="#e8c99a"
      />

      {/* 胴体 */}
      <ellipse cx="100" cy="155" rx="52" ry="42" fill="#c4956a" />
      <ellipse cx="100" cy="155" rx="36" ry="30" fill="#e8c99a" />

      {/* 後ろ足 */}
      <ellipse cx="68" cy="192" rx="16" ry="10" fill="#c4956a" />
      <ellipse cx="132" cy="192" rx="16" ry="10" fill="#c4956a" />
      <ellipse cx="68" cy="194" rx="12" ry="7" fill="#a87848" />
      <ellipse cx="132" cy="194" rx="12" ry="7" fill="#a87848" />

      {/* 前足 */}
      <rect x="78" y="178" width="18" height="28" rx="9" fill="#c4956a" />
      <rect x="104" y="178" width="18" height="28" rx="9" fill="#c4956a" />
      <ellipse cx="87" cy="206" rx="10" ry="6" fill="#a87848" />
      <ellipse cx="113" cy="206" rx="10" ry="6" fill="#a87848" />

      {/* 首 */}
      <ellipse cx="100" cy="118" rx="26" ry="20" fill="#c4956a" />

      {/* 頭 */}
      <ellipse cx="100" cy="90" rx="38" ry="34" fill="#c4956a" />

      {/* 耳（左） */}
      <path d="M66 72 Q54 50 62 38 Q72 28 82 48 L78 70Z" fill="#a87848" />
      <path d="M70 70 Q61 52 67 43 Q74 35 80 52 L76 69Z" fill="#8a6035" />

      {/* 耳（右） */}
      <path d="M134 72 Q146 50 138 38 Q128 28 118 48 L122 70Z" fill="#a87848" />
      <path d="M130 70 Q139 52 133 43 Q126 35 120 52 L124 69Z" fill="#8a6035" />

      {/* 顔の白い部分（マズル） */}
      <ellipse cx="100" cy="98" rx="22" ry="18" fill="#f0dfc0" />

      {/* 目（左） */}
      <circle cx="86" cy="82" r="6" fill="#3d2b1f" />
      <circle cx="88" cy="80" r="2" fill="white" />

      {/* 目（右） */}
      <circle cx="114" cy="82" r="6" fill="#3d2b1f" />
      <circle cx="116" cy="80" r="2" fill="white" />

      {/* 鼻 */}
      <ellipse cx="100" cy="92" rx="7" ry="5" fill="#3d2b1f" />
      <ellipse cx="98" cy="90" rx="2" ry="1.5" fill="#6b4c38" />

      {/* 口 */}
      <path d="M94 98 Q100 104 106 98" stroke="#a87848" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ほっぺ */}
      <ellipse cx="78" cy="94" rx="8" ry="5" fill="#e8a87c" opacity="0.5" />
      <ellipse cx="122" cy="94" rx="8" ry="5" fill="#e8a87c" opacity="0.5" />

      {/* 首輪 */}
      <rect x="76" y="112" width="48" height="10" rx="5" fill="#7c6a52" />
      <circle cx="100" cy="122" r="4" fill="#c4956a" stroke="#7c6a52" strokeWidth="1" />
    </svg>
  );
}
