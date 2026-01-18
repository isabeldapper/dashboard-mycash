---
description: Ajuste componente para seguir rigorosamente o design system e tokens
---

# /design-system - Conformidade com Design System

## Objetivo
Garantir que o componente siga rigorosamente o design system, usando apenas tokens e variáveis definidos.

## Hierarquia de Variáveis (OBRIGATÓRIA)

### 1º Prioridade: Variáveis SEMÂNTICAS
```css
/* ✅ USAR PRIMEIRO */
color: var(--color-primary);
background: var(--color-background);
padding: var(--spacing-container);
font-size: var(--text-heading-lg);
```

### 2º Prioridade: Variáveis PRIMITIVAS
```css
/* ✅ USAR SE NÃO HOUVER SEMÂNTICA */
color: var(--gray-900);
background: var(--lime-500);
padding: var(--spacing-lg);
font-size: var(--font-size-xl);
```

### 3º Conversão Inteligente
```css
/* Se Figma mostrar #E5E5E5 */
/* ✅ CONVERTER para primitiva mais próxima */
color: var(--gray-200);

/* Se Figma mostrar 28px */
/* ✅ CONVERTER para token mais próximo */
padding: var(--spacing-lg); /* se lg = 32px */
```

### ❌ NUNCA: Valores Hardcoded
```css
/* ❌ NUNCA FAZER */
color: #E5E5E5;
padding: 28px;
font-size: 18px;
```

## Checklist de Design System

### Cores
- [ ] Todas as cores usam variáveis CSS
- [ ] Prioridade: semânticas > primitivas > conversão
- [ ] Nenhum valor hex/rgb hardcoded
- [ ] Cores de estado (hover, active, disabled) seguem sistema

### Espaçamentos
- [ ] Padding usa tokens de spacing
- [ ] Margin usa tokens de spacing
- [ ] Gap usa tokens de spacing
- [ ] Valores arredondados para escala existente

### Tipografia
- [ ] Font-size usa tokens tipográficos
- [ ] Font-weight mapeado (400→normal, 600→semibold, 700→bold)
- [ ] Line-height usa tokens quando disponível
- [ ] Font-family usa variável do sistema

### Bordas e Raios
- [ ] Border-radius usa tokens
- [ ] Border-width usa tokens
- [ ] Border-color usa variáveis de cor

### Sombras
- [ ] Box-shadow usa tokens de elevação
- [ ] Não criar sombras customizadas sem aprovação

### Breakpoints
- [ ] Usar breakpoints oficiais (md, lg, xl)
- [ ] Não criar breakpoints customizados

## Mapeamento de Conversões

### Cores Comuns
| Hex do Figma | Token Correto | Justificativa |
|--------------|---------------|---------------|
| `#FFFFFF` | `--white` ou `--gray-50` | Branco puro |
| `#000000` | `--black` ou `--gray-900` | Preto puro |
| `#F5F5F5` | `--gray-50` | Cinza muito claro |
| `#E5E5E5` | `--gray-200` | Cinza claro |
| `#666666` | `--gray-600` | Cinza médio |
| `#333333` | `--gray-800` | Cinza escuro |

### Espaçamentos Comuns
| Px do Figma | Token Correto | Valor Real |
|-------------|---------------|------------|
| `4px` | `--spacing-xs` | 4px |
| `8px` | `--spacing-sm` | 8px |
| `12px` | `--spacing-md` | 12px ou 16px |
| `16px` | `--spacing-md` | 16px |
| `24px` | `--spacing-lg` | 24px |
| `32px` | `--spacing-xl` | 32px |
| `48px` | `--spacing-2xl` | 48px |

### Tipografia Comum
| Figma | Token | Valor |
|-------|-------|-------|
| `12px` | `--text-xs` | 0.75rem |
| `14px` | `--text-sm` | 0.875rem |
| `16px` | `--text-base` | 1rem |
| `18px` | `--text-lg` | 1.125rem |
| `24px` | `--text-xl` | 1.5rem |
| `32px` | `--text-2xl` | 2rem |

### Font Weight
| Figma | Token/Valor | CSS |
|-------|-------------|-----|
| `400` | `normal` | `font-normal` |
| `500` | `medium` | `font-medium` |
| `600` | `semibold` | `font-semibold` |
| `700` | `bold` | `font-bold` |

