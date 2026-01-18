---
description: Avalie esta funcionalidade do ponto de vista de UX e produto
---

# /ux - Avaliação de UX e Produto

## Objetivo
Avaliar funcionalidades sob a perspectiva de experiência do usuário (UX) e produto, identificando melhorias e problemas.

## Áreas de Avaliação

### 1. Usabilidade
- Facilidade de uso
- Curva de aprendizado
- Eficiência na execução de tarefas
- Prevenção e recuperação de erros

### 2. Acessibilidade
- Navegação por teclado
- Leitores de tela
- Contraste e legibilidade
- Touch targets adequados

### 3. Feedback e Comunicação
- Estados de loading
- Mensagens de erro claras
- Confirmações de ação
- Indicadores de progresso

### 4. Fluxo do Usuário
- Lógica e intuitividade
- Número de passos necessários
- Pontos de fricção
- Saídas e cancelamentos

### 5. Design Visual
- Hierarquia visual
- Consistência
- Espaçamento e respiração
- Alinhamento com design system

## Framework de Avaliação

### Heurísticas de Nielsen

1. **Visibilidade do Status do Sistema**
   - [ ] Usuário sempre sabe onde está
   - [ ] Feedback imediato para ações
   - [ ] Estados de loading visíveis

2. **Correspondência com o Mundo Real**
   - [ ] Linguagem do usuário, não técnica
   - [ ] Conceitos familiares
   - [ ] Ordem lógica e natural

3. **Controle e Liberdade do Usuário**
   - [ ] Fácil desfazer ações
   - [ ] Saídas claras
   - [ ] Sem becos sem saída

4. **Consistência e Padrões**
   - [ ] Padrões visuais consistentes
   - [ ] Comportamentos previsíveis
   - [ ] Segue convenções da plataforma

5. **Prevenção de Erros**
   - [ ] Design previne erros
   - [ ] Confirmações para ações destrutivas
   - [ ] Validação em tempo real

6. **Reconhecimento ao Invés de Lembrança**
   - [ ] Opções visíveis
   - [ ] Instruções acessíveis
   - [ ] Contexto sempre presente

7. **Flexibilidade e Eficiência**
   - [ ] Atalhos para usuários experientes
   - [ ] Personalização quando apropriado
   - [ ] Múltiplos caminhos para mesma ação

8. **Design Estético e Minimalista**
   - [ ] Sem informação irrelevante
   - [ ] Foco no essencial
   - [ ] Visual limpo e organizado

9. **Ajudar Usuários a Reconhecer, Diagnosticar e Recuperar de Erros**
   - [ ] Mensagens de erro claras
   - [ ] Sugestões de solução
   - [ ] Linguagem não técnica

10. **Ajuda e Documentação**
    - [ ] Ajuda contextual quando necessário
    - [ ] Tooltips informativos
    - [ ] Documentação acessível

## Checklist de UX

### Primeira Impressão
- [ ] Propósito da tela/funcionalidade é claro?
- [ ] Ação principal é óbvia?
- [ ] Visual é atraente e profissional?
- [ ] Carrega rapidamente?

### Interação
- [ ] Elementos clicáveis parecem clicáveis?
- [ ] Hover states são claros?
- [ ] Feedback visual para ações?
- [ ] Animações são suaves e propositais?

### Formulários
- [ ] Labels claros e descritivos?
- [ ] Validação em tempo real?
- [ ] Mensagens de erro específicas?
- [ ] Campos obrigatórios marcados?
- [ ] Placeholders úteis (não substituem labels)?
- [ ] Fácil corrigir erros?

### Navegação
- [ ] Usuário sabe onde está?
- [ ] Fácil voltar/cancelar?
- [ ] Breadcrumbs quando apropriado?
- [ ] Menu/navegação consistente?

### Mobile
- [ ] Touch targets ≥ 44x44px?
- [ ] Texto legível sem zoom?
- [ ] Inputs ≥ 16px (evita zoom iOS)?
- [ ] Gestos intuitivos?
- [ ] Funciona em orientação portrait e landscape?

### Performance Percebida
- [ ] Loading states para operações lentas?
- [ ] Skeleton screens quando apropriado?
- [ ] Otimistic updates onde faz sentido?
- [ ] Sem bloqueios desnecessários?

### Acessibilidade
- [ ] Contraste adequado (WCAG AA mínimo)?
- [ ] Navegação por teclado funciona?
- [ ] ARIA labels onde necessário?
- [ ] Foco visível em elementos?
- [ ] Imagens têm alt text?

## Template de Avaliação

