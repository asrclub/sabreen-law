import React, { useState } from 'react';
import { Gavel, Building2, Landmark, Users, ArrowLeft, Check, FileCheck, Scale } from 'lucide-react';
import { usePhoneModal } from '../context/PhoneModalContext';

export interface PracticeAreaItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'gavel' | 'building' | 'landmark' | 'users';
  summary: string;
  keyServices: string[];
  procedures: string[];
}

export const practiceAreasData: PracticeAreaItem[] = [
  {
    id: 'criminal',
    title: 'القضايا الجنائية',
    subtitle: 'قضايا الجنايات والجنح والطعون الجنائية',
    iconName: 'gavel',
    summary:
      'دفاع قانوني صارم ومرافعة متخصصة أمام محاكم الجنايات والجنح بمختلف دوائرها، مع الحضور المباشر لتحقيقات النيابة العامة لضمان صيانة حقوق المتهم وضمانات المحاكمة العادلة.',
    keyServices: [
      'الترافع أمام محاكم الجنايات في قضايا الأموال العامة، الجنايات الاقتصادية والجرائم المعاقب عليها بالسجن',
      'الدفاع في قضايا الجنح (النصب، خيانة الأمانة، الشيكات، الإتلاف، والضرب غير العمدي)',
      'حضور تحقيقات النيابة العامة ونيابات أمن الدولة والنيابات المتخصصة مع المتهمين والمجني عليهم',
      'تقديم الإشكالات في التنفيذ وطلبات وقف تنفيذ العقوبة أمام الجهات القضائية المختصة',
      'صياغة وإيداع أسباب الطعن بالنقض الجنائي والطعون في الأحكام الغيابية والمعارضات',
    ],
    procedures: [
      'دراسة محاضر الشرطة وأدلة الثبوت الجنائي',
      'فحص الإجراءات والبحث في بطلان القبض أو التفتيش',
      'تقديم الدفوع الشكلية والموضوعية الحاضرة والمكتوبة',
    ],
  },
  {
    id: 'civil',
    title: 'القضايا المدنية',
    subtitle: 'المنازعات العقارية والتعويضات والعقود المدنية',
    iconName: 'building',
    summary:
      'حماية الحقوق المالية والممتلكات العقارية عبر دعاوى قضائية محكمة، بدءاً من المطالبات التعويضية وانتهاءً بإنفاذ العقود وتسوية النزاعات الناشئة عن الالتزامات المدنية والتجارية.',
    keyServices: [
      'دعاوى التعويض عن الأضرار المادية والأدبية والمسؤولية التقصيرية والعقدية وحوادث العمل والسير',
      'المنازعات العقارية: دعاوى صحة ونفاذ عقود البيع، صحة التوقيع، وتثبيت الملكية العقارية',
      'قضايا الإيجارات (القانون القديم والجديد): دعاوى الإخلاء، استرداد الحيازة، وإنهاء العلاقات الإيجارية',
      'استرداد الديون والمستحقات المالية والمطالبات الناشئة عن الأوراق المالية والمعاملات المدنية',
      'صياغة ومراجعة كافة أنماط العقود والاتفاقيات، وحمايتها من الثغرات القانونية والبطلان',
    ],
    procedures: [
      'فحص الملكيات وتسلسل العقود وسندات الحق',
      'إعداد مذكرات الدعوى وتوجيه الإنذارات الرسمية على يد محضر',
      'متابعة أعمال لجان الخبراء بوزارة العدل',
    ],
  },
  {
    id: 'state-council',
    title: 'مجلس الدولة والقضاء الإداري',
    subtitle: 'دعاوى الإلغاء، التعويض الإداري، ومنازعات الوظيفة العامة',
    iconName: 'landmark',
    summary:
      'تمثيل قانوني أمام محكمة القضاء الإداري والمحكمة الإدارية العليا ومحاكم التأديب لمواجهة القرارات الإدارية المعيبة ومخاصمة جهات الإدارة الحكومية لحماية حقوق المواطنين والموظفين.',
    keyServices: [
      'دعاوى إلغاء القرارات الإدارية الصادرة بعيب عدم الاختصاص، أو الشكل، أو مخالفة القانون، أو الانحراف بالسلطة',
      'منازعات الموظفين والعاملين المدنيين بالدولة: قضايا الترقيات، العلاوات، تقارير الكفاية، والتسويات الوظيفية',
      'الطعون في قرارات لجان قيد النقابات المهنية، وقرارات إنهاء الخدمة، والقرارات التأديبية ومجالس التأديب',
      'المنازعات الضريبية والرسوم الجمركية وقضايا عقود الامتياز والتوريد المبرمة مع الجهات الحكومية',
      'إيداع الطعون أمام المحكمة الإدارية العليا وهيئة مفوضي الدولة بالمسار الإجرائي المعتمد',
    ],
    procedures: [
      'التظلم الوجوبي من القرار الإداري في المواعيد القانونية (٦٠ يوماً)',
      'صياغة صحيفة دعوى الإلغاء والطلب المستعجل لوقف التنفيذ',
      'المرافعة أمام دوائر القضاء الإداري وهيئة المفوضين',
    ],
  },
  {
    id: 'family',
    title: 'محاكم الأسرة والأحوال الشخصية',
    subtitle: 'قضايا النفقات، الخلع، الطلاق، الحضانة، والمواريث الشرعية',
    iconName: 'users',
    summary:
      'معالجة النزاعات الأسرية برؤية متزنة تجمع بين الحفاظ على الروابط الإنسانية وصيانة الحقوق المالية والشرعية للزوجين والصغار، مع متابعة إجراءات تسوية المنازعات ومحاكم الأسرة.',
    keyServices: [
      'دعاوى النفقات بأنواعها: نفقة الزوجية، نفقة الصغار، المصروفات الدراسية، أجر المسكن، وأجر الحضانة',
      'قضايا الطلاق للضرر، والخلع، وإثبات أو نفي الزواج والنسب، والاعتراض على إنذار الطاعة',
      'قضايا الحضانة والرؤية والولاية التعليمية على الصغار ومنع السفر وإسقاط الحضانة للموجب الشرعي',
      'استرداد قائمة المنقولات الزوجية وجميع ملحقاتها ودعاوى تبديد المنقولات الجنائية',
      'قضايا المواريث والتركات الشرعية: حصر التركات، دعاوى الفرز والتجنيب، وتسليم الأنصبة المستحقة',
    ],
    procedures: [
      'تقديم طلبات التسوية أمام مكاتب تسوية المنازعات الأسرية',
      'التحري عن الدخل وأملاك الملزم بالنفقة لدى البنوك وجهات العمل',
      'تنفيذ الأحكام عبر بنك ناصر الاجتماعي والمحاضرين التنفيذيين',
    ],
  },
];

