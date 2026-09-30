import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, Scale } from 'lucide-react';
import { usePhoneModal } from '../context/PhoneModalContext';

export const ContactSection: React.FC = () => {
  const { handleCallClick } = usePhoneModal();

  return (
    <section id="contact" className="py-24 bg-[#0d1733] relative border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a880] tracking-wider mb-2">
            <span>تواصل قانوني موثوق ومباشر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-cairo mb-4">
            التواصل مع المكتب
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            يسعدنا استقبال اتصالاتكم واستفساراتكم لبحث الموقف القضائي لدعواكم وتقديم الرأي القانوني السديد.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (Contact Information Cards) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Phone Card */}
            <a
              href="tel:+201011824122"
              onClick={handleCallClick}
              className="group block p-6 rounded-2xl bg-[#091126] border border-[#c5a880]/20 hover:border-[#c5a880] transition-all duration-300 text-right"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-[#c5a880]/15 text-[#c5a880] group-hover:bg-[#c5a880] group-hover:text-[#0a1128] transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#0a1128] bg-[#c5a880] px-3.5 py-1.5 rounded-lg group-hover:bg-[#dfc298] transition-colors">
                  اتصل الآن
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">الهاتف</h3>
              <div
                dir="ltr"
                style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                className="text-2xl sm:text-3xl font-bold text-[#dfc298] font-mono text-right"
              >
                01011824122
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/201011824122"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-[#091126] border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300 text-right"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-[#25D366]/15 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-white bg-[#25D366] px-3.5 py-1.5 rounded-lg group-hover:bg-[#20ba59] transition-colors">
                  واتساب
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">واتساب</h3>
              <div
                dir="ltr"
                style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                className="text-2xl sm:text-3xl font-bold text-white font-mono text-right"
              >
                01011824122
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:sabreenavocato2022333@gmail.com"
              className="group block p-6 rounded-2xl bg-[#091126] border border-[#c5a880]/20 hover:border-[#c5a880] transition-all duration-300 text-right"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-[#c5a880]/15 text-[#c5a880] group-hover:bg-[#c5a880] group-hover:text-[#0a1128] transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#dfc298] bg-white/5 border border-[#c5a880]/30 px-3.5 py-1.5 rounded-lg group-hover:bg-[#c5a880] group-hover:text-[#0a1128] transition-colors">
                  راسل عبر البريد الإلكتروني
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">البريد الإلكتروني</h3>
              <div
                dir="ltr"
                style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                className="text-sm sm:text-base font-medium text-slate-200 break-all text-right pt-1"
              >
                sabreenavocato2022333@gmail.com
              </div>
            </a>

            {/* Working Scope Card */}
            <div className="p-5 rounded-2xl bg-[#0f1d3d]/60 border border-white/10 text-right">
              <div className="flex items-center gap-3 text-slate-200 mb-2">
                <MapPin className="w-5 h-5 text-[#c5a880]" />
                <h4 className="font-bold text-sm">نطاق العمل القضائي</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                مباشرة القضايا والتحقيقات الجنائية، المدنية، ومحاكم الأسرة، ومجلس الدولة في نطاق جمهورية مصر العربية.
              </p>
            </div>
          </div>

          {/* Right Column (Replaces Consultation Form with Professional Contact CTA) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full bg-gradient-to-br from-[#0e1c3b] via-[#091126] to-[#0a1228] border border-[#c5a880]/30 rounded-2xl p-7 sm:p-10 shadow-2xl text-right flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-[#c5a880]/15 text-[#c5a880] mb-6">
                  <Scale className="w-8 h-8" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-cairo mb-4 leading-snug">
                  هل تحتاج إلى استشارة قانونية؟
                </h3>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                  يمكنك التواصل مباشرة مع المحامية صابرين أحمد علي لمناقشة موضوعك وتحديد وسيلة التواصل المناسبة.
                </p>
              </div>

              {/* Three Clear Contact Action Buttons */}
              <div className="space-y-3.5 pt-4 border-t border-white/10">
                {/* 1. Phone Call */}
                <a
                  href="tel:+201011824122"
                  onClick={handleCallClick}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-base font-bold text-[#0a1128] bg-gradient-to-r from-[#c5a880] to-[#dfc298] hover:from-[#d5b890] hover:to-[#eed0a6] shadow-lg shadow-[#c5a880]/20 transition-all duration-200 active:scale-98"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>اتصل الآن</span>
                </a>

                {/* 2. WhatsApp */}
                <a
                  href="https://wa.me/201011824122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/20 transition-all duration-200 active:scale-98"
                >
                  <MessageSquare className="w-5 h-5 shrink-0" />
                  <span>واتساب</span>
                </a>

                {/* 3. Email */}
                <a
                  href="mailto:sabreenavocato2022333@gmail.com"
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl text-sm sm:text-base font-semibold text-[#dfc298] bg-white/5 border border-[#c5a880]/30 hover:bg-[#c5a880] hover:text-[#0a1128] transition-all duration-200 active:scale-98"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>راسل عبر البريد الإلكتروني</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
