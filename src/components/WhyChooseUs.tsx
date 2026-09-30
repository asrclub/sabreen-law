import React from 'react';
import { ShieldCheck, Eye, Clock, Award, FileSearch, HeartHandshake, Scale, Landmark } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'السرية التامة وحماية الخصوصية',
      description:
        'نلتزم بأعلى معايير كتمان السر المهني وحفظ خصوصية الموكل وكافة الوثائق والأوراق المتعلقة بنزاعه القضائي وفقاً لقانون المحاماة وآداب المهنة.',
    },
    {
      icon: Landmark,
      title: 'الدفاع الموضوعي والتأصيل القانوني',
      description:
        'بناء استراتيجيات التقاضي وإعداد صحف الدعاوى والمذكرات بناءً على أحدث ما استقرت عليه أحكام محكمة النقض المصرية والمحكمة الإدارية العليا.',
    },
    {
      icon: Eye,
      title: 'الشفافية الكاملة وتجنب الوعود الزائفة',
      description:
        'نقدم للموكل تقييماً قانونياً صادقاً وموضوعياً لفرص النزاع والمخاطر المحتملة، مع بيان المسارات الواقعية دون إعطاء آمال غير قانونية.',
    },
    {
      icon: Clock,
      title: 'السرعة في اتخاذ الإجراءات التحفظية والمستعجلة',
      description:
        'التحرك الفوري في المواعيد القانونية والطعون الوجوبية، واستصدار الأوامر الوقتية والمستعجلة لمنع تفاقم الأضرار أو ضياع الحقوق.',
    },
    {
      icon: FileSearch,
      title: 'الفحص الدقيق للأدلة والمستندات',
      description:
        'قراءة متأنية لكل تفصيلة في أوراق الدعوى، وتحري الثغرات الإجرائية وبطلان الإجراءات التي تقلب موازين الحكم لصالح الموكل.',
    },
    {
      icon: HeartHandshake,
      title: 'التواصل المباشر والاهتمام الشخصي',
      description:
        'تتولى الأستاذة صابرين أحمد علي متابعة قضايا موكليها بصورة مباشرة والرد على استفساراتهم، مما يضمن الاهتمام الكامل بكل ملف قضائي.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0a1128] relative overflow-hidden border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a880] tracking-wider mb-2">
            <span>مبادئ مهنية راسخة في العمل القانوني</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-cairo mb-4">
            لماذا التواصل معنا؟
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            اختيار المستشار القانوني هو الخطوة الفاصلة في كسب دعواك. نضع بين يديك ممارسة قانونية تتسم بالأمانة، الدقة، والحزم في حماية حقوقك.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0f1d3d]/70 border border-[#c5a880]/20 p-6 sm:p-7 hover:border-[#c5a880]/40 transition-all duration-300 hover:-translate-y-1 text-right"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-cairo">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Commitment Statement Card */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#12234a] via-[#102044] to-[#0c1833] border border-[#c5a880]/30 p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <Scale className="w-10 h-10 text-[#c5a880] mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-cairo">
              "العدالة لا تتحقق إلا بالدفاع الواعي، والتمسك بأصول القانون"
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              نحن هنا لنكون سندك القانوني الأمين في كافة قضاياك، متسلحين بالنص التشريعي الراسخ، والحجة القانونية القاطعة أمام منصات القضاء.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
