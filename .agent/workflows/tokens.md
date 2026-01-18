---
description: Garanta que todos os valores visuais usem apenas variáveis existentes do design system
---

# /tokens - Validação de Tokens

## Objetivo
Garantir que 100% dos valores visuais (cores, espaçamentos, tipografia) usem apenas variáveis existentes do design system.

## Hierarquia de Tokens (OBRIGATÓRIA)

```
1º → Variáveis SEMÂNTICAS (--color-primary, --spacing-container)
2º → Variáveis PRIMITIVAS (--gray-900, --spacing-lg)
3º → CONVERSÃO INTELIGENTE (hex/px → token mais próximo)
4º → NUNCA hardcoded
```

## Checklist de Validação

### Cores
- [ ] Nenhum valor hex (#RRGGBB)
- [ ] Nenhum valor rgb/rgba
- [ ] Todas as cores usam var(--color-*)
- [ ] Estados (hover, active) usam tokens

### Espaçamentos
- [ ] Nenhum valor px hardcoded (exceto 0)
- [ ] Padding usa var(--spacing-*)
- [ ] Margin usa var(--spacing-*)
- [ ] Gap usa var(--spacing-*)

### Tipografia
- [ ] Font-size usa var(--text-*)
- [ ] Font-weight usa tokens ou classes
- [ ] Line-height usa var(--leading-*)
- [ ] Font-family usa var(--font-*)

### Outros
- [ ] Border-radius usa var(--radius-*)
- [ ] Box-shadow usa var(--shadow-*)
- [ ] Border-width usa tokens
- [ ] Transitions/animations usam tokens de duração

## Auditoria Automática

### Buscar Valores Hardcoded

```bash
# Cores hex
grep -rn "#[0-9A-Fa-f]\{3,6\}" src/ --include="*.tsx" --include="*.css"

# Valores px (exceto 0px)
grep -rn "[1-9][0-9]*px" src/ --include="*.tsx" --include="*.css"

# RGB/RGBA
grep -rn "rgba\?(" src/ --include="*.tsx" --include="*.css"

# HSL
grep -rn "hsla\?(" src/ --include="*.tsx" --include="*.css"
```

### Verificar Uso de Variáveis

```bash
# Contar uso de variáveis CSS
grep -ro "var(--[^)]*)" src/ | sort | uniq -c | sort -rn

# Listar todas as variáveis usadas
grep -roh "var(--[^)]*)" src/ | sort -u
```

## Conversão de Valores

### Tabela de Conversão - Cores

| Valor Hardcoded | Token Semântico | Token Primitivo | Uso |
|-----------------|-----------------|-----------------|-----|
| `#000000` | `--color-text-primary` | `--black` | Texto principal |
| `#FFFFFF` | `--color-background` | `--white` | Fundo |
| `#F5F5F5` | `--color-surface` | `--gray-50` | Superfície |
| `#E5E5E5` | `--color-border` | `--gray-200` | Bordas |
| `#666666` | `--color-text-secondary` | `--gray-600` | Texto secundário |
| `#333333` | `--color-text-primary` | `--gray-800` | Texto escuro |

### Tabela de Conversão - Espaçamentos

| Valor Hardcoded | Token | Uso Comum |
|-----------------|-------|-----------|
| `4px` | `--spacing-xs` | Espaçamento mínimo |
| `8px` | `--spacing-sm` | Pequeno |
| `12px` | `--spacing-md` | Médio (se escala for 4px) |
| `16px` | `--spacing-md` | Médio (se escala for 8px) |
| `24px` | `--spacing-lg` | Grande |
| `32px` | `--spacing-xl` | Extra grande |
| `48px` | `--spacing-2xl` | Muito grande |
| `64px` | `--spacing-3xl` | Seções |

### Tabela de Conversão - Tipografia

| Valor Hardcoded | Token | Classe Tailwind |
|-----------------|-------|-----------------|
| `12px` | `--text-xs` | `text-xs` |
| `14px` | `--text-sm` | `text-sm` |
| `16px` | `--text-base` | `text-base` |
| `18px` | `--text-lg` | `text-lg` |
| `20px` | `--text-xl` | `text-xl` |
| `24px` | `--text-2xl` | `text-2xl` |
| `32px` | `--text-3xl` | `text-3xl` |
| `48px` | `--text-5xl` | `text-5xl` |

## Processo de Conversão

### Passo 1: Identificar Valores Hardcoded
```tsx
// ❌ ANTES
<div style={{
  color: '#333333',
  padding: '24px',
  fontSize: '16px',
  borderRadius: '8px'
}}>
```

### Passo 2: Mapear para Tokens
```
#333333 → --color-text-primary (ou --gray-800)
24px → --spacing-lg
16px → --text-base
8px → --radius-md
```

### Passo 3: Aplicar Tokens
```tsx
// ✅ DEPOIS
<div className="
  text-gray-800
  p-6
  text-base
  rounded-md
">

// Ou com CSS:
<div style={{
  color: 'var(--color-text-primary)',
  padding: 'var(--spacing-lg)',
  fontSize: 'var(--text-base)',
  borderRadius: 'var(--radius-md)'
}}>
```

### Passo 4: Documentar Conversão
```markdown
🎨 CONVERSÕES:
- #333333 → --color-text-primary (texto principal escuro)
- 24px → --spacing-lg (padding padrão de cards)
- 16px → --text-base (tamanho base de texto)
- 8px → --radius-md (raio médio padrão)
```

## Casos Especiais

### Valores que Podem Ser Hardcoded

```css
/* ✅ Permitido: */
margin: 0;
padding: 0;
width: 100%;
height: auto;
opacity: 0;
z-index: 1;

/* ❌ Não permitido: */
margin: 16px;  /* usar var(--spacing-md) */
padding: 20px; /* usar var(--spacing-lg) */
width: 300px;  /* usar w-full ou max-w-* */
```

### Valores Calculados

```css
/* ✅ Permitido com calc: */
width: calc(100% - var(--sidebar-width));
padding: calc(var(--spacing-lg) * 2);

/* ❌ Não fazer: */
width: calc(100% - 280px);
padding: calc(24px * 2);
```

### Valores Responsivos

```tsx
/* ✅ Usar tokens em cada breakpoint: */
<div className="
  p-4      /* --spacing-md no mobile */
  md:p-6   /* --spacing-lg no tablet */
  lg:p-8   /* --spacing-xl no desktop */
">
```

## Relatório de Tokens

### Template de Análise

```markdown
📊 AUDITORIA DE TOKENS: [Componente/Página]

🔍 VALORES HARDCODED ENCONTRADOS
Cores: [número]
Espaçamentos: [número]
Tipografia: [número]
Outros: [número]
Total: [número]

❌ PROBLEMAS IDENTIFICADOS
1. [arquivo:linha] - [valor hardcoded] → deveria ser [token]
2. [arquivo:linha] - [valor hardcoded] → deveria ser [token]

✅ CONVERSÕES REALIZADAS
Cores:
- #333333 → var(--color-text-primary) em 5 locais
- #F5F5F5 → var(--color-surface) em 3 locais

Espaçamentos:
- 24px → var(--spacing-lg) em 8 locais
- 16px → var(--spacing-md) em 12 locais

Tipografia:
- 18px → var(--text-lg) em 4 locais
- 600 → font-semibold em 6 locais

📈 RESULTADO
Antes: [X]% de conformidade
Depois: 100% de conformidade

📁 ARQUIVOS MODIFICADOS
- [lista de arquivos]

🎨 TOKENS UTILIZADOS
Semânticos: [lista única de tokens semânticos]
Primitivos: [lista única de tokens primitivos]
```

## Ferramentas de Validação

### Script de Validação (Node.js)

```javascript
// validate-tokens.js
const fs = require('fs');
const path = require('path');

const patterns = {
  hex: /#[0-9A-Fa-f]{3,6}/g,
  px: /[1-9][0-9]*px/g,
  rgb: /rgba?\([^)]+\)/g,
};

function validateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  for (const [type, pattern] of Object.entries(patterns)) {
    const matches = content.match(pattern);
    if (matches) {
      issues.push({ type, matches, file: filePath });
    }
  }
  
  return issues;
}

// Usar: node validate-tokens.js
```

### Pre-commit Hook

```bash
#!/bin/bash
# .git/hooks/pre-commit

# Verificar valores hardcoded
if git diff --cached --name-only | grep -E '\.(tsx?|css)$' | xargs grep -E '#[0-9A-Fa-f]{6}|[1-9][0-9]*px'; then
  echo "❌ Valores hardcoded encontrados! Use tokens do design system."
  exit 1
fi
```

## Formato de Resposta

```markdown
🎨 VALIDAÇÃO DE TOKENS: [Escopo]

📊 ANÁLISE
Arquivos analisados: [número]
Valores hardcoded: [número]
Conformidade inicial: [percentual]%

🔧 CONVERSÕES REALIZADAS
[Lista detalhada de conversões com justificativas]

✅ RESULTADO FINAL
Conformidade: 100%
Tokens semânticos: [número]
Tokens primitivos: [número]

📁 ARQUIVOS MODIFICADOS
- [lista]

⚠️ OBSERVAÇÕES
[Se houver algo que requer atenção]
```

## Regras Críticas

### ✅ SEMPRE:
- Usar tokens existentes
- Documentar conversões
- Priorizar semânticas sobre primitivas
- Arredondar para token mais próximo

### ❌ NUNCA:
- Criar novos tokens sem aprovação
- Usar valores hardcoded (exceto 0, 100%, auto)
- Inventar variações (--gray-195)
- Ignorar hierarquia de tokens

---

**Última atualização:** 2026-01-18
