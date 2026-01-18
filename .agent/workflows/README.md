# Project Commands - Índice de Workflows

> **Atalhos de alto impacto para desenvolvimento eficiente**

---

## 📚 Comandos Disponíveis

### 🔍 Análise e Qualidade

#### `/analisar`
**Análise profunda de código buscando bugs, edge cases e melhorias**

- Identifica bugs potenciais
- Detecta edge cases não tratados
- Sugere melhorias de código
- Avalia performance e segurança
- [Ver documentação completa](./analisar.md)

---

### ♻️ Refatoração e Otimização

#### `/refatorar`
**Refatore código melhorando legibilidade e manutenção sem alterar comportamento**

- Melhora nomenclatura
- Reduz complexidade
- Elimina duplicação
- Mantém comportamento externo
- [Ver documentação completa](./refatorar.md)

#### `/performance`
**Otimize código focando em performance**

- Identifica re-renderizações desnecessárias
- Sugere memoização apropriada
- Otimiza operações pesadas
- Melhora carregamento de dados
- [Ver documentação completa](./performance.md)

---

### 📱 Layout e Responsividade

#### `/responsivo`
**Garanta layout totalmente fluido e responsivo em desktop, tablet e mobile**

- Valida todos os breakpoints (375px, 768px, 1280px, 1920px)
- Elimina overflow horizontal
- Ajusta grids e espaçamentos
- Valida touch targets
- [Ver documentação completa](./responsivo.md)

#### `/layout-fluido`
**Revise garantindo width: 100% em containers principais e uso correto de max-width**

- Valida containers fluidos
- Corrige larguras fixas
- Implementa max-width corretamente
- Previne overflow horizontal
- [Ver documentação completa](./layout-fluido.md)

---

### 🎨 Design System

#### `/design-system`
**Ajuste componente para seguir rigorosamente o design system e tokens**

- Aplica hierarquia de variáveis (semânticas → primitivas)
- Converte valores hardcoded
- Garante conformidade 100%
- Documenta conversões
- [Ver documentação completa](./design-system.md)

#### `/tokens`
**Garanta que todos os valores visuais usem apenas variáveis existentes**

- Auditoria completa de valores hardcoded
- Conversão inteligente para tokens
- Validação de cores, espaçamentos e tipografia
- Relatório de conformidade
- [Ver documentação completa](./tokens.md)

---

### 📖 Documentação e UX

#### `/explicar`
**Explique código de forma didática para desenvolvedor intermediário**

- Explicação passo a passo
- Conceitos e padrões utilizados
- Exemplos práticos de uso
- Pontos de atenção
- [Ver documentação completa](./explicar.md)

#### `/ux`
**Avalie funcionalidade do ponto de vista de UX e produto**

- Heurísticas de Nielsen
- Análise de usabilidade
- Checklist de acessibilidade
- Recomendações priorizadas
- [Ver documentação completa](./ux.md)

---

## 🚀 Como Usar

### Sintaxe Básica
```
/comando
```

### Exemplos
```
/analisar
/responsivo
/tokens
```

### Workflow Típico

1. **Desenvolvimento Inicial**
   ```
   [Escrever código]
   /design-system
   /tokens
   ```

2. **Validação de Layout**
   ```
   /layout-fluido
   /responsivo
   ```

3. **Otimização**
   ```
   /analisar
   /performance
   /refatorar
   ```

4. **Revisão Final**
   ```
   /ux
   /explicar (para documentação)
   ```

---

## 📊 Matriz de Decisão

| Situação | Comando Recomendado |
|----------|---------------------|
| Código novo criado | `/design-system` + `/tokens` |
| Layout quebrado em mobile | `/responsivo` |
| Container com largura fixa | `/layout-fluido` |
| Código difícil de entender | `/refatorar` |
| Performance ruim | `/performance` |
| Bugs suspeitos | `/analisar` |
| Valores hardcoded | `/tokens` |
| Revisar UX | `/ux` |
| Documentar código | `/explicar` |

---

## 🎯 Prioridades por Fase

### Fase 1: Desenvolvimento (OBRIGATÓRIO)
- ✅ `/design-system` - Conformidade com design system
- ✅ `/tokens` - Uso correto de variáveis
- ✅ `/layout-fluido` - Layout 100% fluido

### Fase 2: Validação (OBRIGATÓRIO)
- ✅ `/responsivo` - Teste em todos breakpoints
- ✅ `/analisar` - Busca de bugs

### Fase 3: Otimização (RECOMENDADO)
- 🟡 `/performance` - Se houver problemas de performance
- 🟡 `/refatorar` - Se código estiver complexo
- 🟡 `/ux` - Validação de experiência

### Fase 4: Documentação (QUANDO NECESSÁRIO)
- 🟢 `/explicar` - Para código complexo ou reutilizável

---

## 🔗 Referências Cruzadas

### Arquivos de Configuração
- [Project Rules](../project-rules.md) - Regras globais e mentalidade
- [Project Config](../project-config.md) - Configuração técnica detalhada

### Hierarquia de Documentação
```
.agent/
├── project-rules.md      (Regras globais)
├── project-config.md     (Config técnica)
└── workflows/
    ├── README.md         (Este arquivo)
    ├── analisar.md
    ├── refatorar.md
    ├── performance.md
    ├── responsivo.md
    ├── layout-fluido.md
    ├── design-system.md
    ├── tokens.md
    ├── explicar.md
    └── ux.md
```

---

## 📝 Convenções

### Formato de Resposta
Todos os workflows seguem um formato estruturado:
- 📊 Análise/Resumo
- 🔧 Mudanças/Correções
- ✅ Validações
- 📁 Arquivos modificados
- 🎯 Próximos passos

### Níveis de Prioridade
- 🔴 **Alta**: Crítico, deve ser resolvido imediatamente
- 🟡 **Média**: Importante, resolver em breve
- 🟢 **Baixa**: Melhoria, resolver quando possível

### Níveis de Esforço
- 🔴 **Alto**: > 4 horas
- 🟡 **Médio**: 1-4 horas
- 🟢 **Baixo**: < 1 hora

---

## 🆘 Troubleshooting

### Comando não funciona?
1. Verificar se está usando a sintaxe correta: `/comando`
2. Consultar documentação específica do comando
3. Verificar se o contexto está correto (arquivo aberto, etc)

### Qual comando usar?
1. Consultar a [Matriz de Decisão](#-matriz-de-decisão)
2. Verificar [Prioridades por Fase](#-prioridades-por-fase)
3. Quando em dúvida, começar com `/analisar`

---

## 📚 Aprendizado Contínuo

### Para Iniciantes
Começar com:
1. `/explicar` - Entender código existente
2. `/design-system` - Aprender padrões do projeto
3. `/ux` - Desenvolver senso de UX

### Para Intermediários
Focar em:
1. `/refatorar` - Melhorar qualidade de código
2. `/responsivo` - Dominar layouts fluidos
3. `/tokens` - Internalizar design system

### Para Avançados
Aprofundar em:
1. `/performance` - Otimizações avançadas
2. `/analisar` - Identificar problemas sutis
3. Criar novos workflows conforme necessário

---

**Última atualização:** 2026-01-18  
**Versão:** 1.0.0  
**Total de Comandos:** 9
