import React from 'react';
import { Phone, MessageSquare, ArrowLeft, Shield } from 'lucide-react';
import { LegalScalesIcon } from './Logo';
import { usePhoneModal } from '../context/PhoneModalContext';

export const CTASection: React.FC = () => {
  const { handleCallClick } = usePhoneModal();

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a1128] via-[#0e1a38] to-[#0a1128] relative overflow-hidden border-t border-[#c5a880]/20">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.12)_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#c5a880]/15 border border-[#c5a880]/30 mb-6">
          <LegalScalesIcon className="w-10 h-10" color="#C5A880" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-cairo mb-4 text-balance">
          هل تحتاج إلى مشورة قانونية عاجلة أو تمثيل قضائي سديد؟
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-10 text-balance">
          لا تدع الوقت يفوتك في المواعيد القانونية المقررة. تواصل مباشرة مع الأستاذة صابرين أحمد علي لتحديد الموقف الإجرائي والشروع في صيانة حقوقك.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md sm:max-w-none mx-auto">
          <a
            href="tel:+201011824122"
            onClick={handleCallClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-[#0a1128] bg-gradient-to-r from-[#c5a880] to-[#dfc298] hover:from-[#d5b890] hover:to-[#eed0a6] shadow-xl shadow-[#c5a880]/20 transition-all duration-300 active:scale-98"
          >
            <Phone className="w-5 h-5 shrink-0" />
            <span className="whitespace-nowrap">اتصل الآن</span>
          </a>

          <a
            href="https://wa.me/201011824122"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-[#25D366] hover:bg-[#20b858] shadow-xl shadow-[#25D366]/20 transition-all duration-300 active:scale-98"
          >
            <MessageSquare className="w-5 h-5 shrink-0" />
            <span className="whitespace-nowrap">واتساب</span>
          </a>

          <a
            href="mailto:sabreenavocato2022333@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base sm:text-lg font-semibold text-[#dfc298] bg-[#0f1d3d]/90 border border-[#c5a880]/40 hover:bg-[#c5a880] hover:text-[#0a1128] shadow-xl transition-all duration-300 active:scale-98"
          >
            <span className="whitespace-nowrap">راسل عبر البريد الإلكتروني</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>سرية تامة مضمونة</span>
          </div>
          <span className="text-slate-600">·</span>
          <span>استجابة قانونية سريعة</span>
          <span className="text-slate-600">·</span>
          <span>حضور أمام كافة المحاكم</span>
        </div>
      </div>
    </section>
  );
};
