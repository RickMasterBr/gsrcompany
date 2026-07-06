"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, X, CheckCircle2, Mail } from "lucide-react";

// Import Content Data
import { landingPageContent, faq, process, missionVisionValues } from "@/data/landingPageContent";
import { servicesContent } from "@/data/servicesContent";
import { COMPANY_EMAIL } from "@/data/siteConfig";

// Import UI Components
import { Heading, Body, Caption } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeaderNav } from "@/components/ui/Navigation";
import { ShieldVideo } from "@/components/ui/Media";
import { ServiceCard } from "@/components/ui/Card";
import { PillarsContainer } from "@/components/ui/PillarsContainer";
import { DifferentiatorsTabs } from "@/components/ui/DifferentiatorsTabs";
import { ProcessSlider } from "@/components/ui/ProcessSlider";
import { FAQAccordion } from "@/components/ui/Accordion";
import { ContactForm } from "@/components/ui/ContactForm";
import { Footer } from "@/components/ui/Footer";

export default function LandingPage() {
  const { hero, services, differentiators, about, contact } = landingPageContent;

  const [expandedSlug, setExpandedSlug] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const openServiceCard = (slug) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setExpandedSlug(slug);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsPanelOpen(true));
    });
  };

  const closeServiceCard = () => {
    setIsPanelOpen(false);
    closeTimeoutRef.current = setTimeout(() => {
      setExpandedSlug(null);
    }, 300);
  };

  const handleServiceSelect = (slug) => {
    openServiceCard(slug);
    const servicesSection = document.getElementById("servicos");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  const servicesDropdownItems = services.items.map((item) => ({
    title: item.title,
    description: item.description,
    slug: item.slug,
    icon: item.icon,
  }));

  const handleCtaClick = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gsr-bg min-h-screen text-gsr-text-primary flex flex-col relative selection:bg-gsr-gold/20 selection:text-gsr-gold-dark">
      
      {/* Navigation Header */}
      <HeaderNav
        logoText="GSR COMPANY"
        onCtaClick={handleCtaClick}
        onServiceSelect={handleServiceSelect}
        links={[
          { label: "Serviços", href: "#servicos", dropdownItems: servicesDropdownItems },
          { label: "Diferenciais", href: "#diferenciais" },
          { label: "Sobre Nós", href: "#sobre" },
          { label: "Nosso Processo", href: "#processo" },
          { label: "FAQ", href: "#faq" },
          { label: "Contato", href: "#contato" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative mx-6 my-8 overflow-hidden rounded-card border border-gsr-border bg-white shadow-gsr-md">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <ShieldVideo
            variant="background"
            src={hero.video.src}
            poster={hero.video.poster}
            className="w-full h-full object-cover object-right opacity-85"
          />
          {/* Subtle gradient overlay to blend video background to white on the left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 space-y-6 animate-fade-up-blur">
            <Badge variant="primary">{hero.badge}</Badge>
            
            <Heading level={1} className="font-normal tracking-tight text-balance text-gsr-text-primary">
              Riscos Identificados.<br />
              <span className="text-gsr-text-secondary">Governança Fortalecida.</span><br />
              Ativos Protegidos.
            </Heading>
            
            <Body variant="secondary" className="text-base md:text-lg leading-relaxed max-w-xl">
              {hero.description}
            </Body>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="filled"
                icon={ArrowRight}
                onClick={handleCtaClick}
              >
                {hero.ctaPrimary.label}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const servicesSection = document.getElementById("servicos");
                  servicesSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {hero.ctaSecondary.label}
              </Button>
            </div>
          </div>

        </div>

        {/* Technical Caption overlay in bottom right corner */}
        <div className="absolute bottom-4 right-6 z-20 pointer-events-none hidden md:block opacity-50">
          <Caption className="text-[9px]">
            {hero.video.alt}
          </Caption>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-6 border-b border-gsr-border scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="secondary">{services.subtitle}</Badge>
            <Heading level={2}>{services.title}</Heading>
            <Body variant="secondary">{services.description}</Body>
          </div>

          {/* Services Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.items.map((service, idx) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  linkText="Detalhes da Atuação"
                  onClick={() => openServiceCard(service.slug)}
                  className="animate-fade-up-blur"
                  style={{ animationDelay: `${idx * 100}ms` }}
                />
              ))}
            </div>

            {expandedSlug && (() => {
              const activeService = services.items.find((s) => s.slug === expandedSlug);
              const detail = servicesContent[expandedSlug];
              if (!activeService || !detail) return null;

              const mailSubject = encodeURIComponent(`Solicitação de contato - ${detail.title}`);
              const mailBody = encodeURIComponent(`Olá, gostaria de saber mais sobre os serviços de ${detail.title}.`);
              const mailHref = `mailto:${COMPANY_EMAIL}?subject=${mailSubject}&body=${mailBody}`;

              return (
                <div className={`absolute inset-x-0 top-0 z-20 bg-white border border-gsr-gold/40 rounded-card shadow-gsr-lg p-8 md:p-12 transition-all duration-300 ease-out ${isPanelOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                  <button
                    onClick={() => closeServiceCard()}
                    className="absolute top-6 right-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gsr-text-secondary hover:text-gsr-gold transition-colors duration-200 cursor-pointer"
                  >
                    <X className="h-4 w-4" /> Contrair
                  </button>

                  <div className="max-w-4xl">
                    <Badge variant="primary">{detail.badge}</Badge>
                    <Heading level={3} className="mt-4 mb-3">{detail.title}</Heading>
                    <Body variant="secondary" className="mb-8">{detail.leadParagraph}</Body>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <div className="space-y-4">
                          {detail.richContent.map((paragraph, idx) => (
                            <Body key={idx} variant="secondary" className="text-sm leading-relaxed">{paragraph}</Body>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <Caption className="text-[10px] block text-gsr-gold-dark">Demandas Atendidas Neste Nicho</Caption>
                          <ul className="space-y-2">
                            {detail.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gsr-text-primary">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-gsr-surface border border-gsr-border rounded-gsr p-6">
                          <Caption className="text-[10px] block text-gsr-gold-dark mb-2">Retorno Para o Cliente</Caption>
                          <h4 className="font-sans text-sm font-semibold text-gsr-text-primary mb-2">{detail.sidebarInfo.title}</h4>
                          <Body variant="secondary" className="text-sm">{detail.sidebarInfo.description}</Body>
                        </div>

                        <Button variant="filled" icon={Mail} href={mailHref}>
                          Entrar em Contato
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-20 md:py-28 px-6 bg-gsr-surface/30 border-b border-gsr-border scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="secondary">{differentiators.subtitle}</Badge>
            <Heading level={2}>{differentiators.title}</Heading>
            <Body variant="secondary">{differentiators.description}</Body>
          </div>

          <DifferentiatorsTabs
            items={differentiators.items}
            mediaSrc={hero.video.src}
            mediaPoster={hero.video.poster}
            className="mt-12"
          />

        </div>
      </section>

      {/* About / Missão, Visão & Valores Section */}
      <section id="sobre" className="py-24 px-6 border-b border-gsr-border scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="secondary">{about.subtitle}</Badge>
            <Heading level={2}>{about.title}</Heading>
            <Body variant="secondary">{about.description}</Body>
          </div>
          <PillarsContainer items={missionVisionValues} className="animate-fade-up-blur" />
        </div>
      </section>

      {/* Processo Section */}
      <section id="processo" className="py-24 px-6 border-b border-gsr-border scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <ProcessSlider
            subtitle={process.subtitle}
            title={process.title}
            description={process.description}
            items={process.items}
            onCtaClick={handleCtaClick}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 border-b border-gsr-border scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <Badge variant="secondary">{faq.subtitle}</Badge>
            <Heading level={2}>{faq.title}</Heading>
            <Body variant="secondary">{faq.description}</Body>
            <div>
              <Button variant="outline" onClick={handleCtaClick}>
                Fale Conosco
              </Button>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={faq.items} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-6 bg-gradient-to-b from-gsr-bg to-gsr-surface/20 scroll-mt-20">
        <div className="max-w-3xl mx-auto animate-fade-up-blur">
          <ContactForm
            title={contact.title}
            description={contact.description}
            buttonLabel={contact.buttonLabel}
            lgpdLabel={contact.lgpdLabel}
            lgpdDescription={contact.lgpdDescription}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