```markdown
🎨 AVALIAÇÃO DE UX: [Nome da Funcionalidade]

## 📊 Resumo Executivo

**Nota Geral:** [1-10]
**Principais Problemas:** [número]
**Melhorias Sugeridas:** [número]
**Prioridade:** 🔴 Alta / 🟡 Média / 🟢 Baixa

## 🎯 Análise por Categoria

### Usabilidade: [nota/10]
**Pontos Fortes:**
- [item]
- [item]

**Problemas Identificados:**
- 🔴 [problema crítico]
- 🟡 [problema médio]
- 🟢 [melhoria sugerida]

### Acessibilidade: [nota/10]
**Pontos Fortes:**
- [item]

**Problemas Identificados:**
- [item]

### Feedback e Comunicação: [nota/10]
**Pontos Fortes:**
- [item]

**Problemas Identificados:**
- [item]

### Fluxo do Usuário: [nota/10]
**Pontos Fortes:**
- [item]

**Problemas Identificados:**
- [item]

### Design Visual: [nota/10]
**Pontos Fortes:**
- [item]

**Problemas Identificados:**
- [item]

## 🚨 Problemas Críticos (Prioridade Alta)

### 1. [Título do Problema]
**Descrição:** [O que está errado]
**Impacto:** [Como afeta o usuário]
**Solução Sugerida:** [Como resolver]
**Esforço:** 🔴 Alto / 🟡 Médio / 🟢 Baixo

### 2. [Título do Problema]
[...]

## 💡 Melhorias Sugeridas (Prioridade Média/Baixa)

### 1. [Título da Melhoria]
**Descrição:** [O que melhorar]
**Benefício:** [Impacto positivo]
**Solução Sugerida:** [Como implementar]
**Esforço:** 🔴 Alto / 🟡 Médio / 🟢 Baixo

## ✅ Pontos Fortes

1. [Aspecto positivo]
2. [Aspecto positivo]

## 🎯 Recomendações Prioritárias

1. **[Recomendação 1]** (Impacto: Alto, Esforço: Baixo)
   [Descrição breve]

2. **[Recomendação 2]** (Impacto: Alto, Esforço: Médio)
   [Descrição breve]

3. **[Recomendação 3]** (Impacto: Médio, Esforço: Baixo)
   [Descrição breve]

## 📈 Métricas Sugeridas

Para medir sucesso das melhorias:
- [Métrica 1]
- [Métrica 2]
- [Métrica 3]

## 🔍 Próximos Passos

1. [Ação imediata]
2. [Ação de curto prazo]
3. [Ação de longo prazo]
```

## Exemplo Prático

### Avaliando um Formulário de Login

```markdown
🎨 AVALIAÇÃO DE UX: Formulário de Login

## 📊 Resumo Executivo

**Nota Geral:** 6/10
**Principais Problemas:** 4
**Melhorias Sugeridas:** 6
**Prioridade:** 🟡 Média

## 🎯 Análise por Categoria

### Usabilidade: 7/10
**Pontos Fortes:**
- Formulário simples e direto
- Botão de ação primária destacado

**Problemas Identificados:**
- 🟡 Sem opção "Mostrar senha"
- 🟢 Poderia ter login social
- 🟢 Sem "Lembrar-me"

### Acessibilidade: 5/10
**Problemas Identificados:**
- 🔴 Inputs sem labels visíveis (só placeholders)
- 🔴 Contraste do texto de erro insuficiente
- 🟡 Sem navegação por teclado otimizada

### Feedback e Comunicação: 6/10
**Pontos Fortes:**
- Loading state no botão

**Problemas Identificados:**
- 🔴 Mensagem de erro genérica ("Erro ao fazer login")
- 🟡 Sem indicação de caps lock ativo
- 🟢 Poderia ter validação em tempo real

## 🚨 Problemas Críticos

### 1. Labels Ausentes
**Descrição:** Inputs usam apenas placeholders, sem labels visíveis
**Impacto:** Problemas de acessibilidade, confusão quando campo preenchido
**Solução:** Adicionar labels visíveis acima dos inputs
**Esforço:** 🟢 Baixo

### 2. Mensagens de Erro Genéricas
**Descrição:** "Erro ao fazer login" não ajuda usuário a resolver
**Impacto:** Frustração, não sabe se é senha ou email errado
**Solução:** Mensagens específicas: "Email não encontrado", "Senha incorreta"
**Esforço:** 🟢 Baixo

## 💡 Melhorias Sugeridas

### 1. Toggle "Mostrar Senha"
**Benefício:** Reduz erros de digitação, melhor UX mobile
**Esforço:** 🟢 Baixo

### 2. Indicador de Caps Lock
**Benefício:** Previne erro comum
**Esforço:** 🟢 Baixo

### 3. Login Social (Google, Apple)
**Benefício:** Reduz fricção, aumenta conversão
**Esforço:** 🟡 Médio

## 🎯 Recomendações Prioritárias

1. **Adicionar Labels Visíveis** (Impacto: Alto, Esforço: Baixo)
   Crítico para acessibilidade e usabilidade

2. **Melhorar Mensagens de Erro** (Impacto: Alto, Esforço: Baixo)
   Ajuda usuário a resolver problemas rapidamente

3. **Toggle Mostrar Senha** (Impacto: Médio, Esforço: Baixo)
   Melhora significativa na experiência mobile
```

## Ferramentas de Teste

### Acessibilidade
- **WAVE**: Extensão browser para análise
- **axe DevTools**: Testes automatizados
- **Lighthouse**: Auditoria completa

### Usabilidade
- **Hotjar**: Heatmaps e gravações
- **UserTesting**: Testes com usuários reais
- **Maze**: Testes de protótipo

### Performance
- **Lighthouse**: Métricas de performance
- **WebPageTest**: Análise detalhada

## Regras de Ouro

### ✅ Sempre Considerar:
- Usuário real, não desenvolvedor
- Contexto de uso (mobile, desktop, pressa)
- Diferentes níveis de habilidade
- Acessibilidade não é opcional

### ❌ Evitar:
- Assumir conhecimento técnico do usuário
- Sacrificar UX por estética
- Ignorar edge cases
- Copiar padrões sem entender contexto

---

**Última atualização:** 2026-01-18
