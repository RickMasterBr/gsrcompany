import { Shield, Scale, Settings, Search, FileText, Briefcase } from "lucide-react";

/**
 * Conteúdo estruturado para as 6 páginas dinâmicas de serviços da GSR Company.
 * Todos os objetos utilizam a mesma estrutura estrita de slots para consumo do template dinâmico.
 */
export const servicesContent = {
  "seguranca-empresarial": {
    slug: "seguranca-empresarial",
    title: "Segurança Empresarial e Inteligência Preventiva",
    subtitle: "Proteção estratégica de ativos físicos, digitais e humanos",
    badge: "Segurança Corporativa",
    icon: Shield,
    leadParagraph: "Apoiamos corporações a identificar vulnerabilidades, estabelecer protocolos de contingência e proteger executivos em operações críticas.",
    richContent: [
      "No cenário atual, a segurança empresarial transcende barreiras físicas. Estruturamos análises integradas que combinam a avaliação de riscos logísticos, operacionais e cibernéticos, provendo recomendações irrefutáveis e planos diretores customizados.",
      "Nosso corpo técnico atua em estreita colaboração com conselhos diretivos para mapear rotas sensíveis, blindar perímetros corporativos e conduzir varreduras técnicas de contramedidas eletrônicas (contrainformação)."
    ],
    features: [
      "Diagnóstico integrado de vulnerabilidades patrimoniais",
      "Planos diretores de evasão segura e gerenciamento de crises",
      "Varredura técnica passiva e proteção de salas de conselho",
      "Treinamento tático de tomada de decisão para comitês executivos"
    ],
    sidebarInfo: {
      title: "Impacto Financeiro",
      description: "Estudos indicam que investimentos dirigidos à segurança tática preventiva reduzem incidentes graves em até 84% no primeiro ano fiscal.",
      ctaLabel: "Solicitar Plano de Risco"
    },
    media: {
      src: "/assets/imagemChaveiro2.jpeg",
      alt: "Variante escura do escudo de proteção GSR Company - Segurança Empresarial"
    }
  },
  "compliance-regulatorio": {
    slug: "compliance-regulatorio",
    title: "Compliance Regulatório e Prevenção a Fraudes",
    subtitle: "Conformidade sistêmica com leis nacionais e acordos internacionais",
    badge: "Compliance & Integridade",
    icon: Scale,
    leadParagraph: "Protegemos a reputação da sua marca estruturando programas de conformidade anticorrupção, adequação à LGPD e auditorias de integridade.",
    richContent: [
      "Programas de compliance eficientes evitam passivos bilionários e multas regulatórias pesadas. Apoiamos a formulação de Códigos de Conduta e canais seguros de denúncia anônima com tratamento metodológico rigoroso.",
      "Nossos juristas realizam due diligence abrangente em processos de fusões, aquisições e parcerias comerciais internacionais (Anti-Bribery and Anti-Corruption laws), garantindo que sua marca permaneça ilibada."
    ],
    features: [
      "Modelagem e revisão de Programas de Integridade Corporativa",
      "Investigações corporativas internas e assessoria em acordos de leniência",
      "Adequação sistêmica com mapeamento de fluxos de dados sob a LGPD",
      "Auditoria de conformidade em transações internacionais (FCPA/UK Bribery)"
    ],
    sidebarInfo: {
      title: "Conformidade e Valor",
      description: "Empresas com programas de compliance consolidados possuem um prêmio de valorização em processos de M&A de até 15% devido à redução de riscos fiscais.",
      ctaLabel: "Solicitar Diagnóstico de Conformidade"
    },
    media: {
      src: "/assets/imagemChaveiro1.jpeg",
      alt: "Variante do chaveiro GSR Company focado em compliance e conformidade"
    }
  },
  "controladoria-governanca": {
    slug: "controladoria-governanca",
    title: "Controladoria & Governança Corporativa",
    subtitle: "Estruturação de processos, transparência fiscal e proteção de caixa",
    badge: "Controladoria",
    icon: Settings,
    leadParagraph: "Apoiamos conselhos de administração a blindar processos contábeis, otimizar a controladoria fiscal e mitigar riscos de governança corporativa.",
    richContent: [
      "Uma governança sólida exige um sistema de controles internos rígido e independente. Nossos auditores avaliam processos orçamentários, detectam ineficiências de caixa e estruturam fluxos contábeis alinhados com práticas de auditoria global.",
      "Desenhamos matrizes de riscos fiscais e administrativos, promovendo a separação adequada de funções e garantindo transparência técnica exigida pelos acionistas e investidores."
    ],
    features: [
      "Auditoria independente de processos orçamentários e fiscais",
      "Mapeamento de matrizes de riscos internos e fluxos de caixa",
      "Desenho de estruturas de governança para empresas familiares e corporativas",
      "Assessoria em prestação de contas fiscais para investidores de grande porte"
    ],
    sidebarInfo: {
      title: "Transparência de Processos",
      description: "A separação sistemática de funções contábeis combinada com auditoria contínua mitiga desvios internos em até 95% das ocorrências registradas.",
      ctaLabel: "Solicitar Matriz de Riscos"
    },
    media: {
      src: "/assets/imagemChaveiro2.jpeg",
      alt: "Close-up do escudo GSR Company - Símbolo de governança e controle contábil"
    }
  },
  "investigacoes-privadas": {
    slug: "investigacoes-privadas",
    title: "Investigações Privadas Corporativas",
    subtitle: "Elucidação científica de desvios, vazamentos e espionagem industrial",
    badge: "Inteligência & Investigação",
    icon: Search,
    leadParagraph: "Provamos fraudes, identificamos autoria de vazamento de segredos industriais e neutralizamos concorrência desleal sob sigilo profissional absoluto.",
    richContent: [
      "Casos de desvio ético e roubo de patentes exigem rigor forense irrefutável. Nossa equipe conta com peritos cibernéticos, analistas de contrainteligência e ex-investigadores experientes que reúnem evidências válidas para processos judiciais.",
      "Trabalhamos de forma cirúrgica na identificação de fraudes na folha de fornecedores, sabotagem industrial e vazamento de banco de dados estratégicos, garantindo anonimato absoluto para a organização contratante."
    ],
    features: [
      "Perícia forense digital aplicada a computadores e servidores corporativos",
      "Auditoria de quebras de sigilo e vazamento de propriedade intelectual",
      "Investigação confidencial de fraudes de fornecedores e contratos falsos",
      "Identificação de escutas e espionagem industrial em escritórios diretivos"
    ],
    sidebarInfo: {
      title: "Fator Sigilo",
      description: "Nossos processos de investigação são protegidos por privilégio profissional e contratos com cláusulas de sigilo perpétuo, garantindo segurança jurídica total.",
      ctaLabel: "Iniciar Canal Investigativo"
    },
    media: {
      src: "/assets/imagemChaveiro1.jpeg",
      alt: "Close-up do chaveiro GSR Company de ângulo superior - Inteligência Corporativa"
    }
  },
  "auditorias": {
    slug: "auditorias",
    title: "Auditorias de Processo e Fornecedores",
    subtitle: "Avaliação imparcial de contratos de larga escala e mitigação de terceiros",
    badge: "Auditoria Externa",
    icon: FileText,
    leadParagraph: "Avaliamos a conformidade contratual de fornecedores críticos, certificamos fluxos operacionais e prevenimos passivos em cadeia de suprimentos.",
    richContent: [
      "Parceiros comerciais e terceiros podem representar um risco reputacional invisível. Conduzimos auditorias completas no local (on-site audits), verificando práticas trabalhistas, regularidade fiscal, capacidade produtiva real e conformidade ética de parceiros estratégicos.",
      "Emitimos relatórios de auditoria irrefutáveis que servem de base contratual sólida para renovações, distratos ou negociações de fusão de empresas."
    ],
    features: [
      "Auditorias presenciais (on-site) de infraestrutura e capacidade real",
      "Avaliação de passivos fiscais, tributários e ambientais de terceiros",
      "Validação documental de licenças regulatórias e fiscais obrigatórias",
      "Desenho de programas contínuos de conformidade para cadeia de suprimentos"
    ],
    sidebarInfo: {
      title: "Garantia de Cadeia",
      description: "Mais de 70% das interrupções operacionais e multas solidárias B2B decorrem de falhas de conformidade em fornecedores não auditados devidamente.",
      ctaLabel: "Solicitar Escopo de Auditoria"
    },
    media: {
      src: "/assets/imagemChaveiro2.jpeg",
      alt: "Render do chaveiro da GSR em fundo neutro - Auditorias de Processo"
    }
  },
  "servicos-juridicos": {
    slug: "servicos-juridicos",
    title: "Serviços Jurídicos e Contencioso Estratégico",
    subtitle: "Assessoria consultiva societária de alta complexidade e defesa tributária",
    badge: "Serviços Jurídicos",
    icon: Briefcase,
    leadParagraph: "Garantimos segurança e representação jurídica robusta em negociações societárias, litígios complexos, penal econômico e atos notariais e cartorários.",
    richContent: [
      "O ambiente regulatório e tributário brasileiro é um dos mais complexos do mundo. Provemos assessoria de excelência técnica focada na estruturação societária societária de alta performance, reorganização tributária de ativos e defesas judiciais corporativas.",
      "Nosso time de advogados associados atua no contencioso estratégico, elaborando pareceres irrefutáveis para defesas de executivos e empresas em inquéritos civis ou processos fiscais complexos."
    ],
    features: [
      "Assessoria consultiva em reorganização tributária e planejamento fiscal",
      "Defesa corporativa estratégica em direito penal econômico e societário",
      "Elaboração de acordos societários, cisões, incorporações e due diligence M&A",
      "Representação arbitral de alta complexidade em disputas contratuais",
      "Atuação notarial e cartorária: lavratura de escrituras, procurações, autenticações e atos cartorários societários"
    ],
    sidebarInfo: {
      title: "Segurança de Ativos",
      description: "Pareceres consultivos preventivos emitidos por nosso time reduzem litígios tributários e passivos trabalhistas corporativos em até 75%.",
      ctaLabel: "Falar com Advogado Associado"
    },
    media: {
      src: "/assets/imagemChaveiro1.jpeg",
      alt: "Close-up do chaveiro escudo GSR - Símbolo de proteção legal e segurança"
    }
  }
};