## Exemplos de Conversão

### Antes (Figma com valores locais)
```css
/* Figma mostra: */
background: #F5F5F5;
padding: 28px;
font-size: 18px;
font-weight: 600;
border-radius: 12px;
```

### Depois (Com tokens)
```css
/* Código final: */
background: var(--gray-50);        /* #F5F5F5 → --gray-50 */
padding: var(--spacing-lg);        /* 28px → --spacing-lg (32px) */
font-size: var(--text-lg);         /* 18px → --text-lg */
font-weight: var(--font-semibold); /* 600 → semibold */
border-radius: var(--radius-md);   /* 12px → --radius-md */
```

### Documentação da Conversão
```markdown
🎨 CONVERSÕES REALIZADAS:
- #F5F5F5 → --gray-50 (fundo claro padrão)
- 28px → --spacing-lg (arredondado para 32px, mais próximo)
- 18px → --text-lg (tamanho de texto grande)
- 600 → --font-semibold (peso semibold)
- 12px → --radius-md (raio médio padrão)
```

## Componente Exemplo

### ❌ ANTES - Sem Design System
```tsx
function Card({ title, content }) {
  return (
    <div style={{
      background: '#FFFFFF',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #E5E5E5'
    }}>
      <h3 style={{
        fontSize: '20px',
        fontWeight: 600,
        color: '#333333',
        marginBottom: '16px'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '14px',
        color: '#666666',
        lineHeight: '1.5'
      }}>
        {content}
      </p>
    </div>
  );
}
```

### ✅ DEPOIS - Com Design System
```tsx
function Card({ title, content }) {
  return (
    <div className="
      bg-white
      p-6
      rounded-lg
      shadow-md
      border border-gray-200
    ">
      <h3 className="
        text-xl
        font-semibold
        text-gray-800
        mb-4
      ">
        {title}
      </h3>
      <p className="
        text-sm
        text-gray-600
        leading-relaxed
      ">
        {content}
      </p>
    </div>
  );
}

/* Ou com CSS Modules usando variáveis: */
.card {
  background: var(--color-surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
}

.title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.content {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
```

## Validação de Conformidade

### Checklist de Revisão
- [ ] Nenhum valor hex/rgb hardcoded
- [ ] Nenhum valor px/rem hardcoded (exceto 0)
- [ ] Todas as cores vêm de variáveis
- [ ] Todos os espaçamentos vêm de tokens
- [ ] Tipografia usa escala definida
- [ ] Conversões documentadas

### Ferramentas de Verificação
```bash
# Buscar valores hardcoded suspeitos
grep -r "#[0-9A-Fa-f]\{6\}" src/  # Cores hex
grep -r "[0-9]\+px" src/          # Valores px
```

## Formato de Resposta

```markdown
🎨 DESIGN SYSTEM: [Nome do Componente]

📊 ANÁLISE INICIAL
Valores hardcoded encontrados: [número]
Tokens faltantes: [número]
Conformidade: [percentual]%

🔧 AJUSTES REALIZADOS
Cores:
- [valor original] → [token usado] (justificativa)

Espaçamentos:
- [valor original] → [token usado] (justificativa)

Tipografia:
- [valor original] → [token usado] (justificativa)

✅ TOKENS UTILIZADOS
Semânticas: [lista]
Primitivas: [lista]

📁 ARQUIVOS MODIFICADOS
- [lista de arquivos]

🎯 CONFORMIDADE FINAL
- [x] 100% das cores usam variáveis
- [x] 100% dos espaçamentos usam tokens
- [x] 100% da tipografia usa escala
- [x] Nenhum valor hardcoded

⚠️ OBSERVAÇÕES
[Se houver algo que requer atenção ou aprovação]
```

## Regras Críticas

### ✅ SEMPRE:
- Consultar design system antes de estilizar
- Usar hierarquia: semânticas > primitivas > conversão
- Documentar todas as conversões
- Perguntar se token não existir

### ❌ NUNCA:
- Inventar novos tokens sem aprovação
- Usar valores hardcoded
- Criar variações de tokens existentes (--gray-195)
- Ignorar tokens disponíveis

---

**Última atualização:** 2026-01-18
