# Dashboard MyCach - Documentação do Projeto

> **Base de conhecimento e configuração do projeto**

---

## 📚 Estrutura da Documentação

```
.agent/
├── README.md              (Este arquivo - Índice principal)
├── project-rules.md       (Regras globais e mentalidade)
├── project-config.md      (Configuracao tecnica detalhada)
├── project-context.md     (Contexto e especificacoes do mycash+)
├── design-tokens.md       (Lista oficial de tokens primitivos)
├── prompts.md             (Sequência de prompts para desenvolvimento)
└── workflows/
    ├── README.md          (Índice de comandos)
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

## 🎯 Início Rápido

### Para Começar a Desenvolver

1. **Ler Regras Globais**
   - [Project Rules](./project-rules.md) - Mentalidade e princípios

2. **Entender Configuração Técnica**
   - [Project Config](./project-config.md) - Stack, breakpoints, design system

3. **Conhecer Comandos Disponíveis**
   - [Workflows](./workflows/README.md) - Atalhos de alto impacto

### Checklist Pré-Desenvolvimento

Antes de escrever qualquer código:

- [ ] Li e entendi as [Project Rules](./project-rules.md)
- [ ] Consultei a [Project Config](./project-config.md)
- [ ] Li o [Project Context](./project-context.md) - Especificações do mycash+
- [ ] Conheço os [Workflows](./workflows/README.md) disponíveis
- [ ] Entendi a hierarquia de variáveis (semânticas → primitivas)
- [ ] Sei os breakpoints oficiais (375px, 768px, 1280px, 1920px)

---

## 📖 Documentos Principais

### 1. [Project Rules](./project-rules.md)
**Regras globais e mentalidade de desenvolvimento**

**Quando consultar:**
- Antes de iniciar qualquer feature
- Ao tomar decisões arquiteturais
- Durante code review

**Conteúdo:**
- Mentalidade de engenheiro sênior
- Princípios fundamentais (Clean Code, simplicidade)
- Regras de implementação
- Padrões de nomenclatura
- Checklist de qualidade

---

### 2. [Project Config](./project-config.md)
**Configuração técnica e regras específicas do projeto**

**Quando consultar:**
- Antes de criar componentes
- Ao implementar layouts
- Ao estilizar com design system

**Conteúdo:**
- Stack técnica (React, TypeScript, Vite, Tailwind, Supabase)
- Arquitetura de componentes
- Layout fluido (REGRA CRÍTICA)
- Breakpoints oficiais
- Sidebar e Header Mobile
- Hierarquia de variáveis (OBRIGATÓRIA)
- Formato de resposta obrigatório

**Seções Críticas:**
- 🔹 Pre-Flight Check (executar mentalmente antes de codificar)
- 🔹 Layout Fluido & Containers (width: 100% sempre!)
- 🔹 Figma → Código (frames ≠ containers fixos)
- 📐 Breakpoints (mobile-first obrigatório)
- 🎨 Design System e Tokens (hierarquia obrigatória)

---

### 3. [Project Context](./project-context.md)
**Contexto e especificações completas do mycash+**

**Quando consultar:**
- Antes de implementar qualquer funcionalidade
- Para entender regras de negócio
- Ao trabalhar com cálculos e lógica
- Para conhecer estrutura de dados

**Conteúdo:**
- Visão geral do sistema mycash+
- Estrutura de navegação (Sidebar, Header Mobile, Abas)
- Sistema de dados e estado (Transações, Contas, Membros, Cartões, etc)
- Componentes do Dashboard detalhados
- Modais do sistema
- Cálculos e lógica de negócio
- Estados visuais e acessibilidade
- Prioridades de implementação

**Seções Críticas:**
- 💾 Sistema de Dados (estrutura completa de tipos)
- 🏠 Dashboard (componentes e widgets)
- 🧮 Cálculos e Lógica (fórmulas de negócio)
- 🎨 Estados Visuais (hover, foco, loading, acessibilidade)

---

### 4. [Design Tokens](./design-tokens.md)
**Lista oficial de variáveis e tokens primitivos do projeto**

**Quando consultar:**
- Ao escolher cores, espaçamentos e tamanhos
- Durante a conversão de valores do Figma para código
- Para garantir consistência visual

**Conteúdo:**
- Escalas de cores (Neutral, Brand, etc)
- Escalas de espaçamento (Space) e tamanhos (Size)
- Arredondamentos (Shape) e opacidade
- Tipografia (Font size, weight, line-height)
- Definições de sombra

---

### 5. [Prompts de Desenvolvimento](./prompts.md)
**Sequência planejada de prompts para construção do sistema**

**Quando consultar:**
- Para seguir a ordem lógica de implementação do projeto
- Como base para os próximos passos de desenvolvimento

**Conteúdo:**
- 24 prompts detalhados cobrindo desde a fundação até a finalização
- Fases de layout, estado, dashboard, tabelas, modais e polimento

---

### 6. [Workflows](./workflows/README.md)
**Comandos de alto impacto para desenvolvimento**

**Quando usar:**
- Durante desenvolvimento (validação contínua)
- Após implementar features (revisão)
- Para otimização e refatoração

**Comandos Disponíveis:**

| Comando | Uso | Prioridade |
|---------|-----|------------|
| `/analisar` | Buscar bugs e edge cases | 🔴 Alta |
| `/refatorar` | Melhorar legibilidade | 🟡 Média |
| `/performance` | Otimizar performance | 🟡 Média |
| `/responsivo` | Validar responsividade | 🔴 Alta |
| `/layout-fluido` | Garantir layout fluido | 🔴 Alta |
| `/design-system` | Conformidade com DS | 🔴 Alta |
| `/tokens` | Validar uso de variáveis | 🔴 Alta |
| `/explicar` | Documentar código | 🟢 Baixa |
| `/ux` | Avaliar experiência | 🟡 Média |

---

## 🎨 Design System - Resumo

### Hierarquia de Variáveis (OBRIGATÓRIA)

```
1º → Variáveis SEMÂNTICAS
     var(--color-primary)
     var(--spacing-container)
     
