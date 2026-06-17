# Design System Mestre — GSR Company (Tema White-Dominant)

Este documento apresenta a análise comparativa de cinco design systems de referência (Tarefa 1) e a especificação detalhada do **Design System Mestre** (Tarefa 2) para a **GSR Company**, adaptado para uma estética **white-dominant (clara)** de alta autoridade, adequada a serviços de Segurança Empresarial, Compliance, Controladoria, Investigações Privadas, Auditoria e Advocacia Corporativa B2B.

---

## Parte 1 — Análise dos 5 Design Systems de Referência

Abaixo está a análise técnica e estética detalhada de cada um dos cinco sites de referência fornecidos.

### 1. Continuum (Design1)
* **Sistema de Cores:** Mapeamento dinâmico em `oklch` sensível ao tema. O tom primário é um verde-menta luminoso no modo escuro e um azul-esverdeado sóbrio no modo claro. O fundo utiliza um off-white acinzentado no modo claro. A cor de destaque principal (accent) é o Laranja Coral (`#FDAA3E`), usado para diferenciação de categorias e botões.
* **Tipografia:** Foco absoluto na fonte **Plus Jakarta Sans** (sans-serif geométrica moderna e legível), com pesos de 400 (Regular) a 700 (Bold). Escala tipográfica bem definida (H1 em `4xl`, H2 em `2xl`, body em `15px` e text-muted em `14px`).
* **Grid, Espaçamento e Ritmo:** Layout fluido com espaçamento generoso (`py-8`, `gap-10`). Foco em layouts flexíveis de uma ou duas colunas com cards integrados.
* **Padrões de Componentes:**
  - *Header/Nav:* Sticky com fundo translúcido e efeito blur (`backdrop-blur-md`), seletor de tema e borda inferior fina.
  - *Hero:* Radial glow no fundo e propostas de valor claras.
  - *Cards:* Cantos arredondados (`var(--radius)` = `0.75rem`), barras de cor laterais para indicar status e suporte a micro-animações de progresso.
  - *Botões/CTAs:* Botão principal em laranja coral com sombra projetada (`shadow-[#FDAA3E]/20`) e cantos arredondados (`rounded-xl`).
* **Padrões de Interação & Microanimações:** Transições fluidas: `fade-up-blur` (entrada com deslocamento e desfoque), `bloom-fill` (ripple radial ao clicar), `spring-up` e `bounce-check` (retorno elástico).
* **Tom Geral:** Minimalista, tecnológico e amigável, com forte apelo à usabilidade e micro-interações fluidas.

### 2. CommCalc (Design2)
* **Sistema de Cores:** Estrutura clássica baseada em HEX com alternância robusta de cores semânticas claras/escuras.
  - Modo Claro: Fundo cinza-claro neutro (`#F6F8FA`), cards em branco puro (`#FFFFFF`) e texto em azul-escuro profundo (`#002333`).
  - Modo Escuro: Fundo azul-escuro profundo (`#002333`), cards em azul-petróleo escuro (`#003345`) e texto em menta-pastel (`#DEEFE7`).
  - Destaques: Cor primária em Teal (`#159A9C`) e secundária em Mint (`#DEEFE7`).
* **Tipografia:** Fonte **Inter** (sans-serif neutra). Hierarquia estruturada: H1 com gradientes de cores (`bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent`), H2 em `text-3xl` e body em `text-base` com entrelinha legível.
* **Grid, Espaçamento e Ritmo:** Painéis e dashboards densos. Uso marcante de grade de fundo em CSS (`bg-grid-pattern`) para textura. Estrutura rígida de colunas (sidebar 1/4 e conteúdo principal 3/4).
* **Padrões de Componentes:**
  - *Header:* Sticky com logo alinhado à esquerda e botão de tema à direita.
  - *Cards:* Cards de métricas com ícones em containers com opacidade (`bg-primary/10`), porcentagens de variação e números grandes.
  - *Botões:* Biblioteca rica (default, secondary, outline, destructive, ghost, link) com cantos arredondados médios (`rounded-lg`).
  - *Formulários:* Inputs com suporte detalhado para estados de erro (borda vermelha e texto descritivo correspondente), seletores dropdown e botões tipo Switch interativos.
* **Tom Geral:** Técnico, corporativo e focado em dados, transmitindo precisão e robustez através de elementos estruturados e paletas frias.

### 3. Curricula (Design3)
* **Sistema de Cores:** Paleta altamente sofisticada inspirada em design editorial clássico.
  - Modo Claro: Fundo em tom pergaminho quente (`36 43% 97%` -> `#FAF6F0`), cards em branco puro e texto em cinza-carvão escuro (`#1E1E1E`).
  - Modo Escuro: Fundo preto profundo (`0 0% 4%` -> `#0A0A0A`) e texto em off-white.
  - Destaques: Amarelo-manteiga quente (`--accent: 44 85% 81%`) e tons pastel semânticos (azul, mint, lavanda, pêssego) com excelente contraste de leitura.
