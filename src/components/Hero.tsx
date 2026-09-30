import React from 'react';
import { Phone, MessageSquare, Mail, ShieldCheck, Scale, ArrowDown, MapPin } from 'lucide-react';
import heroLawOfficeImg from '../assets/images/hero_law_office_egypt_1790752553685.jpg';
import { LegalScalesIcon } from './Logo';
import { usePhoneModal } from '../context/PhoneModalContext';

export const Hero: React.FC = () => {
  const { handleCallClick } = usePhoneModal();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-36 overflow-hidden bg-[#0a1128]"
    >
      {/* Background Photography with Sophisticated Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroLawOfficeImg}
          alt="مكتب صابرين أحمد علي للمحاماة والاستشارات القانونية"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Layered gradients for legibility & deep navy atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/90 to-[#0a1128]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/85 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.08)_0,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Dignified Scales Emblem Motif */}
        <div className="mb-6 p-3.5 rounded-2xl bg-[#0f1d3d]/80 border border-[#c5a880]/30 shadow-xl shadow-black/40 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
          <LegalScalesIcon className="w-14 h-14 sm:w-16 sm:h-16" color="#C5A880" />
        </div>

        {/* Lawyer Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-cairo mb-3 drop-shadow-md">
          صابرين أحمد علي
        </h1>

        {/* Title */}
        <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 mb-6 backdrop-blur-sm">
          <Scale className="w-4 h-4 text-[#c5a880]" />
          <span className="text-base sm:text-lg font-bold text-[#dfc298] font-cairo tracking-wide">
            محامية
          </span>
          <span className="w-1 h-1 rounded-full bg-[#c5a880]/60" />
          <span className="text-xs sm:text-sm font-medium text-slate-300">
            استشارات قانونية ودفاع قضائي
          </span>
        </div>

        {/* Hero Paragraph */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-slate-200 font-normal leading-relaxed mb-10 text-balance">
          خدمات قانونية واستشارات متخصصة في القضايا الجنائية والمدنية ومجلس الدولة ومحاكم الأسرة.
        </p>

        {/* Prominent Action Buttons */}
        <div className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          {/* Call Now Button */}
          <a
            href="tel:+201011824122"
            onClick={handleCallClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-[#0a1128] bg-gradient-to-r from-[#c5a880] via-[#dfc298] to-[#c5a880] hover:from-[#d5b890] hover:to-[#dfc298] shadow-lg shadow-[#c5a880]/20 hover:shadow-[#c5a880]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
          >
            <Phone className="w-5 h-5 shrink-0" />
            <span className="whitespace-nowrap">اتصل الآن</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/201011824122"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-[#25D366] hover:bg-[#20b858] shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
          >
            <MessageSquare className="w-5 h-5 shrink-0" />
            <span className="whitespace-nowrap">واتساب</span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:sabreenavocato2022333@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base sm:text-lg font-semibold text-[#dfc298] bg-[#0f1d3d]/90 border border-[#c5a880]/40 hover:bg-[#c5a880] hover:text-[#0a1128] shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
          >
            <Mail className="w-5 h-5 shrink-0" />
            <span className="whitespace-nowrap">راسل عبر البريد الإلكتروني</span>
          </a>
        </div>

        {/* Subtle Quick Contact / Practice Scope Bar */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#0f1d3d]/70 border border-[#c5a880]/20 backdrop-blur-md">
          <a
            href="tel:+201011824122"
            onClick={handleCallClick}
            className="flex items-center justify-center gap-2.5 p-2 rounded-lg text-slate-300 hover:text-[#c5a880] hover:bg-white/5 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
            <div className="text-right">
              <div className="text-[11px] text-slate-400">الهاتف</div>
              <div
                dir="ltr"
                style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                className="text-xs sm:text-sm font-bold text-white font-mono"
              >
                01011824122
              </div>
            </div>
          </a>

          <a
            href="mailto:sabreenavocato2022333@gmail.com"
            className="flex items-center justify-center gap-2.5 p-2 rounded-lg text-slate-300 hover:text-[#c5a880] hover:bg-white/5 transition-colors"
          >
            <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
            <div className="text-right">
              <div className="text-[11px] text-slate-400">البريد الإلكتروني</div>
              <div
                dir="ltr"
                style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                className="text-xs sm:text-sm font-medium text-white truncate max-w-[170px]"
              >
                sabreenavocato2022333@gmail.com
              </div>
            </div>
          </a>

          <div className="flex items-center justify-center gap-2.5 p-2 rounded-lg text-slate-300">
            <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
            <div className="text-right">
              <div className="text-[11px] text-slate-400">نطاق العمل</div>
              <div className="text-xs sm:text-sm font-medium text-white">
                جمهورية مصر العربية
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="mt-12 inline-flex flex-col items-center text-slate-400 hover:text-[#c5a880] transition-colors focus:outline-none"
          aria-label="الانتقال إلى قسم عن المحامية"
        >
          <span className="text-xs font-medium mb-1">تعرف على المكتب</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#c5a880]" />
        </a>
      </div>
    </section>
  );
};
