# Project Configuration & Technical Rules

> **⚠️ LEITURA OBRIGATÓRIA**: Este arquivo deve ser consultado antes de qualquer implementação.

---

## 🔹 Pre-Flight Check (EXECUTAR MENTALMENTE ANTES DE QUALQUER CÓDIGO)

Antes de gerar qualquer código, confirme:

- [ ] Estou seguindo todas as User Rules e Project Rules
- [ ] Considerei layout fluido e abordagem mobile-first
- [ ] Priorizei variáveis semânticas; se não existirem, usei variáveis primitivas
- [ ] Garanti que o componente pai seja totalmente responsivo e fluido

---

## 🔹 Stack e Ferramentas

Este projeto utiliza:

- **React** com **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (estilização)
- **Supabase** (backend)

---

## 🔹 Arquitetura e Organização

**Arquitetura baseada em componentes.**

### Regras:

✅ **Componentes devem ser pequenos e reutilizáveis**
- Um componente = uma responsabilidade
- Máximo de 200-300 linhas por componente
- Se crescer muito, quebrar em subcomponentes

✅ **Páginas apenas compõem componentes, sem lógica de negócio**
- Páginas são "montadoras" de componentes
- Lógica de apresentação mínima
- Sem chamadas diretas a APIs

✅ **Lógica de negócio deve ficar em hooks ou services**
- Hooks customizados para lógica reutilizável
- Services para comunicação com backend
- Separação clara de responsabilidades

✅ **Evitar duplicação de lógica**
- DRY (Don't Repeat Yourself)
- Extrair lógica comum para hooks/utils
- Reutilizar componentes ao máximo

---

## 🔹 Layout Fluido & Containers (REGRA CRÍTICA)

> **IMPORTANT** — Layout fluido é **obrigatório**.

### Regras:

❌ **Não gerar larguras fixas para containers de nível de página**
```css
/* ERRADO */
.container { width: 1200px; }

/* CORRETO */
.container { width: 100%; }
```

✅ **Containers principais devem sempre usar `width: 100%`**

✅ **Quando necessário limitar largura, usar `max-width`, nunca `width` fixa**
```css
/* CORRETO */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
```

✅ **Layout deve ser fluido e se adaptar ao viewport**

✅ **Prevenir qualquer tipo de overflow horizontal**
```css
/* Adicionar ao body/html se necessário */
overflow-x: hidden;
```

---

## 🔹 Figma → Código (Interpretação Correta)

> **O frame pai do Figma NÃO representa um container fixo no código.**

### Regras:

✅ **Frames principais do Figma devem ser interpretados como wrappers fluidos**
- Frame de 1440px no Figma ≠ `width: 1440px` no código
- É apenas uma referência visual

✅ **Componentes pais copiados do Figma devem preencher a largura disponível**

✅ **Nunca assumir tamanhos fixos baseados no frame do Figma**

✅ **Auto Layout deve ser traduzido para flex/grid responsivo**

✅ **Containers devem crescer e encolher conforme o viewport**

---

## 📐 Responsividade e Breakpoints

> **Este projeto é totalmente responsivo e mobile-first.**

### BREAKPOINTS OFICIAIS

| Breakpoint | Range | Tailwind |
|------------|-------|----------|
| **Mobile** (base) | < 768px | (padrão) |
| **Tablet** | ≥ 768px e < 1280px | `md:` |
| **Desktop** | ≥ 1280px e < 1920px | `lg:` |
| **Wide / 4K** | ≥ 1920px | `xl:` |

⚠️ **O design base SEMPRE parte do mobile. Breakpoints apenas evoluem o layout, nunca o recriam.**

### 🧩 TAILWIND CONFIG (BREAKPOINTS)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'md': '768px',   // Tablet
      'lg': '1280px',  // Desktop
      'xl': '1920px',  // Wide / 4K
    }
  }
}
```

### Regras:

✅ **Usar breakpoints explícitos para desktop, tablet e mobile**

✅ **Nunca assumir apenas desktop**

✅ **Ajustar grid, tipografia e espaçamentos por breakpoint**

✅ **Garantir que todo layout caiba no tamanho do device do usuário**

✅ **Nunca gerar barra de rolagem horizontal**

---

## 🌍 REGRAS GLOBAIS DE LAYOUT

| Regra | Descrição |
|-------|-----------|
| **Layout 100% fluido** | Sempre responsivo e adaptável |
| **Containers principais** | `width: 100%` (NUNCA fixo) |
| **Limitação de leitura** | Usar `max-width`, nunca `width` |
| **Overflow horizontal** | Proibido em qualquer resolução |
| **Frames do Figma** | NÃO representam containers fixos |
| **Sidebar** | Afeta o layout apenas no desktop |

---

## 📦 CONTAINERS E ESPAÇAMENTOS

### Padding padrão do conteúdo principal (main):

```jsx
<main className="px-4 md:px-6 lg:px-8">
  {/* Mobile: 16px, Tablet: 24px, Desktop: 32px */}
