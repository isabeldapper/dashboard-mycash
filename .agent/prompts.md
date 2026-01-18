# 🚀 Prompts de Desenvolvimento - mycash+

Este documento contém a sequência de prompts planejada para a construção progressiva do sistema **mycash+**.

---

## 🏗️ Fase 1: Fundação

### PROMPT 1: Estrutura Base e Configuração
*   **Arquitetura**: Configurar estrutura de pastas (`components`, `contexts`, `hooks`, `types`, `utils`, `constants`) e subpastas por domínio (`layout`, `dashboard`, `cards`, `modals`).
*   **Tailwind CSS**: Mapear variáveis do Figma (tokens semânticos e primitivos) como classes customizadas.
*   **TypeScript**: Criar tipos fundamentais (`Transaction`, `Goal`, `CreditCard`, `BankAccount`, `FamilyMember`) com tipagens precisas.
*   **Rotas**: Configurar React Router com as 5 rotas principais (SPA).

---

## 🎨 Fase 2: Layout e Navegação

### PROMPT 2: Sistema de Layout e Navegação Desktop
*   **Sidebar**: Implementar estados expandido (logo completo, nomes, perfil) e colapsado (ícones).
*   **Interação**: Botão circular de alternância com setas indicativas e transições suaves.
*   **UX**: Sistema de tooltip para itens colapsados e destaque visual de item ativo (fundo preto, ícone verde-limão).

### PROMPT 3: Sistema de Layout e Navegação Mobile
*   **HeaderMobile**: Fixo no topo com logo e avatar (trigger para dropdown).
*   **MenuDropdown**: Deslizante com itens de navegação e botão de logout ("Sair").
*   **Adaptabilidade**: Breakpoints claros para alternar entre Sidebar e HeaderMobile (1024px).

---

## 💾 Fase 3: Estado e Lógica Central

### PROMPT 4: Context Global e Gerenciamento de Estado
*   **Regra de Ouro**: Não usar browser storage API; gerenciar TUDO via React state (`FinanceProvider`).
*   **CRUD**: Implementar funções para todas as entidades e filtros globais (membro, data, tipo).
*   **Hook**: Expor `useFinance` para consumo simplificado.

---

## 📊 Fase 4: Dashboard e Visualização

### PROMPT 5: Cards de Resumo Financeiro
*   **BalanceCard**: Fundo preto, efeito de blur verde-limão, valor em destaque e badge de crescimento.
*   **Income/ExpenseCards**: Fundo branco, ícones direcionais coloridos e valores dinâmicos.

### PROMPT 6: Header do Dashboard com Controles
*   **Busca**: Campo com lupa e busca em tempo real (`searchText`).
*   **Filtros**: Botão que abre `FilterPopover` (desktop) ou modal fullscreen (mobile).

### PROMPT 7: Carrossel de Gastos por Categoria
*   **Visual**: Gráficos donut de 64px com cores rotativas e percentual centralizado.
*   **Scroll**: Carrossel horizontal em desktop e lista/grid em mobile.

### PROMPT 8: Gráfico de Fluxo Financeiro
*   **Componente**: Gráfico de área responsivo (Recharts) com legendas "Receitas" e "Despesas".
*   **Estilo**: Eixos formatados, grid sutil e gradientes nas áreas preenchidas.

### PROMPT 9: Widget de Cartões de Crédito
*   **Estrutura**: Lista vertical de cartões com indicação de limite disponível e barra de progresso.
*   **Formato**: Blocos visuais coloridos conforme o tema do cartão.

### PROMPT 10: Widget de Próximas Despesas
*   **Lógica**: Transações pendentes ordenadas por vencimento.
*   **Ações**: Informações de origem (conta/cartão) e botão "check" para marcar como pago.

---

## 📋 Fase 5: Tabelas e Modais

### PROMPT 11: Tabela de Transações Detalhada
*   **Colunas**: Avatar do membro, Data, Descrição, Categoria (badge), Conta/Cartão, Valor e Ações.
*   **Controles**: Busca local e select de tipo integrados.

### PROMPT 12: Modal de Nova Transação
*   **Layout**: Fullscreen mobile, dividido em Header, Conteúdo scrollável e Footer fixo.
*   **Formulário**: Toggle Receita/Despesa, valor com prefixo R$, categorias com ícones e seletor de origem.

### PROMPT 13: Modal de Adicionar Membro
*   **Campos**: Nome, função (combobox com sugestões), avatar (URL ou Upload) e renda estimada.

### PROMPT 14: Modal de Adicionar Cartão
*   **Condicionais**: Alterna entre campos de Conta Bancária (tipo, saldo inicial) e Cartão de Crédito (limite, fechamento, cor do tema).

### PROMPT 15: Modal de Detalhes do Cartão
*   **Dados**: Fatura atual, limite disponível, percentual de uso e datas de fechamento/vencimento.
*   **Visual**: Grid de informações com representação gráfica (donut ou barra).

### PROMPT 16: Modal de Filtros Mobile
*   **UX**: Slide-in vertical do rodapé com opções de Rádio e botões grandes para fácil toque.

---

## 📱 Fase 6: Visualizações Completas e Perfil

### PROMPT 17: View Completa de Cartões
*   **Visualização**: Grid responsivo de cartões detalhados com ações de editar/excluir.

### PROMPT 18: View Completa de Transações
*   **Filtros Avançados**: Busca, tipo, categoria, origem, membro, período e status.
*   **Resumo**: Linha de estatísticas (totais e diferença) acima da tabela.

### PROMPT 19: View de Perfil - Aba Informações
*   **Perfil**: Avatar grande, email, função e renda mensal do usuário principal.
*   **Família**: Lista de membros cadastrados com opção de adicionar novos.

### PROMPT 20: View de Perfil - Aba Configurações
*   **Seções**: Modo Escuro (Coming Soon), Notificações (toggles), e Gerenciar Categorias (CRUD de categorias).

---

## ✨ Fase 7: Polimento e Finalização

### PROMPT 21: Animações e Transições Globais
*   **Transições**: Fade-out/in entre rotas e stagger (efeito cascata) na entrada de listas e grids.
*   **Hovers**: Micro-interações em botões, cards e avatares.

### PROMPT 22: Formatação e Utilitários
*   **Funções**: `formatCurrency`, `formatCompactCurrency`, `parseCurrencyInput`, e formatadores de data/arrays.

### PROMPT 23: Responsividade e Ajustes Finais
*   **Estratégia**: Mobile-first progressivo usando os breakpoints oficiais (768px, 1280px, 1920px).

### PROMPT 24: Testes e Validação Final
*   **Jornada do Usuário**: Fluxo completo de teste desde a primeira visualização até a criação de transações e validação de cálculos.

---

### 🎉 PROMPT FINAL: Revisão e Entrega
*   **Checklist**: Qualidade de código, acessibilidade (WCAG AA), performance e isolamento para futura integração com Supabase.

---

**Última atualização:** 2026-01-18  
**Fonte:** [Google Docs - Prompts](https://docs.google.com/document/d/15EfVzSC_wCz5V58PkQeoRpmRgZYuLyMMGSzlxiytckA/edit?usp=sharing)