* **Tipografia:** Excelente emparelhamento editorial:
  - Títulos: **Libre Baskerville** (serifa editorial refinada, excelente para transmitir tradição e prestígio).
  - Corpo: **Inter** (sans-serif limpa e moderna para leitura prolongada).
  - Família de exibição secundária em Helvetica Neue.
* **Grid, Espaçamento e Ritmo:** Layout assimétrico e editorial, com muito espaço em branco, margens generosas e uso estilizado de citações destacadas (*pull-quotes*).
* **Padrões de Componentes:**
  - *Sidebar Nav:* Fixa com logo clássico serifado, links com efeito hover que se movem levemente para o lado (`transform: translateX(4px)`) e botão de alternar tema em card elevado.
  - *Cards:* Estilo editorial com cantos bem arredondados (`var(--radius)` = `1rem` / `16px`) e sombras sutis e sofisticadas.
  - *Botões:* Botões com bordas arredondadas generosas (`rounded-xl` ou `rounded-2xl`) com forte contraste.
* **Tom Geral:** Editorial de alta costura, prestigiado, elegante, humanista e intelectual. Transmite confiança através do uso de tipografia tradicional e paleta de cores quente e acolhedora.

### 4. Grovia (Design4)
* **Sistema de Cores:** Baseado em tons quentes de cinza-areia e amarelo-claro.
  - Fundo principal: `#F4F2EE`, `#F0ECE6`, `#EDE9E6` (cinzas quentes/areia).
  - Cor de destaque principal: Amarelo-claro suave (`#FEF7AF`).
  - Neutros: Escala detalhada de 12 tonalidades neutras, variando de branco puro a preto absoluto (`#1A1A1A`).
* **Tipografia:** Combina **Albert Sans** (sans-serif moderna com formas abertas e elegantes) com a fonte **Geist** (para texto corrido e detalhes técnicos). Visual contemporâneo de estúdio de arquitetura/design industrial.
* **Grid, Espaçamento e Ritmo:** Foco em contornos limpos e bordas expressivas. Layouts modulares, grids de exibição com espaçamento bem demarcado e containers arredondados de até `28px` de raio de borda.
* **Padrões de Componentes:**
  - *Botões:* Botão `.grovia-btn` preenchido em gradiente de cinza-escuro a preto absoluto com efeito de elevação sutil no hover (`transform: translateY(-1px)`).
  - *Badges:* Tags com fundo areia, bordas em cinza e texto escuro.
  - *Containers:* `.grovia-container-wrap` com bordas definidas e cantos muito arredondados (`rounded-[28px]`).
* **Tom Geral:** Design minimalista e industrial moderno. Combina calor físico (tons de areia e amarelo suave) com precisão técnica.

### 5. Orvexa Studio (Design5)
* **Sistema de Cores:** Paleta monocromática de alto contraste (cinza-claro e preto) com um acento de Laranja Vibrante (`24 100% 55%` - Atelier Orange) no modo escuro.
  - Modo Claro: Fundo `#F9F9F9`, texto e primário `#141414`.
  - Modo Escuro: Fundo `#0F0F0F`, texto e primário `#F5F5F5`.
* **Tipografia:** Fonte **Inter** em uma escala editorial grandiosa (H1 em `64px` com peso `font-light` e `tracking-tight`), criando um visual de catálogo de arte ou revista de arquitetura contemporânea.
* **Grid, Espaçamento e Ritmo:** Uso de espaçamentos editoriais definidos em variáveis (`--editorial-spacing: 2rem`, `--editorial-spacing-lg: 4rem`). Margens gigantescas e grandes blocos de imagem em proporções clássicas (ex: `4:5` ou `16:9`).
* **Padrões de Componentes:**
  - *Header:* Barra minimalista e limpa.
  - *Cards:* `.editorial-card` que aplica uma escala de zoom de 105% e descoloração progressiva (remoção do efeito grayscale) nas imagens em estado de hover.
  - *Links:* `.editorial-link` com animação de sublinhado que se expande da esquerda para a direita no hover.
  - *Botões:* Botões perfeitamente ovais/arredondados (`rounded-full`) com micro-animação de deslocamento de seta no hover (`hover:gap-4` ou `hover:gap-6` com transições de setas).
* **Tom Geral:** Minimalista sofisticado, ultra-premium, artístico e focado no visual de portfólios, galerias de imagens de alta costura e estúdios de arquitetura modernos.

---

## Parte 2 — Síntese: O Design System Mestre para a GSR Company