</main>
```

| Breakpoint | Padding |
|------------|---------|
| Mobile | `px-4` (16px) |
| Tablet | `px-6` (24px) |
| Desktop | `px-8` (32px) |

### Limites de largura:

```jsx
<div className="w-full max-w-[1400px] lg:max-w-[1600px] mx-auto">
  {/* Desktop: 1400px, Wide/4K: 1600px */}
</div>
```

| Breakpoint | Max Width | Motivo |
|------------|-----------|--------|
| Desktop | `max-w-[1400px]` | Leitura confortável |
| Wide / 4K | `max-w-[1600px]` | Evita linhas longas em dashboards |

---

## 🧭 SIDEBAR (REGRA IMPORTANTE)

> **A sidebar NÃO EXISTE no mobile e tablet.**

### Estados da Sidebar

#### Desktop (≥1280px):
- ✅ Sidebar visível por padrão
- Possui dois estados:
  - **Expanded** (larga, com texto)
  - **Collapsed** (estreita, apenas ícones)
- ✅ A sidebar **empurra** o conteúdo, não sobrepõe

#### Mobile e Tablet (<1280px):
- ❌ Sidebar **não renderiza**
- Navegação acontece via **Header Mobile**
- Menu aparece como **overlay / drawer**

### Regras críticas

❌ **NUNCA renderizar Sidebar + Header Mobile juntos**

❌ **Sidebar nunca deve causar overflow horizontal**

❌ **Sidebar não deve existir como `display:none` no mobile, ela simplesmente não deve ser renderizada**

### Exemplo de implementação:

```tsx
// ✅ CORRETO
{isDesktop && <Sidebar />}
{!isDesktop && <HeaderMobile />}

// ❌ ERRADO
<Sidebar className="hidden lg:block" />
```

---

## 🧱 HEADER MOBILE

- Aparece apenas em **< 1280px**
- Contém:
  - Botão de menu (abre drawer)
  - Ações principais (ex: nova transação)
- Some completamente no desktop

```tsx
{!isDesktop && <HeaderMobile />}
```

---

## 🧮 GRIDS PADRÃO (DASHBOARD)

### Mobile:
- 1 coluna
- Cards empilhados

```jsx
<div className="grid grid-cols-1 gap-4">
```

### Tablet:
- 2 colunas quando fizer sentido

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
```

### Desktop:
- 3 ou 4 colunas dependendo do componente
- Grids devem ser `auto-fit` / `auto-fill`, nunca hardcoded

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
```

---

## 🔤 TIPOGRAFIA RESPONSIVA

### Mobile:
- Reduzir ~15% dos tamanhos base
- Usar escala progressiva

```jsx
<h1 className="text-2xl md:text-3xl lg:text-4xl">
```

### Exemplos:

```jsx
// Título principal
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">

// Subtítulo
<h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">

// Corpo de texto
<p className="text-base md:text-lg">

