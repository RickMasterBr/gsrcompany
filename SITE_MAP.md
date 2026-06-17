# Arquitetura de Informação — GSR Company

Este documento estabelece o mapa do site, a especificação das rotas, a indicação de componentes e a estrutura de dados (slots de conteúdo) em JSON/Objetos JavaScript para o site da **GSR Company**. Os dados de conteúdo são completamente desacoplados dos componentes de interface, permitindo a futura integração com qualquer CMS (Sanity, Notion, etc.).

---

## 1. Rotas no App Router (Next.js)

O site será estruturado sob o seguinte esquema de rotas:

* **`/`** (Página principal — One-Page Landing Page)
  * Apresenta de forma fluida a proposta de valor, a biblioteca de serviços, credenciais, estatísticas e o canal de contato B2B.
* **`/servicos/[slug]`** (Template Dinâmico de Serviço)
  * Rota parametrizada reutilizável para detalhamento de cada uma das 6 áreas de atuação:
    1. `seguranca-empresarial` (Segurança Empresarial)
    2. `compliance-regulatorio` (Compliance Regulatório)
    3. `controladoria-governanca` (Controladoria e Governança)
    4. `investigacoes-privadas` (Investigações Privadas)
    5. `auditorias` (Auditorias)
    6. `servicos-juridicos` (Serviços Jurídicos)

---

## 2. Seções da Landing One-Page (Ordem e Objetivos)

Para manter um tom B2B conservador e evitar poluição visual, o layout adota o mínimo de seções necessárias para estabelecer autoridade e capturar leads de executivos e empresas:

| Ordem | Seção | Objetivo B2B | Componentes Usados |
| :--- | :--- | :--- | :--- |
| **0** | **Header/Nav** | Orientação e atalho rápido para conversão. | `HeaderNav` |
| **1** | **Hero** | Proposta de valor clara de prestígio e segurança. Exibição em loop do chaveiro escudo 3D. | `Heading` (H1), `Body` (secondary), `Button` (filled, outline), `ShieldVideo` |
| **2** | **Áreas de Atuação** | Visão geral rápida do escopo de serviços com direcionamento para as páginas internas. | `Heading` (H2), `Body` (secondary), `ServiceCard` (grid de 6 cards) |
| **3** | **Autoridade / Números** | Validação racional e confiança por meio de estatísticas de impacto. | `Heading` (H2), `MetricCard` (grid de 3 cards) |
| **4** | **Sobre nós** | Apresentação institucional de credibilidade, equipe (placeholder) e selos de conformidade. | `Heading` (H2), `AboutCard` |
| **5** | **Contato B2B** | Captura segura de leads corporativos com foco em privacidade. | `Heading` (H2), `TextField`, `TextArea`, `Switch`, `Button` (filled) |
| **6** | **Footer** | Mapa de links, informações legais, CNPJ e conformidade. | `Footer` |

*Nenhum componente de UI novo é necessário; a biblioteca base criada atende perfeitamente a todo o fluxo visual da One-Page.*

---

## 3. Slots de Conteúdo da One-Page (Data / CMS Contract)

O conteúdo da Landing Page será centralizado em um arquivo de dados (ex: `/src/data/landingPage.js`), estruturado da seguinte forma:

```json
{
  "hero": {
    "badge": "Inteligência e Solidez",
    "title": "Governança, Compliance e Segurança Corporativa de Alto Nível",
    "description": "Protegemos os ativos mais valiosos da sua empresa através de processos de auditoria rigorosos, compliance regulatório e assessoria jurídica especializada.",
    "ctaPrimary": {
      "label": "Agendar Consultoria",
      "href": "#contato"
    },
    "ctaSecondary": {
      "label": "Nossos Serviços",
      "href": "#servicos"
    },
    "video": {
      "src": "/assets/chaveiro_shield.mp4",
      "poster": "/assets/chaveiro_poster.jpg"
    }
  },
  "services": {
    "subtitle": "Soluções Corporativas",
    "title": "Áreas de Atuação Especializada",
    "items": [
      {
        "slug": "seguranca-empresarial",
        "title": "Segurança Empresarial",
        "description": "Análise de vulnerabilidades físicas e lógicas, segurança patrimonial corporativa e proteção preventiva de executivos.",
        "iconName": "Shield"
      },
      {
        "slug": "compliance-regulatorio",
        "title": "Compliance Regulatório",
        "description": "Implementação de programas de conformidade anticorrupção, investigações internas e adequação integral à LGPD.",
        "iconName": "Scale"
      },
      {
        "slug": "controladoria-governanca",
        "title": "Controladoria e Governança",
        "description": "Supervisão e auditoria de balanços financeiros, otimização de riscos fiscais e controles administrativos internos.",
        "iconName": "Settings"
      },
      {
        "slug": "investigacoes-privadas",
        "title": "Investigações Privadas",
        "description": "Auditoria de conduta interna, inteligência corporativa, vazamento de dados estratégicos e contraespionagem industrial.",
        "iconName": "Search"
      },
      {
        "slug": "auditorias",
        "title": "Auditorias de Processo",
        "description": "Avaliação independente de processos operacionais, certificações de conformidade e mitigação de riscos de terceiros.",
        "iconName": "FileText"
      },
      {
        "slug": "servicos-juridicos",
        "title": "Serviços Jurídicos",
        "description": "Assessoria consultiva e contenciosa especializada em direito societário, tributário, penal empresarial e trabalhista.",
        "iconName": "Briefcase"
      }
    ]
  },
  "stats": {
    "items": [
      {
        "number": "20+",
        "label": "Anos de Mercado",
        "description": "Mais de duas décadas protegendo patrimônios e marcas B2B no Brasil."
      },
      {
        "number": "99.2%",
        "label": "Casos Resolvidos",
        "description": "Rigor investigativo e discrição absoluta que garantem resultados positivos."
      },
      {
        "number": "R$ 5B+",
        "label": "Ativos Auditados",
        "description": "Prevenção sistemática contra perdas, fraudes e passivos regulatórios."
      }
    ]
  },
  "about": {
    "subtitle": "Sobre a GSR Company",
    "title": "Tradição consolidada a serviço do mercado de grandes corporações",
    "description": "A GSR Company combina rigor jurídico, discrição absoluta e inteligência investigativa para apoiar conselhos de administração e executivos na tomada de decisões estratégicas de mitigação de riscos. Nossos processos seguem as melhores práticas internacionais de auditoria e segurança.",
    "badges": [
      "Conformidade Certificada",
      "Sigilo B2B Absoluto"
    ],
    "image": {
      "src": "/assets/about_render.jpg",
      "alt": "Sede institucional GSR Company"
    }
  },
  "contact": {
    "title": "Fale com um Consultor Especializado",
    "description": "Suas informações serão tratadas com sigilo absoluto e proteção legal de dados corporativos sob nossa política de compliance.",
    "buttonLabel": "Enviar Solicitação Segura",
    "lgpdLabel": "Consentimento de Privacidade",
    "lgpdDescription": "Declaro ciente de que as informações compartilhadas serão protegidas e tratadas exclusivamente para fins de qualificação jurídica B2B."
  }
}
```

---

## 4. Slots de Conteúdo do Template de Serviço (Data / CMS Contract)

As páginas internas de serviços (`/servicos/[slug]`) usarão um arquivo central de dados mapeado por chave (slug) (ex: `/src/data/services.js`). Cada serviço terá a seguinte estrutura de slots de conteúdo para renderização:

```json
{
  "seguranca-empresarial": {
    "slug": "seguranca-empresarial",
    "title": "Segurança Empresarial e Inteligência Preventiva",
    "subtitle": "Proteção de Ativos Físicos e Intelectuais de Alta Relevância",
    "badge": "Segurança Corporativa",
    "leadParagraph": "Minimizamos vulnerabilidades patrimoniais, operacionais e de recursos humanos com foco em continuidade de negócios e proteção de executivos.",
    "richContent": [
      "Desenvolvemos planos diretores de segurança customizados para a realidade operacional de cada organização, considerando riscos geopolíticos, logísticos e de imagem.",
      "Nossos profissionais de inteligência realizam varreduras ambientais de contramedidas eletrônicas e estruturam procedimentos preventivos para grandes plantas industriais e sedes administrativas corporativas."
    ],
    "features": [
      "Análise integrada de vulnerabilidades físicas e tecnológicas",
      "Estruturação de planos de contingência e evasão segura",
      "Proteção pessoal velada de executivos e delegações B2B",
      "Auditoria preventiva de rotas de suprimentos e transporte"
    ],
    "sidebarInfo": {
      "title": "Dados do Setor",
      "description": "Investimentos estruturados em segurança preventiva reduzem incidentes e perdas patrimoniais em até 84% no primeiro ano fiscal de aplicação.",
      "ctaLabel": "Solicitar Estudo de Caso"
    },
    "media": {
      "src": "/assets/chaveiro_render_angulo1.jpg",
      "alt": "Variante do logo GSR - Conformidade e Segurança"
    }
  }
}
```

---

## 5. Mapeamento de Componentes para o Template de Serviço

Para manter a consistência visual estrita do design system, a página interna de serviço será renderizada combinando os componentes existentes de forma modular:

1. **`HeaderNav`** no topo da página.
2. **Hero de Serviço (Layout de Destaque):**
   * `<Heading level={1}>` exibe o `title` do serviço.
   * `<Body variant="secondary">` exibe o `leadParagraph`.
   * Um `<Badge variant="primary">` exibe o `badge`.
   * O `<Button variant="filled">` direciona para o formulário de contato.
3. **Seção de Detalhamento Técnico:**
   * Utiliza `<Heading level={2}>` e `<Body>` em blocos verticais para renderizar o array `richContent`.
   * Utiliza um card do tipo `about` ou grid de cards para exibir a lista `features` em formato de itens checados.
4. **Sidebar de Apoio / Diferenciais:**
   * Um `<Card>` do tipo `metric` exibe as estatísticas e informações do `sidebarInfo`.
5. **Canal de Contato Rápido:**
   * Renderiza o `<ContactForm>` com preenchimento automático do assunto com base no serviço selecionado (ex: *"Assunto: Segurança Empresarial"*).
6. **`Footer`** na base da página.