2º → Variáveis PRIMITIVAS
     var(--gray-900)
     var(--spacing-lg)
     
3º → CONVERSÃO INTELIGENTE
     #E5E5E5 → var(--gray-200)
     28px → var(--spacing-lg)
     
4º → NUNCA HARDCODED ❌
     #E5E5E5 ❌
     28px ❌
```

### Breakpoints Oficiais

```javascript
screens: {
  'md': '768px',   // Tablet
  'lg': '1280px',  // Desktop
  'xl': '1920px',  // Wide / 4K
}
```

| Breakpoint | Range | Uso |
|------------|-------|-----|
| Mobile (base) | < 768px | Layout base (mobile-first) |
| Tablet | ≥ 768px | Ajustes para tablet |
| Desktop | ≥ 1280px | Layout desktop + Sidebar |
| Wide/4K | ≥ 1920px | Telas grandes |

---

## 🚀 Stack Técnica

- **React** com **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (estilização)
- **Supabase** (backend)

### Arquitetura

```
src/
├── components/       # Componentes reutilizáveis
├── pages/           # Páginas (apenas composição)
├── hooks/           # Custom hooks (lógica)
├── services/        # Comunicação com backend
├── utils/           # Funções utilitárias
├── constants/       # Constantes da aplicação
├── styles/          # Estilos globais
└── assets/          # Imagens, fontes, etc
```

**Regras:**
- Componentes pequenos e reutilizáveis
- Páginas apenas compõem, sem lógica de negócio
- Lógica em hooks ou services
- Evitar duplicação

---

## 📐 Layout - Regras Críticas

### ✅ SEMPRE:
- `width: 100%` em containers principais
- `max-width` para limitar (nunca `width` fixa)
- Mobile-first (base < 768px)
- Testar em 375px, 768px, 1280px, 1920px
- Sidebar só no desktop (≥1280px)
- Header mobile só no mobile/tablet (<1280px)

### ❌ NUNCA:
- Larguras fixas em containers de página
- Overflow horizontal
- Assumir apenas desktop
- Renderizar sidebar + header mobile juntos
- Usar `display:none` para sidebar (não renderizar)

---

## 🔄 Workflow de Desenvolvimento

### 1. Planejamento
```
1. Ler requisitos
2. Consultar project-rules.md
3. Consultar project-config.md
4. Executar pre-flight check mental
```

### 2. Desenvolvimento
```
1. Criar componente/feature
2. Aplicar design system (/design-system)
3. Validar tokens (/tokens)
4. Garantir layout fluido (/layout-fluido)
```

### 3. Validação
```
1. Testar responsividade (/responsivo)
2. Analisar código (/analisar)
3. Validar UX (/ux)
```

### 4. Otimização (se necessário)
```
1. Refatorar se complexo (/refatorar)
2. Otimizar performance (/performance)
```

### 5. Documentação (se necessário)
```
1. Explicar código complexo (/explicar)
2. Atualizar documentação
```

---

## 🎯 Formato de Resposta Obrigatório

Após executar qualquer prompt, seguir este formato:

```markdown
✅ PROMPT [N]: [Nome] — CONCLUÍDO

