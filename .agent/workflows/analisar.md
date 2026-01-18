---
description: Analise código buscando bugs, edge cases e melhorias
---

# /analisar - Análise Profunda de Código

## Objetivo
Realizar análise completa do código identificando bugs, edge cases e oportunidades de melhoria.

## Processo de Análise

### 1. Análise de Bugs Potenciais
- [ ] Verificar tratamento de erros
- [ ] Identificar possíveis null/undefined
- [ ] Verificar condições de corrida
- [ ] Checar memory leaks (listeners não removidos, etc)
- [ ] Validar lógica condicional

### 2. Edge Cases
- [ ] Valores vazios (arrays vazios, strings vazias, null, undefined)
- [ ] Valores extremos (números muito grandes/pequenos)
- [ ] Estados de loading e erro
- [ ] Casos de usuário não autenticado
- [ ] Dados malformados ou inesperados
- [ ] Múltiplas chamadas simultâneas

### 3. Melhorias de Código
- [ ] Seguir princípios de Clean Code
- [ ] Verificar se segue User Rules e Project Rules
- [ ] Identificar código duplicado
- [ ] Sugerir extrações para funções/componentes
- [ ] Verificar nomenclatura (clara e descritiva?)
- [ ] Avaliar complexidade ciclomática

### 4. Performance
- [ ] Re-renderizações desnecessárias
- [ ] Uso inadequado de useEffect
- [ ] Falta de memoização onde necessário
- [ ] Operações pesadas no render

### 5. Segurança
- [ ] Validação de inputs
- [ ] Sanitização de dados
- [ ] Exposição de dados sensíveis
- [ ] Vulnerabilidades XSS/injection

### 6. Acessibilidade
- [ ] Elementos interativos acessíveis
- [ ] Labels e ARIA attributes
- [ ] Navegação por teclado
- [ ] Contraste e legibilidade

## Formato de Resposta

```markdown
🔍 ANÁLISE DE CÓDIGO: [Nome do Arquivo/Componente]

📊 RESUMO EXECUTIVO
Severidade: 🔴 Alta / 🟡 Média / 🟢 Baixa
Bugs encontrados: [número]
Edge cases não tratados: [número]
Melhorias sugeridas: [número]

🐛 BUGS IDENTIFICADOS
[Listar bugs com severidade e linha]

⚠️ EDGE CASES NÃO TRATADOS
[Listar edge cases com impacto]

✨ MELHORIAS SUGERIDAS
[Listar melhorias priorizadas]

🎯 PRIORIDADES
1. [Item mais crítico]
2. [Segundo mais crítico]
...

💡 RECOMENDAÇÕES
[Sugestões de próximos passos]
```

## Critérios de Severidade

- 🔴 **Alta**: Bug que pode quebrar a aplicação ou causar perda de dados
- 🟡 **Média**: Comportamento inesperado que afeta UX mas não quebra
- 🟢 **Baixa**: Melhorias de código, otimizações, refatorações

---

**Última atualização:** 2026-01-18
