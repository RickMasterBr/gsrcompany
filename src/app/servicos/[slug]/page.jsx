import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shield, ArrowRight, CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";

// Import Data
import { servicesContent } from "@/data/servicesContent";

// Import UI Components
import { Heading, Body, Caption } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeaderNav } from "@/components/ui/Navigation";
import { ShieldImage } from "@/components/ui/Media";
import { MetricCard } from "@/components/ui/Card";
import { ContactForm } from "@/components/ui/ContactForm";
import { Footer } from "@/components/ui/Footer";

// Generate static params for static site generation
export async function generateStaticParams() {
  return Object.keys(servicesContent).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const service = servicesContent[slug];

  if (!service) {
    notFound();
  }

  // Get other services for navigation
  const otherServices = Object.values(servicesContent).filter(
    (s) => s.slug !== slug
  );

  return (
    <div className="bg-gsr-bg min-h-screen text-gsr-text-primary flex flex-col relative scroll-smooth selection:bg-gsr-gold/20 selection:text-gsr-gold-dark">
      
      {/* Navigation Header */}
      <HeaderNav
        logoText="GSR COMPANY"
        links={[
          { label: "Voltar ao Início", href: "/#" },
          { label: "Áreas de Atuação", href: "/#servicos" },
          { label: "Sobre Nós", href: "/#sobre" },
          { label: "Contato", href: "#contato" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6 border-b border-gsr-border bg-gsr-surface/10">
        <div className="max-w-7xl mx-auto space-y-6 animate-fade-up-blur">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gsr-text-secondary">
            <Link href="/" className="hover:text-gsr-gold transition-colors duration-200">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-gsr-border" />
            <Link href="/#servicos" className="hover:text-gsr-gold transition-colors duration-200">
              Serviços
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-gsr-border" />
            <span className="text-gsr-text-primary font-bold">{service.badge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
            {/* Title / Description */}
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="primary">{service.badge}</Badge>
              <Heading level={1} className="font-normal text-balance">
                {service.title}
              </Heading>
              <Body variant="primary" className="text-lg leading-relaxed font-medium">
                {service.subtitle}
              </Body>
              <Body variant="secondary" className="text-base leading-relaxed">
                {service.leadParagraph}
              </Body>
              <div className="pt-2">
                <Link href="#contato">
                  <Button variant="filled" icon={ArrowRight}>
                    Agendar Diagnóstico
                  </Button>
                </Link>
              </div>
            </div>

            {/* Media Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm">
                <ShieldImage
                  src={service.media.src}
                  alt={service.media.alt}
                  className="shadow-gsr-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gsr-border">
        
        {/* Left Side: Rich Content & Features */}
        <div className="lg:col-span-8 space-y-10 animate-fade-up-blur">
          
          {/* Rich content description */}
          <div className="space-y-6">
            <Heading level={2} className="text-2xl md:text-3xl">Detalhes do Escopo Operacional</Heading>
            {service.richContent.map((paragraph, idx) => (
              <Body key={idx} variant="secondary" className="text-sm md:text-base leading-relaxed">
                {paragraph}
              </Body>
            ))}
          </div>

          {/* Features Checkbox list */}
          <div className="space-y-4">
            <Caption className="text-[10px] block text-gsr-gold-dark">Principais Requisitos e Entregas</Caption>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-white border border-gsr-border rounded-gsr p-4 shadow-gsr-sm hover:border-gsr-gold transition-colors duration-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs md:text-sm text-gsr-text-primary leading-tight font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Sidebar Info Card */}
        <div className="lg:col-span-4 space-y-6 animate-fade-up-blur">
          <MetricCard
            number="GSR"
            label={service.sidebarInfo.title}
            description={service.sidebarInfo.description}
            className="h-full justify-between"
          />
        </div>

      </section>

      {/* Cross Navigation: Outras Áreas */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-gsr-border scroll-mt-20">
        <div className="space-y-10">
          <div className="text-center md:text-left space-y-2">
            <Badge variant="secondary">Navegação Integrada</Badge>
            <Heading level={2} className="text-2xl md:text-3xl">Outras Áreas de Atuação</Heading>
            <Body variant="secondary" className="text-sm">
              Conheça as outras competências corporativas especializadas de nosso comitê técnico.
            </Body>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {otherServices.map((other, idx) => (
              <Link
                key={other.slug}
                href={`/servicos/${other.slug}`}
                className="group bg-white border border-gsr-border rounded-gsr p-5 hover:border-gsr-gold hover:shadow-gsr-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Caption className="text-[9px] block text-gsr-gold-dark mb-2">GSR Atuação</Caption>
                  <Heading level={4} className="text-sm font-semibold transition-colors duration-200 group-hover:text-gsr-gold-dark">
                    {other.badge}
                  </Heading>
                  <p className="font-sans text-xs text-gsr-text-secondary leading-tight mt-2 line-clamp-2">
                    {other.leadParagraph}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gsr-text-primary group-hover:text-gsr-gold mt-4">
                  <span className="editorial-link">Acessar</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Conversion Form Section */}
      <section id="contato" className="py-24 px-6 bg-gradient-to-b from-gsr-bg to-gsr-surface/20 scroll-mt-20">
        <div className="max-w-3xl mx-auto animate-fade-up-blur">
          <ContactForm
            title={`Solicitar Diagnóstico para ${service.badge}`}
            description={`Nossos juristas e auditores analisarão sua solicitação sob sigilo total. Deixe os dados abaixo para contato por canal seguro.`}
            buttonLabel={service.sidebarInfo.ctaLabel}
            defaultService={slug}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
