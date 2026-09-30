/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PhoneModalProvider } from './context/PhoneModalContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <PhoneModalProvider>
      <div className="min-h-screen bg-[#0a1128] text-[#f7f7f5] font-cairo selection:bg-[#c5a880]/30 selection:text-white">
        {/* Sticky Navigation Header */}
        <Header />

        {/* Main Single-Page Scroller */}
        <main>
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: About the Lawyer */}
          <About />

          {/* Section 3: Practice Areas */}
          <PracticeAreas />

          {/* Section 4: Legal Services */}
          <Services />

          {/* Section 5: Why Contact Us */}
          <WhyChooseUs />

          {/* Section 6: Action Call to Action */}
          <CTASection />

          {/* Section 7: Contact Section */}
          <ContactSection />
        </main>

        {/* Section 8: Legal Footer */}
        <Footer />

        {/* Fixed Floating WhatsApp Action */}
        <FloatingWhatsApp />
      </div>
    </PhoneModalProvider>
  );
}
