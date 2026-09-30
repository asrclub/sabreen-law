import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { usePhoneModal } from '../context/PhoneModalContext';

export const Header: React.FC = () => {
  const { handleCallClick } = usePhoneModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'practice-areas', 'services', 'why-us', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero', id: 'hero' },
    { label: 'عن المحامية', href: '#about', id: 'about' },
    { label: 'التخصصات', href: '#practice-areas', id: 'practice-areas' },
    { label: 'الخدمات', href: '#services', id: 'services' },
    { label: 'لماذا نحن', href: '#why-us', id: 'why-us' },
    { label: 'التواصل', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a1128]/95 backdrop-blur-md border-b border-[#c5a880]/20 shadow-lg shadow-black/20 py-2.5'
          : 'bg-gradient-to-b from-[#0a1128]/90 via-[#0a1128]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880] rounded-lg"
            aria-label="الانتقال إلى الرئيسية"
          >
            <Logo variant="header" size="sm" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
            aria-label="قائمة التصفح الرئيسية"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-colors duration-200 hover:text-[#c5a880] whitespace-nowrap ${
                    isActive ? 'text-[#c5a880] font-semibold' : 'text-slate-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-[#c5a880] rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Direct Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="mailto:sabreenavocato2022333@gmail.com"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#dfc298] bg-white/5 border border-[#c5a880]/30 rounded-lg hover:bg-[#c5a880] hover:text-[#0a1128] transition-all duration-200"
            >
              <span>راسل عبر البريد الإلكتروني</span>
            </a>

            <a
              href="https://wa.me/201011824122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg hover:bg-[#25D366] hover:text-white transition-all duration-200 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>واتساب</span>
            </a>

            <a
              href="tel:+201011824122"
              onClick={handleCallClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0a1128] bg-gradient-to-r from-[#c5a880] to-[#dfc298] hover:from-[#d5b890] hover:to-[#eed0a6] rounded-lg shadow-sm transition-all duration-200 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>اتصل الآن</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+201011824122"
              onClick={handleCallClick}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#c5a880] text-[#0a1128] sm:hidden"
              aria-label="اتصل الآن"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880]"
              aria-expanded={mobileMenuOpen}
              aria-label="فتح القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1128]/98 border-b border-[#c5a880]/30 px-5 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-fade-in shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#c5a880]/15 text-[#c5a880] font-semibold'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 rotate-45" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="tel:+201011824122"
              onClick={handleCallClick}
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#0a1128] bg-gradient-to-r from-[#c5a880] to-[#dfc298] rounded-lg shadow-md active:scale-98 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل الآن:</span>
              <span
                dir="ltr"
                style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
                className="font-mono font-bold"
              >
                01011824122
              </span>
            </a>

            <a
              href="https://wa.me/201011824122"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20b858] rounded-lg shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>واتساب</span>
            </a>

            <a
              href="mailto:sabreenavocato2022333@gmail.com"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#dfc298] bg-white/5 border border-[#c5a880]/30 hover:bg-[#c5a880] hover:text-[#0a1128] rounded-lg transition-colors"
            >
              <span>راسل عبر البريد الإلكتروني</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
