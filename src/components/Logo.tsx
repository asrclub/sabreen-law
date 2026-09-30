import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'header';
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const LegalScalesIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-10',
  color = '#C5A880',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top finial / circular crown */}
      <circle cx="50" cy="14" r="5" fill={color} />
      
      {/* Central main upright column */}
      <rect x="47.5" y="18" width="5" height="66" rx="2.5" fill={color} />

      {/* Horizontal balance crossbar */}
      <rect x="18" y="28" width="64" height="4.5" rx="2.25" fill={color} />

      {/* Left scale suspension lines */}
      <path
        d="M24 31L14 55H34L24 31Z"
        stroke={color}
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Left scale pan base */}
      <path
        d="M13 55C13 61 35 61 35 55"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right scale suspension lines */}
      <path
        d="M76 31L66 55H86L76 31Z"
        stroke={color}
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right scale pan base */}
      <path
        d="M65 55C65 61 87 61 87 55"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Base platform */}
      <rect x="16" y="82" width="68" height="6" rx="3" fill={color} />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showSubtitle = true,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  };

  const titleSizes = {
    sm: 'text-base font-bold',
    md: 'text-lg lg:text-xl font-extrabold',
    lg: 'text-2xl lg:text-3xl font-extrabold',
  };

  const subtitleSizes = {
    sm: 'text-[11px]',
    md: 'text-xs lg:text-[13px]',
    lg: 'text-sm lg:text-base',
  };

  const isLight = variant === 'light'; // Light text for dark navy background
  const isHeader = variant === 'header';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="shrink-0 transition-transform duration-300 hover:scale-105">
        <LegalScalesIcon className={iconSizes[size]} color="#C5A880" />
      </div>

      <div className="flex flex-col justify-center text-right">
        <span
          className={`tracking-normal leading-tight font-cairo ${titleSizes[size]} ${
            isLight || isHeader ? 'text-white' : 'text-[#0e1b38]'
          }`}
        >
          صابرين أحمد علي
        </span>
        {showSubtitle && (
          <span
            className={`font-medium tracking-wide text-[#c5a880] font-cairo ${subtitleSizes[size]}`}
          >
            محامية واستشارات قانونية
          </span>
        )}
      </div>
    </div>
  );
};