// Texto pequeno
<span className="text-sm md:text-base">
```

### Prioridade:
**Legibilidade > Densidade**

---

## 👆 INTERAÇÕES TOUCH (OBRIGATÓRIO)

### Touch target mínimo: **44x44px**

```jsx
<button className="min-h-[44px] min-w-[44px]">
```

### Espaço entre elementos clicáveis: **≥ 8px**

```jsx
<div className="space-y-2"> {/* 8px entre elementos */}
```

### Inputs no mobile:

| Propriedade | Valor | Motivo |
|-------------|-------|--------|
| Altura mínima | `48px` | Conforto de toque |
| Font-size mínimo | `16px` | Evita zoom no iOS |

```jsx
<input 
  className="h-12 text-base" 
  style={{ fontSize: '16px' }}
/>
```

---

## 🧪 TESTE OBRIGATÓRIO DE IMPLEMENTAÇÃO

> **Toda feature DEVE ser validada em:**

- ✅ **375px** – Mobile pequeno (iPhone SE)
- ✅ **768px** – Tablet (iPad)
- ✅ **1280px** – Desktop (laptop)
- ✅ **1920px** – Wide (Full HD)

### Como testar:

```bash
# Abrir DevTools
# Usar responsive mode
# Testar em cada breakpoint
```

---

## 🔹 Mobile (Padrão Obrigatório)

No mobile:

✅ **Layout em coluna única por padrão**

✅ **Seguir o base design system da Uber para tamanhos e espaçamentos**

✅ **Priorizar legibilidade, toque e hierarquia visual**

✅ **Nunca reutilizar grids ou tamanhos de desktop**

---

## 🎨 Design System, Variables e Tokens (REGRA CRÍTICA)

### ⚠️ HIERARQUIA DE VARIÁVEIS (OBRIGATÓRIA)

Ao converter qualquer estilo do Figma para código, siga esta ordem:

#### 1º Variável SEMÂNTICA aplicada no Figma?
→ **Usar diretamente** (`--color-primary`, `--spacing-container`, etc)

```css
/* ✅ CORRETO */
color: var(--color-primary);
```

#### 2º Variável PRIMITIVA aplicada no Figma?
→ **Usar diretamente** (`--gray-900`, `--lime-500`, `--spacing-md`, etc)

```css
/* ✅ CORRETO */
color: var(--gray-900);
background: var(--lime-500);
```

#### 3º Valor local (hex, px, rem, etc)?
→ **Executar CONVERSÃO INTELIGENTE:**

##### CORES HEX:
- Comparar visualmente com primitivas da mesma família
- Escolher a primitiva **MAIS PRÓXIMA** (ex: `#E5E5E5` → `--gray-200`)
- **NUNCA inventar novos tokens** (`--gray-195` ❌)

```css
/* Figma: #E5E5E5 */
/* ✅ CORRETO */
color: var(--gray-200);

/* ❌ ERRADO */
color: #E5E5E5;
color: var(--gray-195); /* não existe */
```

##### ESPAÇAMENTOS PX/REM:
- Arredondar para token da escala existente
- Escolher o **MAIS PRÓXIMO** (ex: `28px` → `--spacing-lg` se `lg=32px`)
- **NUNCA usar valores quebrados** (`--spacing-28` ❌)

```css
/* Figma: 28px */
/* ✅ CORRETO */
padding: var(--spacing-lg); /* 32px - mais próximo */

/* ❌ ERRADO */
padding: 28px;
padding: var(--spacing-28); /* não existe */
```

##### TIPOGRAFIA:
- Mapear peso: `400→normal`, `600→semibold`, `700→bold`
- Mapear tamanho para escala tipográfica
- Usar tokens de `line-height` quando disponível

```css
/* Figma: 600 weight, 18px */
/* ✅ CORRETO */
font-weight: var(--font-semibold);
font-size: var(--text-lg);

/* ❌ ERRADO */
font-weight: 600;
font-size: 18px;
```

#### 4º NUNCA usar valores hardcoded
→ **Se chegou aqui, algo está errado. Revisar etapas anteriores.**

### Exemplos corretos / incorretos:

| Figma | ✅ Correto | ❌ Errado |
|-------|-----------|----------|
| `var(--color-primary)` | `var(--color-primary)` | `#00FF00` |
| `var(--gray-900)` | `var(--gray-900)` | `#1A1A1A` |
| `#E5E5E5` | `var(--gray-200)` | `#E5E5E5` |
| `24px` | `var(--spacing-md)` | `24px` |

