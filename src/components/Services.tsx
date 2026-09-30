import React from 'react';
import { MessageSquareText, Scale, FileText, ScrollText, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { usePhoneModal } from '../context/PhoneModalContext';

export const Services: React.FC = () => {
  const { handleCallClick } = usePhoneModal();
  const servicesList = [
    {
      number: '01',
      title: 'الاستشارات القانونية المتخصصة',
      description:
        'تقديم رأي قانوني قاطع ومستنير قبل الإقدام على أي تصرف قانوني، سواء عبر المقابلات الشخصية أو الاتصال الهاتفي والمراسلات العاجلة لتشخيص الموقف وحماية المصالح.',
      icon: MessageSquareText,
      focus: 'استشارات شفوية ومكتوبة وتقييم مخاطر النزاع',
    },
    {
      number: '02',
      title: 'الترافع والدفاع القضائي',
      description:
        'تمثيل كامل ومحترف أمام كافة المحاكم المصرية، وتقديم الدفوع الجوهرية، والمرافعة الشفوية، ومتابعة مراحل التقاضي الابتدائية والاستئنافية ومجلس الدولة.',
      icon: Scale,
      focus: 'حضور الجلسات وإيداع المذكرات الدفاعية',
    },
    {
      number: '03',
      title: 'صياغة ومراجعة العقود والاتفاقات',
      description:
        'صياغة العقود المدنية والتجارية، وعقود البيع والإيجار والشركات بصياغة قانونية منضبطة تدرأ النزاعات المستقبلية وتسد أي ثغرات قد تضر بالحقوق المالية.',
      icon: FileText,
      focus: 'عقود بيع، إيجار، شراكات، وتوثيق رسمي',
    },
    {
      number: '04',
      title: 'الطعون القضائية وإشكالات التنفيذ',
      description:
        'إعداد وصياغة صحف الطعون بالاستئناف والنقض والطعون الإدارية أمام المحكمة الإدارية العليا، وتقديم إشكالات وقف التنفيذ للأحكام لحين الفصل في جوهر النزاع.',
      icon: ShieldAlert,
      focus: 'طعون النقض، الاستئناف، ووقف التنفيذ العاجل',
    },
    {
      number: '05',
      title: 'مباشرة إجراءات التنفيذ والإنذارات الرسمية',
      description:
        'متابعة تنفيذ الأحكام القضائية النهائية والقرارات عبر إدارة التنفيذ، وتوجيه الإنذارات الرسمية على يد محضر، وإثبات الوقائع القانونية طبقاً لقانون المرافعات.',
      icon: ScrollText,
      focus: 'تنفيذ أحكام النفقات، التعويضات، والإخلاءات',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0d1733] relative border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a880] tracking-wider mb-2">
            <span>مساندة قانونية متكاملة للأفراد والشركات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-cairo mb-4">
            الخدمات القانونية
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            منظومة خدمات قضائية وقانونية احترافية تضمن المتابعة المستمرة والدقيقة لكافة الإجراءات من مرحلة الاستشارة وحتى صدور الحكم وتنفيذه.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-[#091126] border border-[#c5a880]/20 hover:border-[#c5a880]/50 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-[#c5a880]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#c5a880]/15 text-[#c5a880] group-hover:bg-[#c5a880] group-hover:text-[#0a1128] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold font-mono text-[#c5a880]/30 group-hover:text-[#c5a880]/60 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-cairo mb-3 group-hover:text-[#dfc298] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#c5a880]">
                  <span className="font-medium text-slate-400">{service.focus}</span>
                  <a
                    href="https://wa.me/201011824122?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%D8%A9%20%D8%B5%D8%A7%D8%A8%D8%B1%D9%8A%D9%86%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-[#c5a880]/20 text-[#c5a880] transition-colors"
                    aria-label={`طلب استشارة في ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 rotate-45" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Direct Assistance CTA Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#132247] to-[#0c1833] border border-[#c5a880]/35 p-7 flex flex-col justify-between text-right">
            <div>
              <div className="text-xs font-bold text-[#c5a880] mb-2">استفسار عاجل</div>
              <h3 className="text-xl font-bold text-white font-cairo mb-3">
                هل تحتاج إلى رأي قانوني فوري في مسألة طارئة؟
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                يمكنك الاتصال هاتفياً أو إرسال ملخص النزاع عبر تطبيق واتساب للحصول على توجيه قانوني مباشر من الأستاذة صابرين أحمد علي.
              </p>
            </div>

            <div className="space-y-2.5">
              <a
                href="tel:+201011824122"
                onClick={handleCallClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#0a1128] bg-gradient-to-r from-[#c5a880] to-[#dfc298] hover:from-[#d5b890] hover:to-[#dfc298] transition-all shadow-md"
              >
                <span>اتصل الآن</span>
              </a>
              <a
                href="https://wa.me/201011824122"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all text-center"
              >
                <span>واتساب</span>
              </a>
              <a
                href="mailto:sabreenavocato2022333@gmail.com"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#dfc298] bg-white/5 border border-[#c5a880]/30 hover:bg-[#c5a880] hover:text-[#0a1128] transition-all text-center"
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
