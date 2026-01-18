---
description: Garanta layout totalmente fluido e responsivo em desktop, tablet e mobile sem overflow horizontal
---

# /responsivo - Layout Responsivo Completo

## Objetivo
Garantir que o layout seja 100% fluido e responsivo em todos os breakpoints, sem overflow horizontal.

## Breakpoints Oficiais

| Breakpoint | Range | Tailwind | Uso |
|------------|-------|----------|-----|
| Mobile (base) | < 768px | (padrão) | Layout base |
| Tablet | ≥ 768px | `md:` | Ajustes tablet |
| Desktop | ≥ 1280px | `lg:` | Layout desktop |
| Wide/4K | ≥ 1920px | `xl:` | Telas grandes |

## Checklist de Responsividade

### 1. Layout Fluido (CRÍTICO)
- [ ] Containers principais usam `width: 100%`
- [ ] Limitações usam `max-width`, nunca `width` fixa
- [ ] Nenhum elemento tem largura fixa em pixels (exceto ícones/avatars)
- [ ] Sidebar só renderiza no desktop (≥1280px)
- [ ] Header mobile só renderiza no mobile/tablet (<1280px)

### 2. Overflow Horizontal (PROIBIDO)
- [ ] Testar em 375px (mobile pequeno)
- [ ] Testar em 768px (tablet)
- [ ] Testar em 1280px (desktop)
- [ ] Testar em 1920px (wide)
- [ ] Nenhuma barra de rolagem horizontal em nenhum breakpoint

### 3. Grid Responsivo
- [ ] Mobile: 1 coluna
- [ ] Tablet: 2 colunas (quando apropriado)
- [ ] Desktop: 3-4 colunas (quando apropriado)
- [ ] Usar `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### 4. Espaçamentos Responsivos
- [ ] Padding do main: `px-4 md:px-6 lg:px-8`
- [ ] Gaps entre elementos escalam: `gap-4 md:gap-6 lg:gap-8`
- [ ] Margens internas ajustadas por breakpoint

### 5. Tipografia Responsiva
- [ ] Títulos escalam: `text-2xl md:text-3xl lg:text-4xl`
- [ ] Corpo de texto: `text-base md:text-lg`
- [ ] Line-height ajustado para legibilidade
- [ ] Mobile: ~15% menor que desktop

### 6. Componentes Específicos
- [ ] Cards se adaptam ao container
- [ ] Imagens são responsivas (`w-full h-auto`)
- [ ] Tabelas têm scroll horizontal no mobile (se necessário)
- [ ] Modais/drawers se adaptam ao viewport

### 7. Touch Targets (Mobile)
- [ ] Botões têm mínimo 44x44px
- [ ] Espaço entre elementos clicáveis ≥ 8px
- [ ] Inputs têm altura mínima de 48px
- [ ] Font-size de inputs ≥ 16px (evita zoom iOS)

## Padrões de Implementação

### Container Principal
```tsx
<div className="w-full max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
  {/* Conteúdo */}
</div>
```

### Grid Responsivo
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Tipografia Responsiva
```tsx
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Título Principal
</h1>
<p className="text-base md:text-lg">
  Parágrafo de texto
</p>
```

### Sidebar Condicional
```tsx
{/* ❌ ERRADO */}
<Sidebar className="hidden lg:block" />

{/* ✅ CORRETO */}
{isDesktop && <Sidebar />}
{!isDesktop && <HeaderMobile />}
```

### Layout com Sidebar
```tsx
<div className="flex min-h-screen">
  {/* Sidebar só no desktop */}
  {isDesktop && <Sidebar />}
  
  {/* Main content */}
  <main className="flex-1 w-full">
    {/* Header mobile só no mobile/tablet */}
    {!isDesktop && <HeaderMobile />}
    
    <div className="px-4 md:px-6 lg:px-8 py-6">
      {/* Conteúdo */}
    </div>
  </main>
</div>
```

### Imagens Responsivas
```tsx
<img 
  src={imageUrl} 
  alt="Descrição"
  className="w-full h-auto object-cover"
/>
```

### Tabelas Responsivas
```tsx
{/* Mobile: scroll horizontal */}
<div className="overflow-x-auto">
  <table className="min-w-full">
    {/* ... */}
  </table>
</div>

{/* Ou: cards no mobile, tabela no desktop */}
<div className="lg:hidden">
  {items.map(item => <MobileCard {...item} />)}
</div>
<div className="hidden lg:block">
  <Table items={items} />
</div>
```

## Hook de Breakpoint

```typescript
// hooks/useBreakpoint.ts
import { useState, useEffect } from 'react';

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isWide: false,
  });

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      setBreakpoint({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1280,
        isDesktop: width >= 1280 && width < 1920,
        isWide: width >= 1920,
      });
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}

// Uso:
const { isMobile, isDesktop } = useBreakpoint();
```

## Testes Obrigatórios

### Resoluções a Testar:
1. **375px** - iPhone SE (mobile pequeno)
2. **768px** - iPad (tablet)
3. **1280px** - Laptop (desktop)
4. **1920px** - Full HD (wide)

### Como Testar:
```bash
# Chrome DevTools
1. F12 para abrir DevTools
2. Ctrl+Shift+M para toggle device toolbar
3. Testar cada resolução
4. Verificar overflow horizontal
5. Testar interações touch
```

## Formato de Resposta

```markdown
📱 RESPONSIVIDADE: [Nome do Componente/Página]

✅ CHECKLIST COMPLETO
- [x] Layout fluido (width: 100%)
- [x] Sem overflow horizontal
- [x] Grid responsivo
- [x] Espaçamentos escaláveis
- [x] Tipografia responsiva
- [x] Touch targets adequados

📐 BREAKPOINTS TESTADOS
✅ 375px (Mobile) - OK
✅ 768px (Tablet) - OK
✅ 1280px (Desktop) - OK
✅ 1920px (Wide) - OK

🎨 AJUSTES REALIZADOS
Mobile:
- [Lista de ajustes específicos]

Tablet:
- [Lista de ajustes específicos]

Desktop:
- [Lista de ajustes específicos]

📁 ARQUIVOS MODIFICADOS
- [lista de arquivos]

⚠️ PONTOS DE ATENÇÃO
[Se houver algo específico que requer atenção]

🎯 PRÓXIMOS PASSOS
[Se houver melhorias futuras]
```

## Regras Críticas

### ✅ SEMPRE:
- Layout mobile-first
- width: 100% em containers principais
- max-width para limitar, nunca width fixa
- Testar em todos os breakpoints
- Sidebar só no desktop
- Header mobile só no mobile/tablet

### ❌ NUNCA:
- Larguras fixas em containers de página
- Overflow horizontal
- Assumir apenas desktop
- Renderizar sidebar + header mobile juntos
- Usar display:none para esconder sidebar (não renderizar)

---

**Última atualização:** 2026-01-18
