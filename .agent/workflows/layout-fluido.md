---
description: Revise garantindo width 100% em containers principais e uso correto de max-width
---

# /layout-fluido - Garantia de Layout Fluido

## Objetivo
Revisar e garantir que o layout seja 100% fluido, sem larguras fixas, usando corretamente width: 100% e max-width.

## Regra de Ouro

> **Containers principais SEMPRE usam `width: 100%`**  
> **Limitações SEMPRE usam `max-width`, NUNCA `width` fixa**

## Checklist de Layout Fluido

### 1. Containers de Nível de Página
- [ ] Wrapper principal tem `width: 100%`
- [ ] Nenhum container de página tem largura fixa (ex: `width: 1200px`)
- [ ] Limitações usam `max-width` (ex: `max-width: 1400px`)
- [ ] Container está centralizado com `margin: 0 auto` (se necessário)

### 2. Componentes Internos
- [ ] Cards/componentes se adaptam ao container pai
- [ ] Nenhum componente força largura fixa no pai
- [ ] Flex/Grid usados para distribuição fluida
- [ ] Imagens são responsivas (`w-full h-auto`)

### 3. Sidebar e Layout
- [ ] Sidebar não causa overflow horizontal
- [ ] Main content se adapta quando sidebar está presente/ausente
- [ ] Layout usa flex ou grid para distribuição
- [ ] Transições de sidebar não quebram layout

### 4. Overflow Horizontal
- [ ] Nenhum elemento ultrapassa largura do viewport
- [ ] Tabelas têm scroll interno (não no body)
- [ ] Conteúdo longo tem quebra de linha ou truncamento
- [ ] Testado em todas as resoluções

## Padrões Corretos vs Incorretos

### ❌ ERRADO - Largura Fixa
```tsx
// NÃO FAZER
<div style={{ width: '1200px' }}>
  <Content />
</div>

<div className="w-[1200px]">
  <Content />
</div>
```

### ✅ CORRETO - Layout Fluido
```tsx
// FAZER
<div className="w-full max-w-[1400px] mx-auto">
  <Content />
</div>

// Ou com padding
<div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
  <Content />
</div>
```

### ❌ ERRADO - Container Rígido
```tsx
// NÃO FAZER
<main style={{ width: '1440px', margin: '0 auto' }}>
  <Dashboard />
</main>
```

### ✅ CORRETO - Container Fluido
```tsx
// FAZER
<main className="w-full">
  <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
    <Dashboard />
  </div>
</main>
```

### ❌ ERRADO - Grid Fixo
```tsx
// NÃO FAZER
<div style={{ 
  display: 'grid',
  gridTemplateColumns: '300px 300px 300px',
  width: '900px'
}}>
```

### ✅ CORRETO - Grid Fluido
```tsx
// FAZER
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
  {/* Colunas se adaptam automaticamente */}
</div>

// Ou com auto-fit
<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
  {/* Colunas se ajustam ao espaço disponível */}
</div>
```

## Estrutura Recomendada

### Layout Completo com Sidebar
```tsx
function Layout({ children }) {
  const { isDesktop } = useBreakpoint();
  
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar - só desktop */}
      {isDesktop && <Sidebar />}
      
      {/* Main content - sempre fluido */}
      <main className="flex-1 w-full min-w-0">
        {/* Header mobile - só mobile/tablet */}
        {!isDesktop && <HeaderMobile />}
        
        {/* Container com max-width */}
        <div className="w-full max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
```

### Página Individual
```tsx
function DashboardPage() {
  return (
    <div className="w-full space-y-6">
      {/* Header da página */}
      <header className="w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Dashboard
        </h1>
      </header>
      
      {/* Grid de cards - fluido */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card />
        <Card />
        <Card />
      </div>
      
      {/* Conteúdo principal - fluido */}
      <div className="w-full">
        <MainContent />
      </div>
    </div>
  );
}
```

### Card Responsivo
```tsx
function Card({ children }) {
  return (
    <div className="w-full bg-white rounded-lg p-4 md:p-6">
      {/* Conteúdo se adapta ao card */}
      {children}
    </div>
  );
}
```

## Casos Especiais

### Tabelas Largas
```tsx
// Container com scroll horizontal interno
<div className="w-full overflow-x-auto">
  <table className="min-w-full">
    {/* Tabela pode ser maior que container */}
  </table>
</div>
```

### Conteúdo com Largura Mínima
```tsx
// Usar min-width com cuidado
<div className="w-full min-w-[320px]">
  {/* Garante largura mínima mas ainda fluido */}
</div>
```

### Limitações Específicas
```tsx
// Diferentes max-width por breakpoint
<div className="w-full max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto">
  {/* Largura máxima cresce com viewport */}
</div>
```

## Testes de Validação

### 1. Teste Visual
```bash
# Abrir DevTools
# Redimensionar janela de 375px até 1920px
# Verificar:
- Layout se adapta suavemente
- Nenhum overflow horizontal
- Conteúdo sempre visível
- Espaçamentos proporcionais
```

### 2. Teste de Breakpoints
```bash
# Testar em cada breakpoint oficial:
- 375px (mobile pequeno)
- 768px (tablet)
- 1280px (desktop)
- 1920px (wide)
```

### 3. Teste de Conteúdo
```bash
# Testar com:
- Textos muito longos
- Muitos cards
- Poucos cards
- Imagens grandes
- Tabelas largas
```

## Formato de Resposta

```markdown
🌊 LAYOUT FLUIDO: [Nome do Componente/Página]

✅ VALIDAÇÕES
- [x] width: 100% em containers principais
- [x] max-width para limitações (não width fixa)
- [x] Nenhum overflow horizontal
- [x] Layout se adapta de 375px a 1920px

🔧 CORREÇÕES REALIZADAS
Antes:
- [Problema identificado]

Depois:
- [Solução aplicada]

📐 ESTRUTURA FINAL
Container principal: w-full max-w-[1400px]
Padding responsivo: px-4 md:px-6 lg:px-8
Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

✅ TESTES
- [x] 375px - Layout OK
- [x] 768px - Layout OK
- [x] 1280px - Layout OK
- [x] 1920px - Layout OK

📁 ARQUIVOS MODIFICADOS
- [lista de arquivos]
```

## Regras Críticas

### ✅ SEMPRE:
- `width: 100%` em containers de página
- `max-width` para limitar largura
- `mx-auto` para centralizar
- Testar redimensionamento suave
- Padding responsivo

### ❌ NUNCA:
- `width: 1200px` ou qualquer largura fixa em containers principais
- Assumir largura fixa do viewport
- Overflow horizontal
- Layout que quebra ao redimensionar

---

**Última atualização:** 2026-01-18
