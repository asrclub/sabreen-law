import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MessageSquare, MapPin, Scale, ChevronUp } from 'lucide-react';
import { usePhoneModal } from '../context/PhoneModalContext';

export const Footer: React.FC = () => {
  const { handleCallClick } = usePhoneModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070d1e] text-slate-300 border-t border-[#c5a880]/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Profile */}
          <div className="lg:col-span-5 space-y-4 text-right">
            <Logo variant="header" size="md" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md pt-2">
              الأستاذة صابرين أحمد علي، محامية مصرية تقدم خدمات الدفاع القضائي والاستشارات المتخصصة في القضايا الجنائية والمدنية ومجلس الدولة ومحاكم الأسرة، مع الالتزام بأعلى مبادئ الشرف والأمانة القانونية.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/201011824122"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                aria-label="واتساب"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href="tel:+201011824122"
                onClick={handleCallClick}
                className="w-9 h-9 rounded-lg bg-[#c5a880]/10 text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0a1128] flex items-center justify-center transition-colors"
                aria-label="اتصل الآن"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="mailto:sabreenavocato2022333@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/5 text-slate-300 hover:bg-[#c5a880] hover:text-[#0a1128] flex items-center justify-center transition-colors"
                aria-label="راسل عبر البريد الإلكتروني"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Practice Areas */}
          <div className="lg:col-span-4 space-y-3 text-right">
            <h4 className="text-sm font-bold text-white font-cairo mb-4 border-r-2 border-[#c5a880] pr-2.5">
              التخصصات القانونية
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#practice-areas" className="hover:text-[#c5a880] transition-colors">
                  القضايا الجنائية (الجنايات والجنح والطعون)
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-[#c5a880] transition-colors">
                  القضايا المدنية والمنازعات العقارية والتعويضات
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-[#c5a880] transition-colors">
                  مجلس الدولة ودعاوى القضاء الإداري والوظيفة العامة
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-[#c5a880] transition-colors">
                  محاكم الأسرة والأحوال الشخصية والمواريث
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Details */}
          <div className="lg:col-span-3 space-y-3 text-right">
            <h4 className="text-sm font-bold text-white font-cairo mb-4 border-r-2 border-[#c5a880] pr-2.5">
              بيانات الاتصال
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="tel:+201011824122"
                onClick={handleCallClick}
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#c5a880] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span className="text-slate-400">الهاتف:</span>
                <span
                  dir="ltr"
                  style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                  className="font-mono text-white font-semibold"
                >
                  01011824122
                </span>
              </a>

              <a
                href="https://wa.me/201011824122"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#25D366] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="text-slate-400">واتساب:</span>
                <span
                  dir="ltr"
                  style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                  className="font-mono text-white font-semibold"
                >
                  01011824122
                </span>
              </a>

              <a
                href="mailto:sabreenavocato2022333@gmail.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#c5a880] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span
                  dir="ltr"
                  style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                  className="text-[12px] text-white"
                >
                  sabreenavocato2022333@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>جمهورية مصر العربية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer strictly per requirements */}
        <div className="py-6 text-center text-xs text-slate-400 border-b border-white/5 leading-relaxed max-w-4xl mx-auto">
          <p className="bg-[#0a1128]/80 p-3.5 rounded-xl border border-white/5">
            <span className="font-bold text-slate-300 ml-1">تنويه قانوني:</span>
            المعلومات المنشورة على الموقع لأغراض تعريفية عامة ولا تُعد بديلاً عن الاستشارة القانونية المباشرة.
          </p>
        </div>

        {/* Bottom bar & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-cairo">
            © صابرين أحمد علي - محامية. جميع الحقوق محفوظة.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#c5a880] transition-colors p-1.5 rounded-lg hover:bg-white/5 focus:outline-none"
            aria-label="العودة لأعلى الصفحة"
          >
            <span>العودة للأعلى</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