A partir da análise das referências e das preferências de posicionamento corporativo B2B, estruturamos uma **síntese baseada em um tema claro e sofisticado (white-dominant)**. Ela combina o requinte editorial de *Curricula* (Design 3), a precisão estrutural de *CommCalc* (Design 2) e as micro-interações fluidas de *Orvexa Studio* (Design 5) e *Continuum* (Design 1).

### 1. Sistema de Cores (Paleta Corporativa de Prestígio Claro)
O tema é predominantemente claro, usando tons de off-white e areia quente para o fundo, texto em cinza-escuro (quase preto) para legibilidade e autoridade institucional, e o **Dourado** como acento pontual de prestígio (usado com moderação para evitar poluição visual).

#### Paleta Completa com Códigos Hex:
* **Fundo Geral (Main Background):** `#FAFAF8` (HSL `45, 12%, 97%`) - Off-white quente e refinado, remetendo a papel pergaminho de alta qualidade ou mármore claro. Transmite prestígio, solidez e tradição.
* **Superfícies Secundárias / Cards:** `#F1F0EC` (HSL `45, 8%, 94%`) - Cinza areia muito claro, usado para cards, blocos destacados, seções alternadas e backgrounds de inputs. Substitui o "charcoal" do tema escuro.
* **Dourado GSR Principal (GSR Gold Accent):** `#B5945B` (HSL `40, 39%, 53%`) - Um tom metálico de dourado fechado/champanhe, ajustado para ter excelente contraste e visibilidade sobre fundos claros.
* **Dourado Hover (GSR Gold Light):** `#C5A672` (HSL `40, 42%, 61%`) - Versão ligeiramente mais clara do dourado, usada para estados de hover nos botões e links de destaque.
* **Dourado Escuro / Bordas:** `#9E7F46` (HSL `40, 39%, 45%`) - Usado para textos dourados que exigem maior contraste ou linhas de acento finas.
* **Texto Primário (Text Dark):** `#15171A` (HSL `210, 10%, 9%`) - Cinza muito escuro/quase preto. Transmite a solidez de documentos oficiais e relatórios corporativos.
* **Texto Secundário (Text Muted):** `#5E6166` (HSL `210, 4%, 39%`) - Cinza médio escuro para descrições, subtítulos e textos auxiliares.
* **Bordas / Divisórias (Light Border):** `#DFDED9` (HSL `45, 6%, 87%`) - Borda cinza suave para delimitação de componentes e grades.
* **Sombras (Soft Shadows):** Gray shadow com baixíssima opacidade (`rgba(21, 23, 26, 0.04)` e `rgba(21, 23, 26, 0.08)`) para dar profundidade aos cards sem parecer "sujo" (evitando sombras douradas ou pretas pesadas sobre fundo off-white).

### 2. Tipografia (Tipografia Contemporânea e Geométrica)
* **Geral (Títulos, Corpo e Interface): Geist** (Google Fonts via next/font/google). Uma fonte sans-serif geométrica moderna, limpa e altamente legível. Transmite imediatamente solidez, inteligência preventiva, e rigor de engenharia de segurança/tecnologia para um ecossistema B2B de alto nível.
* **Badges / Detalhes de Anotação**: Estilizados com Geist Sans em caixa alta (uppercase), espaçamento expandido (tracking-wide / tracking-wider) e peso médio/semibold para dar visual de rótulo técnico de segurança.

### 3. Grid, Espaçamento e Ritmo Vertical
* **Grid:** 12 colunas padrão para desktop, estruturado de forma simétrica e limpa.
* **Espaçamento:** Paddings verticais amplos e editoriais (`py-24` ou `py-32` no desktop) para dar respiro ao conteúdo, reforçando a natureza premium dos serviços de segurança da GSR.
* **Bordas e Linhas:** Uso de divisores cinzas muito finos (`border border-[#DFDED9]`) para demarcar grades e seções lógicas de forma sutil.
* **Arredondamento (Radius):** Raio de borda de `0.5rem` (`8px`) para elementos menores e `1rem` (`16px`) para cards. Mantém uma identidade sóbria, corporativa e retilínea de segurança (evitando cantos excessivamente circulares).

### 4. Padrões de Componentes GSR (White-Dominant)

#### A. Botões / CTAs
* **Button Filled (Primário):** Fundo Dourado GSR (`#B5945B`) com texto escuro/preto (`#15171A`) para máximo contraste e legibilidade. No hover, o fundo muda para Dourado Hover (`#C5A672`) com micro-interação de deslocamento de ícone de seta (`group-hover:translate-x-1`).
* **Button Outline (Secundário):** Sem fundo, borda cinza escura (`#15171A`), texto escuro. No hover, a borda e o texto passam a ser Dourados (`#B5945B`).
* **Button Ghost:** Sem fundo e sem borda. Texto escuro que se torna dourado com um sublinhado animado no hover.

