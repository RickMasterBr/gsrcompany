"use client";

import React from "react";
import { Shield, ArrowRight } from "lucide-react";

// Import Content Data
import { landingPageContent } from "@/data/landingPageContent";

// Import UI Components
import { Heading, Body, Caption } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeaderNav } from "@/components/ui/Navigation";
import { ShieldVideo } from "@/components/ui/Media";
import { ServiceCard, MetricCard, AboutCard } from "@/components/ui/Card";
import { ContactForm } from "@/components/ui/ContactForm";
import { Footer } from "@/components/ui/Footer";

export default function LandingPage() {
  const { hero, services, stats, about, contact } = landingPageContent;

  const handleCtaClick = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gsr-bg min-h-screen text-gsr-text-primary flex flex-col relative scroll-smooth selection:bg-gsr-gold/20 selection:text-gsr-gold-dark">
      
      {/* Navigation Header */}
      <HeaderNav
        logoText="GSR COMPANY"
        onCtaClick={handleCtaClick}
        links={[
          { label: "Serviços", href: "#servicos" },
          { label: "Sobre Nós", href: "#sobre" },
          { label: "Diferenciais", href: "#diferenciais" },
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
              Mitigação de Riscos,<br />
              <span className="text-gsr-text-secondary">Compliance e</span><br />
              Governança de Alto Nível
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.items.map((service, idx) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                linkText="Detalhes da Atuação"
                onClick={() => {
                  // Redirect or scroll to contact with service preset
                  handleCtaClick();
                  const selectElement = document.querySelector("select");
                  if (selectElement) {
                    selectElement.value = service.slug;
                    // Trigger native React state update simulation
                    const event = new Event("change", { bubbles: true });
                    selectElement.dispatchEvent(event);
                  }
                }}
                className={`animate-fade-up-blur`}
                style={{ animationDelay: `${idx * 100}ms` }}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Stats/Diferenciais Section */}
      <section id="diferenciais" className="py-20 md:py-28 px-6 bg-gsr-surface/30 border-b border-gsr-border scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.items.map((stat, idx) => (
            <MetricCard
              key={idx}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              className="animate-fade-up-blur"
              style={{ animationDelay: `${idx * 150}ms` }}
            />
          ))}
        </div>
      </section>

      {/* About/Credibility Section */}
      <section id="sobre" className="py-24 px-6 border-b border-gsr-border scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <AboutCard
            subtitle={about.subtitle}
            title={about.title}
            description={about.description}
            imageSrc={about.image.src}
            imageAlt={about.image.alt}
            className="animate-fade-up-blur"
          >
            {/* Badges render inside AboutCard */}
            <div className="flex flex-wrap gap-3 pt-4">
              {about.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold text-gsr-text-primary bg-white border border-gsr-border rounded-gsr px-4 py-2 select-none shadow-gsr-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gsr-gold shrink-0"></div>
                  {badge}
                </div>
              ))}
            </div>
          </AboutCard>
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
