import React, { createContext, useContext, useState } from 'react';
import { Phone, Copy, Check, X } from 'lucide-react';

interface PhoneModalContextType {
  openPhoneModal: () => void;
  closePhoneModal: () => void;
  handleCallClick: (e: React.MouseEvent) => void;
}

const PhoneModalContext = createContext<PhoneModalContextType | undefined>(undefined);

export const usePhoneModal = () => {
  const context = useContext(PhoneModalContext);
  if (!context) {
    throw new Error('usePhoneModal must be used within a PhoneModalProvider');
  }
  return context;
};

const PHONE_NUMBER = '01011824122';
const TEL_LINK = 'tel:+201011824122';

export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  const userAgent = navigator.userAgent || navigator.vendor || '';
  const isTouchMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isSmallScreen = window.innerWidth <= 768 && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  return isTouchMobile || isSmallScreen;
};

export const PhoneModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const openPhoneModal = () => {
    setCopied(false);
    setIsOpen(true);
  };

  const closePhoneModal = () => {
    setIsOpen(false);
    setCopied(false);
  };

  const handleCallClick = (e: React.MouseEvent) => {
    if (isMobileDevice()) {
      // On mobile, allow the natural tel:+201011824122 link to open phone dialer directly
      return;
    }

    // On desktop, prevent default tel: navigation to avoid "Pick an app" dialog
    e.preventDefault();
    openPhoneModal();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = PHONE_NUMBER;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };

  return (
    <PhoneModalContext.Provider value={{ openPhoneModal, closePhoneModal, handleCallClick }}>
      {children}

      {/* Desktop Phone Call Popover / Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={closePhoneModal}
          role="dialog"
          aria-modal="true"
          aria-label="رقم الهاتف للتواصل"
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-[#0d1733] border border-[#c5a880]/50 p-6 text-center shadow-2xl shadow-black/60 transform transition-all duration-200 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePhoneModal}
              className="absolute top-4 left-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="إغلاق النافذة"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-[#c5a880]/15 text-[#c5a880] mx-auto flex items-center justify-center mb-3">
              <Phone className="w-6 h-6" />
            </div>

            {/* Title */}
            <div className="text-xs font-semibold text-slate-300 mb-1 font-cairo">
              رقم الهاتف:
            </div>

            {/* Exact Phone Number in LTR */}
            <div
              dir="ltr"
              style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
              className="text-3xl font-bold text-white font-mono tracking-wider mb-5 select-all"
            >
              {PHONE_NUMBER}
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 shadow-md ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-[#c5a880] to-[#dfc298] text-[#0a1128] hover:from-[#d5b890] hover:to-[#eed0a6] active:scale-98'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>تم نسخ رقم الهاتف</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>نسخ الرقم</span>
                </>
              )}
            </button>

            {/* Close hint */}
            <p className="text-[11px] text-slate-400 mt-4 font-cairo">
              الأستاذة صابرين أحمد علي - محامية واستشارات قانونية
            </p>
          </div>
        </div>
      )}
    </PhoneModalContext.Provider>
  );
};