#### B. Cards (Serviços, Métricas, Diferenciais)
* **Visual Geral:** Fundo em branco puro (`#FFFFFF`) ou cinza muito claro (`#F1F0EC`), contornado por uma borda cinza suave (`#DFDED9`). As sombras são cinzas com baixa opacidade (`shadow-sm`).
* **Contraste:** Bordas e textos escuros como padrão. O dourado é reservado para pequenos detalhes decorativos, ícones ou para o estado de hover.
* **Hover:** Ao passar o mouse, a borda do card torna-se dourada (`border-[#B5945B]`), o card se eleva ligeiramente (`-translate-y-1`) e o ícone de serviço passa de preto para dourado.

#### C. Campos de Formulário / Inputs
* **Estilo:** Fundo cinza muito claro (`#F1F0EC`) com borda cinza suave (`#DFDED9`). Texto escuro.
* **Estados:**
  - *Focus:* A borda torna-se dourada (`border-[#B5945B]`) e a sombra ganha uma leve dispersão cinza neutra (evitando glow dourado).
  - *Error:* A borda torna-se vermelha/destrutiva com mensagem de erro descritiva abaixo do campo.
  - *Disabled:* Opacidade reduzida para 50%, fundo acinzentado e cursor de não-autorizado.

#### D. Badges / Tags
* **Badge Primary:** Fundo dourado sutil com texto dourado escuro para contraste.
* **Badge Secondary/Default:** Fundo cinza muito claro com borda cinza e texto escuro corporativo.

#### E. Navegação (Header & Footer)
* **Header:** Sticky com fundo translúcido off-white (`bg-[#FAFAF8]/80 backdrop-blur-md`) e borda inferior fina em `#DFDED9`. Links escuros que demonstram o hover com sublinhado que se expande horizontalmente em dourado.
* **Footer:** Fundo cinza muito claro (`#F1F0EC`) com divisores finos em `#DFDED9`, contendo links estruturados, informações de contato e proteção jurídica.

---

## Parte 3 — Diretrizes de Uso dos Ativos Visuais (Vídeo e Imagens do Chaveiro)

Os renders 3D do chaveiro de escudo representam a **solidez física e a segurança corporativa** da GSR Company. 

1. **ShieldVideo & ShieldImage (Versão Clara):**
   * **Visual:** Deve ser usada a **variante do logo pensada para fundo claro (escudo escuro com espiral/circuitos claros)**. Evitar versões com brilhos/glows escuros que pareçam artificiais ou sujos contra o fundo off-white.
   * **Contexto de Destaque (Hero):** O vídeo do chaveiro deve rodar em loop infinito (`autoplay loop muted playsinline`) dentro de um card elegante com fundo `#F1F0EC` ou branco puro, com bordas finas douradas e sombras cinzas suaves, integrando o chaveiro ao universo físico de prestígio.
   * **Contexto de Fundo:** O vídeo ou a imagem do chaveiro nunca deve cobrir o fundo da página de forma distrativa. Se usado como fundo, deve ter opacidade baixíssima (máximo de 3% a 5%) ou ser mascarado por um degradê radial off-white.
   * **Contexto de Card (Galeria/Sobre):** Imagens do chaveiro em diferentes ângulos com fundo off-white/neutro são emolduradas em cards de proporção `1:1` ou `4:5` com efeito de zoom suave (`scale-[1.02]`) no hover.

---

## Parte 4 — Configuração Tailwind CSS (Tokens de Design)

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gsr: {
          bg: '#FAFAF8',          // Fundo principal off-white quente
          surface: '#F1F0EC',     // Fundo secundário areia/cinza claro
          border: '#DFDED9',      // Divisores cinza suave
          text: {
            primary: '#15171A',   // Texto principal charcoal escuro
            secondary: '#5E6166', // Texto secundário cinza médio
          },
          gold: {
            DEFAULT: '#B5945B',   // Dourado corporativo principal
            light: '#C5A672',     // Dourado claro para hover
            dark: '#9E7F46',      // Dourado escuro de contraste
          }
        }
      },
      fontFamily: {
        title: ['Geist', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        gsr: '8px',
        card: '16px',
      },
      boxShadow: {
        'gsr-sm': '0 1px 3px rgba(21, 23, 26, 0.04)',
        'gsr-md': '0 4px 12px rgba(21, 23, 26, 0.06), 0 1px 2px rgba(21, 23, 26, 0.04)',
        'gsr-lg': '0 12px 24px -4px rgba(21, 23, 26, 0.08), 0 4px 12px -2px rgba(21, 23, 26, 0.04)',
      }
    },
  },
  plugins: [],
}
```
