---
description: Refatore código melhorando legibilidade e manutenção sem alterar comportamento
---

# /refatorar - Refatoração Segura

## Objetivo
Melhorar legibilidade e manutenibilidade do código sem alterar seu comportamento externo.

## Princípios de Refatoração

### 1. Não Alterar Comportamento
- [ ] Comportamento externo deve permanecer idêntico
- [ ] Testes devem continuar passando
- [ ] APIs públicas não devem mudar

### 2. Melhorar Legibilidade
- [ ] Nomes mais descritivos
- [ ] Funções menores e focadas
- [ ] Reduzir complexidade ciclomática
- [ ] Remover código morto

### 3. Facilitar Manutenção
- [ ] Separar responsabilidades
- [ ] Reduzir acoplamento
- [ ] Aumentar coesão
- [ ] Documentar decisões não óbvias

## Checklist de Refatoração

### Nomenclatura
- [ ] Variáveis têm nomes claros e descritivos?
- [ ] Funções descrevem o que fazem?
- [ ] Componentes têm nomes semânticos?
- [ ] Constantes estão em UPPER_SNAKE_CASE?

### Estrutura
- [ ] Funções têm uma única responsabilidade?
- [ ] Componentes são pequenos (< 300 linhas)?
- [ ] Lógica de negócio está em hooks/services?
- [ ] Não há duplicação de código?

### Clean Code
- [ ] Funções têm no máximo 3-4 parâmetros?
- [ ] Níveis de abstração são consistentes?
- [ ] Condicionais são claras (evitar negações duplas)?
- [ ] Código está autoexplicativo (comentários só quando necessário)?

### Organização
- [ ] Imports estão organizados?
- [ ] Ordem lógica de declarações?
- [ ] Constantes extraídas para topo do arquivo?
- [ ] Helpers extraídos para utils?

## Técnicas Comuns

### Extract Function
```typescript
// Antes
function processUser(user) {
  const fullName = user.firstName + ' ' + user.lastName;
  const age = new Date().getFullYear() - user.birthYear;
  // ... mais lógica
}

// Depois
function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

function processUser(user) {
  const fullName = getFullName(user);
  const age = calculateAge(user.birthYear);
  // ... mais lógica
}
```

### Extract Component
```tsx
// Antes: componente grande com muita responsabilidade

// Depois: componentes pequenos e focados
<UserProfile>
  <UserHeader />
  <UserStats />
  <UserActivity />
</UserProfile>
```

### Extract Hook
```typescript
// Antes: lógica espalhada no componente

// Depois: lógica encapsulada
const { user, loading, error } = useUser(userId);
```

### Rename Variable
```typescript
// Antes
const d = new Date();
const x = users.filter(u => u.a);

// Depois
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);
```

## Formato de Resposta

```markdown
♻️ REFATORAÇÃO: [Nome do Arquivo/Componente]

📋 MUDANÇAS REALIZADAS
- [Lista de refatorações aplicadas]

🎯 MELHORIAS OBTIDAS
Legibilidade: [descrição]
Manutenibilidade: [descrição]
Testabilidade: [descrição]

📁 ARQUIVOS AFETADOS
- [lista de arquivos modificados]

✅ GARANTIAS
- Comportamento externo preservado
- Testes continuam passando
- Performance mantida ou melhorada

⚠️ PONTOS DE ATENÇÃO
[Se houver algo que requer atenção especial]
```

## Regras Importantes

❌ **Não fazer durante refatoração:**
- Adicionar novas features
- Mudar comportamento externo
- Fazer mudanças muito grandes de uma vez
- Refatorar sem testes

✅ **Fazer durante refatoração:**
- Mudanças pequenas e incrementais
- Manter testes passando
- Melhorar nomes e estrutura
- Simplificar lógica complexa

---

**Última atualização:** 2026-01-18
