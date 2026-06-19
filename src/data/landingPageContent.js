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
        title: "Auditorias",
        description: "Revisão imparcial de contratos comerciais de larga escala, validação de integridade de fornecedores e certificações de processos operacionais.",
        icon: FileText,
      },
      {
        slug: "servicos-juridicos",
        title: "Serviços Jurídicos",
        description: "Assessoria consultiva em direito tributário complexo, contencioso societário estratégico, defesa criminal econômica corporativa e atuação notarial e cartorária.",
        icon: Briefcase,
      },
    ],
  },
  differentiators: {
    subtitle: "Como Trabalhamos",
    title: "Rigor corporativo, desde o primeiro dia",
    description: "Somos uma operação nova, mas estruturada como uma corporação: processos documentados, equipe sênior e compliance nativo — sem fase de amadurecimento.",
    items: [
      {
        id: "rigor-corporativo",
        iconName: "ShieldCheck",
        label: "Rigor Corporativo",
        tag: "Rigor Corporativo",
        title: "Rigor corporativo desde o primeiro dia",
        description: "Seguimos os mesmos protocolos de documentação, controles internos e compliance que orientam grandes corporações — sem fase de amadurecimento.",
      },
      {
        id: "equipe-senior",
        iconName: "Award",
        label: "Equipe Sênior",
        tag: "Equipe Sênior",
        title: "Equipe técnica sênior, não trainee",
        description: "Nosso corpo técnico reúne profissionais com trajetória consolidada em auditoria, compliance, investigação e direito corporativo, atuando sob um modelo de governança estruturado desde a fundação.",
      },
      {
        id: "estrutura-agil",
        iconName: "Zap",
        label: "Estrutura Ágil",
        tag: "Estrutura Ágil",
        title: "Estrutura ágil, sem burocracia herdada",
        description: "Sem camadas de decisão de uma operação antiga: contato direto com quem executa, resposta rápida e escopo adaptado de verdade ao porte de cada cliente.",
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

export const process = {
  subtitle: "Nosso Processo",
  title: "Como conduzimos cada atendimento",
  description: "Um fluxo estruturado, do diagnóstico confidencial ao acompanhamento contínuo de conformidade.",
  items: [
    {
      title: "Diagnóstico Confidencial",
      subtitle: "Etapa 1",
      description: "Entendemos o escopo, mapeamos os riscos e definimos com você o que precisa ser investigado, auditado ou estruturado, sob sigilo desde a primeira conversa.",
      image: "/assets/imagemChaveiro1.jpeg",
    },
    {
      title: "Levantamento e Análise Técnica",
      subtitle: "Etapa 2",
      description: "Nossa equipe sênior conduz o trabalho de campo: auditorias, investigações, análise documental ou jurídica, conforme o escopo definido.",
      image: "/assets/imagemChaveiro2.jpeg",
    },
    {
      title: "Execução e Estruturação",
      subtitle: "Etapa 3",
      description: "Implementamos as recomendações, estruturamos processos de compliance e segurança, e acompanhamos a adoção junto ao seu time.",
      image: "/assets/imagemChaveiro1.jpeg",
    },
    {
      title: "Relatório e Acompanhamento",
      subtitle: "Sempre",
      description: "Entregamos relatórios documentados, prontos para uso em decisões, contratos ou processos, com acompanhamento contínuo de conformidade.",
      image: "/assets/imagemChaveiro2.jpeg",
    },
  ],
};

export const missionVisionValues = [
  {
    id: "missao",
    number: "01",
    title: "Missão",
    description: "Prover soluções corporativas estratégicas que assegurem proteção empresarial, governança eficiente e integridade operacional, apoiando organizações na mitigação de riscos, no fortalecimento de seus processos decisórios e na sustentabilidade de seus negócios, com rigor técnico, confidencialidade absoluta e excelência profissional.",
    iconName: "Target",
  },
  {
    id: "visao",
    number: "02",
    title: "Visão",
    description: "Ser reconhecida como referência nacional em consultoria corporativa de alta confiabilidade, destacando-se pela capacidade de antecipar riscos, proteger ativos estratégicos e fortalecer a governança das organizações, contribuindo para ambientes empresariais mais seguros, éticos e resilientes.",
    iconName: "Eye",
  },
  {
    id: "valores",
    number: "03",
    title: "Valores",
    description: "Os princípios que orientam cada decisão e cada entrega da GSR Company.",
    values: [
      { label: "Integridade", detail: "Ética, transparência e confiança em todas as relações." },
      { label: "Confidencialidade", detail: "Proteção absoluta das informações estratégicas." },
      { label: "Excelência", detail: "Soluções técnicas com qualidade e precisão." },
      { label: "Governança", detail: "Conformidade, gestão de riscos e decisões responsáveis." },
      { label: "Resultados", detail: "Eficiência operacional com impacto mensurável." },
      { label: "Compromisso", detail: "Responsabilidade em cada projeto e decisão." },
      { label: "Inovação", detail: "Evolução contínua com segurança e sustentabilidade." },
    ],
    iconName: "ShieldCheck",
  },
];

export const faq = {
  subtitle: "Perguntas Frequentes",
  title: "Tire suas dúvidas antes de entrar em contato",
  description: "Reunimos as perguntas mais comuns sobre como a GSR atua, sob qual sigilo e em que formato.",
  items: [
    {
      question: "Quais áreas a GSR atende?",
      answer: "Segurança empresarial, compliance regulatório, controladoria e governança, investigações privadas, auditorias e serviços jurídicos (incluindo atos notariais e cartorários).",
    },
    {
      question: "Como funciona o primeiro contato?",
      answer: "Você preenche o formulário seguro do site (ou usa o e-mail/WhatsApp do rodapé) descrevendo a necessidade. Um consultor especializado na área retorna em até 24 horas úteis por canal seguro.",
    },
    {
      question: "As informações que envio ficam protegidas?",
      answer: "Sim. Toda comunicação é tratada sob sigilo profissional e em conformidade com a LGPD, usada exclusivamente para qualificar e conduzir o atendimento solicitado.",
    },
    {
      question: "Os atendimentos são presenciais ou remotos?",
      answer: "O diagnóstico inicial costuma ser remoto e sob sigilo. Dependendo do escopo — auditorias on-site ou segurança patrimonial, por exemplo — o trabalho pode incluir visitas presenciais.",
    },
    {
      question: "A GSR emite relatórios que posso usar em contratos ou processos?",
      answer: "Sim. Os relatórios são estruturados para servir de base documental em renegociações contratuais, processos de compliance e, quando aplicável, em procedimentos judiciais.",
    },
    {
      question: "É preciso ser uma grande corporação pra contratar a GSR?",
      answer: "Não. Atendemos empresas que buscam rigor corporativo na gestão de riscos, adaptando o escopo do serviço ao porte e à necessidade de cada cliente.",
    },
    {
      question: "Quanto tempo leva um diagnóstico ou auditoria?",
      answer: "Varia com o escopo e a complexidade do caso. Depois do diagnóstico inicial, enviamos um prazo estimado antes de começar o trabalho formalmente.",
    },
  ],
};
