import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3 select-none"
      aria-label="التواصل الفوري عبر واتساب"
    >
      {/* Tooltip / Label */}
      <div
        className={`hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-[#0a1128]/95 border border-[#25D366]/40 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-90'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse ml-2" />
        <span>واتساب</span>
      </div>

      {/* Button */}
      <a
        href="https://wa.me/201011824122"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="تواصل مع صابرين أحمد علي عبر واتساب (01011824122)"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-40" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="0"
          fill="currentColor"
          className="relative z-10 transition-transform group-hover:rotate-12 duration-300"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 18.06c-1.49 0-2.94-.4-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.13 8.13 0 0 1-1.25-4.28c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.15-8.15 8.15zm4.49-6.13c-.25-.12-1.46-.72-1.69-.81-.22-.08-.39-.12-.55.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.55-1.33-.76-1.82c-.2-.48-.41-.41-.56-.42l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.3z" />
        </svg>
      </a>
    </aside>
  );
};
