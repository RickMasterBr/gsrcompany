"use client";

import React, { useState } from "react";
import {
  Shield,
  ArrowRight,
  Download,
  Info,
  CheckCircle,
  AlertTriangle,
  Lock,
  Mail,
  User,
  Scale,
  Briefcase,
  FileText,
  Search,
  Eye,
  Settings,
} from "lucide-react";

// Import UI Library components
import { Heading, Body, Caption } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TextField, TextArea, Switch } from "@/components/ui/Input";
import { ServiceCard, MetricCard, AboutCard } from "@/components/ui/Card";
import { HeaderNav } from "@/components/ui/Navigation";
import { ShieldVideo, ShieldImage } from "@/components/ui/Media";

export default function DesignSystemPlayground() {
  // Interactive state variables
  const [btnLoading, setBtnLoading] = useState(false);
  const [switchChecked1, setSwitchChecked1] = useState(false);
  const [switchChecked2, setSwitchChecked2] = useState(true);
  const [inputText, setInputText] = useState("");
  const [inputError, setInputError] = useState("Por favor, digite um formato válido de e-mail.");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Function to show copy feedbacks
  const triggerCopyToast = (text) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copiado: "${text}"`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  const handleCtaClick = () => {
    alert("Simulação de clique no CTA - Contato B2B");
  };

  // Color Swatches List for GSR
  const colorSwatches = [
    {
      name: "Fundo Geral",
      hex: "#FAFAF8",
      hsl: "HSL (45, 12%, 97%)",
      variable: "var(--color-gsr-bg)",
      bgClass: "bg-gsr-bg border border-gsr-border",
      textClass: "text-gsr-text-primary",
      desc: "Off-white principal. Garante elegância, leveza visual e contraste institucional premium.",
    },
    {
      name: "Superfície / Cards",
      hex: "#F1F0EC",
      hsl: "HSL (45, 8%, 94%)",
      variable: "var(--color-gsr-surface)",
      bgClass: "bg-gsr-surface border border-gsr-border",
      textClass: "text-gsr-text-primary",
      desc: "Cinza areia claro. Usado para seções secundárias, cards, inputs e agrupamentos de conteúdo.",
    },
    {
      name: "Dourado GSR",
      hex: "#B5945B",
      hsl: "HSL (40, 39%, 53%)",
      variable: "var(--color-gsr-gold)",
      bgClass: "bg-gsr-gold",
      textClass: "text-white",
      desc: "Dourado metálico fechado (champanhe). Cor de destaque principal usada em CTAs, ícones e hovers.",
    },
    {
      name: "Dourado Light",
      hex: "#C5A672",
      hsl: "HSL (40, 42%, 61%)",
      variable: "var(--color-gsr-gold-light)",
      bgClass: "bg-gsr-gold-light",
      textClass: "text-gsr-text-primary",
      desc: "Dourado de hover. Tom mais suave para indicar interações ativas.",
    },
    {
      name: "Dourado Escuro",
      hex: "#9E7F46",
      hsl: "HSL (40, 39%, 45%)",
      variable: "var(--color-gsr-gold-dark)",
      bgClass: "bg-gsr-gold-dark",
      textClass: "text-white",
      desc: "Dourado para contraste alto. Usado em bordas finas de ênfase ou textos dourados pequenos.",
    },
    {
      name: "Texto Primário",
      hex: "#15171A",
      hsl: "HSL (210, 10%, 9%)",
      variable: "var(--color-gsr-text-primary)",
      bgClass: "bg-gsr-text-primary",
      textClass: "text-white",
      desc: "Charcoal escuro (quase preto). Transmite autoridade, seriedade e excelente leitura.",
    },
    {
      name: "Texto Secundário",
      hex: "#5E6166",
      hsl: "HSL (210, 4%, 39%)",
      variable: "bg-gsr-text-secondary",
      bgClass: "bg-gsr-text-secondary",
      textClass: "text-white",
      desc: "Cinza médio corporativo. Utilizado em parágrafos normais, metadados e legendas.",
    },
    {
      name: "Bordas / Divisores",
      hex: "#DFDED9",
      hsl: "HSL (45, 6%, 87%)",
      variable: "var(--color-gsr-border)",
      bgClass: "bg-gsr-border",
      textClass: "text-gsr-text-primary",
      desc: "Linha fina cinza. Serve de limite estrutural mantendo o layout limpo e legível.",
    },
  ];

  return (
    <div className="bg-gsr-bg min-h-screen text-gsr-text-primary flex flex-col relative pb-20">
      
      {/* Toast Notification Alert */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gsr-text-primary text-gsr-bg px-6 py-4 rounded-gsr shadow-gsr-lg transition-all duration-500 transform ${
          showToast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <CheckCircle className="h-5 w-5 text-gsr-gold" />
        <span className="text-xs font-semibold uppercase tracking-wider">{toastMessage}</span>
      </div>

      {/* HeaderNav Demonstration */}
      <HeaderNav
        logoText="GSR COMPANY"
        logoIcon={Shield}
        onCtaClick={handleCtaClick}
      />

      {/* Hero Welcome Panel */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-gsr-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <Badge variant="primary">Design System Mestre</Badge>
            <Heading level={1} className="font-normal text-balance">
              Estética White-Dominant com Acentos Dourados
            </Heading>
            <Body variant="secondary" className="text-lg leading-relaxed max-w-3xl">
              Este é o guia visual de handoff e sandbox interativa de componentes base da **GSR Company**. Criado a partir da síntese de 5 referências editoriais e de SaaS corporativo, com foco em segurança empresarial, governança, compliance e advocacia B2B de alto prestígio.
            </Body>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="filled"
                icon={ArrowRight}
                onClick={() => {
                  const element = document.getElementById("colors");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explorar Tokens
              </Button>
              <Button
                variant="outline"
                icon={Download}
                onClick={() => triggerCopyToast("DESIGN_SYSTEM.md")}
              >
                Copiar DESIGN_SYSTEM.md
              </Button>
            </div>
          </div>
          <div className="lg:col-span-4 flex items-center justify-center">
            {/* Visual shield looped representation */}
            <div className="w-full max-w-xs aspect-square border border-gsr-border bg-white rounded-card p-6 flex flex-col items-center justify-center shadow-gsr-md relative">
              <Shield className="h-20 w-20 text-gsr-gold animate-pulse mb-4" />
              <Heading level={4} className="text-center">GSR COMPANY</Heading>
              <Caption className="text-[10px] mt-2 block text-center">Security & Compliance</Caption>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container of the Playground */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
        
        {/* Navigation Sidebar menu */}
        <aside className="lg:col-span-3 lg:sticky lg:top-28 h-fit space-y-2">
          <Caption className="text-[10px] font-bold block mb-4 px-3 text-gsr-text-secondary/60">
            Navegação do Hub
          </Caption>
          <nav className="space-y-1">
            {[
              { id: "colors", label: "Cores & Paleta", icon: Settings },
              { id: "typography", label: "Tipografia", icon: Briefcase },
              { id: "buttons", label: "Botões & CTAs", icon: ArrowRight },
              { id: "badges", label: "Badges & Tags", icon: Info },
              { id: "inputs", label: "Inputs & Formulários", icon: Mail },
              { id: "cards", label: "Cards & Grid", icon: FileText },
              { id: "media", label: "loop de Mídia 3D", icon: Eye },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 px-3 py-3 rounded-gsr text-xs font-semibold uppercase tracking-wider text-gsr-text-secondary hover:bg-gsr-surface hover:text-gsr-text-primary transition-all duration-200"
              >
                <item.icon className="h-4 w-4 text-gsr-gold" />
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-9 space-y-24">

          {/* 1. CORES */}
          <section id="colors" className="scroll-mt-24 space-y-6">
            <div className="border-b border-gsr-border pb-4">
              <Heading level={2}>1. Paleta de Cores (Tokens de Cores)</Heading>
              <Body variant="secondary" className="mt-2">
                Sistema cromático predominante em off-white quente (`#FAFAF8`), cards em cinza-areia claro (`#F1F0EC`) e texto em charcoal (`#15171A`), com acentos de prestígio em Dourado GSR (`#B5945B`) e sombras discretas.
              </Body>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colorSwatches.map((color) => (
                <div
                  key={color.hex}
                  onClick={() => triggerCopyToast(color.hex)}
                  className="bg-white border border-gsr-border rounded-card p-5 cursor-pointer flex gap-4 items-center hover:border-gsr-gold hover:-translate-y-0.5 hover:shadow-gsr-md transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-gsr shrink-0 ${color.bgClass}`} />
                  <div className="space-y-1 min-w-0">
                    <h4 className="font-sans text-sm font-semibold text-gsr-text-primary uppercase tracking-wider">
                      {color.name}
                    </h4>
                    <p className="font-mono text-xs text-gsr-text-secondary">
                      {color.hex} · {color.hsl}
                    </p>
                    <p className="font-mono text-[10px] text-gsr-gold-dark font-medium">
                      {color.variable}
                    </p>
                    <p className="font-sans text-xs text-gsr-text-secondary/90 leading-tight pt-1">
                      {color.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. TIPOGRAFIA */}
          <section id="typography" class="scroll-mt-24 space-y-6">
            <div className="border-b border-gsr-border pb-4">
              <Heading level={2}>2. Tipografia (Playfair Display + Inter)</Heading>
              <Body variant="secondary" className="mt-2">
                O emparelhamento visual combina a autoridade e tradição da serifa para títulos institucionais e a modernidade neutra da sans-serif para dados e leitura confortável.
              </Body>
            </div>

            <div className="bg-white border border-gsr-border rounded-card p-8 space-y-8 shadow-gsr-sm">
              <div className="space-y-1">
                <Caption className="text-[10px] block text-gsr-gold-dark mb-1">Título H1 (60px) · Playfair Display</Caption>
                <Heading level={1}>Segurança e Compliance</Heading>
              </div>

              <hr className="border-gsr-border" />

              <div className="space-y-1">
                <Caption className="text-[10px] block text-gsr-gold-dark mb-1">Título H2 (36px)</Caption>
                <Heading level={2}>Investigações e Controladoria</Heading>
              </div>

              <hr className="border-gsr-border" />

              <div className="space-y-1">
                <Caption className="text-[10px] block text-gsr-gold-dark mb-1">Título H3 (24px)</Caption>
                <Heading level={3}>Auditoria Corporativa B2B</Heading>
              </div>

              <hr className="border-gsr-border" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Caption className="text-[10px] block text-gsr-gold-dark">Texto Corrido / Body Primary (Inter)</Caption>
                  <Body>
                    A GSR Company atua com soluções personalizadas de compliance empresarial e controladoria de riscos de mercado. Nossos auditores garantem a integridade das operações.
                  </Body>
                </div>
                <div className="space-y-2">
                  <Caption className="text-[10px] block text-gsr-gold-dark">Texto Secundário / Body Secondary (Inter)</Caption>
                  <Body variant="secondary">
                    Decisões corporativas de alto nível exigem discrição absoluta e dados validados por conselhos jurídicos experientes.
                  </Body>
                </div>
              </div>
            </div>
          </section>

          {/* 3. BOTÕES */}
          <section id="buttons" className="scroll-mt-24 space-y-6">
            <div className="border-b border-gsr-border pb-4">
              <Heading level={2}>3. Botões & CTAs (Variações e Estados)</Heading>
              <Body variant="secondary" className="mt-2">
                Exibição de todas as variantes corporativas (filled dourado com texto escuro, outline e ghost) em todos os tamanhos e estados de interação.
              </Body>
            </div>

            <div className="bg-white border border-gsr-border rounded-card p-8 space-y-8 shadow-gsr-sm">
              
              {/* Variants Showcase */}
              <div className="space-y-4">
                <Caption className="text-[10px] block text-gsr-gold-dark">Estilos de Botões (Variantes)</Caption>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="filled" icon={ArrowRight}>Button Filled</Button>
                  <Button variant="outline" icon={ArrowRight}>Button Outline</Button>
                  <Button variant="ghost" icon={ArrowRight}>Button Ghost</Button>
                </div>
              </div>

              <hr className="border-gsr-border" />

              {/* Sizes Showcase */}
              <div className="space-y-4">
                <Caption className="text-[10px] block text-gsr-gold-dark">Tamanhos (Sizes)</Caption>
                <div className="flex flex-wrap gap-4 items-end">
                  <div className="flex flex-col gap-1 items-center">
                    <Button variant="filled" size="sm" icon={ArrowRight}>Small (sm)</Button>
                    <span className="text-[10px] font-mono text-gsr-text-secondary mt-1">size="sm"</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <Button variant="filled" size="default" icon={ArrowRight}>Default</Button>
                    <span className="text-[10px] font-mono text-gsr-text-secondary mt-1">size="default"</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <Button variant="filled" size="lg" icon={ArrowRight}>Large (lg)</Button>
                    <span className="text-[10px] font-mono text-gsr-text-secondary mt-1">size="lg"</span>
                  </div>
                </div>
              </div>

              <hr className="border-gsr-border" />

              {/* Interactive states */}
              <div className="space-y-4">
                <Caption className="text-[10px] block text-gsr-gold-dark">Estados de Controle (Disabled / Loading / Interactive)</Caption>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="filled" disabled icon={ArrowRight}>Desabilitado</Button>
                  <Button variant="outline" disabled icon={ArrowRight}>Disabled Outline</Button>
                  <Button variant="filled" loading={btnLoading} onClick={() => {
                    setBtnLoading(true);
                    setTimeout(() => setBtnLoading(false), 2500);
                  }} icon={ArrowRight}>
                    {btnLoading ? "Processando" : "Testar Loading"}
                  </Button>
                </div>
              </div>

            </div>
          </section>

          {/* 4. BADGES */}
          <section id="badges" className="scroll-mt-24 space-y-6">
            <div className="border-b border-gsr-border pb-4">
              <Heading level={2}>4. Badges & Tags (Categorias de Status)</Heading>
              <Body variant="secondary" className="mt-2">
                Rótulos de metadados refinados usados para níveis de sigilo de auditoria, conformidades regulatórias e status operacionais.
              </Body>
            </div>

            <div className="bg-white border border-gsr-border rounded-card p-8 space-y-6 shadow-gsr-sm">
              <div className="space-y-3">
                <Caption className="text-[10px] block text-gsr-gold-dark">Badges Padrão</Caption>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="primary">Badge Primary</Badge>
                  <Badge variant="secondary">Badge Secondary</Badge>
                  <Badge variant="outline">Badge Outline</Badge>
                </div>
              </div>

              <hr className="border-gsr-border" />

              <div className="space-y-3">
                <Caption className="text-[10px] block text-gsr-gold-dark">Badges de Conformidade e Sigilo (Status)</Caption>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="success">Sucesso (Concluído)</Badge>
                  <Badge variant="warning">Aviso (Em Auditoria)</Badge>
                  <Badge variant="error">Risco Elevado</Badge>
                  <Badge variant="confidential">Confidencial (Restrito)</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* 5. INPUTS & FORMULÁRIOS */}
          <section id="inputs" className="scroll-mt-24 space-y-6">
            <div className="border-b border-gsr-border pb-4">
              <Heading level={2}>5. Inputs & Formulários (Campos e Toggles)</Heading>
              <Body variant="secondary" className="mt-2">
                Elementos interativos de entrada de dados ajustados para fundos claros, com realce dourado ao focar, além de validação integrada e aviso de privacidade de dados.
              </Body>
            </div>

            <div className="bg-white border border-gsr-border rounded-card p-8 space-y-8 shadow-gsr-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Standard Text field */}
                <TextField
                  label="Nome do Executivo"
                  placeholder="Ex: Priya R. Santos"
                  helperText="Insira o nome completo corporativo para fins de cadastro."
                />

                {/* Email text field with simulation of interactive text change */}
                <TextField
                  label="E-mail Corporativo"
                  placeholder="exemplo@gsr.com"
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    if (e.target.value.includes("@") && e.target.value.includes(".")) {
                      setInputError("");
                    } else {
                      setInputError("Por favor, digite um formato válido de e-mail.");
                    }
                  }}
                  error={inputText.length > 0 ? inputError : ""}
                  helperText="Insira seu e-mail institucional seguro."
                />

                {/* Disabled TextField */}
                <TextField
                  label="Código Identificador (Cadastro)"
                  value="GSR-BR-2026-X84B"
                  disabled
                  helperText="Este campo é gerado automaticamente."
                />

                {/* Switch Toggles (Interactive) */}
                <div className="space-y-4 border border-gsr-border/60 bg-gsr-surface/30 rounded-gsr p-4">
                  <Caption className="text-[10px] block text-gsr-gold-dark mb-1">Controles Alternadores (Switch)</Caption>
                  <Switch
                    label="Autenticação em Duas Etapas"
                    description="Recomendado para segurança corporativa."
                    checked={switchChecked1}
                    onChange={setSwitchChecked1}
                  />
                  <hr className="border-gsr-border/40" />
                  <Switch
                    label="Termos de Privacidade (LGPD)"
                    description="Permitir tratamento de dados seguro."
                    checked={switchChecked2}
                    onChange={setSwitchChecked2}
                  />
                </div>

              </div>

              {/* Textarea demonstration */}
              <TextArea
                label="Descreva a Necessidade de Segurança B2B"
                placeholder="Descreva brevemente a atuação, compliance regulatório ou governança requisitados..."
                rows={3}
              />
            </div>
          </section>

          {/* 6. CARDS */}
          <section id="cards" className="scroll-mt-24 space-y-6">
            <div className="border-b border-gsr-border pb-4">
              <Heading level={2}>6. Componentes de Cards (Layouts Modulares)</Heading>
              <Body variant="secondary" className="mt-2">
                Os cards servem de base visual estruturada para serviços de atuação, história da empresa e estatísticas de prestígio, empregando sombras suaves sobre a paleta off-white.
              </Body>
            </div>

            {/* Service Cards Grid Showcase */}
            <div className="space-y-4">
              <Caption className="text-[10px] block text-gsr-gold-dark">Cards de Serviços (`ServiceCard` · Hover Dourado)</Caption>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <ServiceCard
                  title="Compliance Regulatório"
                  description="Prevenção de riscos, adequação à LGPD, investigações de integridade corporativa e governança interna contra fraudes estruturais."
                  icon={Shield}
                  onClick={() => triggerCopyToast("Serviço de Compliance")}
                />

                <ServiceCard
                  title="Investigações Privadas"
                  description="Lojas de vazamento de informações, auditorias de conduta interna, segurança de executivos de alto escalão e controle confidencial."
                  icon={Search}
                  onClick={() => triggerCopyToast("Serviço de Investigações")}
                />

              </div>
            </div>

            <hr className="border-gsr-border" />

            {/* Metric Cards Showcase */}
            <div className="space-y-4">
              <Caption className="text-[10px] block text-gsr-gold-dark">Cards de Estatística (`MetricCard` · Serifas Gigantes)</Caption>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                <MetricCard
                  number="20+"
                  label="Anos de Mercado"
                  description="Atuação consolidada no compliance e governança internacional."
                />

                <MetricCard
                  number="99.2%"
                  label="Casos de Sucesso"
                  description="Casos solucionados com total discrição e conformidade."
                />

                <MetricCard
                  number="R$ 5B+"
                  label="Recuperados / Auditados"
                  description="Riscos patrimoniais e fraudes evitadas para parceiros B2B."
                />

              </div>
            </div>

            <hr className="border-gsr-border" />

            {/* About Card Showcase */}
            <div className="space-y-4">
              <Caption className="text-[10px] block text-gsr-gold-dark">Seção Sobre (`AboutCard` · Layout Assimétrico)</Caption>
              
              <AboutCard
                subtitle="Nossa Trajetória Jurídica & Operacional"
                title="Sólida inteligência jurídica a serviço da segurança de ativos corporativos"
                description="Fundada no início do século, a GSR Company nasceu com o objetivo claro de fornecer respostas rápidas, confidenciais e auditáveis para desafios complexos de governança. Nossos auditores e agentes de segurança privada atuam sob rígida conformidade, combinando rigor investigativo e técnica jurídica sofisticada."
              >
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-gsr px-3.5 py-1.5 select-none">
                    <CheckCircle className="h-4 w-4" />
                    Auditado Sob Rígida Conformidade
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gsr-text-primary bg-gsr-surface border border-gsr-border rounded-gsr px-3.5 py-1.5 select-none">
                    <Lock className="h-4 w-4 text-gsr-gold" />
                    Sigilo B2B Absoluto
                  </div>
                </div>
              </AboutCard>

            </div>
          </section>

          {/* 7. MÍDIAS & LOOP */}
          <section id="media" className="scroll-mt-24 space-y-6">
            <div className="border-b border-gsr-border pb-4">
              <Heading level={2}>7. Contenedores de Mídia (Loop de Chaveiro 3D)</Heading>
              <Body variant="secondary" className="mt-2">
                Diretrizes e componentes de exibição de renders 3D e mídias do chaveiro de escudo. A variante clara utiliza o escudo escuro com circuitos brancos, envolto em containers limpos.
              </Body>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Video Component Loop demonstration */}
              <div className="space-y-3">
                <Caption className="text-[10px] block text-gsr-gold-dark">Contenedor de Vídeo 3D Loop (`ShieldVideo`)</Caption>
                <ShieldVideo
                  src={null} // Will show the elegant fallback placeholder since we do not have the mp4 path yet
                  className="w-full"
                />
                <Body variant="secondary" className="text-xs">
                  *Nota: O componente está configurado para loop infinito (`autoplay loop muted playsinline`) com mix-blend sutil sobre o fundo claro, integrando o chaveiro perfeitamente à página.*
                </Body>
              </div>

              {/* Image Component Loop demonstration */}
              <div className="space-y-3">
                <Caption className="text-[10px] block text-gsr-gold-dark">Contenedor de Render Estático (`ShieldImage` · Zoom & Grayscale Hover)</Caption>
                <ShieldImage
                  src={null} // Will show the elegant image fallback placeholder
                  className="w-full"
                />
                <Body variant="secondary" className="text-xs">
                  *Nota: O componente aplica escala de zoom suave (`scale-105`) e transição de descoloração progressiva no estado de hover.*
                </Body>
              </div>

            </div>
          </section>

        </main>
      </div>

      {/* Footer Demonstration */}
      <footer className="mt-20 border-t border-gsr-border bg-gsr-surface/50 w-full py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Shield className="h-5 w-5 text-gsr-gold" />
            <span className="font-title text-base text-gsr-text-primary tracking-wide">GSR Company</span>
            <span className="text-[10px] uppercase font-semibold text-gsr-text-secondary/60 bg-gsr-surface px-2 py-0.5 rounded border border-gsr-border">
              Guia de Estilos v1.0
            </span>
          </div>
          <p className="text-xs text-gsr-text-secondary/80 font-sans">
            © {new Date().getFullYear()} GSR Company. Todos os direitos reservados. Conformidade e Segurança Corporativa B2B.
          </p>
        </div>
      </footer>

    </div>
  );
}
