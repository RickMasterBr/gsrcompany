import { Shield, Scale, Settings, Search, AlertTriangle, Briefcase } from "lucide-react";

/**
 * Conteúdo estruturado para a Landing Page (One-Page) da GSR Company.
 * Todos os textos estão em português (PT-BR) com tom corporativo B2B sério.
 * Estes dados funcionam como placeholders realistas para aprovação antes de plugar um CMS.
 */
export const landingPageContent = {
  hero: {
    badge: "Consultoria Especializada em Negócios Corporativos",
    title: "Riscos Identificados. Governança Fortalecida. Ativos Protegidos.",
    description: "Toda decisão estratégica carrega um risco que pode não estar mapeado. Identificamos vulnerabilidades antes que se tornem passivos, fortalecemos a governança da sua operação e garantimos conformidade total para que conselhos e executivos decidam com segurança, não com intuição.",
    ctaPrimary: {
      label: "Fale com nossa equipe",
      href: "#contato",
    },
    ctaSecondary: {
      label: "Áreas de Atuação",
      href: "#servicos",
    },
    video: {
      src: "/assets/lettering-gsr.mp4",
      poster: undefined,
      alt: "Loop animado de tipografia formando o logotipo GSR, símbolo de integridade e proteção",
    },
  },
  services: {
    subtitle: "Frentes de Proteção Corporativa",
    title: "Para cada risco corporativo, uma resposta especializada",
    description: "Fraudes não identificadas, passivos regulatórios e vulnerabilidades patrimoniais colocam sua operação em risco. Atuamos com agilidade e alta credibilidade para mapear, conter e resolver cada uma dessas frentes.",
    items: [
      {
        slug: "seguranca-empresarial",
        title: "Segurança Patrimonial e Empresarial",
        description: "Vulnerabilidades patrimoniais e físicas expõem sua operação e seus executivos. Mapeamos riscos e estruturamos proteção integrada, da sede ao deslocamento de lideranças.",
        icon: Shield,
      },
      {
        slug: "compliance-regulatorio",
        title: "Compliance Regulatório",
        description: "Não conformidade regulatória vira multa, processo e dano reputacional. Implementamos e revisamos programas de integridade que blindam sua empresa, incluindo adequação total à LGPD.",
        icon: Scale,
      },
      {
        slug: "governanca-corporativa",
        title: "Controladoria e Governança",
        description: "Decisões societárias mal estruturadas geram conflitos e passivos futuros. Desenhamos a governança da sua empresa — de acordos a operações de M&A — com respaldo jurídico completo.",
        icon: Settings,
      },
      {
        slug: "gestao-riscos",
        title: "Auditorias Financeiras",
        description: "Fornecedores não auditados e riscos fiscais não mapeados se tornam passivos caros. Identificamos, mensuramos e mitigamos cada risco antes que ele afete sua operação ou seu caixa.",
        icon: AlertTriangle,
      },
      {
        slug: "inteligencia-corporativa",
        title: "Investigações de Riscos e Fraudes",
        description: "Vazamento de informações estratégicas e concorrência desleal corroem sua vantagem competitiva. Aplicamos inteligência corporativa para identificar e neutralizar essas ameaças sob sigilo absoluto.",
        icon: Search,
      },
      {
        slug: "outsource-management",
        title: "Serviços Jurídicos Notariais e Cartoriais",
        description: "Suporte técnico a empresas e pessoas físicas na condução de demandas documentais, contratuais, registrais e administrativas, com foco em agilidade, segurança jurídica e conformidade legal.",
        icon: Briefcase,
      },
    ],
  },
  differentiators: {
    subtitle: "Nosso Diferencial",
    title: "Estratégia que se transforma em resultados",
    description: "Na GSR Company, acreditamos que uma consultoria entrega valor quando participa da transformação do negócio. Por isso, atuamos desde o diagnóstico até a implementação das soluções, integrando governança corporativa, gestão de riscos, segurança empresarial, controladoria e compliance para fortalecer processos, proteger ativos e impulsionar a performance organizacional.",
    items: [
      {
        id: "inteligencia-multidisciplinar",
        iconName: "ShieldCheck",
        label: "Inteligência Multidisciplinar",
        tag: "Inteligência Multidisciplinar",
        title: "Uma visão integrada para desafios complexos",
        description: "A GSR Company reúne especialistas em governança corporativa, controladoria, auditoria, compliance, segurança empresarial e serviços jurídicos para oferecer soluções integradas. Essa abordagem multidisciplinar amplia a capacidade analítica, reduz a fragmentação entre áreas e proporciona decisões mais consistentes, eficientes e orientadas à geração de valor.",
      },
      {
        id: "execucao-orientada-resultados",
        iconName: "Award",
        label: "Execução Orientada a Resultados",
        tag: "Execução Orientada a Resultados",
        title: "Estratégia implementada, resultados comprovados",
        description: "Mais do que elaborar diagnósticos e recomendações, acompanhamos a implementação das soluções propostas. Atuamos em parceria com nossos clientes para transformar planejamento em resultados concretos, fortalecendo a governança, mitigando riscos e impulsionando a eficiência operacional.",
      },
      {
        id: "inovacao-aplicada",
        iconName: "Zap",
        label: "Inovação Aplicada",
        tag: "Inovação Aplicada",
        title: "Agilidade para evoluir com o mercado",
        description: "Aliamos metodologias consolidadas às melhores práticas de inteligência de mercado, inovação e análise de dados para desenvolver soluções flexíveis e escaláveis. Nossa atuação permite que organizações se adaptem rapidamente às mudanças regulatórias, operacionais e estratégicas, mantendo competitividade em ambientes de constante transformação.",
      },
    ],
  },
  about: {
    subtitle: "Propósito & Credibilidade",
    title: "Inteligência corporativa que gera confiança",
    description: "A GSR Company é um ecossistema de soluções corporativas que integra governança, controladoria, auditoria, gestão de riscos, compliance, segurança empresarial e soluções jurídicas em uma metodologia multidisciplinar. Atuamos para fortalecer organizações por meio de inteligência aplicada, visão estratégica e execução orientada a resultados, promovendo relações de confiança, decisões mais seguras e crescimento sustentável.",
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
    buttonLabel: "Enviar Mensagem",
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
      image: "/assets/processo-diagnostico.jpeg",
    },
    {
      title: "Levantamento de Informações e Análise Técnica",
      subtitle: "Etapa 2",
      description: "Nossa equipe de especialistas conduz o trabalho de campo: auditorias, investigações, análise documental ou jurídica, conforme o escopo definido.",
      image: "/assets/processo-levantamento.jpeg",
    },
    {
      title: "Execução e Estruturação",
      subtitle: "Etapa 3",
      description: "Implementamos as recomendações, estruturamos processos de compliance e segurança, e acompanhamos a adoção junto ao seu time.",
      image: "/assets/processo-execucao.jpeg",
    },
    {
      title: "Inteligência Integrada em Cada Etapa",
      subtitle: "Sempre",
      description: "Aplicamos verificação, controle e acompanhamento contínuos em todas as etapas, fortalecendo a conformidade, a segurança e a qualidade das soluções entregues.",
      image: "/assets/processo-relatorio.jpeg",
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
      answer: "Segurança patrimonial e empresarial, compliance regulatório, controladoria e governança, auditorias financeiras, investigações de riscos e fraudes e serviços jurídicos notariais e cartoriais.",
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
      question: "Como são os atendimentos?",
      answer: "Funcionam como um processo de acolhimento, análise, planejamento, execução e acompanhamento da demanda, com foco em solução, segurança, organização e praticidade para o cliente. Podendo ser feitos presenciais e também remotos.",
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
      question: "Quanto tempo leva um diagnóstico?",
      answer: "Em média, o diagnóstico pode ser realizado entre 7 e 30 dias, abrangendo o levantamento de processos, identificação de gargalos operacionais, análise de riscos, avaliação de controles, oportunidades de otimização e definição de estratégias para ganho de eficiência, crescimento estruturado e sustentabilidade do negócio.",
    },
  ],
};
