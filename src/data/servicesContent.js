import { Shield, Scale, Settings, Search, AlertTriangle, Briefcase } from "lucide-react";

/**
 * Conteúdo estruturado para as 6 páginas dinâmicas de serviços da GSR Company.
 * Todos os objetos utilizam a mesma estrutura estrita de slots para consumo do template dinâmico.
 */
export const servicesContent = {
  "seguranca-empresarial": {
    slug: "seguranca-empresarial",
    title: "Segurança Patrimonial e Empresarial e Inteligência Preventiva",
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
      src: "/assets/servico-seguranca-empresarial.jpeg",
      alt: "Cadeado corporativo representando proteção patrimonial e segurança empresarial - GSR Company"
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
      src: "/assets/servico-compliance-regulatorio.jpeg",
      alt: "Balança da justiça simbolizando conformidade regulatória e compliance corporativo - GSR Company"
    }
  },
  "governanca-corporativa": {
    slug: "governanca-corporativa",
    title: "Controladoria e Governança e Estruturação Societária",
    subtitle: "Estruturas de decisão sólidas e segurança jurídica para o crescimento da empresa",
    badge: "Controladoria e Governança",
    icon: Settings,
    leadParagraph: "Apoiamos conselhos de administração na estruturação de processos decisórios, acordos societários e operações de M&A, com respaldo jurídico completo, incluindo atuação notarial e cartorária.",
    richContent: [
      "Uma governança sólida exige clareza nas estruturas de decisão e segurança jurídica em cada movimento societário. Desenhamos a arquitetura de governança da sua empresa — da composição do conselho às regras de sucessão — alinhada às melhores práticas do IBGC.",
      "Nosso time jurídico conduz due diligence completa em fusões, aquisições, cisões e incorporações, além de formalizar acordos societários, procurações e atos notariais e cartorários necessários para blindar cada decisão estratégica."
    ],
    features: [
      "Desenho de estruturas de governança para empresas familiares e corporativas",
      "Due diligence jurídica e societária em operações de M&A, cisões e incorporações",
      "Elaboração de acordos de acionistas, procurações e contratos societários",
      "Atuação notarial e cartorária: lavratura de escrituras e autenticações societárias"
    ],
    sidebarInfo: {
      title: "Transparência de Processos",
      description: "Empresas com governança e estruturação societária bem definidas reduzem em até 95% os desvios internos e ganham até 15% de prêmio de valorização em operações de M&A.",
      ctaLabel: "Solicitar Diagnóstico de Governança"
    },
    media: {
      src: "/assets/servico-governanca-corporativa.jpeg",
      alt: "Engrenagem corporativa representando controladoria, governança e processos decisórios - GSR Company"
    }
  },
  "gestao-riscos": {
    slug: "gestao-riscos",
    title: "Auditorias Financeiras e Gestão de Riscos",
    subtitle: "Identificação, mensuração e mitigação de riscos fiscais, operacionais e de fornecedores",
    badge: "Gestão de Riscos",
    icon: AlertTriangle,
    leadParagraph: "Mapeamos riscos fiscais, administrativos e de cadeia de suprimentos, auditamos fornecedores críticos e atuamos na defesa estratégica de contenciosos tributários e penais econômicos.",
    richContent: [
      "Toda operação carrega riscos que, sem mapeamento adequado, viram passivos. Construímos matrizes de risco fiscal e administrativo, auditamos fornecedores e terceiros on-site, e identificamos vulnerabilidades antes que se tornem incidentes.",
      "Quando o risco já virou litígio, nosso time atua na defesa estratégica em contencioso tributário, penal econômico e societário, com pareceres técnicos que sustentam decisões de mitigação em qualquer instância."
    ],
    features: [
      "Matrizes de risco fiscal, administrativo e de cadeia de suprimentos",
      "Auditorias presenciais (on-site) de fornecedores e capacidade real de terceiros",
      "Validação documental de licenças regulatórias e fiscais obrigatórias",
      "Defesa estratégica em contencioso tributário e direito penal econômico"
    ],
    sidebarInfo: {
      title: "Garantia de Cadeia",
      description: "Mais de 70% das interrupções operacionais e multas solidárias B2B decorrem de falhas de conformidade em fornecedores não auditados, e pareceres preventivos reduzem litígios tributários em até 75%.",
      ctaLabel: "Solicitar Matriz de Riscos"
    },
    media: {
      src: "/assets/servico-gestao-riscos.jpeg",
      alt: "Triângulo de alerta sinalizando mapeamento e mitigação de riscos corporativos - GSR Company"
    }
  },
  "inteligencia-corporativa": {
    slug: "inteligencia-corporativa",
    title: "Investigações de Riscos e Fraudes",
    subtitle: "Elucidação científica de desvios, vazamentos e espionagem industrial",
    badge: "Inteligência Corporativa",
    icon: Search,
    leadParagraph: "Aplicamos inteligência corporativa para identificar vazamento de segredos industriais, neutralizar concorrência desleal e investigar desvios de conduta sob sigilo profissional absoluto.",
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
      src: "/assets/servico-inteligencia-corporativa.jpeg",
      alt: "Lupa sobre dados corporativos representando inteligência e investigação privada - GSR Company"
    }
  },
  "outsource-management": {
    slug: "outsource-management",
    title: "Serviços Jurídicos Notariais e Cartoriais",
    subtitle: "Suporte técnico em demandas documentais, contratuais, registrais e administrativas",
    badge: "Serviços Jurídicos Notariais e Cartoriais",
    icon: Briefcase,
    leadParagraph: "Suporte técnico a empresas e pessoas físicas na condução de demandas documentais, contratuais, registrais e administrativas, com foco em agilidade, segurança jurídica e conformidade legal.",
    richContent: [
      "Este serviço abrange o acompanhamento de procedimentos em cartórios, elaboração e análise de documentos, autenticações, reconhecimentos, registros, certidões, regularizações e apoio técnico em rotinas jurídicas extrajudiciais.",
      "Ao externalizar essas rotinas para uma equipe especializada, empresas e pessoas físicas ganham maior eficiência operacional, reduzem riscos de erros documentais e garantem que cada procedimento seja conduzido com segurança jurídica e conformidade legal."
    ],
    features: [
      "Acompanhamento de procedimentos em cartórios e registros públicos",
      "Elaboração, análise e revisão de documentos contratuais e administrativos",
      "Autenticações, reconhecimentos de firma, certidões e regularizações",
      "Apoio técnico em rotinas jurídicas extrajudiciais para empresas e pessoas físicas"
    ],
    sidebarInfo: {
      title: "Segurança Jurídica e Eficiência",
      description: "A condução especializada de demandas documentais e cartoriais reduz riscos de erros, retrabalho e passivos administrativos, garantindo conformidade em cada etapa do processo.",
      ctaLabel: "Solicitar Suporte Documental"
    },
    media: {
      src: "/assets/servico-outsource-management.jpeg",
      alt: "Documentos e selos cartoriais representando serviços jurídicos notariais e cartorais - GSR Company"
    }
  },
};