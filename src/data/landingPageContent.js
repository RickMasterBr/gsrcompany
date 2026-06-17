import { Shield, Scale, Settings, Search, FileText, Briefcase } from "lucide-react";

/**
 * Conteúdo estruturado para a Landing Page (One-Page) da GSR Company.
 * Todos os textos estão em português (PT-BR) com tom corporativo B2B sério.
 * Estes dados funcionam como placeholders realistas para aprovação antes de plugar um CMS.
 */
export const landingPageContent = {
  hero: {
    badge: "Solidez & Inteligência Corporativa",
    title: "Mitigação de Riscos, Compliance e Governança de Alto Nível",
    description: "Assessoramos grandes corporações e conselhos de administração na tomada de decisões estratégicas de alta complexidade. Protegemos sua operação com auditoria independente, segurança de ativos e conformidade legal.",
    ctaPrimary: {
      label: "Agendar Reunião Segura",
      href: "#contato",
    },
    ctaSecondary: {
      label: "Áreas de Atuação",
      href: "#servicos",
    },
    video: {
      src: "/assets/videoChaveiro.mp4",
      poster: "/assets/imagemChaveiro2.jpeg",
      alt: "Loop animado 3D do chaveiro de escudo GSR, símbolo de integridade e proteção",
    },
  },
  services: {
    subtitle: "Nossas Competências",
    title: "Soluções integradas sob sigilo absoluto",
    description: "Estrutura ágil e de alta credibilidade para prover respostas precisas e documentadas sobre fraudes, passivos regulatórios e vulnerabilidades de ativos corporativos.",
    items: [
      {
        slug: "seguranca-empresarial",
        title: "Segurança Empresarial",
        description: "Análise tática de vulnerabilidades patrimoniais, planos integrados de segurança física, lógicas e proteção velada de lideranças corporativas.",
        icon: Shield,
      },
      {
        slug: "compliance-regulatorio",
        title: "Compliance Regulatório",
        description: "Implementação e revisão de programas de integridade corporativa, investigações internas contra suborno e adequação sistêmica à LGPD.",
        icon: Scale,
      },
      {
        slug: "controladoria-governanca",
        title: "Controladoria & Governança",
        description: "Auditoria contábil especializada, análise de riscos fiscais e controles internos administrativos para conselhos de administração.",
        icon: Settings,
      },
      {
        slug: "investigacoes-privadas",
        title: "Investigações Privadas",
        description: "Inteligência corporativa aplicada à identificação de vazamento de segredos industriais, espionagem concorrencial e desvio de conduta.",
        icon: Search,
      },
      {
        slug: "auditorias",
        title: "Auditorias de Processo",
        description: "Revisão imparcial de contratos comerciais de larga escala, validação de integridade de fornecedores e certificações de processos operacionais.",
        icon: FileText,
      },
      {
        slug: "servicos-juridicos",
        title: "Serviços Jurídicos",
        description: "Assessoria consultiva em direito tributário complexo, contencioso societário estratégico e defesa criminal econômica corporativa.",
        icon: Briefcase,
      },
    ],
  },
  stats: {
    items: [
      {
        number: "20+",
        label: "Anos de mercado",
        description: "Tradição consolidada no suporte a conselhos executivos e escritórios internacionais.",
      },
      {
        number: "99.2%",
        label: "Casos de sucesso",
        description: "Casos corporativos de alta confidencialidade solucionados com conformidade jurídica.",
      },
      {
        number: "R$ 5B+",
        label: "Ativos auditados",
        description: "Mitigação direta de perdas patrimoniais, fraudes industriais e multas regulatórias.",
      },
    ],
  },
  about: {
    subtitle: "Trajetória & Credibilidade",
    title: "Décadas de mercado pautadas por precisão técnica e confidencialidade",
    description: "A GSR Company nasceu para prover soluções de inteligência preventiva para empresas em processos de reestruturação, fusões e aquisições (M&A) e disputas corporativas complexas. Sob a liderança de juristas experientes e ex-auditores de grandes firmas, atuamos com rigor analítico irrefutável e proteção total de segredos comerciais.",
    badges: [
      "Processos Certificados ISO",
      "Sigilo e Conformidade LGPD",
      "Corpo Técnico de Alta Qualificação",
    ],
    image: {
      src: "/assets/imagemChaveiro1.jpeg",
      alt: "Imagem do chaveiro com logo em escudo GSR Company com fundo claro"
    }
  },
  contact: {
    title: "Canais de Comunicação Segura",
    description: "Garantimos conformidade total com políticas rígidas de privacidade. Suas informações serão protegidas sob privilégio de sigilo profissional corporativo.",
    buttonLabel: "Enviar Solicitação Segura",
    lgpdLabel: "Consentimento e Termos de Privacidade",
    lgpdDescription: "Declaro ciente de que as informações compartilhadas serão tratadas sob estrito sigilo corporativo e em conformidade legal.",
  },
};
