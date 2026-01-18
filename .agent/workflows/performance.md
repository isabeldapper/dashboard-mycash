---
description: Otimize código focando em performance
---

# /performance - Otimização de Performance

## Objetivo
Identificar e resolver gargalos de performance, melhorando velocidade e eficiência.

## Áreas de Análise

### 1. Re-renderizações (React)
- [ ] Componentes renderizam mais vezes que o necessário?
- [ ] Props estão causando re-renders desnecessários?
- [ ] Context está sendo usado corretamente?
- [ ] Listas têm keys apropriadas?

### 2. Memoização
- [ ] Cálculos pesados precisam de `useMemo`?
- [ ] Callbacks precisam de `useCallback`?
- [ ] Componentes se beneficiariam de `React.memo`?
- [ ] Evitar memoização prematura (measure first!)

### 3. useEffect
- [ ] Dependencies array está correto?
- [ ] Efeitos estão rodando mais que o necessário?
- [ ] Há efeitos que podem ser removidos?
- [ ] Cleanup está sendo feito corretamente?

### 4. Operações Pesadas
- [ ] Operações pesadas no render?
- [ ] Loops desnecessários?
- [ ] Operações síncronas bloqueantes?
- [ ] Pode usar Web Workers?

### 5. Carregamento de Dados
- [ ] Dados sendo buscados eficientemente?
- [ ] Há cache implementado?
- [ ] Paginação/infinite scroll onde apropriado?
- [ ] Debounce/throttle em inputs?

### 6. Bundle Size
- [ ] Imports desnecessários?
- [ ] Code splitting implementado?
- [ ] Lazy loading de componentes?
- [ ] Tree shaking funcionando?

## Técnicas de Otimização

### React.memo
```tsx
// Antes: re-renderiza sempre que pai renderiza
export function UserCard({ user }) {
  return <div>{user.name}</div>;
}

// Depois: só re-renderiza se props mudarem
export const UserCard = React.memo(({ user }) => {
  return <div>{user.name}</div>;
});
```

### useMemo
```tsx
// Antes: recalcula toda vez
function Component({ items }) {
  const expensiveResult = expensiveCalculation(items);
  return <div>{expensiveResult}</div>;
}

// Depois: só recalcula quando items mudar
function Component({ items }) {
  const expensiveResult = useMemo(
    () => expensiveCalculation(items),
    [items]
  );
  return <div>{expensiveResult}</div>;
}
```

### useCallback
```tsx
// Antes: nova função a cada render
function Parent() {
  const handleClick = () => console.log('clicked');
  return <Child onClick={handleClick} />;
}

// Depois: mesma função entre renders
function Parent() {
  const handleClick = useCallback(
    () => console.log('clicked'),
    []
  );
  return <Child onClick={handleClick} />;
}
```

### Lazy Loading
```tsx
// Antes: carrega tudo de uma vez
import HeavyComponent from './HeavyComponent';

// Depois: carrega sob demanda
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Debounce
```tsx
// Antes: chama API a cada tecla
function SearchInput() {
  const handleChange = (e) => {
    searchAPI(e.target.value);
  };
  return <input onChange={handleChange} />;
}

// Depois: espera usuário parar de digitar
function SearchInput() {
  const debouncedSearch = useMemo(
    () => debounce((value) => searchAPI(value), 300),
    []
  );
  
  const handleChange = (e) => {
    debouncedSearch(e.target.value);
  };
  
  return <input onChange={handleChange} />;
}
```

### Virtualização (Listas Grandes)
```tsx
// Antes: renderiza todos os 10.000 items
{items.map(item => <Item key={item.id} {...item} />)}

// Depois: renderiza apenas items visíveis
<VirtualList
  height={600}
  itemCount={items.length}
  itemSize={50}
  renderItem={({ index }) => <Item {...items[index]} />}
/>
```

## Ferramentas de Medição

### React DevTools Profiler
```bash
# Usar para identificar:
- Componentes que renderizam muito
- Tempo de renderização
- Causas de re-renders
```

### Performance API
```typescript
// Medir performance de operações
const start = performance.now();
expensiveOperation();
const end = performance.now();
console.log(`Levou ${end - start}ms`);
```

### Lighthouse
```bash
# Analisar performance geral da aplicação
- First Contentful Paint
- Time to Interactive
- Total Blocking Time
```

## Formato de Resposta

```markdown
⚡ OTIMIZAÇÃO DE PERFORMANCE: [Nome do Componente/Feature]

📊 ANÁLISE INICIAL
Problemas identificados: [número]
Impacto estimado: 🔴 Alto / 🟡 Médio / 🟢 Baixo

🐌 GARGALOS ENCONTRADOS
1. [Descrição do problema + impacto]
2. [Descrição do problema + impacto]

✨ OTIMIZAÇÕES APLICADAS
1. [Técnica usada + justificativa]
2. [Técnica usada + justificativa]

📈 RESULTADOS ESPERADOS
Antes: [métrica]
Depois: [métrica]
Melhoria: [percentual]

⚠️ TRADE-OFFS
[Se houver complexidade adicional ou outros custos]

🔍 PRÓXIMAS OTIMIZAÇÕES POSSÍVEIS
[Sugestões para melhorias futuras]
```

## Regras de Ouro

### ✅ Fazer:
- **Medir antes de otimizar** (não otimize prematuramente)
- Focar nos gargalos reais
- Usar ferramentas de profiling
- Documentar decisões de performance

### ❌ Evitar:
- Otimização prematura
- Memoizar tudo (overhead desnecessário)
- Sacrificar legibilidade sem ganho real
- Otimizar sem medir

## Checklist Final

- [ ] Medições antes/depois documentadas?
- [ ] Otimizações justificadas com dados?
- [ ] Código continua legível?
- [ ] Testes continuam passando?
- [ ] Não há otimização prematura?

---

**Última atualização:** 2026-01-18