📚 PRÉ-EXECUÇÃO
✓ Rules relidas e aplicadas
✓ Figma consultado e analisado
✓ Hierarquia de variáveis verificada

📦 IMPLEMENTADO
- [Lista de funcionalidades]

🎨 TOKENS UTILIZADOS
Semânticas: [lista]
Primitivas: [lista]
Conversões: [lista com justificativas]

📁 ARQUIVOS CRIADOS/MODIFICADOS
- [lista]

🔨 BUILD STATUS
✅ Sucesso (tentativas: [N])

💾 COMMIT REALIZADO
[tipo]: [descrição]
Hash: [abc123]

🤔 PRÓXIMOS PASSOS
⏭️ PROMPT [N+1]: [Nome]
```

---

## 📊 Checklist de Qualidade

Antes de considerar uma tarefa completa:

- [ ] Segue princípios de Clean Code
- [ ] Não há valores hardcoded desnecessários
- [ ] Solução é a mais simples possível
- [ ] UX, performance e escalabilidade considerados
- [ ] Código bem documentado (quando necessário)
- [ ] Não há código fictício ou placeholders
- [ ] Suposições foram explicadas
- [ ] Layout é 100% fluido
- [ ] Responsivo em todos os breakpoints
- [ ] 100% conformidade com design system
- [ ] Build passa sem erros

---

## 🆘 Troubleshooting

### Dúvida sobre regras?
→ Consultar [Project Rules](./project-rules.md)

### Dúvida técnica (breakpoints, tokens, etc)?
→ Consultar [Project Config](./project-config.md)

### Precisa validar código?
→ Usar [Workflows](./workflows/README.md)

### Layout quebrando?
→ `/layout-fluido` + `/responsivo`

### Valores hardcoded?
→ `/tokens` + `/design-system`

### Código complexo?
→ `/refatorar` + `/analisar`

---

## 📚 Recursos Adicionais

### Documentação Externa
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Padrões e Boas Práticas
- [Clean Code Principles](https://github.com/ryanmcdermott/clean-code-javascript)
- [React Best Practices](https://react.dev/learn/thinking-in-react)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🔄 Manutenção da Documentação

### Quando Atualizar

- ✅ Novas regras ou padrões adotados
- ✅ Mudanças na stack técnica
- ✅ Novos workflows criados
- ✅ Feedback de uso (melhorias)

### Como Atualizar

1. Editar arquivo relevante
2. Atualizar "Última atualização"
3. Incrementar versão se mudança significativa
4. Comunicar mudanças ao time

---

## 📞 Contato e Suporte

Para dúvidas ou sugestões sobre esta documentação:
- Abrir issue no repositório
- Discutir em reunião de equipe
- Propor melhorias via PR

---

**Última atualização:** 2026-01-18  
**Versão:** 1.0.0  
**Mantido por:** Equipe de Desenvolvimento

---

## 🎉 Início Rápido - TL;DR

```bash
# 1. Ler documentação base
.agent/project-rules.md      # Mentalidade e princípios
.agent/project-config.md     # Configuração técnica

# 2. Conhecer comandos
.agent/workflows/README.md   # Todos os comandos

# 3. Desenvolver
- width: 100% sempre!
- Semânticas → Primitivas → NUNCA hardcoded
- Mobile-first (< 768px base)
- Testar: 375px, 768px, 1280px, 1920px

# 4. Validar
/design-system
/tokens
/layout-fluido
/responsivo
/analisar

# 5. Commit e próximo!
```

**Boa codificação! 🚀**