const CONSULTATION_WHATSAPP_LINK =
  'https://wa.me/201011824122?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%D8%A9%20%D8%B5%D8%A7%D8%A8%D8%B1%D9%8A%D9%86%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9.';

export const PracticeAreas: React.FC = () => {
  const { handleCallClick } = usePhoneModal();
  const [selectedArea, setSelectedArea] = useState<PracticeAreaItem | null>(null);

  const renderIcon = (iconName: PracticeAreaItem['iconName']) => {
    switch (iconName) {
      case 'gavel':
        return <Gavel className="w-6 h-6 text-[#c5a880]" />;
      case 'building':
        return <Building2 className="w-6 h-6 text-[#c5a880]" />;
      case 'landmark':
        return <Landmark className="w-6 h-6 text-[#c5a880]" />;
      case 'users':
        return <Users className="w-6 h-6 text-[#c5a880]" />;
    }
  };

  return (
    <section id="practice-areas" className="py-24 bg-[#0a1128] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a880] tracking-wider mb-2">
            <span>تخصصات قانونية شاملة أمام القضاء المصري</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-cairo mb-4">
            التخصصات القانونية
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            خبرة متعمقة وممارسة عملية تغطي الدوائر الجنائية، والمدنية، ومجلس الدولة، وقضايا الأسرة وفقاً لأدق المعايير القانونية.
          </p>
        </div>

        {/* 4 Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practiceAreasData.map((area, idx) => (
            <div
              key={area.id}
              className="group relative rounded-2xl bg-[#0f1d3d]/80 border border-[#c5a880]/20 hover:border-[#c5a880]/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#c5a880]/5 flex flex-col justify-between"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 group-hover:scale-105 transition-transform">
                    {renderIcon(area.iconName)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#c5a880]/70 border border-[#c5a880]/20 px-2.5 py-1 rounded-md">
                    تخصص {idx + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-cairo mb-2 group-hover:text-[#dfc298] transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#c5a880] mb-4">
                  {area.subtitle}
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {area.summary}
                </p>

                {/* Scope points */}
                <div className="space-y-2.5 mb-8 border-t border-white/5 pt-5">
                  <div className="text-xs font-bold text-slate-200">أبرز مجالات التمثيل والتقاضي:</div>
                  {area.keyServices.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className="text-xs sm:text-sm font-semibold text-[#dfc298] hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none"
                >
                  <span>عرض التفاصيل والإجراءات</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <a
                  href={CONSULTATION_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs sm:text-sm font-bold text-[#0a1128] bg-[#c5a880] hover:bg-[#d5b890] rounded-lg transition-colors shadow-sm"
                >
                  طلب استشارة
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Detailed Practice Area Information */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0d1733] border border-[#c5a880]/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-right shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#c5a880]/20 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#c5a880]/20 text-[#c5a880]">
                  {renderIcon(selectedArea.iconName)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-cairo">
                    {selectedArea.title}
                  </h3>
                  <div className="text-xs text-[#c5a880]">{selectedArea.subtitle}</div>
                </div>
              </div>

              <button
                onClick={() => setSelectedArea(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="إغلاق النافذة"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 text-slate-200">
              <div>
                <h4 className="text-sm font-bold text-white mb-2">نبذة عن التخصص</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedArea.summary}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#dfc298] mb-3">جميع الخدمات والتمثيل القانوني في هذا التخصص:</h4>
                <ul className="space-y-2.5">
                  {selectedArea.keyServices.map((service, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#091024] border border-white/10">
                <h4 className="text-xs font-bold text-slate-300 mb-2">آلية المتابعة والإجراءات القضائية:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedArea.procedures.map((proc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <FileCheck className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                إغلاق
              </button>

              <a
                href="tel:+201011824122"
                onClick={handleCallClick}
                className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0a1128] bg-[#c5a880] hover:bg-[#d5b890] rounded-lg transition-colors text-center"
              >
                اتصل الآن
              </a>

              <a
                href={CONSULTATION_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20b858] rounded-lg transition-colors text-center"
              >
                طلب استشارة
              </a>

              <a
                href={`mailto:sabreenavocato2022333@gmail.com?subject=${encodeURIComponent(
                  `استشارة قانونية: ${selectedArea.title}`
                )}`}
                className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#dfc298] bg-white/5 border border-[#c5a880]/30 hover:bg-[#c5a880] hover:text-[#0a1128] rounded-lg transition-colors text-center"
              >
                راسل عبر البريد الإلكتروني
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
