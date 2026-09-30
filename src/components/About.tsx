import React from 'react';
import { Shield, BookOpen, Scale, Award, CheckCircle, FileText, Landmark } from 'lucide-react';
import courthouseImg from '../assets/images/legal_justice_courthouse_1790752567515.jpg';
import { usePhoneModal } from '../context/PhoneModalContext';

export const About: React.FC = () => {
  const { handleCallClick } = usePhoneModal();

  return (
    <section id="about" className="py-24 bg-[#0d1733] relative overflow-hidden border-t border-[#c5a880]/15">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#162752]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a880] tracking-wider mb-2">
            <span>رسالة مهنية قائمة على سيادة القانون</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-cairo mb-4">
            عن الأستاذة صابرين أحمد علي
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            محامية مصرية مكرسة للدفاع عن الحقوق وتقديم الاستشارات القانونية الدقيقة وفقاً لأحدث التشريعات وأحكام محكمة النقض ومجلس الدولة، مع التزام راسخ بأخلاقيات المهنة وسرية الموكلين.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (Editorial imagery + Legal Seal) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#c5a880]/30 shadow-2xl shadow-black/50">
              <img
                src={courthouseImg}
                alt="دار العدالة والمحاكم المصرية"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/40 to-transparent" />

              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-[#0a1128]/85 backdrop-blur-md border border-[#c5a880]/20 text-right">
                <div className="flex items-center gap-2 text-[#c5a880] font-bold text-sm mb-1">
                  <Landmark className="w-4 h-4 shrink-0" />
                  <span>التمثيل القضائي أمام المحاكم المصرية</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  تتولى الأستاذة صابرين أحمد علي تمثيل الموكلين أمام كافة درجات التقاضي، والنيابات العامة، ومجلس الدولة بمختلف دوائره.
                </p>
              </div>
            </div>

            {/* Decorative frame border offset */}
            <div className="hidden sm:block absolute -inset-2 rounded-2xl border border-[#c5a880]/20 -z-10 transform -rotate-1 pointer-events-none" />
          </div>

          {/* Right Column (Legal Pillars & Philosophy) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-cairo">
                منهج العمل القانوني ورعاية مصالح الموكل
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                تعتمد الأستاذة صابرين أحمد علي في ممارستها المهنية على الفحص الدقيق والتحليل المعمق لكل تفاصيل النزاع القانوني، ووضع خطة دفاع استراتيجية تستند إلى نصوص الدستور والقوانين الموضوعية والإجرائية، مع إعطاء الأولوية للحلول التي تصون حقوق الموكل وتجنبه استنزاف الوقت والجهد.
              </p>
            </div>

            {/* Three Foundational Pillars */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#111f42]/70 border border-[#c5a880]/15 hover:border-[#c5a880]/35 transition-colors">
                <div className="p-2.5 rounded-lg bg-[#c5a880]/15 text-[#c5a880] shrink-0 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">السرية التامة والأمانة المهنية</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    الالتزام الصارم بحفظ أسرار الموكل وخصوصية بياناته ومستنداته كواجب قانوني وأخلاقي أصيل لا تهاون فيه.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#111f42]/70 border border-[#c5a880]/15 hover:border-[#c5a880]/35 transition-colors">
                <div className="p-2.5 rounded-lg bg-[#c5a880]/15 text-[#c5a880] shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">التأصيل القانوني وصياغة الدفوع</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    إعداد مذكرات الدفاع وصحف الدعاوى والطعون بصياغة قانونية محكمة مدعومة بأحدث السوابق القضائية الصادرة عن محكمة النقض ومجلس الدولة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#111f42]/70 border border-[#c5a880]/15 hover:border-[#c5a880]/35 transition-colors">
                <div className="p-2.5 rounded-lg bg-[#c5a880]/15 text-[#c5a880] shrink-0 mt-0.5">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">المتابعة المباشرة والوضوح مع الموكل</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    إحاطة الموكل أولاً بأول بمجريات جلسات المحاكمة، ومآل القرارات والإجراءات القضائية بكل شفافية ووضوح.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="tel:+201011824122"
                onClick={handleCallClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-[#0a1128] bg-[#c5a880] hover:bg-[#d5b890] transition-colors"
              >
                <Scale className="w-4 h-4" />
                <span>اتصل الآن</span>
              </a>
              <a
                href="https://wa.me/201011824122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <span>واتساب</span>
              </a>
              <a
                href="mailto:sabreenavocato2022333@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>راسل عبر البريد الإلكتروني</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