### Regras adicionais:

✅ **Nunca inventar novas variáveis sem solicitação explícita**

✅ **Documentar TODAS as conversões no formato de resposta**

✅ **Priorizar semântica sobre primitiva SEMPRE**

✅ **Quando em dúvida, perguntar antes de converter**

---

## 📋 Formato de Resposta Obrigatório (APÓS cada Prompt)

> **Toda resposta após executar um prompt DEVE seguir este formato:**

```markdown
✅ PROMPT [N]: [Nome do Prompt] — CONCLUÍDO

📚 PRÉ-EXECUÇÃO
✓ Rules relidas e aplicadas
✓ Figma consultado e analisado
✓ Hierarquia de variáveis verificada

📦 IMPLEMENTADO
- [Lista de funcionalidades/componentes implementados]
- [Uma linha por item principal]

🎨 TOKENS UTILIZADOS
Semânticas: [listar tokens semânticos usados]
Primitivas: [listar tokens primitivos usados]
Conversões realizadas:
- [valor original] → [token escolhido] (justificativa breve)
- Exemplo: #F5F5F5 → --gray-50 (cinza claro de fundo)
- Exemplo: 28px → --spacing-lg (mais próximo de 32px)

📁 ARQUIVOS CRIADOS/MODIFICADOS
- [caminho/do/arquivo.tsx]
- [caminho/do/outro-arquivo.ts]

🔨 BUILD STATUS
✅ Sucesso (tentativas: [número])
ou
❌ Falha (motivo: [descrição])
   → Correções aplicadas: [lista]
   → ✅ Sucesso na tentativa [número]

💾 COMMIT REALIZADO
[tipo]: [descrição curta]
Exemplo: feat: implementa sidebar desktop com estados expandido/colapsado
Hash: [abc123]

🤔 PRÓXIMOS PASSOS
⏭️ PROMPT [N+1]: [Nome do Próximo Prompt]

Comandos disponíveis:
- "Próximo" → Avançar para próximo prompt
- "Revisar [arquivo]" → Revisar arquivo específico
- "Refazer" → Refazer prompt atual com correções
- "Status" → Ver progresso geral
- "Tokens" → Ver mapeamento completo de conversões
```

**Este formato é OBRIGATÓRIO e não pode ser omitido ou simplificado.**

---

## 🔹 Qualidade, Performance e Segurança

### Performance:

✅ **Evitar re-renderizações desnecessárias**
- Usar `React.memo` quando apropriado
- Usar `useMemo` e `useCallback` com critério

✅ **Usar memoização apenas quando fizer sentido**
- Não otimizar prematuramente
- Medir antes de otimizar

✅ **Código deve ser previsível e fácil de debugar**
- Evitar "mágica" excessiva
- Preferir explícito sobre implícito

### Dependências:

❌ **Não adicionar novas dependências sem solicitação explícita**
- Avaliar se realmente precisa
- Considerar bundle size
- Verificar manutenção e segurança

❌ **Não refatorar código fora do escopo pedido**
- Foco no que foi solicitado
- Evitar "scope creep"

### Segurança:

❌ **Nunca expor chaves, tokens ou segredos**
- Usar variáveis de ambiente
- Nunca commitar `.env`

✅ **Considerar toda entrada do usuário como não confiável**
- Validar inputs
- Sanitizar dados
- Prevenir XSS e injection

---

## 📚 Referências Cruzadas

Este arquivo trabalha em conjunto com:

- **`.agent/project-rules.md`** - Regras globais e mentalidade
- **`.agent/project-config.md`** - Configuração técnica
- **`.agent/design-tokens.md`** - Lista oficial de tokens primitivos
- **`.agent/prompts.md`** - Sequência de prompts de desenvolvimento
- **`.agent/workflows/`** - Workflows específicos
- **Design System** - Tokens e variáveis (quando disponível)

---

**Última atualização:** 2026-01-18  
**Versão:** 1.0.0  
**Status:** 🟢 Ativo e obrigatório
